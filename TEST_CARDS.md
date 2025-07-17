# Iyzico Test Kartları

## Başarılı Ödeme Test Kartları

### Visa

- **Kart Numarası:** 5528790000000008
- **Son Kullanma:** 12/30
- **CVV:** 123
- **Kart Sahibi:** John Doe

### MasterCard

- **Kart Numarası:** 5406670000000009
- **Son Kullanma:** 12/30
- **CVV:** 123
- **Kart Sahibi:** John Doe

### American Express

- **Kart Numarası:** 374427000000003
- **Son Kullanma:** 12/30
- **CVV:** 123
- **Kart Sahibi:** John Doe

## Başarısız Ödeme Test Kartları

### Yetersiz Bakiye

- **Kart Numarası:** 4111111111111129
- **Son Kullanma:** 12/30
- **CVV:** 123
- **Kart Sahibi:** John Doe

### Kart Sahibi Onayı Gerekli

- **Kart Numarası:** 4111111111111156
- **Son Kullanma:** 12/30
- **CVV:** 123
- **Kart Sahibi:** John Doe

### 3D Secure Gerekli

- **Kart Numarası:** 4111111111111164
- **Son Kullanma:** 12/30
- **CVV:** 123
- **Kart Sahibi:** John Doe

## Test Adımları

1. Server'ı başlatın: `cd server && npm start`
2. Frontend'i başlatın: `npm run dev`
3. Ödeme sayfasına gidin
4. Yukarıdaki test kartlarından birini kullanın
5. Ödeme işlemini tamamlayın

## Notlar

- Tüm test kartları Iyzico sandbox ortamında çalışır
- Gerçek kartlar kullanmayın
- Test kartları sadece geliştirme amaçlıdır
