import express from "express";
import Iyzipay from "iyzipay";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const category = req.params.category;
    const categoryPaths = {
      homepage: path.join(__dirname, "../src/assets/images"),
      map: path.join(__dirname, "../src/assets/harita"),
      general: path.join(__dirname, "../src/assets/genel"),
      activities: path.join(__dirname, "../src/assets/images"),
    };
    
    const uploadPath = categoryPaths[category];
    if (uploadPath) {
      cb(null, uploadPath);
    } else {
      cb(new Error('Invalid category'));
    }
  },
  filename: function (req, file, cb) {
    // Use original filename with timestamp to avoid conflicts
    const timestamp = Date.now();
    const originalName = file.originalname;
    const extension = path.extname(originalName);
    const nameWithoutExt = path.basename(originalName, extension);
    cb(null, `${nameWithoutExt}-${timestamp}${extension}`);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Test endpoint
app.get("/", (req, res) => {
  res.json({ message: "Iyzico Payment Server is running!" });
});

// Iyzico API kimlik bilgileri
const iyzipay = new Iyzipay({
  locale: Iyzipay.LOCALE.TR,
  apiKey: "DRy2sSndb5tUqh9OmbqPPKpHEWbQ3c5n", // Canlı API anahtarı
  secretKey: "ekfAdMXOHaNQE4l9OFD7F63anfdHBwTs", // Canlı secret key
  uri: "https://api.iyzipay.com", // Canlı ortam endpointi
});

app.post("/create-payment", (req, res) => {
  const {
    price,
    paymentCard,
    buyer,
    shippingAddress,
    billingAddress,
    basketItems,
  } = req.body;

  const request = {
    locale: Iyzipay.LOCALE.TR,
    conversationId: Date.now().toString(), // Her işlem için benzersiz bir ID
    price: price,
    paidPrice: price,
    currency: Iyzipay.CURRENCY.TL,
    paymentCard: paymentCard,
    buyer: buyer,
    shippingAddress: shippingAddress,
    billingAddress: billingAddress,
    basketItems: basketItems,
  };

  iyzipay.payment.create(request, function (err, result) {
    if (err) {
      console.error("Iyzico Payment Error:", err);
      res
        .status(500)
        .json({ success: false, error: err.errorMessage || "Payment failed" });
    } else {
      console.log("Iyzico Payment Result:", result);
      res.status(200).json({ success: true, result: result });
    }
  });
});

// Admin API endpoints
const DATA_PATH = path.join(__dirname, "../src/data");

// Get cities data
app.get("/api/admin/cities", async (req, res) => {
  try {
    const filePath = path.join(DATA_PATH, "sehirler.json");
    const data = await fs.readFile(filePath, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading cities data:", error);
    res.status(500).json({ error: "Failed to load cities data" });
  }
});

// Update cities data
app.post("/api/admin/cities", async (req, res) => {
  try {
    const filePath = path.join(DATA_PATH, "sehirler.json");
    const updatedData = {
      meta: {
        totalCount: req.body.data.length,
        lastUpdated: new Date().toISOString(),
      },
      data: req.body.data,
    };
    
    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), "utf8");
    res.json({ success: true, message: "Cities data updated successfully" });
  } catch (error) {
    console.error("Error updating cities data:", error);
    res.status(500).json({ error: "Failed to update cities data" });
  }
});

// Get map configuration
app.get("/api/admin/map-config", async (req, res) => {
  try {
    const filePath = path.join(DATA_PATH, "harita-config.json");
    const data = await fs.readFile(filePath, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading map config:", error);
    res.status(500).json({ error: "Failed to load map configuration" });
  }
});

// Update map configuration
app.post("/api/admin/map-config", async (req, res) => {
  try {
    const filePath = path.join(DATA_PATH, "harita-config.json");
    await fs.writeFile(filePath, JSON.stringify(req.body, null, 2), "utf8");
    res.json({ success: true, message: "Map configuration updated successfully" });
  } catch (error) {
    console.error("Error updating map config:", error);
    res.status(500).json({ error: "Failed to update map configuration" });
  }
});

// Get statistics data
app.get("/api/admin/statistics", async (req, res) => {
  try {
    const filePath = path.join(DATA_PATH, "istatistikler.json");
    const data = await fs.readFile(filePath, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading statistics:", error);
    res.status(500).json({ error: "Failed to load statistics" });
  }
});

// Update statistics data
app.post("/api/admin/statistics", async (req, res) => {
  try {
    const filePath = path.join(DATA_PATH, "istatistikler.json");
    await fs.writeFile(filePath, JSON.stringify(req.body, null, 2), "utf8");
    res.json({ success: true, message: "Statistics updated successfully" });
  } catch (error) {
    console.error("Error updating statistics:", error);
    res.status(500).json({ error: "Failed to update statistics" });
  }
});

// Get site content
app.get("/api/admin/content", async (req, res) => {
  try {
    const filePath = path.join(DATA_PATH, "site-content.json");
    const data = await fs.readFile(filePath, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading site content:", error);
    res.status(500).json({ error: "Failed to load site content" });
  }
});

// Update site content
app.post("/api/admin/content", async (req, res) => {
  try {
    const filePath = path.join(DATA_PATH, "site-content.json");
    const updatedContent = {
      ...req.body,
      meta: {
        ...req.body.meta,
        lastUpdated: new Date().toISOString()
      }
    };
    await fs.writeFile(filePath, JSON.stringify(updatedContent, null, 2), "utf8");
    res.json({ success: true, message: "Site content updated successfully" });
  } catch (error) {
    console.error("Error updating site content:", error);
    res.status(500).json({ error: "Failed to update site content" });
  }
});

// List images in a directory
app.get("/api/admin/images/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const categoryPaths = {
      homepage: path.join(__dirname, "../src/assets/images"),
      map: path.join(__dirname, "../src/assets/harita"),
      general: path.join(__dirname, "../src/assets/genel"),
      activities: path.join(__dirname, "../src/assets/images"),
    };

    const dirPath = categoryPaths[category];
    if (!dirPath) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const files = await fs.readdir(dirPath);
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    const imageData = await Promise.all(
      imageFiles.map(async (file) => {
        const filePath = path.join(dirPath, file);
        const stats = await fs.stat(filePath);
        return {
          id: Date.now() + Math.random(),
          name: file,
          path: `/src/assets/${category === "homepage" || category === "activities" ? "images" : category}/${file}`,
          size: (stats.size / (1024 * 1024)).toFixed(2) + " MB",
          uploadDate: stats.mtime.toISOString().split("T")[0],
          usedIn: []
        };
      })
    );

    res.json(imageData);
  } catch (error) {
    console.error("Error listing images:", error);
    res.status(500).json({ error: "Failed to list images" });
  }
});

// Upload images
app.post("/api/admin/images/:category/upload", upload.array('images', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const category = req.params.category;
    const uploadedFiles = req.files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.filename,
      originalName: file.originalname,
      path: `/src/assets/${category === "homepage" || category === "activities" ? "images" : category}/${file.filename}`,
      size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
      uploadDate: new Date().toISOString().split("T")[0],
      usedIn: []
    }));

    res.json({ 
      success: true, 
      message: `${req.files.length} image(s) uploaded successfully`,
      files: uploadedFiles
    });
  } catch (error) {
    console.error("Error uploading images:", error);
    res.status(500).json({ error: "Failed to upload images" });
  }
});

// Delete image
app.delete("/api/admin/images/:category/:filename", async (req, res) => {
  try {
    const { category, filename } = req.params;
    const categoryPaths = {
      homepage: path.join(__dirname, "../src/assets/images"),
      map: path.join(__dirname, "../src/assets/harita"),
      general: path.join(__dirname, "../src/assets/genel"),
      activities: path.join(__dirname, "../src/assets/images"),
    };

    const dirPath = categoryPaths[category];
    if (!dirPath) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const filePath = path.join(dirPath, filename);
    
    try {
      await fs.access(filePath);
      await fs.unlink(filePath);
      res.json({ success: true, message: "Image deleted successfully" });
    } catch (error) {
      res.status(404).json({ error: "Image not found" });
    }
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ error: "Failed to delete image" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log("Admin panel available at: http://localhost:5173/admin");
});
