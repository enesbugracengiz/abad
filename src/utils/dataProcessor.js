/**
 * ABAD Harita Veri İşleyicisi
 * Excel verilerini harita için düzenler ve temizler
 */

// Raw Excel verilerinden şehir verilerini çıkar
export const processRawData = (rawData) => {
  const cityData = new Map();
  
  if (!rawData?.ekVeriler?.["DİĞER GÖNDERİLER (HAM VERİ)"]) {
    return { cities: [], stats: {} };
  }

  const records = rawData.ekVeriler["DİĞER GÖNDERİLER (HAM VERİ)"];
  
  records.forEach(record => {
    if (!record.__EMPTY_1 || !record.__EMPTY_2) return;
    
    const institutionName = record.__EMPTY_1;
    const location = record.__EMPTY_2;
    
    // Şehir adını çıkar (location'dan)
    const cityName = extractCityName(location);
    if (!cityName) return;
    
    // Mevcut şehir verisini al veya yeni oluştur
    if (!cityData.has(cityName)) {
      cityData.set(cityName, {
        ad: cityName,
        kitapSayisi: 0,
        yardimlar: {
          oyuncak: 0,
          giyecek: 0,
          temizlikMalzemesi: 0,
          kupa: 0
        },
        kurumlar: []
      });
    }
    
    const city = cityData.get(cityName);
    
    // Verileri ekle
    if (record.Oyuncak) city.yardimlar.oyuncak += parseInt(record.Oyuncak) || 0;
    if (record.Giyecek) city.yardimlar.giyecek += parseInt(record.Giyecek) || 0;
    if (record["Temizlik/İhtiyaç Malzeme"]) city.yardimlar.temizlikMalzemesi += parseInt(record["Temizlik/İhtiyaç Malzeme"]) || 0;
    if (record["Kupa "]) city.yardimlar.kupa += parseInt(record["Kupa "]) || 0;
    
    // Kurum bilgilerini ekle
    city.kurumlar.push({
      ad: institutionName,
      lokasyon: location,
      oyuncak: parseInt(record.Oyuncak) || 0,
      giyecek: parseInt(record.Giyecek) || 0,
      temizlik: parseInt(record["Temizlik/İhtiyaç Malzeme"]) || 0,
      kupa: parseInt(record["Kupa "]) || 0
    });
  });
  
  const cities = Array.from(cityData.values());
  
  // İstatistikleri hesapla
  const stats = calculateStats(cities);
  
  return { cities, stats };
};

// Location string'inden şehir adını çıkar
const extractCityName = (location) => {
  if (!location || typeof location !== 'string') return null;
  
  // Temizle ve normalize et
  location = location.trim();
  
  // Yaygın şehir adları ve alternatifleri
  const cityMappings = {
    "İstanbul": ["İstanbul", "istanbul"],
    "Ankara": ["Ankara", "ankara"],
    "İzmir": ["İzmir", "izmir"],
    "Antalya": ["Antalya", "antalya"],
    "Bursa": ["Bursa", "bursa"],
    "Adana": ["Adana", "adana"],
    "Gaziantep": ["Gaziantep", "gaziantep"],
    "Konya": ["Konya", "konya"],
    "Kayseri": ["Kayseri", "kayseri"],
    "Mersin": ["Mersin", "mersin"],
    "Eskişehir": ["Eskişehir", "eskişehir"],
    "Diyarbakır": ["Diyarbakır", "diyarbakır"],
    "Samsun": ["Samsun", "samsun"],
    "Kocaeli": ["Kocaeli", "kocaeli"],
    "Şanlıurfa": ["Şanlıurfa", "şanlıurfa", "Şanlıurfa", "Urfa"],
    "Trabzon": ["Trabzon", "trabzon"],
    "Van": ["Van", "van"],
    "Sakarya": ["Sakarya", "sakarya"],
    "Denizli": ["Denizli", "denizli"],
    "Adapazarı": ["Adapazarı", "Sakarya", "sakarya"],
    "Malatya": ["Malatya", "malatya"],
    "Erzurum": ["Erzurum", "erzurum"],
    "Erzincan": ["Erzincan", "erzincan"],
    "Sivas": ["Sivas", "sivas"],
    "Kahramanmaraş": ["Kahramanmaraş", "kahramanmaraş", "Maraş"],
    "Balıkesir": ["Balıkesir", "balıkesir"],
    "Batman": ["Batman", "batman"],
    "Manisa": ["Manisa", "manisa"],
    "Çorum": ["Çorum", "çorum"],
    "Aydın": ["Aydın", "aydın"],
    "Tekirdağ": ["Tekirdağ", "tekirdağ"],
    "Elazığ": ["Elazığ", "elazığ"],
    "Ordu": ["Ordu", "ordu"],
    "Muğla": ["Muğla", "muğla"],
    "Mardin": ["Mardin", "mardin"],
    "Afyon": ["Afyon", "afyon", "Afyonkarahisar"],
    "Tokat": ["Tokat", "tokat"],
    "Giresun": ["Giresun", "giresun"],
    "Edirne": ["Edirne", "edirne"],
    "Kırıkkale": ["Kırıkkale", "kırıkkale"],
    "Uşak": ["Uşak", "uşak"],
    "Isparta": ["Isparta", "ısparta"],
    "Düzce": ["Düzce", "düzce"],
    "Kütahya": ["Kütahya", "kütahya"],
    "Çanakkale": ["Çanakkale", "çanakkale"],
    "Kırşehir": ["Kırşehir", "kırşehir"],
    "Nevşehir": ["Nevşehir", "nevşehir"],
    "Niğde": ["Niğde", "niğde"],
    "Aksaray": ["Aksaray", "aksaray"],
    "Yozgat": ["Yozgat", "yozgat"],
    "Çankırı": ["Çankırı", "çankırı"],
    "Karabük": ["Karabük", "karabük"],
    "Zonguldak": ["Zonguldak", "zonguldak"],
    "Bartın": ["Bartın", "bartın"],
    "Kastamonu": ["Kastamonu", "kastamonu"],
    "Sinop": ["Sinop", "sinop"],
    "Rize": ["Rize", "rize"],
    "Artvin": ["Artvin", "artvin"],
    "Gümüşhane": ["Gümüşhane", "gümüşhane"],
    "Bayburt": ["Bayburt", "bayburt"],
    "Ağrı": ["Ağrı", "ağrı"],
    "Kars": ["Kars", "kars"],
    "Iğdır": ["Iğdır", "ığdır"],
    "Ardahan": ["Ardahan", "ardahan"],
    "Mus": ["Muş", "muş"],
    "Bitlis": ["Bitlis", "bitlis"],
    "Siirt": ["Siirt", "siirt"],
    "Şırnak": ["Şırnak", "şırnak"],
    "Hakkari": ["Hakkari", "hakkari"],
    "Adıyaman": ["Adıyaman", "adıyaman"],
    "Kilis": ["Kilis", "kilis"],
    "Osmaniye": ["Osmaniye", "osmaniye"],
    "Hatay": ["Hatay", "hatay"],
    "Bingöl": ["Bingöl", "bingöl"],
    "Tunceli": ["Tunceli", "tunceli"],
    "Burdur": ["Burdur", "burdur"],
    "Bilecik": ["Bilecik", "bilecik"],
    "Yalova": ["Yalova", "yalova"],
    "Kırklareli": ["Kırklareli", "kırklareli"]
  };
  
  // Önce tam eşleşme ara
  for (const [cityName, alternatives] of Object.entries(cityMappings)) {
    for (const alt of alternatives) {
      if (location.toLowerCase().includes(alt.toLowerCase())) {
        return cityName;
      }
    }
  }
  
  // Slash veya boşluk ile ayrılmış ilk kısmı al
  const parts = location.split(/[/\-\s]+/);
  if (parts.length > 0) {
    const firstPart = parts[0].trim();
    
    // Tekrar eşleştirmeyi dene
    for (const [cityName, alternatives] of Object.entries(cityMappings)) {
      for (const alt of alternatives) {
        if (firstPart.toLowerCase() === alt.toLowerCase()) {
          return cityName;
        }
      }
    }
  }
  
  return null;
};

// İstatistikleri hesapla
const calculateStats = (cities) => {
  return cities.reduce((stats, city) => ({
    toplamSehir: cities.length,
    toplamKitap: stats.toplamKitap + city.kitapSayisi,
    toplamOyuncak: stats.toplamOyuncak + city.yardimlar.oyuncak,
    toplamGiyecek: stats.toplamGiyecek + city.yardimlar.giyecek,
    toplamTemizlik: stats.toplamTemizlik + city.yardimlar.temizlikMalzemesi,
    toplamKupa: stats.toplamKupa + city.yardimlar.kupa,
    toplamFidan: stats.toplamFidan + 0 // Fidan verisi bu datasette yok
  }), {
    toplamSehir: 0,
    toplamKitap: 0,
    toplamOyuncak: 0,
    toplamGiyecek: 0,
    toplamTemizlik: 0,
    toplamKupa: 0,
    toplamFidan: 0
  });
};

// Aktivite seviyesi hesapla
export const getActivityLevel = (city) => {
  if (!city) return 'none';
  
  const totalActivity = city.kitapSayisi + 
                       city.yardimlar.oyuncak + 
                       city.yardimlar.giyecek + 
                       city.yardimlar.temizlikMalzemesi +
                       city.yardimlar.kupa;
  
  if (totalActivity >= 100) return 'high';
  if (totalActivity >= 25) return 'medium';
  if (totalActivity > 0) return 'low';
  return 'none';
};

// Şehir koordinatları (Türkiye haritası için optimize edilmiş)
export const getCityCoordinates = () => ({
  "İstanbul": { top: "35%", left: "29%", bolge: "Marmara" },
  "Ankara": { top: "45%", left: "35%", bolge: "İç Anadolu" },
  "İzmir": { top: "60%", left: "15%", bolge: "Ege" },
  "Bursa": { top: "40%", left: "22%", bolge: "Marmara" },
  "Antalya": { top: "75%", left: "32%", bolge: "Akdeniz" },
  "Adana": { top: "70%", left: "42%", bolge: "Akdeniz" },
  "Konya": { top: "60%", left: "35%", bolge: "İç Anadolu" },
  "Gaziantep": { top: "65%", left: "45%", bolge: "Güneydoğu Anadolu" },
  "Kayseri": { top: "55%", left: "42%", bolge: "İç Anadolu" },
  "Mersin": { top: "75%", left: "40%", bolge: "Akdeniz" },
  "Eskişehir": { top: "50%", left: "32%", bolge: "İç Anadolu" },
  "Diyarbakır": { top: "60%", left: "55%", bolge: "Güneydoğu Anadolu" },
  "Samsun": { top: "30%", left: "42%", bolge: "Karadeniz" },
  "Kocaeli": { top: "32%", left: "25%", bolge: "Marmara" },
  "Şanlıurfa": { top: "65%", left: "50%", bolge: "Güneydoğu Anadolu" },
  "Trabzon": { top: "25%", left: "70%", bolge: "Karadeniz" },
  "Van": { top: "55%", left: "78%", bolge: "Doğu Anadolu" },
  "Sakarya": { top: "32%", left: "28%", bolge: "Marmara" },
  "Denizli": { top: "70%", left: "22%", bolge: "Ege" },
  "Malatya": { top: "55%", left: "50%", bolge: "Doğu Anadolu" },
  "Erzurum": { top: "42%", left: "65%", bolge: "Doğu Anadolu" },
  "Erzincan": { top: "45%", left: "52%", bolge: "Doğu Anadolu" },
  "Sivas": { top: "48%", left: "45%", bolge: "İç Anadolu" },
  "Kahramanmaraş": { top: "63%", left: "43%", bolge: "Akdeniz" },
  "Balıkesir": { top: "48%", left: "18%", bolge: "Marmara" },
  "Batman": { top: "62%", left: "58%", bolge: "Güneydoğu Anadolu" },
  "Manisa": { top: "58%", left: "18%", bolge: "Ege" },
  "Çorum": { top: "38%", left: "40%", bolge: "Karadeniz" },
  "Aydın": { top: "68%", left: "18%", bolge: "Ege" },
  "Tekirdağ": { top: "30%", left: "18%", bolge: "Marmara" },
  "Elazığ": { top: "52%", left: "52%", bolge: "Doğu Anadolu" },
  "Ordu": { top: "28%", left: "45%", bolge: "Karadeniz" },
  "Muğla": { top: "75%", left: "20%", bolge: "Ege" },
  "Mardin": { top: "65%", left: "58%", bolge: "Güneydoğu Anadolu" },
  "Afyon": { top: "55%", left: "28%", bolge: "İç Anadolu" },
  "Tokat": { top: "42%", left: "43%", bolge: "Karadeniz" },
  "Giresun": { top: "26%", left: "52%", bolge: "Karadeniz" },
  "Edirne": { top: "22%", left: "12%", bolge: "Marmara" },
  "Kırıkkale": { top: "48%", left: "38%", bolge: "İç Anadolu" },
  "Uşak": { top: "58%", left: "22%", bolge: "Ege" },
  "Isparta": { top: "73%", left: "28%", bolge: "Akdeniz" },
  "Düzce": { top: "35%", left: "35%", bolge: "Karadeniz" },
  "Kütahya": { top: "50%", left: "25%", bolge: "Ege" },
  "Çanakkale": { top: "50%", left: "12%", bolge: "Marmara" },
  "Kırşehir": { top: "52%", left: "38%", bolge: "İç Anadolu" },
  "Nevşehir": { top: "58%", left: "40%", bolge: "İç Anadolu" },
  "Niğde": { top: "63%", left: "40%", bolge: "İç Anadolu" },
  "Aksaray": { top: "60%", left: "38%", bolge: "İç Anadolu" },
  "Yozgat": { top: "48%", left: "40%", bolge: "İç Anadolu" },
  "Çankırı": { top: "45%", left: "38%", bolge: "İç Anadolu" },
  "Karabük": { top: "35%", left: "38%", bolge: "Karadeniz" },
  "Zonguldak": { top: "32%", left: "35%", bolge: "Karadeniz" },
  "Bartın": { top: "30%", left: "38%", bolge: "Karadeniz" },
  "Kastamonu": { top: "35%", left: "40%", bolge: "Karadeniz" },
  "Sinop": { top: "25%", left: "40%", bolge: "Karadeniz" },
  "Rize": { top: "25%", left: "68%", bolge: "Karadeniz" },
  "Artvin": { top: "22%", left: "65%", bolge: "Karadeniz" },
  "Gümüşhane": { top: "32%", left: "62%", bolge: "Karadeniz" },
  "Bayburt": { top: "35%", left: "65%", bolge: "Karadeniz" },
  "Ağrı": { top: "48%", left: "68%", bolge: "Doğu Anadolu" },
  "Kars": { top: "35%", left: "75%", bolge: "Doğu Anadolu" },
  "Iğdır": { top: "42%", left: "75%", bolge: "Doğu Anadolu" },
  "Ardahan": { top: "32%", left: "75%", bolge: "Doğu Anadolu" },
  "Muş": { top: "55%", left: "65%", bolge: "Doğu Anadolu" },
  "Bitlis": { top: "58%", left: "68%", bolge: "Doğu Anadolu" },
  "Siirt": { top: "65%", left: "63%", bolge: "Güneydoğu Anadolu" },
  "Şırnak": { top: "68%", left: "68%", bolge: "Güneydoğu Anadolu" },
  "Hakkari": { top: "70%", left: "75%", bolge: "Güneydoğu Anadolu" },
  "Adıyaman": { top: "62%", left: "48%", bolge: "Güneydoğu Anadolu" },
  "Kilis": { top: "68%", left: "45%", bolge: "Güneydoğu Anadolu" },
  "Osmaniye": { top: "72%", left: "45%", bolge: "Akdeniz" },
  "Hatay": { top: "82%", left: "45%", bolge: "Akdeniz" },
  "Bingöl": { top: "55%", left: "58%", bolge: "Doğu Anadolu" },
  "Tunceli": { top: "52%", left: "55%", bolge: "Doğu Anadolu" },
  "Burdur": { top: "73%", left: "25%", bolge: "Akdeniz" },
  "Bilecik": { top: "43%", left: "25%", bolge: "Marmara" },
  "Yalova": { top: "37%", left: "22%", bolge: "Marmara" },
  "Kırklareli": { top: "25%", left: "15%", bolge: "Marmara" }
});

// Renk konfigürasyonu
export const getColorConfig = () => ({
  high: "#c67366",      // Yüksek aktivite - Ana marka rengi
  medium: "#e6a96b",    // Orta aktivite - Turuncu ton
  low: "#a8c686",       // Düşük aktivite - Yeşil ton
  none: "#95a5a6",      // Aktivite yok - Gri
  hover: "#a85d52"      // Hover rengi
});

// Boyut konfigürasyonu
export const getSizeConfig = () => ({
  high: 18,    // Yüksek aktivite
  medium: 14,  // Orta aktivite
  low: 10,     // Düşük aktivite
  none: 8,     // Aktivite yok
  hover: 22    // Hover boyutu
});
