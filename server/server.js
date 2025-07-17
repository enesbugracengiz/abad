const express = require("express");
const Iyzipay = require("iyzipay");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());

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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
