# ABAD - Anadolu Bilgelerini Araştırma Derneği Web Sitesi

Bu proje, ABAD (Anadolu Bilgelerini Araştırma Derneği) için geliştirilmiş modern ve responsive bir web sitesidir.

## 🌟 Özellikler

- **Modern ve Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Öne Çıkan Projeler**: Derneğin önemli projelerini sergilemek için ana sayfa
- **e-Sertifikalı Meyve Fidan Bağışları**: Babalar Günü özel kampanyası
- **Faaliyetler Sayfası**: Doğa, Çocuk/Genç ve Eğitim faaliyetleri
- **Bizden Haberler**: Güncel haberler ve duyurular
- **Türkiye Haritası**: Faaliyetlerin görselleştirilmesi ve istatistikler
- **Güvenli Ödeme Sistemi**: İyzico entegrasyonu ile güvenli bağış alma

## 🛠️ Teknolojiler

- **React 18**: Modern JavaScript framework
- **Vite**: Hızlı geliştirme ortamı
- **React Router DOM**: Sayfa yönlendirmeleri
- **Bootstrap 5**: Responsive UI framework
- **React Bootstrap**: Bootstrap component'leri
- **İyzico**: Ödeme sistemi entegrasyonu

## 🚀 Kurulum

1. Projeyi klonlayın:

```bash
git clone https://github.com/ebcengiz/abad.git
cd abad
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

4. Tarayıcınızda `http://localhost:5173` adresini açın.

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── Header.jsx          # Navigasyon ve logo
│   ├── Footer.jsx          # Alt bilgi
│   ├── Layout.jsx          # Genel layout
│   └── PaymentService.jsx  # Ödeme sistemi
├── pages/
│   ├── HomePage.jsx        # Ana sayfa
│   ├── CertificatePage.jsx # Sertifika ve bağış sayfası
│   ├── ActivitiesPage.jsx  # Faaliyetler sayfası
│   ├── NewsPage.jsx        # Haberler sayfası
│   └── MapPage.jsx         # Harita ve istatistikler
├── assets/
│   └── images/             # Görseller
├── App.jsx                 # Ana uygulama component'i
├── App.css                 # Özel stiller
└── main.jsx               # Uygulama giriş noktası
```

## 🎨 Sayfalar

### Ana Sayfa (HomePage)

- Öne çıkan projeler
- Hero section
- Proje kartları

### e-Sertifikalı Meyve Fidan Bağışları (CertificatePage)

- Babalar Günü kampanyası
- Bağış formu
- Güvenli ödeme sistemi
- Sertifika önizlemesi

### Faaliyetler (ActivitiesPage)

- Doğa faaliyetleri
- Çocuk ve genç faaliyetleri
- Eğitim ve seminer faaliyetleri

### Bizden Haberler (NewsPage)

- Güncel haberler
- Kategori filtreleri
- Öne çıkan haberler

### Harita ve İstatistikler (MapPage)

- Türkiye haritası
- Faaliyet istatistikleri
- Zaman çizelgesi

## 💳 Ödeme Sistemi

Proje İyzico ödeme sistemi entegrasyonu içerir:

- Güvenli kart bilgileri alma
- Ödeme işlemi simülasyonu
- Başarılı/başarısız ödeme senaryoları
- Kullanıcı dostu arayüz

## 🎯 Önemli Notlar

- Görseller placeholder olarak eklenmiştir
- Ödeme sistemi demo amaçlıdır
- Gerçek projeye entegre etmek için backend API gereklidir
- Responsive tasarım tüm cihazlarda test edilmiştir

## 🔧 Geliştirme

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview
```

## 📧 İletişim

- **E-posta**: info@abad.org.tr
- **Telefon**: 0212 880 00 00
- **Web**: https://abad.org.tr

## 📄 Lisans

Bu proje ABAD (Anadolu Bilgelerini Araştırma Derneği) için geliştirilmiştir.

---

**Not**: Bu proje, verilen tasarım görselleri referans alınarak geliştirilmiştir ve modern web standartlarına uygun olarak kodlanmıştır.
