# ABAD Yönetici Paneli

Bu dokümantasyon ABAD projesi için oluşturulan yönetici panelinin nasıl kullanılacağını açıklar.

## Erişim

Yönetici paneline şu URL'den erişilebilir:
```
http://localhost:5173/admin
```

## Giriş Bilgileri

**Demo için:**
- Kullanıcı Adı: `admin`
- Şifre: `abad2025`

## Özellikler

### 1. Harita Veri Yönetimi

#### Şehir Verileri
- Mevcut şehirleri görüntüleme ve düzenleme
- Yeni şehir ekleme
- Şehir verilerini silme
- Şehir bazlı istatistikleri düzenleme:
  - Kitap sayısı
  - Bağış miktarları (oyuncak, giyecek)
  - Faaaliyet bilgileri
  - Fidan verileri

#### Harita Konfigürasyonu
- Şehir koordinatlarını düzenleme
- Harita renk ayarları
- Nokta boyut ayarları
- Hover efektleri

### 2. Görsel Yönetimi

#### Kategori Bazlı Yönetim
- **Anasayfa Görselleri**: Ana sayfa için kullanılan görseller
- **Harita Görselleri**: Harita bileşeni için ikonlar ve görseller  
- **Genel Görseller**: Logo ve genel kullanım görselleri
- **Faaliyet Görselleri**: Faaliyet sayfaları için görseller

#### Özelllikler
- Çoklu görsel yükleme
- Görsel silme
- Görsel yolunu kopyalama
- Kullanım alanlarını görüntüleme

## Dosya Yapısı

```
src/
├── pages/
│   └── AdminPage.jsx              # Ana yönetici sayfası
├── components/admin/
│   ├── AdminLayout.jsx            # Yönetici panel layout'u
│   ├── AdminAuth.jsx              # Kimlik doğrulama
│   ├── MapDataManager.jsx         # Harita veri yönetimi
│   └── ImageManager.jsx           # Görsel yönetimi
└── data/                          # JSON veri dosyaları
    ├── sehirler.json             # Şehir verileri
    ├── harita-config.json        # Harita konfigürasyonu
    └── istatistikler.json        # İstatistik verileri
```

## API Endpoints

### Şehir Verileri
- `GET /api/admin/cities` - Şehir verilerini getir
- `POST /api/admin/cities` - Şehir verilerini güncelle

### Harita Konfigürasyonu  
- `GET /api/admin/map-config` - Harita ayarlarını getir
- `POST /api/admin/map-config` - Harita ayarlarını güncelle

### İstatistikler
- `GET /api/admin/statistics` - İstatistikleri getir
- `POST /api/admin/statistics` - İstatistikleri güncelle

### Görseller
- `GET /api/admin/images/:category` - Kategori bazlı görsel listesi

## Kullanım Talimatları

### 1. Yeni Şehir Ekleme
1. "Harita Verileri" sekmesine gidin
2. "Yeni Şehir Ekle" butonuna tıklayın
3. Şehir adı, bölge ve koordinat bilgilerini girin
4. "Ekle" butonuna tıklayın

### 2. Şehir Verilerini Düzenleme
1. Şehir listesinde düzenlemek istediğiniz şehrin yanındaki edit ikonuna tıklayın
2. Açılan modalde verileri güncelleyin
3. "Güncelle" butonuna tıklayın

### 3. Görsel Yükleme
1. "Görsel Yönetimi" sekmesine gidin
2. İlgili kategoriyi seçin
3. "Yeni Görsel Yükle" butonuna tıklayın
4. Dosyaları seçin ve yükleyin

### 4. Değişiklikleri Kaydetme
- Her bölümde yapılan değişiklikler otomatik olarak kaydedilmez
- "Değişiklikleri Kaydet" butonuna tıklayarak değişiklikleri kalıcı hale getirin

## Teknik Notlar

- Tüm veriler JSON dosyaları olarak saklanır
- Görseller `src/assets/` klasörü altında organize edilir  
- Real-time güncellemeler için sayfa yenilenmesi gerekebilir
- Büyük dosya yüklemeleri için sunucu timeout ayarları kontrol edilmelidir

## Güvenlik

- Üretim ortamında güçlü şifre kullanın
- JWT tabanlı authentication sistemi implement edilmelidir
- File upload güvenlik kontrolleri eklenmelidir
- HTTPS kullanımı önerilir

## Troubleshooting

### Yaygın Sorunlar

1. **Admin paneline erişemiyorum**
   - URL'nin doğru olduğundan emin olun: `http://localhost:5173/admin`
   - Sunucunun çalıştığından emin olun

2. **Veriler kaydedilmiyor**
   - "Değişiklikleri Kaydet" butonuna tıkladığınızdan emin olun
   - Console'da hata mesajları kontrol edin
   - Sunucu bağlantısını kontrol edin

3. **Görseller yüklenmiyor**  
   - Dosya formatının desteklendiğinden emin olun (JPG, PNG, GIF)
   - Dosya boyutunu kontrol edin
   - Sunucu write permissions kontrol edin

## Destek

Herhangi bir sorun yaşarsanız:
1. Browser console'unu kontrol edin
2. Sunucu loglarını inceleyin  
3. Geliştirici ile iletişime geçin