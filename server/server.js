import express from "express";
import Iyzipay from "iyzipay";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5001;

// JWT Secret Key
const JWT_SECRET = "ABAD_JWT_SECRET_KEY_2025";

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

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Authentication API endpoints
const DATA_PATH = path.join(__dirname, "../src/data");

// User Registration
app.post("/api/auth/register", async (req, res) => {
  try {
    const { email, password, name, surname, phone } = req.body;

    // Validation
    if (!email || !password || !name || !surname) {
      return res.status(400).json({ error: "Tüm alanları doldurun" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Şifre en az 6 karakter olmalıdır" });
    }

    // Read existing users
    const usersPath = path.join(DATA_PATH, "users.json");
    let usersData;
    try {
      const data = await fs.readFile(usersPath, "utf8");
      usersData = JSON.parse(data);
    } catch (error) {
      usersData = { meta: { totalCount: 0, lastUpdated: new Date().toISOString() }, users: [] };
    }

    // Check if user already exists
    const existingUser = usersData.users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: "Bu e-posta adresi zaten kullanılıyor" });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      password: hashedPassword,
      name,
      surname,
      phone: phone || "",
      createdAt: new Date().toISOString(),
      isActive: true,
      donations: []
    };

    // Add user to data
    usersData.users.push(newUser);
    usersData.meta.totalCount = usersData.users.length;
    usersData.meta.lastUpdated = new Date().toISOString();

    // Save to file
    await fs.writeFile(usersPath, JSON.stringify(usersData, null, 2), "utf8");

    res.json({ 
      success: true, 
      message: "Kayıt başarılı! Şimdi giriş yapabilirsiniz.",
      userId: newUser.id 
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Kayıt sırasında bir hata oluştu" });
  }
});

// User Login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: "E-posta ve şifre gerekli" });
    }

    // Read users data
    const usersPath = path.join(DATA_PATH, "users.json");
    let usersData;
    try {
      const data = await fs.readFile(usersPath, "utf8");
      usersData = JSON.parse(data);
    } catch (error) {
      return res.status(500).json({ error: "Kullanıcı verileri okunamadı" });
    }

    // Find user
    const user = usersData.users.find(user => user.email === email);
    if (!user) {
      return res.status(400).json({ error: "Geçersiz e-posta veya şifre" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Geçersiz e-posta veya şifre" });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(400).json({ error: "Hesabınız devre dışı bırakılmış" });
    }

    // Create JWT token
    const tokenExpiry = rememberMe ? '30d' : '1d';
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email,
        name: user.name,
        surname: user.surname
      }, 
      JWT_SECRET, 
      { expiresIn: tokenExpiry }
    );

    // Return success response
    res.json({
      success: true,
      message: "Giriş başarılı",
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        surname: user.surname,
        phone: user.phone,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Giriş sırasında bir hata oluştu" });
  }
});

// Get User Profile (Protected)
app.get("/api/auth/profile", authenticateToken, async (req, res) => {
  try {
    const usersPath = path.join(DATA_PATH, "users.json");
    const data = await fs.readFile(usersPath, "utf8");
    const usersData = JSON.parse(data);
    
    const user = usersData.users.find(user => user.id === req.user.userId);
    if (!user) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı" });
    }

    res.json({
      id: user.id,
      email: user.email,
      name: user.name,
      surname: user.surname,
      phone: user.phone,
      createdAt: user.createdAt,
      donations: user.donations || []
    });
  } catch (error) {
    console.error("Profile error:", error);
    res.status(500).json({ error: "Profil bilgileri alınamadı" });
  }
});

// Update User Profile (Protected)
app.put("/api/auth/profile", authenticateToken, async (req, res) => {
  try {
    const { name, surname, phone } = req.body;
    
    const usersPath = path.join(DATA_PATH, "users.json");
    const data = await fs.readFile(usersPath, "utf8");
    const usersData = JSON.parse(data);
    
    const userIndex = usersData.users.findIndex(user => user.id === req.user.userId);
    if (userIndex === -1) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı" });
    }

    // Update user data
    if (name) usersData.users[userIndex].name = name;
    if (surname) usersData.users[userIndex].surname = surname;
    if (phone) usersData.users[userIndex].phone = phone;
    usersData.users[userIndex].updatedAt = new Date().toISOString();
    
    usersData.meta.lastUpdated = new Date().toISOString();
    await fs.writeFile(usersPath, JSON.stringify(usersData, null, 2), "utf8");

    res.json({ 
      success: true, 
      message: "Profil güncellendi",
      user: {
        id: usersData.users[userIndex].id,
        email: usersData.users[userIndex].email,
        name: usersData.users[userIndex].name,
        surname: usersData.users[userIndex].surname,
        phone: usersData.users[userIndex].phone
      }
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({ error: "Profil güncellenemedi" });
  }
});

// Admin API endpoints

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
