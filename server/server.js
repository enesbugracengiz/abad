const express = require('express');
const Iyzipay = require('iyzipay');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// Iyzico API kimlik bilgileri
// Güvenlik nedeniyle, bu anahtarların doğrudan koda yazılması önerilmez.
// Gerçek bir projede .env dosyaları veya ortam değişkenleri kullanın.
const iyzipay = new Iyzipay({
  locale: Iyzipay.LOCALE.TR,
  
  apiKey: 'YOUR_API_KEY', // Kendi API Anahtarınızı buraya girin
  secretKey: 'YOUR_SECRET_KEY', // Kendi Gizli Anahtarınızı buraya girin
  baseUrl: 'https://sandbox-api.iyzipay.com' // Test ortamı için. Canlı için 'https://api.iyzipay.com'
});

app.post('/create-payment', (req, res) => {
  const { price, paymentCard, buyer, shippingAddress, billingAddress, basketItems } = req.body;

  const request = {
    locale: Iyzipay.LOCALE.TR,
    conversationId: '123456789', // Her işlem için benzersiz bir ID
    price: price,
    paidPrice: price,
    currency: Iyzipay.CURRENCY.TL,
    paymentCard: paymentCard,
    buyer: buyer,
    shippingAddress: shippingAddress,
    billingAddress: billingAddress,
    basketItems: basketItems
  };

  iyzipay.payment.create(request, function(err, result) {
    if (err) {
      console.error("Iyzico Payment Error:", err);
      res.status(500).json({ success: false, error: err.errorMessage || "Payment failed" });
    } else {
      console.log("Iyzico Payment Result:", result);
      res.status(200).json({ success: true, result: result });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
