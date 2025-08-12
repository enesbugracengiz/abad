import React from "react";
import Header from "../components/Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./BlogPage.css";

const BlogPage = () => {
  // Carousel state'i
  const [currentCarouselPage, setCurrentCarouselPage] = React.useState(0);
  
  // Anadolu'nun Nefesi carousel state'i
  const [currentAnadoluPage, setCurrentAnadoluPage] = React.useState(0);

  // Diğer kategoriler için carousel state'leri
  const [currentGençBilgelerPage, setCurrentGençBilgelerPage] = React.useState(0);
  const [currentPortrelerPage, setCurrentPortrelerPage] = React.useState(0);
  const [currentSarıÇiçekPage, setCurrentSarıÇiçekPage] = React.useState(0);
  const [currentErenlerinİzindePage, setCurrentErenlerinİzindePage] = React.useState(0);
  const [currentİnsanlıkHaliPage, setCurrentİnsanlıkHaliPage] = React.useState(0);
  const [currentOkumaktanManaPage, setCurrentOkumaktanManaPage] = React.useState(0);
  const [currentÇokGezenPage, setCurrentÇokGezenPage] = React.useState(0);
  const [currentEditörünSeçtikleriPage, setCurrentEditörünSeçtikleriPage] = React.useState(0);
  const [currentYazarlarPage, setCurrentYazarlarPage] = React.useState(0);

  // Scroll referansları
  const blogCanliRef = React.useRef(null);
  const canliRef = React.useRef(null);
  const anadoluNefesiRef = React.useRef(null);
  const gençBilgelerRef = React.useRef(null);
  const portrelerRef = React.useRef(null);
  const sarıÇiçekRef = React.useRef(null);
  const erenlerinİzindeRef = React.useRef(null);
  const insanlıkHaliRef = React.useRef(null);
  const okumaktanManaRef = React.useRef(null);
  const çokGezenRef = React.useRef(null);
  const editörünSeçtikleriRef = React.useRef(null);
  const yazarlarRef = React.useRef(null);
  const blogRef = React.useRef(null);

  // Scroll fonksiyonları
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  // Arama fonksiyonu
  const handleSearch = (searchValue) => {
    if (!searchValue.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Tüm blog verilerini birleştir
    const allPosts = [
      ...featuredPostsPages.flat(),
      ...anadoluCarouselPages.flat(),
      ...gençBilgelerCarouselPages.flat(),
      ...portrelerCarouselPages.flat(),
      ...sarıÇiçekCarouselPages.flat(),
      ...erenlerinİzindeCarouselPages.flat(),
      ...insanlıkHaliCarouselPages.flat(),
      ...okumaktanManaCarouselPages.flat(),
      ...çokGezenCarouselPages.flat(),
      ...editörünSeçtikleriCarouselPages.flat(),
      ...yazarlarCarouselPages.flat()
    ];

    // Arama yap
    const results = allPosts.filter(post => 
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.author.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.category.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(results);
    setIsSearching(false);
  };

  // Arama input değişikliği
  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  // Arama sonucuna tıklandığında ilgili kategoriye git
  const handleSearchResultClick = (post) => {
    // Arama sonuçlarını temizle
    setSearchTerm('');
    setSearchResults([]);
    
    // Kategoriye göre ilgili referansa git
    switch (post.category) {
      case "Anadolu'nun Nefesi":
        scrollToSection(anadoluNefesiRef);
        break;
      case "Genç Bilgeler":
        scrollToSection(gençBilgelerRef);
        break;
      case "Portreler":
        scrollToSection(portrelerRef);
        break;
      case "Sarı Çiçeğin Dediği":
        scrollToSection(sarıÇiçekRef);
        break;
      case "Erenlerin İzinde":
        scrollToSection(erenlerinİzindeRef);
        break;
      case "İnsanlık Hali":
        scrollToSection(insanlıkHaliRef);
        break;
      case "Okumaktan Mana Ne":
        scrollToSection(okumaktanManaRef);
        break;
      case "Çok Gezen Bilir":
        scrollToSection(çokGezenRef);
        break;
      case "Editörün Seçtikleri":
        scrollToSection(editörünSeçtikleriRef);
        break;
      case "Yazarlar":
        scrollToSection(yazarlarRef);
        break;
      default:
        // Eğer kategori bulunamazsa genel blog bölümüne git
        scrollToSection(blogRef);
        break;
    }
  };

  // İlk 3 öne çıkan blog yazısı - 3 sayfa olarak düzenlendi
  const featuredPostsPages = [
    // Sayfa 1
    [
      {
        id: 1,
        title: "AYNALI ATA TOHUMU",
        author: "Zülküf Perdeci",
        date: "Aralık 29, 2022",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "Ey gözüm nûru ne bilsin gizlidir esrârımız Câhil ü nâdân ne bilsin anlamaz ahvalimiz Kuş dilidir dilimiz hem her Süleyman anlamaz Rumûzât u işaretle söyleriz akvâlimiz Uşaklı Yakupzade Mustafa Özyürek Efendinin nutkeylediği gibi rumuzat ve işaretle söylüyor sözlerini Dr. Zülküf Perdeci, bize bir toprak hikayesi anlatıyor.",
        category: "Blog"
      },
      {
        id: 2,
        title: "HASTALIKLAR",
        author: "Editör",
        date: "Eylül 14, 2022",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "Ergin Öğretmen Paspi'nin dilinden bize hikayeler anlatmaya devam ediyor. Bu kez biraz hüzünlü. Hastalıklar mahallenin kedilerine rahat vermiyor. Neyse ki Ergin Öğretmen ve Nuran anne var yoksa Paspi de bu genç yaşta bizleri bırakıp gidecekti.",
        category: "Blog"
      },
      {
        id: 3,
        title: "MUHAFAZAKÂR RUH HALİ",
        author: "Editör",
        date: "Eylül 14, 2022",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "Ardına bakarak yürüyor. Gözü hep arkada. Kolayca kopamıyor. Eski sevgilinin elleri avucundan sıyrılırken, kokusu, sıcaklığı, teri, tuzu kalıyor. Şarkılar, şiirler, ağaçlar, yollar, parklar hep aynı şeyi hatırlatıyor.",
        category: "Blog"
      }
    ],
    // Sayfa 2
    [
      {
        id: 4,
        title: "EĞİTİM ÜZERİNE DÜŞÜNCELER",
        author: "Editör",
        date: "Eylül 13, 2022",
        image: "/src/assets/images/blog-2-1.jpg",
        excerpt: "Eğitimin toplumsallaşma, kültür, kültürel değerlerin aktarımı gibi kavram ve süreçlerle olduğu kadar insanın bireysel anlamda kendini keşfetmesi, anlaması ve gerçekleştirmesi ile de yakından bir ilgisi vardır. Felsefe'nin antik yunan köklerinden bu yana en önemli alanlarından birini bu sebeple eğitim oluşturur. Sokrates",
        category: "Blog"
      },
      {
        id: 5,
        title: "Sen Dünyayı Kurtar Analar Çorba Kaynatıyor.",
        author: "Editör",
        date: "Eylül 2, 2022",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "Dinler, inançlar tarihi ile uğraşanlara sormalı ama bana öyle geliyor ki çorba cennet taamı. Birleştiren, bölüştüren, onaran, şifa veren çorba sadece bu dünyadan olamaz. Ey kendini arayanlar, derdine derman soranlar o terapi bu terapi koşturmayın. Çorba",
        category: "Blog"
      },
      {
        id: 6,
        title: "Akşeyh'in Biz Modernlere Söyledikleri",
        author: "Editör",
        date: "Ağustos 31, 2022",
        image: "/src/assets/images/blog-5-1.jpg",
        excerpt: "Erenlerin Makamları. Akşeyhimiz de bize tevhidin mertebelerinden vahdetten, hakikatten haberleri bilginin o en saf, katışıksız kaynağından bir velinin perdesiz gözünden, gönül göğünden, süt gibi bal gibi arı göğsünden, kendindeki makamı resulden, yine onun",
        category: "Blog"
      }
    ],
    // Sayfa 3
    [
      {
        id: 7,
        title: "Ergin Aydın'ın Kitapları",
        author: "Editör",
        date: "Haziran 23, 2022",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "'Bir Edebiyat Öğretmeni'nin Gözünden Memleket.' 'Sıradan Adamlık'tan kaçarak başladığı hayatta herkes gibi, herkes kadar, 'sıradan' olmanın erdemini kavramış, insan olmanın, öğretmenliğin, babalığın, dostluğun, evlatlığın, kardeşliğin, mücadelenin hasılı dolu dolu yaşanan bir hayatın hakkını vermiş ilham verici anılar, Ergin Aydın'ın tercüme-i hali, hayat serencamı. Büyük devlet adamlarının, askerler ve politikacıların mutantan biyografilerini okumaktan...",
        category: "Blog"
      },
      {
        id: 8,
        title: "İÇLİ BOZKIR HİKAYELERİ",
        author: "Editör",
        date: "Haziran 8, 2022",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "Bozkırın sesini en oynak, en kıvrak, en eğlenceli, düğünlü, kaşıklı, havalarından, insanın böğrüne hecin devesi gibi çöken hüznüne, çaresiz garipliğine, yoksulluğuna, hançereyi yırtan adamda ciğer bırakmayan en yanık bozlaklarına kadar duyabilirsiniz bu öykülerde. İmdat Avşar Baba Ertaş'ın Neşet Baba'nın, Hacı Taşan Emmimin toprağından şüphesiz, onların saza söylettiğini öykü deyip anlatmış. Editör ABAD Blog için yazdı. 08.06.2022 Bizim Halil...",
        category: "Blog"
      },
      {
        id: 9,
        title: "AŞK",
        author: "Editör",
        date: "Haziran 7, 2022",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "Aşk bir hayat sigortası değildir ya da araç kaskosu. Konforlu lüks bir yaşam, kazasız bir yolculuk, dikensiz bir bahçe değildir. İşimiz rast gitsin, gezelim tozalım, birlikte yiyip içelim, sofralar düzelim, gülelim eğlenelim, herşey tıkırında, arabamız tekerinde gitsin. Hastalanmayalım, başımız bile ağrımasın, başarımız, kazancımız garanti olsun diye aşık olmaz insan. Editör ABAD Blog için yazdı. 07.06.2022 Aşık mı derim ben ona, Tanrının uçmağın seve. Aşk bir hayat sigortası değildir ya da araç kaskosu. Konforlu lüks bir...",
        category: "Blog"
      }
    ]
  ];

  // Carousel sayfa değiştirme fonksiyonu
  const handleCarouselPageChange = (pageIndex) => {
    setCurrentCarouselPage(pageIndex);
  };

  // Anadolu'nun Nefesi carousel için 3 sayfa
  const anadoluCarouselPages = [
    // Sayfa 1 - Mevcut 3 kart
    [
      {
        id: 10,
        title: "KAHRAMANMARAŞ YUNUS EMRE OKULU 3. DERSİ YAPILDI",
        author: "Editör",
        date: "Şubat 27, 2022",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "Dr. Mustafa Tatcı tarafından verilen Kahramanmaraş Yunus Emre Okulu'nun üçüncü dersinde Yunus Emre hazretlerinin 'Sensiz yola girer isem' ve 'Aşk davasın kılan kişi' nutku şeriflerinin şerhi yapıldı. Kahramanmaraş'tan Tuba Türkan ABAD Blog için bildirdi.",
        category: "Anadolu'nun Nefesi"
      },
      {
        id: 11,
        title: "TÜRKÜ TADINDA",
        author: "Harun Sarıgül",
        date: "Şubat 7, 2022",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "Sevmenin bin türlüsü var. Herkes kendince, kendi dilince, kabınca, meşrebince sever. Mühim olan sevmenin senden, benden, tenden geçirmesi, benlik çekirdeğinden aleme bir pencere açması. İnsan kendinden, bu dünyadan severek çıkar gider. Seven sevilir demişler, illa sevilir. Sevmenin kaybedeni yok. Sevmenin içinde hem seven hem de sevilen var. Severek",
        category: "Anadolu'nun Nefesi"
      },
      {
        id: 12,
        title: "YİNE GELDİ AŞK ELÇİSİ YİNE DOLDU MEYDANIMIZ",
        author: "Editör",
        date: "Ocak 30, 2022",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "Gazi Üniversitesi Öğretim Görevlisi Dr. Mustafa Tatçı Kahramanmaraş'ta bir konferans verdi. Yoğun ilgi gören konferans hakkında Kahramanmaraş'tan Tuba Türkan bilgilendirdi. Tuba Türkan Kahramanmaraş'tan ABAD Blog için bildirdi. 30.01.2022 Türk tasavvuf geleneğimizde seyahatlerin",
        category: "Anadolu'nun Nefesi"
      }
    ],
    // Sayfa 2 - Görseldeki 3 kart
    [
      {
        id: 13,
        title: "SIRRA VÂKIF BİR HATUN: KIRMIZI EBE KADIN",
        author: "Editör",
        date: "Ocak 25, 2022",
        image: "/src/assets/images/blog-2-1.jpg",
        excerpt: "'Peygamber Efendimiz'in birçok kez gösterdiği bereket hikmeti, ondan nefes alan Hak dostlarının da tasarrufu altında elbette olmaktadır. Bakraçtaki ayranı orada bulunan yalağa döker, orduya 'Buyurun için,' der.' Kırmızı Ebe Hatun",
        category: "Anadolu'nun Nefesi"
      },
      {
        id: 14,
        title: "ÂŞIKLAR DİYARI",
        author: "Yasin Şen",
        date: "Aralık 15, 2021",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "Dr. Yasin Şen ABAD Blog için yazdı. 15.12. 2021 Âşıklar Diyârı'na gitmeye niyetlenmiştik. Birkaç hafta boyunca içimizde beslediğimiz niyetin şevki ile nihayet yola koyulduk. Bu günü Aşıklar Diyârı'nda ihya edecektik. Döğer'de 'Bismillah' deyip İhsaniye'ye geldim. Burada",
        category: "Anadolu'nun Nefesi"
      },
      {
        id: 15,
        title: "SEMBOLİK DİL YAHUT ANLAMIN MERTEBELERİ",
        author: "Yasin Şen",
        date: "Kasım 25, 2021",
        image: "/src/assets/images/blog-5-1.jpg",
        excerpt: "Dilâ bu Mantık'ut-tayrı fesâhat ehli anlamaz, Bunu ancak ya Attâr veyahut Tayyâr olandan sor. Kuş dilidir bu, anlamaya Süleyman gerek. Hitabet, etkili İletişim, diksiyon eğitimleri, sertifikaları muradı bir türlü kavrayamaz, yarı yolda bırakır.",
        category: "Anadolu'nun Nefesi"
      }
    ],
    // Sayfa 3 - Üçüncü sayfa
    [
      {
        id: 16,
        title: "MASAL GERÇEKLİĞİ-III",
        author: "Yasin Şen",
        date: "Kasım 18, 2021",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "Masal Gerçekliği isimli makalesinin son bölümünde Yasin Şen, M. Kayahan Özgül'den alıntıyla 'Önceki nesillerin gerçekleri, sonrakilerin mitleridir; önceki nesillerin inançları, sonrakilerin hurafeleridir ve nihayet, önceki nesillerin bilgileri, sonrakilerin masallarıdır' diyor. Masalın çocuklardan çok yetişkinlere",
        category: "Anadolu'nun Nefesi"
      },
      {
        id: 17,
        title: "EL KÂRDA GÖNÜL YÂRDA",
        author: "Editör",
        date: "Kasım 16, 2021",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "Sufi de diğer insanlar gibi dünyada yaşar. Burada alır, verir, üretir, mücadele eder, yer, içer ve ölür; herkes gibi. Dünya ahiretin tarlasıdır, işlenecek, mamur edilecek ve nihayetinde insanın kemal bulacağı yer burasıdır. Lakin dünyayı seven dünyada kalır. O yüzden sufinin eli işinde gücünde, kârında iken gönlü ise yarindedir. Zira onun",
        category: "Anadolu'nun Nefesi"
      },
      {
        id: 18,
        title: "MASAL GERÇEKLİĞİ-II",
        author: "Yasin Şen",
        date: "Kasım 7, 2021",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "Dr. Yasin Şen masallara dair esaslı bir kuramsal tartışmayı sürdürüyor. Masalı hafife alan 'gerçeğin' bir 20. yüzyıl icadı olduğunu ve içinde pek az hayal barındıran, fazla nesnel, basık ve sınırlı bir gerçeklik olduğunu öne sürüyor. Bu dogmatik gerçekliğin gerçek-hakikat sonrası tarafından delik deşik olduğu ve aşırı görselliğin",
        category: "Anadolu'nun Nefesi"
      }
    ]
  ];

  // Video altı carousel için 3 kartlık yapı
  const videoCarouselPosts = [
    {
      id: 10,
      title: "KAHRAMANMARAŞ YUNUS EMRE OKULU 3. DERSİ YAPILDI",
      author: "Editör",
      date: "Şubat 27, 2022",
      image: "/src/assets/images/blog-1.jpg",
      excerpt: "Dr. Mustafa Tatcı tarafından verilen Kahramanmaraş Yunus Emre Okulu'nun üçüncü dersinde Yunus Emre hazretlerinin 'Sensiz yola girer isem' ve 'Aşk davasın kılan kişi' nutku şeriflerinin şerhi yapıldı. Kahramanmaraş'tan Tuba Türkan ABAD Blog için bildirdi.",
      category: "Anadolu'nun Nefesi"
    },
    {
      id: 11,
      title: "TÜRKÜ TADINDA",
      author: "Harun Sarıgül",
      date: "Şubat 7, 2022",
      image: "/src/assets/images/blog-2.jpg",
      excerpt: "Sevmenin bin türlüsü var. Herkes kendince, kendi dilince, kabınca, meşrebince sever. Mühim olan sevmenin senden, benden, tenden geçirmesi, benlik çekirdeğinden aleme bir pencere açması. İnsan kendinden, bu dünyadan severek çıkar gider. Seven sevilir demişler, illa sevilir. Sevmenin kaybedeni yok. Sevmenin içinde hem seven hem de sevilen var. Severek",
      category: "Anadolu'nun Nefesi"
    },
    {
      id: 12,
      title: "YİNE GELDİ AŞK ELÇİSİ YİNE DOLDU MEYDANIMIZ",
      author: "Editör",
      date: "Ocak 30, 2022",
      image: "/src/assets/images/blog-3-1.jpg",
      excerpt: "Gazi Üniversitesi Öğretim Görevlisi Dr. Mustafa Tatçı Kahramanmaraş'ta bir konferans verdi. Yoğun ilgi gören konferans hakkında Kahramanmaraş'tan Tuba Türkan bilgilendirdi. Tuba Türkan Kahramanmaraş'tan ABAD Blog için bildirdi. 30.01.2022 Türk tasavvuf geleneğimizde seyahatlerin",
      category: "Anadolu'nun Nefesi"
    }
  ];

  // Diğer kategoriler için carousel verileri
  const gençBilgelerCarouselPages = [
    // Sayfa 1 (mevcut içerikler)
    [
      {
        id: 20,
        title: "GÖKYÜZÜ",
        author: "Editör",
        date: "Ocak 24, 2022",
        image: "/src/assets/images/blog-5-1.jpg",
        excerpt: "Bilmem ne renktir sema Sana, bana, Mecnun'a Beraber gezebilsek Semada çıksak tura Gökyüzü, herkesi, herşeyi ayırmadan masmavi saran annemiz...",
        category: "Genç Bilgeler"
      },
      {
        id: 21,
        title: "AHMET ÇAVUŞ DEDEMİZİN ÇANAKKALE HATIRASI",
        author: "Çiğdem Oruç",
        date: "Kasım 29, 2021",
        image: "/src/assets/images/blog-6.jpg",
        excerpt: "Ey, bu topraklar için toprağa düşmüş asker! Gökten ecdâd inerek öpse o pâk alnı değer...",
        category: "Genç Bilgeler"
      },
      {
        id: 22,
        title: "AİLE İÇİ EĞİTİMİN MANEVİYATI",
        author: "Leyla İpekçi",
        date: "Kasım 23, 2021",
        image: "/src/assets/images/blog-11.jpg",
        excerpt: "Sıkıcı pazar öğleden sonralarının, bitmek bilmeyen ev ödevlerinin ve tırnak kontrollerinin, kolalı beyaz yakalı siyah önlüklerin...",
        category: "Genç Bilgeler"
      }
    ],
    // Sayfa 2 (görseldeki başlıklar)
    [
      {
        id: 29,
        title: "ÖĞRENMEK KALPTEN KALBE GEÇİŞTİR",
        author: "Editör",
        date: "Kasım 20, 2021",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "ABAD Blog'da Genç Bilgeler diye bir köşemiz var. Leyla İpekçi'nin yıllar önce kaleme aldığı ama hâlâ güncelliğini koruyan diziden derlenen kesitler...",
        category: "Genç Bilgeler"
      },
      {
        id: 30,
        title: "“BİR RÜYANIN PEŞİNDE OSMAN KEMALİ” KİTABI ANKARA KİTAP FUARINDAYDI",
        author: "Çiğdem Oruç",
        date: "Kasım 3, 2021",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "Çocuklar bilir. Çocuklar anlar. O kocaman merak dolu gözlerinin içine hiç bakmadınız mı? Ankara Kitap Fuarı'nda güzel karşılaşmalar...",
        category: "Genç Bilgeler"
      },
      {
        id: 31,
        title: "DELİ BAL",
        author: "Sevda Urfa",
        date: "Eylül 10, 2021",
        image: "/src/assets/images/square-16.jpg",
        excerpt: "Öfkeli Kusar'ın öfkesi tüm dağı yayılıyor. Balından yutan herkesi bir öfke sarıyor ki sormayın. Beyaz papatyanın sakinliği dertlere derman olacak mı?",
        category: "Genç Bilgeler"
      }
    ]
  ];

  const portrelerCarouselPages = [
    [
      {
        id: 30,
        title: "DİRİLİŞE ÖNDERLİK EDEN BİR MÜCAHİDE: SAMİHA AYVERDİ",
        author: "Editör",
        date: "Şubat 2, 2022",
        image: "/src/assets/images/blog-12.jpg",
        excerpt: "Kimlikler yara sarar. Batılı modernlikle karşılaşan, çarpışan batı dışı dünyanın kadim bilinci yaralanır. 20. asır Türkiye'sinde kimlik arayışları hep bu yarayı tımar etme arayışlarıdır.",
        category: "Portreler"
      },
      {
        id: 31,
        title: "“İDEALİSTLER ÖLÜMSÜZDÜR.”",
        author: "Editör",
        date: "Kasım 6, 2021",
        image: "/src/assets/images/blog-14.jpg",
        excerpt: "DR. MUSTAFA TATCI SÖYLEŞİSİ 3. BÖLÜM İdealistler ölümsüzdür. Ben bir idealistim. Büyük hayallerim var. Yanlış anlaşılmasın adım falan sokağa yahut filan okula verilsin diye bir idealim yok.",
        category: "Portreler"
      },
      {
        id: 32,
        title: "MALUM OLUR ABDALA, KASTAMONULU BİR MECZUB: EŞREF",
        author: "Zülküf Oruç",
        date: "Kasım 5, 2021",
        image: "/src/assets/images/blog-15.jpg",
        excerpt: "Kastomonu'nun da bir dönemine damga vurmuş kral delileri varmış, onu öğrendim bu kitapçıktan. Nasrullah'da namaza duran 'salluu' çekip farza yetişin diyen...",
        category: "Portreler"
      }
    ],
    [
      {
        id: 33,
        title: "ÇOCUKTUM 2. Bölüm",
        author: "Editör",
        date: "Ekim 31, 2021",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "Su taştan yerden çıkar. İnsan da zorluklardan şekillenir. A. Yüksel Özemre'nin Üsküdar'daki Attar Dükkanı'ndan aldığı bilgelik...",
        category: "Portreler"
      },
      {
        id: 34,
        title: "ÇOCUKTUM",
        author: "Editör",
        date: "Ekim 29, 2021",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "Dr. Mustafa Tatcı, Leyla İpekçi ve Yunus Emre... Kültürel arkeolog ve çağdaş Yunus olarak tanımlanan bu değerli isimler...",
        category: "Portreler"
      }
    ]
  ];

  // Diğer kategoriler için basit veri yapıları
  const sarıÇiçekCarouselPages = [
    [
      {
        id: 40,
        title: "BUEN VİVİR; BAŞKA BİR İYİ YAŞAM MÜMKÜN",
        author: "Zülküf Oruç",
        date: "Kasım 26, 2021",
        image: "/src/assets/images/blog-12.jpg",
        excerpt: "Buen Vivir İspanyolca bir ifade, yakın bir tercüme ile iyi yaşam demek. Sizce iyi yaşam nedir? Ekonomik konfor, hayat standardı, gelir seviyesi, iyi araba, konut, alım gücü, tatiller mi?...Yoksa kitaplar, müzik, sanat, estetik, sakin bir yaşam, doğa, yeşil mi? Ya da iç huzur, maneviyat, sükunet, inziva, kendinizle başbaşa kalmak...",
        category: "Sarı Çiçeğin Dediği"
      },
      {
        id: 41,
        title: "UBUNTU",
        author: "Zülküf Oruç",
        date: "Kasım 12, 2021",
        image: "/src/assets/images/blog-14.jpg",
        excerpt: "Ben ancak Biz olduğumuz zaman Ben olurum. Antropoloğun biri bir gün Afrikalı çocuklar arasında gözlem amaçlı bir yarışma uydurur. Karşıda duran dalları meyve dolu ağaca kim önce varırsa ağacın meyvelerini de o yiyecektir. Adamın aklının ucundan geçmeyen bir şey olur, çocuklar el ele tutuşur birlikte koşarak ağaca aynı anda varır meyveleri de hep...",
        category: "Sarı Çiçeğin Dediği"
      },
      {
        id: 42,
        title: "TRABZONLU VEFALI DOST FERO",
        author: "Editör",
        date: "Kasım 5, 2021",
        image: "/src/assets/images/blog-15.jpg",
        excerpt: "Cümle alem terkin vurup ben dostun terkin vuramazam Ondan ayrı buçuk saat ben onsuz duramazam Vefayı, dost kadrini Trabzonlu Fero bilmiş. Vefat eden sahibi Ömer amcanın kabrinin başından 4 gündür ayrılmayan Fero'nun hikayesi. Fero ABAD Blog için sözsüz anlattı. 05.11. 2021 Onlar yemeden yememiş, sabah kalkınca önce onları doyurmuş...",
        category: "Sarı Çiçeğin Dediği"
      }
    ]
  ];

  // SARI ÇİÇEĞİN DEDİĞİ için 3 sayfalı carousel (2. sayfa görseldeki başlıklarla, 3. sayfa yeni)
  const sarıÇiçekPages3 = React.useMemo(
    () => [
      sarıÇiçekCarouselPages[0], 
      [
        {
          id: 43,
          title: "KUŞLAR AÇ KALMASIN DİYE 11 YILDIR BOŞ TARLALARI EKİYORLAR",
          author: "Editör",
          date: "Kasım 4, 2021",
          image: "/src/assets/images/blog-12.jpg",
          excerpt: "Dağlar ile, taşlar ile çağırayım Mevlam seni Seherlerde kuşlar ile, çağırayım Mevlam seni İşte Yunusça'nın kitabi olmayan doğal, hüdayi nabit, kendiliğinden yetişen, toprağımızdan biten hali. Gümüşhane köylüleri giden kuşlar geri gelsin diye yolu olmayan boş tarlaları buğdayı sırtlarında taşıyarak ekermiş 11...",
          category: "Sarı Çiçeğin Dediği"
        },
        {
          id: 44,
          title: "GÜL FASLI",
          author: "Ayşe Nida Karakoç",
          date: "Ekim 29, 2021",
          image: "/src/assets/images/blog-14.jpg",
          excerpt: "Gül-i ruhsarına karşı Gözümden kanlı akar su Habibim faslı güldür bu Akar sular bulanmaz mı Bülbüller hep güle karşı zar, lakin gülün nazına ancak pervane katlanır. Narında gülün sessiz sedasız yanmaya ancak o razı olur. Ayşe Nida Karakoç gül faslından bahsetti. Gazel tadında. Şövket Elekberova'nın sesinden Fuzuli Kantatası eşliğinde okumalı bu yazıyı...",
          category: "Sarı Çiçeğin Dediği"
        },
        {
          id: 45,
          title: "DERİN EKOLOJİ",
          author: "Editör",
          date: "Ekim 21, 2021",
          image: "/src/assets/images/blog-15.jpg",
          excerpt: "Zülküf Oruç ABAD Blog için tercüme etti. 21 Ekim 2021 Çevreci düşünce antroposen çağının vicdan azabı. Sanayi çağından bu yana büyümenin ve refahın bedelini herkes eşit bir biçimde ödemiyor. Fakat galiba en ağır bedeli tabiatın, yeryüzünün kendisi ödüyor. Çok sessiz sedasız görünse de zaman içinde kendi diliyle insanoğluna şiddetli uyarılarda bulunuyor. İklim değişikliği, eriyen buzullar, azalan ormanlar, delinen ozon...",
          category: "Sarı Çiçeğin Dediği"
        }
      ],
      [
        {
          id: 46,
          title: "ARI İNLER BAL İÇİNDE",
          author: "Dilek Özdoğan",
          date: "Eylül 10, 2021",
          image: "/src/assets/images/blog-12.jpg",
          excerpt: "Macahel'in Balları ABAD memleketin irfanı ve kültürü kadar ekonomik ve sosyal meseleleri ile de yakından ilgili. Bu sayfalarda tarım, hayvancılık ve çevre sorunlarına dair ufuk açıcı yazılar, söyleşiler yayımlamaya devam edeceğiz.",
          category: "Sarı Çiçeğin Dediği"
        }
      ]
    ],
    []
  );

  const erenlerinİzindeCarouselPages = [
    [
      {
        id: 50,
        title: "HALVETİ'NİN GÜLLERİ AÇTI",
        author: "Editör",
        date: "Haziran 6, 2022",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "Yahyâ-yı Şirvanî'den Şeyh Şabân-ı Velî'ye Erenler Yolu Pendik'ten geçti. Kastamonulular Dayanışma Derneği ve Pendik Belediyesi'nin 25 Mayıs 2022 tarihinde Pendik Yunus Emre Kültür Merkezinde düzenlediği Yahyâ-yı Şirvanî'den Şeyh Şabân-ı Velî'ye Erenler Yolu başlıklı panelde Halveti kültürünün geçmişten bu güne...",
        category: "Erenlerin İzinde"
      },
      {
        id: 51,
        title: "Öncü Bir Müslüman Türk Kadını: Sâmiha Ayverdi",
        author: "Editör",
        date: "Mart 22, 2022",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "Sâmiha Ayverdi bu yüzyıla ışık tutan, evlatlarını nefs denen avcıya teslim etmeyen bir annedir. O Hz. Fatma ve onun izinden giden ulu annelerimizin bugünkü kokusudur. Ruhaniyetine selâm olsun. Elçin Ödemiş ABAD Blog'la paylaştı. 22.03.2022 Ülkemizde, bu dünya ile işi olmayan ama iş bitmemiş...",
        category: "Erenlerin İzinde"
      },
      {
        id: 52,
        title: "ÜSKÜDAR'DA BATMAYAN BİR GÜNEŞ: SELAMİ ALİ EFENDİ",
        author: "Editör",
        date: "Şubat 23, 2022",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "Gel şimdi kardeşler gidelim bile, Nice aşıkların bağrını dele, Cebrail delildir, Ahmet'e bile, Bir kamil mürşide varmazsan olmaz. Her Ahmed'e delil bir Cebrail vardır. Delilsiz gidilmez yollar yamandır. Kamillerin mirası bir burcu metin. İplerini bir kez pek tutan, gönüllerini onlara dönen asla melül olmaz.",
        category: "Erenlerin İzinde"
      }
    ],
    [
      {
        id: 53,
        title: "Hacı Bayram-ı Veli; Tuvalde bir yıkılma ve yapılma hikayesi",
        author: "Editör",
        date: "Şubat 21, 2022",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "Ol şehirden atılan oklar hedefini hiç şaşmaz, mutlaka tam da ciğere batar. Maşuk aşığın kanını mutlaka döker. Burası aşk şehridir zira. Başa cana kalanlar giremez. Başlar kesilir, soran olmaz, kan dökülür acı duyulmaz. Burada aşıkların kanı sebildir. Yapılmak için önce yıkılmak gerekir. Tüm...",
        category: "Erenlerin İzinde"
      },
      {
        id: 54,
        title: "SÖZDEN GÖZE AKIŞ",
        author: "Editör",
        date: "Aralık 30, 2021",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "Mana sözle, sesle anlatıldığı kadar, renkle, ışıkla da anlatılır. Hele zihni özgürleştiren, algıyı serbest bırakan tablolar. Sanatçının tuvale aktardığı bir mana sanatseverin idrakinde çoğalır, derinleşir, mesajını aklın, dilin, kelimelerin ardına bırakıp çekilir. Ressam Tülay Gürses de amacını eserlerini okuduğu Anadolu Erenleri'nin sözlerini renkle ifade gayreti olarak açıklıyor. Gayrettir, çünkü onların iç dünyalarını...",
        category: "Erenlerin İzinde"
      },
      {
        id: 55,
        title: "GÜLHANEDE BİR AZİZ; ÜNSİ HASAN ŞABANİ (KS)",
        author: "Ayşe Nida Karakoç",
        date: "Aralık 19, 2021",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "Ayşe Nida Karakoç'un akıcı anlatımıyla İstanbul kültürüne mal olmuş Niyazi Mısri, Karabaş-ı Veli ile aynı çağda yaşamış, 1724 yılındaki vefatına kadar Gülhane'deki Aydınoğlu tekkesi postnişini olarak bir çok mana evladı yetiştirmiş Ünsi Hasan Şabani Hazretlerini okuyacağız bugün. İnsan kulakt...",
        category: "Erenlerin İzinde"
      }
    ],
    [
      {
        id: 56,
        title: "FUZULİ VE ALEM-İ KAYD",
        author: "Yasin Şen",
        date: "Aralık 1, 2021",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "Cân ü dil kaydını çekmekten özüm kurtardım Cânı cânaneye ettim dili dil-dâra fidâ Kayıtlar alemi. Biraz et, kemik ve bir sürü endişe. Mülk edindiğimiz ne varsa. Benim dediğimiz. Bağ kurduğumuz. Akıl, bilgi ve duygular da dahil. Aşkın prangaları, aşığın zindanı. Aşığın hiç bir kayda tahammülü yok. Ne bene ne sene ne de tene. Mesafeye sabrı kararı...",
        category: "Erenlerin İzinde"
      },
      {
        id: 57,
        title: "BİZİM YUNUS ALMANYA'DA",
        author: "Editör",
        date: "Kasım 29, 2021",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "Editör ABAD Blog için hazırladı. 29.11.2021 Sirkeci'den tren gider, Vagon gider, derdim gider. Gurbet elde bir başıma, Varım yoğum alır gider. (Ali Akbaş) Sirkeci Garından başlayıp Münih garının 11. Peronuna varan yolculuğun üzerinden neredeyse 60 yıl geçti. 1960'lı yılların başında ülkemizden Almanya'ya tahta bavulu ve bir dolu memleket hasreti ile...",
        category: "Erenlerin İzinde"
      },
      {
        id: 58,
        title: "BİR GÜNÜ BİR ÖMRE BEDEL-II",
        author: "Editör",
        date: "Kasım 25, 2021",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "İçi var, içi var, içe var. Şeriat, tarikat yoldur varana hakikat, marifet andan içeri. İç, eri. Erenler İç Eri. Mustafa Tatcı hoca erenlerin suretten sirete, kabuktan çekirdeğe, dıştan içe, çokluktan bire hasılı tereyağından kıl çeker gibi vahdete çeken terbiyesini en öz ve sade söyleyişiyle anlatmaya devam ediyor. Salat nedir, kıble neresi, ebru nedir, miraç ne?...",
        category: "Erenlerin İzinde"
      }
    ]
  ];

  const insanlıkHaliCarouselPages = [
    [
      {
        id: 60,
        title: "DURUN! YAPMAYIN!",
        author: "Zülküf Oruç",
        date: "Nisan 25, 2022",
        image: "/src/assets/images/blog-5-1.jpg",
        excerpt: "Han da açıkça söylemiyor ama o da az bir durun diyor, bu çağın insanı kendi kendinin işkencecisi, toplama kampını sırtında taşıyor derken. Şiddetin topolojisi derinin altındaki bir uzama doğru ilerliyor. Yeni elbisesini insanoğlunun kendi derisinden biçiyor. Rüzgarlı, yağmurlu, güneşli günlerde hep yeni kıyafetlerle arzı endam ediyor. Şiddet denilen nesnenin...",
        category: "İnsanlık Hali"
      },
      {
        id: 61,
        title: "HAYATINIZA PALİNDROMİK BAKINCA NE GÖRÜYORSUNUZ?",
        author: "Mustafa Tekçe",
        date: "Şubat 26, 2022",
        image: "/src/assets/images/blog-6.jpg",
        excerpt: "22.02.2022'yi geride bıraktık. Bu palindromik bir tarihmiş. Dr. Mustafa Tekçe hocamız bunu tefekküre vesile kılmış, arifane gözlemlerini kendi engin hayat deneyiminden kesitlerle bizimle paylaşmış. Başından ve sonundan aynı okunan sayılar, kelimeler palindromikmiş. Neresinden bakarsan, neresinden okursan aynı. Nasıl...",
        category: "İnsanlık Hali"
      },
      {
        id: 62,
        title: "KENDİMİZİ TANIMADAN",
        author: "Harun Sarıgül",
        date: "Şubat 11, 2022",
        image: "/src/assets/images/blog-11.jpg",
        excerpt: "Bir zamanlar Delfi tapınağında kadim kültürlere mal olmuş bir aforizmanın asılı olduğu söylenir; Gnothi Seauton, latinler ise Nosce te ipsum dermiş buna; Kendini bil, kendini tanı. Tüm bilgelik gelenekleri insanı önce kendine davet ediyor galiba, kendini bilen ancak nefsini biliyor, nihayetinde rabbini de. Harun Sarıgül bu kadim bilgiyi güncelliyor, gündelik...",
        category: "İnsanlık Hali"
      }
    ],
    [
      {
        id: 63,
        title: "ÇOCUKLUĞUM VE METAVERSE",
        author: "Mustafa Tekçe",
        date: "Ocak 8, 2022",
        image: "/src/assets/images/blog-5-1.jpg",
        excerpt: "Dr. Mustafa Tekçe'nin makalesi, hızla dönüşen dijital çağda insan halini yansıtıyor. Bilim ve teknolojinin açgözlülük yerine etik sorumlulukla çalışması gerektiğini vurguluyor. Metaverse ve çocukluk arasındaki bağlantıyı sorgulayan bu yazı...",
        category: "İnsanlık Hali"
      },
      {
        id: 64,
        title: "YERYÜZÜNDE YALINAYAK",
        author: "Leyla İpekçi",
        date: "Ocak 1, 2022",
        image: "/src/assets/images/blog-6.jpg",
        excerpt: "Leyla İpekçi'nin yeni yılın ilk yazısı. 'İçten dışa, dıştan içe' yolculukları anlatıyor. Dünya ortak hikaye ve yoldaşlık olarak tanımlanıyor. Kimileri için 'leş, zindan, cehennem', kimileri için 'cennet, ateş, bahçe'. Yeryüzünde ömür boyu yalınayak yürüyüş...",
        category: "İnsanlık Hali"
      },
      {
        id: 65,
        title: "BİZİM YUNUS'UN ODUNLARI KÜRESEL KAZANI DA KAYNATIR",
        author: "Zülküf Oruç",
        date: "Aralık 3, 2021",
        image: "/src/assets/images/blog-11.jpg",
        excerpt: "Türk atasözlerinde kazan kaynatma konusunda umutsuzluğa kapılmamak ve kazanı kaynatmaya odaklanmak öğütleniyor. 'Bizim bozkır adamımız Yunus' ve onun geniş kazancı. Taşıdığı odunlar gerçekten de 'küresel kazancı' kaynatabilir...",
        category: "İnsanlık Hali"
      }
    ],
    [
      {
        id: 66,
        title: "BENLİK KİBRİ; ÖĞRENMENİN ÖNÜNDEKİ EN BÜYÜK ENGEL",
        author: "Leyla İpekçi",
        date: "Aralık 1, 2021",
        image: "/src/assets/images/blog-5-1.jpg",
        excerpt: "Ben bilirim egosu. Bilmeyi kartvizite, unvana, diplomaya, sertifikaya sıkıştırmak. Kendimizi bilmekten, varlığa faydalı olmaktan çok adımızdan söz ettirmek, unvan, itibar, makam için öğrenmek. Leyla İpekçi öğrenmenin, bizi aslımızla sürekli irtibat halinde tutan, ona doğru yol aldıran...",
        category: "İnsanlık Hali"
      },
      {
        id: 67,
        title: "KENDİ DÜŞÜNCE HAPİSHANESİNDE MÜEBBET HAPİS YATMAK",
        author: "Zülküf Perdeci",
        date: "Kasım 25, 2021",
        image: "/src/assets/images/blog-6.jpg",
        excerpt: "Psikiyatr Dr. Zülküf Perdeci dikkatlerimizi etrafımıza ördüğümüz görünmez duvarlara çekiyor. Kendi kendimizi müebbet bir ceza ile hapsettiğimiz zihin hapishanemizde benlikli düşüncelerimiz ve evhamlarımızla geçirdiğimiz zayi olan ömürlere. Hz...",
        category: "İnsanlık Hali"
      },
      {
        id: 68,
        title: "UYUR İDİK UYARDILAR",
        author: "Zülküf Oruç",
        date: "Ekim 28, 2021",
        image: "/src/assets/images/blog-11.jpg",
        excerpt: "Pir Sultan'ım eydür şunda Çok keramet var insanda O cihanda bu cihanda Ali'ye saydılar bizi. Yazıyı Oku...",
        category: "İnsanlık Hali"
      }
    ]
  ];

  const okumaktanManaCarouselPages = [
    [
      {
        id: 70,
        title: "70'lerde Yaşamak; 'Bir Mâniniz Yoksa Annemler Size Gelecek'",
        author: "Editör",
        date: "Haziran 2, 2022",
        image: "/src/assets/images/blog-12.jpg",
        excerpt: "70'ler. Kimimizin gençliği, 70'ler gençlik ve çocukluk anılarının zamanı, hafif yoksulluk dönemi, tasarrufa değer veren, hiçbir şeyi israf etmeyen, biriktiren zaman. Sıcaklık, samimiyet, aşırı yakınlık ve meraktan kaynaklanan ara sıra sıkıntı zamanı...",
        category: "Okumaktan Mana Ne"
      },
      {
        id: 71,
        title: "MENKİBELER VE MİNYATÜRLERLE DİLDEN DİLE YUNUS EMRE",
        author: "Mustafa Tatci",
        date: "Ocak 26, 2022",
        image: "/src/assets/images/blog-14.jpg",
        excerpt: "Yunus yılı geldi geçti, 'Yunus bize ne söyler' konulu konferanslar ve seminerler... Erenler'in dükkanında her şeyi bulmak, insanların kendilerini görmeleri, kendilerini ifade etmeleri ve niyetlerini belirtmeleri. Bazıları yarış bittikten sonra koşmaya devam ediyor, bazıları için her yıl Yunus'un yılı, her dakika şafak...",
        category: "Okumaktan Mana Ne"
      },
      {
        id: 72,
        title: "İPEKÇİ'NİN MAYASI; KAPANMAZ YAĞMURUN AÇTIĞI YARALAR ÇOCUKLARDA",
        author: "Zülküf Oruç",
        date: "Aralık 25, 2021",
        image: "/src/assets/images/blog-15.jpg",
        excerpt: "İnsan sevdiğine kendisini belki kullandırır ama sevdiğini asla kullanmaz. Maya'dan payıma düşen cümle... Maya 24 yaşında. 11 kez basıldı. Okundu, okunacak. Kırık kalpli çocuklar olduğu müddetçe, kalbi kırık çocuklar büyüdüğü müddetçe...",
        category: "Okumaktan Mana Ne"
      }
    ],
    [
      {
        id: 73,
        title: "KAHRAMANIN YOLCULUĞU; BİR 'OSMANCIK' OKUMASI",
        author: "Zülküf Oruç",
        date: "Aralık 13, 2021",
        image: "/src/assets/images/blog-12.jpg",
        excerpt: "Tarık Buğra'nın aslında tarihi bir biyografi olan, milli edebiyatımızın nitelikli bir örneği olarak görülen Osmancık romanını evrensel bir gözle, insanın kendilik arayışına dair bir anlatı, kahramanın yolculuğu olarak da okumak mümkün diye düşünüyorum. Osmancık'ın kendini, kendinde gizli benliğini bulmasının; kendi...",
        category: "Okumaktan Mana Ne"
      },
      {
        id: 74,
        title: "YÂRİ HATIRLATAN BİR ROMAN: DEM YÜZÜ",
        author: "Ayşe Nida Karakoç",
        date: "Aralık 4, 2021",
        image: "/src/assets/images/blog-14.jpg",
        excerpt: "İnsan bildiğini yazamaz. Kelimesizdir içi. Başlamak için gereken tek ölçüm var. Romanın noktası. Ana merkezi bulursam, o noktanın etrafında döne döne açılıyor anlam halkaları. O noktayı arıyordum. Aşkın bende neyi tutuşturacağını seyretmek istiyordum. Kalbin süveydası gibi, kara nurunu romanın. içinde...",
        category: "Okumaktan Mana Ne"
      },
      {
        id: 75,
        title: "YÛNUS'UN DENİZİNDE, KALBE DOKUNAN BİR GEZİNTİ",
        author: "Ayşe Nida Karakoç",
        date: "Ekim 18, 2021",
        image: "/src/assets/images/blog-15.jpg",
        excerpt: "Aşkı var gönül yanar yumşanır muma döner Taş gönüller kararmış sarp-katı kışa benzer. Aşka düşen gönüller yanarmış, aşk odu ile aşık kül olur, mum gibi yumuşayıp erirmiş o aşığın gönlü, aşktan nasibi olmayan gönüllere ise kar yağarmış, zorlu, katı bir kış çökermiş o gönüllere.",
        category: "Okumaktan Mana Ne"
      }
    ],
                  [
                {
                  id: 76,
                  title: "AŞK DERDİNİN DERMANI İÇİNDEDİR",
                  author: "Ayşe Nida Karakoç",
                  date: "Ekim 18, 2021",
                  image: "/src/assets/images/blog-1.jpg",
                  excerpt: "\"Gehi Leyla olur Mecnûn gözünden Geh olur Leyla'nın hayrânı aşkdır.\" İnsan, farkında olarak ya da farkında olmaksızın etrafına kendini görmek için bakar, kendi hakikatini arar, insan şehadet alemine istikameti kendinden kendine olan bir yolculuk yapmaya gelmiştir.",
                  category: "Okumaktan Mana Ne"
                },
                {
                  id: 77,
                  title: "GÜNLÜK HAYATIN GÖLGESİNDE İÇİMİZE DÖNMEK",
                  author: "Ayşe Nida Karakoç",
                  date: "Ekim 18, 2021",
                  image: "/src/assets/images/blog-2.jpg",
                  excerpt: "\"Sır, başkasına anlatılamayacak olanı senin ancak bir başkası olduğunda anlamaya başlamandı.\" Leyla İpekçi ile pandemi döneminin başında Üsküdar'da tanışmak nasip oldu, bu vesileyle ilk kitabı Maya'yı okudum ve çok etkilendim.",
                  category: "Okumaktan Mana Ne"
                },
                {
                  id: 78,
                  title: "YOLU YUNUS'LA YÜRÜMEK",
                  author: "Zülküf Oruç",
                  date: "Ekim 14, 2021",
                  image: "/src/assets/images/blog-3-1.jpg",
                  excerpt: "Yola Yunus'la düşmek ne büyük talih. O'ndan daha emin bir yol arkadaşı mı olur. \"Yunus Düştü Yolumuza\" Yunus'la Yunus olarak yürünmüş bir yol hikayesi. Mustafa Tatcı hocanın çeşitli mahfillerde yaptığı konuşmalardan oluşan \"Yunus Emre, Niyazi-i Mısri ve Türk-İslam Tasavvufu Hakkında Konuşmalar\" adlı söyleşi dizisinin ikinci kitabı olarak H yayınlarından geçtiğimiz ay çıktı.",
                  category: "Okumaktan Mana Ne"
                }
              ]
  ];

  const çokGezenCarouselPages = [
    [
      {
        id: 80,
        title: "UZAKTAN KOMŞUMUZ 'İRAN' - 3",
        author: "Editör",
        date: "Aralık 22, 2021",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "Mustafa Kürşat Şahiner'le İran yolculuğumuzun sonuna geliyoruz. Uzaklarda ateş kırmızısı bir nar yarılıyor bir danesi ABAD Blog sayfalarına düşüyor. Yezd'in rüzgarında Zerdüşt'ün sönmüş ateşinin külleri dağılıyor. Rüzgar kulelerinin serin dinginliğinde bize de bir kahve söylüyor Şahiner. Yüz insan ömrü",
        category: "Çok Gezen Bilir"
      },
      {
        id: 81,
        title: "UZAKTAN KOMŞUMUZ 'İRAN' - 2",
        author: "Editör",
        date: "Kasım 21, 2021",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "M. Kürşat Şahiner'le İran seyahatimiz sürüyor. Gülistan Sarayı'na düşüyor yolumuz, Şemsül İmare'den göğe bakıyoruz. Ali Kapı Sarayı'nı seyre dalıyoruz. Zayende Nehri üzerinde Kaju Köprüsü'nden hacıları Hicaz'a uğurluyoruz. İbret Müzesi'nde İran'ın modern tarihine şahit oluyoruz İsfahan nisf-ı cihan demişler,",
        category: "Çok Gezen Bilir"
      },
      {
        id: 82,
        title: "UZAKTAN KOMŞUMUZ İRAN- 1",
        author: "Editör",
        date: "Kasım 10, 2021",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "Çok gezen bilir köşemizde bir İran yazısı var. Bu denli yakın olmasına rağmen bir o kadar da uzakmış algısına sahip İran'a \"Uzaktan Komşumuz\" diyor Mustafa Kürşat Şahiner. Yakında bir İran seyahati planlayanlar için pratik bilgilerin de olduğu faydalı bir yazı. İyi okumalar. Mustafa Kürşat Şahiner ABAD Blog için",
        category: "Çok Gezen Bilir"
      }
    ],
    [
      {
        id: 83,
        title: "ANADOLU KAPISINDAN GİRİŞ 3. BÖLÜM",
        author: "Editör",
        date: "Kasım 1, 2021",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "Nasılsa kendimizi birden arabanın içinde Nallıhan'a doğru dönerken buluyoruz. Yağmur çiselemeye başlıyor. İki yanımızdaki ovanın yeşili gözlerimizi alıyor, dağlar kızıl bir şarap gibi kaynıyor ve buralara ayak basmış nice taliplilere bu badeyi sunarak onları sarhoş etmeye devam ediyor. Bacalardan tüten dumanın, şehrin bağrında dinlendirdiği ariflerin kokusu şu üç günde üzerimize öyle bir",
        category: "Çok Gezen Bilir"
      },
      {
        id: 84,
        title: "ANADOLU KAPISINDAN GİRİŞ-2. BÖLÜM",
        author: "Editör",
        date: "Ekim 28, 2021",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "Yolculuk sürüyor, Bacım Sultan'ın izinde Nallıhan köylerinde. ruhu teskin eden ardıçlar, şifa veren kuyular ve Azize Ebe ile kuzinenin başında içilen dost muhabbeti tadında sıcacık çaylar. Aslıhan Akdeniz Brehmer'e kulak vermeye devam ediyoruz: \"Bu yüzden türbeler zannedilenin aksine sadece dilekler için çaput bağlanan, mum yakılan yerlerin ötesinde, önemli toplumsal işlevleri olan mekanlar.\"",
        category: "Çok Gezen Bilir"
      },
      {
        id: 85,
        title: "ANADOLU KAPISINDAN GİRİŞ",
        author: "Editör",
        date: "Ekim 27, 2021",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "Aslımızdan haber soruyoruz. Herkes kendi Anadolu'sunu arıyor. Her dilde, susarak, uzun uzun bakarak, denizin dibinde, göğün derinliklerinde, ağacın kabuğunda, kuşun kanadında, toprağın çatlamış bağrında annemizi, bizi sorgusuz sualsiz kabul eden, sıcacık bir güvenle saran Anadolu'muzu... Yolculuğumuz hep o kadim anaya, aslında kendimize. Değerli yazar Aslınur Akdeniz Brehmer ABAD blog için yazdı; Baba Taptuk'tan, Bizim",
        category: "Çok Gezen Bilir"
      }
    ]
  ];

  const editörünSeçtikleriCarouselPages = [
    [
      {
        id: 90,
        title: "HASTALIKLAR",
        author: "Editör",
        date: "Eylül 14, 2022",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "Ergin Öğretmen Paspi'nin dilinden bize hikayeler anlatmaya devam ediyor. Bu kez biraz hüzünlü. Hastalıklar mahallenin kedilerine rahat vermiyor. Neyse ki Ergin Öğretmen ve Nuran anne var yoksa Paspi de bu genç yaşta bizleri bırakıp gidecekti. Ergin Aydın'ın gerçekçi, merhametli ve kedice bilen kaleminden... Ergin Aydın ABAD Blog'la paylaştı. 14.09.2022 Sokağımızda üç tane köpek var. Üç kardeş... Biri kız, ikisi erkek.... Üst sokakta yaşarlarken",
        category: "Editörün Seçtikleri"
      },
      {
        id: 91,
        title: "EĞİTİM ÜZERİNE DÜŞÜNCELER",
        author: "Editör",
        date: "Eylül 13, 2022",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "Eğitimin toplumsallaşma, kültür, kültürel değerlerin aktarımı gibi kavram ve süreçlerle olduğu kadar insanın bireysel anlamda kendini keşfetmesi, anlaması ve gerçekleştirmesi ile de yakından bir ilgisi vardır. Felsefe'nin antik yunan köklerinden bu yana en önemli alanlarından birini bu sebeple eğitim oluşturur. Sokrates, Pilaton, Gazali, Russo, Kant, Haydeger gibi bir çok filozof insan üzerine düşünürken,",
        category: "Editörün Seçtikleri"
      },
      {
        id: 92,
        title: "Sen Dünyayı Kurtar Analar Çorba Kaynatıyor.",
        author: "Editör",
        date: "Eylül 2, 2022",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "Dinler, inançlar tarihi ile uğraşanlara sormalı ama bana öyle geliyor ki çorba cennet taamı. Birleştiren, bölüştüren, onaran, şifa veren çorba sadece bu dünyadan olamaz. Ey kendini arayanlar, derdine derman soranlar o terapi bu terapi koşturmayın. Çorba kaynatın. Başkasının değil kendi çorbanızı. Editör ABAD Blog için yazdı. 02.09.2022 Başkasını bilmem ben yemeklerden en",
        category: "Editörün Seçtikleri"
      }
    ],
    [
      {
        id: 93,
        title: "Akşeyh'in Biz Modernlere Söyledikleri",
        author: "Editör",
        date: "Ağustos 31, 2022",
        image: "/src/assets/images/blog-5-1.jpg",
        excerpt: "Erenlerin Makamları. Akşeyhimiz de bize tevhidin mertebelerinden vahdetten, hakikatten haberleri bilginin o en saf, katışıksız kaynağından bir velinin perdesiz gözünden, gönül göğünden, süt gibi bal gibi arı göğsünden, kendindeki makamı resulden, yine onun izniyle, onun bildirdiği kadarıyla söylüyor. Bir tabibin vücud ve madde karşısındaki keskin bilgisi ve gözüyle konuşuyor.",
        category: "Editörün Seçtikleri"
      },
      {
        id: 94,
        title: "Öncü Bir Müslüman Türk Kadını: Sâmiha Ayverdi",
        author: "Editör",
        date: "Mart 22, 2022",
        image: "/src/assets/images/blog-6.jpg",
        excerpt: "Sâmiha Ayverdi bu yüzyıla ışık tutan, evlatlarını nefs denen avcıya teslim etmeyen bir annedir. O Hz. Fatma ve onun izinden giden ulu annelerimizin bugünkü kokusudur. Ruhaniyetine selâm olsun. Elçin Ödemiş ABAD Blog'la paylaştı. 22.03.2022 Ülkemizde, bu dünya ile işi olmayan ama iş bitmemiş olanlara yoldaşlık edenler, rehber olanlar, mürebbiyeler hiç eksik olmamıştır. Âbide",
        category: "Editörün Seçtikleri"
      },
      {
        id: 95,
        title: "ANTEPLİ MEHMET AMCA...",
        author: "Editör",
        date: "Mart 22, 2022",
        image: "/src/assets/images/blog-11.jpg",
        excerpt: "Editörün gördüğü... 22.03.2022 Kaynaklar sınırlı ihtiyaçlar sınırsız, modern iktisadın ilahiyatı buradan başlıyor. İşin aslı ne kaynaklar sınırlı ne de ihtiyaçlar sınırsız. Kanaat bitmez tükenmez bir hazinedir, kanaat gibi devlet olmaz desek, korkma bitmez bereketi içindedir desek, her çok azdan olur, azla yetinmeyen çoğu bulamaz, damlaya damlaya göl olur, bakmaya bakmaya el olur, hazıra dağ dayanmaz, karun malı olsa israfa yetmez desek",
        category: "Editörün Seçtikleri"
      }
    ],
    [
      {
        id: 96,
        title: "BERAAT ETMEK",
        author: "Editör",
        date: "Mart 21, 2022",
        image: "/src/assets/images/blog-1.jpg",
        excerpt: "Aslınur Akdeniz Brehmer'in kaleminden bir Berat yazısı. Kandillerin her biri insanın kendi olma yolculuğunda soluklandığı duraklar. Her biri yolu yepyeni bir ziya ile aydınlatan yeni idrak biçimleri. O yüzden yıl içinde dönüp duruyor kandil günleri, her an, her gün doğumu, her gün batımı kendi kandiline yürüyor ağır ağır... \"Bir de musibet anında kalbi huzurlu olan nice razı insanlar vardır. Zorluktan",
        category: "Editörün Seçtikleri"
      },
      {
        id: 97,
        title: "SÖZ NİYAZA DURUNCA",
        author: "Editör",
        date: "Mart 5, 2022",
        image: "/src/assets/images/blog-2.jpg",
        excerpt: "Ayşe Nida Karakoç, nidanın peşinde, kendi sesinin, o ilk sesin. Neye üflenen, ciğerlerimize çektiğimiz o ilk nefesin. O sesin çoğalarak kelimelere; sevmeye, sevilmeye, ayrılığa, kavuşmaya, hasrete, gurbete, şiire, türküye, duaya ve niyaza dönüştüğü anın...Bütün seslerin tek bir ses olduğu anın, alemin bütün seslerini kendinde toplayan sessizliğin peşinde. Ayşe Nida",
        category: "Editörün Seçtikleri"
      },
      {
        id: 98,
        title: "YÛNUS EMRE'DE MÂNA DİLİNİN İNŞASINDA İKTİSADİ METAFORLAR",
        author: "Editör",
        date: "Mart 2, 2022",
        image: "/src/assets/images/blog-3-1.jpg",
        excerpt: "Yunus Emre çarşıda pazarda, hayatın içinde, sokakta kullanılan dile yeni anlamlar yüklemiş, mana elbisesi giydirmiştir. Dr. Tolga Keskin, EL KÂRDA GÖNÜL YÂRDA başlığı altında kaleme aldığı Tasavvuf İktisat İlişkisi üzerine yazılarının üçüncüsünde Yunus Emre divanındaki iktisadi metaforları",
        category: "Editörün Seçtikleri"
      }
    ]
  ];

  const yazarlarCarouselPages = [
    [
      {
        id: 100,
        title: "YAZARLAR-I",
        author: "Editör",
        date: "Eylül 16, 2021",
        image: "/src/assets/images/blog-12.jpg",
        excerpt: "Yazarların hikayeleri. Her yazar kendi hikayesini anlatıyor, her kalem kendi masalını...",
        category: "Yazarlar"
      },
      {
        id: 101,
        title: "YAZARLAR-II",
        author: "Editör",
        date: "Eylül 14, 2021",
        image: "/src/assets/images/blog-14.jpg",
        excerpt: "Yazarların hikayeleri. Her yazar kendi hikayesini anlatıyor, her kalem kendi masalını...",
        category: "Yazarlar"
      },
      {
        id: 102,
        title: "YAZARLAR-III",
        author: "Editör",
        date: "Eylül 12, 2021",
        image: "/src/assets/images/blog-15.jpg",
        excerpt: "Yazarların hikayeleri. Her yazar kendi hikayesini anlatıyor, her kalem kendi masalını...",
        category: "Yazarlar"
      }
    ]
  ];

  // Yazarlar listesi
  const yazarlar = [
    {
      id: 1,
      name: "Editör",
      type: "heading",
      avatar: "/src/assets/images/author1.png"
    },
    {
      id: 2,
      name: "Ayşe Nida Karakoç",
      type: "author",
      avatar: "/src/assets/images/author2.png"
    },
    {
      id: 3,
      name: "Çiğdem Oruç",
      type: "author",
      avatar: "/src/assets/images/author2.png"
    },
    {
      id: 4,
      name: "Dilek Özdoğan",
      type: "author",
      avatar: "/src/assets/images/author2.png"
    },
    {
      id: 5,
      name: "Harun Sarıgül",
      type: "author",
      avatar: "/src/assets/images/author2.png"
    },
    {
      id: 6,
      name: "Leyla İpekçi",
      type: "author",
      avatar: "/src/assets/images/author2.png"
    },
    {
      id: 7,
      name: "Mustafa Tekçe",
      type: "author",
      avatar: "/src/assets/images/author2.png"
    },
    {
      id: 8,
      name: "Mümine Yıldız",
      type: "author",
      avatar: "/src/assets/images/author2.png"
    },
    {
      id: 9,
      name: "Sevda Urfa",
      type: "author",
      avatar: "/src/assets/images/author2.png"
    },
    {
      id: 10,
      name: "Yasin Şen",
      type: "author",
      avatar: "/src/assets/images/author2.png"
    },
    {
      id: 11,
      name: "Zülküf Oruç",
      type: "author",
      avatar: "/src/assets/images/author2.png"
    },
    {
      id: 12,
      name: "Zülküf Perdeci",
      type: "author",
      avatar: "/src/assets/images/author2.png"
    }
  ];

  // Seçilen yazar state'i
  const [selectedAuthor, setSelectedAuthor] = React.useState(yazarlar[0]);

  // Arama fonksiyonu için state'ler
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);

  // Blog yazıları verisi
  const blogPosts = [
    {
      id: 4,
      title: "GÖKYÜZÜ",
      author: "Editör",
      date: "Ocak 24, 2022",
      image: "/src/assets/images/blog-5-1.jpg",
      excerpt: "Bilmem ne renktir sema Sana, bana, Mecnun'a Beraber gezebilsek Semada çıksak tura Gökyüzü, herkesi, herşeyi ayırmadan masmavi saran annemiz...",
      category: "Genç Bilgeler"
    },
    {
      id: 5,
      title: "AHMET ÇAVUŞ DEDEMİZİN ÇANAKKALE HATIRASI",
      author: "Çiğdem Oruç",
      date: "Kasım 29, 2021",
      image: "/src/assets/images/blog-6.jpg",
      excerpt: "Ey, bu topraklar için toprağa düşmüş asker! Gökten ecdâd inerek öpse o pâk alnı değer...",
      category: "Genç Bilgeler"
    },
    {
      id: 6,
      title: "AİLE İÇİ EĞİTİMİN MANEVİYATI",
      author: "Leyla İpekçi",
      date: "Kasım 23, 2021",
      image: "/src/assets/images/blog-11.jpg",
      excerpt: "Sıkıcı pazar öğleden sonralarının, bitmek bilmeyen ev ödevlerinin ve tırnak kontrollerinin, kolalı beyaz yakalı siyah önlüklerin...",
      category: "Genç Bilgeler"
    },
    {
      id: 7,
      title: "DİRİLİŞE ÖNDERLİK EDEN BİR MÜCAHİDE: SAMİHA AYVERDİ",
      author: "Editör",
      date: "Şubat 2, 2022",
      image: "/src/assets/images/blog-12.jpg",
      excerpt: "Kimlikler yara sarar. Batılı modernlikle karşılaşan, çarpışan batı dışı dünyanın kadim bilinci yaralanır. 20. asır Türkiye'sinde kimlik arayışları hep bu yarayı tımar etme arayışlarıdır.",
      category: "Portreler"
    },
    {
      id: 8,
      title: "İDEALİSTLER ÖLÜMSÜZDÜR",
      author: "Editör",
      date: "Kasım 6, 2021",
      image: "/src/assets/images/blog-14.jpg",
      excerpt: "DR. MUSTAFA TATCI SÖYLEŞİSİ 3. BÖLÜM İdealistler ölümsüzdür. Ben bir idealistim. Büyük hayallerim var. Yanlış anlaşılmasın adım falan sokağa yahut filan okula verilsin diye bir idealim yok.",
      category: "Portreler"
    },
    {
      id: 9,
      title: "MALUM OLUR ABDALA, KASTAMONULU BİR MECZUB: EŞREF",
      author: "Zülküf Oruç",
      date: "Kasım 5, 2021",
      image: "/src/assets/images/blog-15.jpg",
      excerpt: "Kastomonu'nun da bir dönemine damga vurmuş kral delileri varmış, onu öğrendim bu kitapçıktan. Nasrullah'da namaza duran 'salluu' çekip farza yetişin diyen...",
      category: "Portreler"
    }
  ];

  // Kategoriler
  const categories = [
    "Anadolu'nun Nefesi",
    "Genç Bilgeler", 
    "Portreler",
    "Sarı Çiçeğin Dediği",
    "Erenlerin İzinde",
    "İnsanlık Hali",
    "Okumaktan Mana Ne",
    "Çok Gezen Bilir",
    "Editörün Seçtikleri",
    "Yazarlar"
  ];

  return (
    <div className="blog-page bg-white">
      <Header />

      <main className="main-content">
        {/* Hero Section */}
        <section
          className="py-5 mb-5"
          style={{
            background: "linear-gradient(135deg, #e8f5e8 0%, #f8f9fa 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="white" opacity="0.1"/><circle cx="30" cy="30" r="1" fill="white" opacity="0.1"/><circle cx="60" cy="20" r="1" fill="white" opacity="0.1"/><circle cx="80" cy="50" r="1" fill="white" opacity="0.1"/><circle cx="20" cy="70" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="80" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\') repeat',
              zIndex: 1,
            }}
          />

          <Container className="position-relative" style={{ zIndex: 2 }}>
            <Row className="align-items-center min-vh-50">
              <Col md={12} className="text-center">
                <div className="mb-4">
                  <img
                    src="/src/assets/images/abad-logo-seffaf-buyuk.png"
                    alt="ABAD Logo"
                    style={{ height: "100px", marginBottom: "2rem" }}
                  />
                </div>
                <h1
                  className="fw-bold mb-4"
                  style={{
                    fontSize: "4rem",
                    color: "#5a6c57",
                    fontFamily: "Roboto Condensed, sans-serif",
                    lineHeight: "1.2",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  BLOG
                </h1>
                <h2
                  className="mb-0"
                  style={{
                    fontSize: "2.5rem",
                    color: "#2c5aa0",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Varlığı Aşkla Okumak İçin
                </h2>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Ana İçerik */}
        <Container fluid className="px-5" style={{ maxWidth: "1400px" }}>
          <Row>
            {/* Sol Sidebar - Kategoriler */}
            <Col lg={3} className="mb-5">
              {/* Arama Çubuğu */}
              <div className="mb-4">
                <div
                  className="d-flex align-items-center"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "25px",
                    padding: "8px 20px",
                    border: "2px solid #e9ecef",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Ara..."
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    style={{
                      border: "none",
                      outline: "none",
                      width: "100%",
                      fontSize: "0.9rem",
                    }}
                  />
                  <span className="ms-2" style={{ color: "#6c757d" }}>🔍</span>
                </div>
              </div>

              {/* Arama Sonuçları */}
              {searchTerm && (
                <div className="mb-4">
                  <div
                    className="p-3"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "15px",
                      border: "2px solid #e9ecef",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                      maxHeight: "400px",
                      overflowY: "auto"
                    }}
                  >
                    <h6 className="fw-bold mb-3" style={{ color: "#2c5aa0" }}>
                      Arama Sonuçları ({searchResults.length})
                    </h6>
                    
                    {isSearching ? (
                      <div className="text-center py-3">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Aranıyor...</span>
                        </div>
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div className="d-flex flex-column gap-2">
                        {searchResults.map((post) => (
                          <div
                            key={post.id}
                            className="p-2 rounded border"
                            style={{
                              backgroundColor: "#f8f9fa",
                              cursor: "pointer",
                              transition: "all 0.2s ease"
                            }}
                            onClick={() => handleSearchResultClick(post)}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#2c5aa0";
                              e.currentTarget.style.color = "white";
                              e.currentTarget.style.transform = "translateX(5px)";
                              e.currentTarget.style.boxShadow = "0 4px 8px rgba(44, 90, 160, 0.3)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#f8f9fa";
                              e.currentTarget.style.color = "inherit";
                              e.currentTarget.style.transform = "translateX(0)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          >
                            <h6 className="fw-bold mb-1" style={{ fontSize: "0.9rem" }}>
                              {post.title}
                            </h6>
                            <p className="mb-1" style={{ fontSize: "0.8rem" }}>
                              <strong>Yazar:</strong> {post.author}
                            </p>
                            <p className="mb-1" style={{ fontSize: "0.8rem" }}>
                              <strong>Kategori:</strong> {post.category}
                            </p>
                            <p className="mb-0" style={{ fontSize: "0.75rem" }}>
                              {post.excerpt.length > 100 ? `${post.excerpt.substring(0, 100)}...` : post.excerpt}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-3 text-muted">
                        Sonuç bulunamadı
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Blog Canlı Bölümü */}
              <div 
                className="mb-4"
                onClick={() => scrollToSection(canliRef)}
                style={{ cursor: 'pointer' }}
                ref={blogCanliRef}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <h5
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "1.2rem",
                    color: "#5a6c57",
                    fontFamily: "Roboto Condensed, sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  BLOG CANLI
                </h5>
                <div
                  className="p-3 text-center"
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: "15px",
                    border: "2px solid #2c5aa0",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#e9ecef";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <div
                    className="mx-auto mb-2"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#2c5aa0",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    ▶️
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#2c5aa0",
                      fontWeight: "600",
                      textTransform: "uppercase",
                    }}
                  >
                    CANLI
                  </div>
                </div>
              </div>

              {/* Kategoriler */}
              <div>
                <h5
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "1.2rem",
                    color: "#5a6c57",
                    fontFamily: "Roboto Condensed, sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  KATEGORİLER
                </h5>
                <div className="d-flex flex-column gap-2">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center"
                      style={{
                        color: "#2c5aa0",
                        fontSize: "0.9rem",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        fontWeight: "400",
                      }}
                      onClick={() => {
                        // Kategoriye göre ilgili bölüme scroll yap
                        if (category === "Anadolu'nun Nefesi") {
                          scrollToSection(anadoluNefesiRef);
                        } else if (category === "Genç Bilgeler") {
                          scrollToSection(gençBilgelerRef);
                        } else if (category === "Portreler") {
                          scrollToSection(portrelerRef);
                        } else if (category === "Sarı Çiçeğin Dediği") {
                          scrollToSection(sarıÇiçekRef);
                        } else if (category === "Erenlerin İzinde") {
                          scrollToSection(erenlerinİzindeRef);
                        } else if (category === "İnsanlık Hali") {
                          scrollToSection(insanlıkHaliRef);
                        } else if (category === "Okumaktan Mana Ne") {
                          scrollToSection(okumaktanManaRef);
                        } else if (category === "Çok Gezen Bilir") {
                          scrollToSection(çokGezenRef);
                        } else if (category === "Editörün Seçtikleri") {
                          scrollToSection(editörünSeçtikleriRef);
                        } else if (category === "Yazarlar") {
                          scrollToSection(yazarlarRef);
                        } else {
                          // Diğer kategoriler için genel blog bölümüne
                          scrollToSection(blogRef);
                        }
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#1e4080";
                        e.currentTarget.style.transform = "translateX(5px)";
                        e.currentTarget.style.fontWeight = "600";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#2c5aa0";
                        e.currentTarget.style.transform = "translateX(0)";
                        e.currentTarget.style.fontWeight = "400";
                      }}
                    >
                      <span className="me-2" style={{ fontSize: "1.2rem" }}>›</span>
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Sağ Taraf - Blog Yazıları */}
            <Col lg={9}>
              {/* Başlık */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center">
                  <h3
                    ref={blogRef}
                    className="fw-bold me-3 mb-0"
                    style={{
                      fontSize: "2rem",
                      color: "#5a6c57",
                      fontFamily: "Roboto Condensed, sans-serif",
                      textTransform: "uppercase",
                    }}
                  >
                    BLOG
                  </h3>
                  <span
                    style={{
                      color: "#2c5aa0",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    }}
                  >
                  </span>
                </div>
              </div>

                                            {/* İlk 3 Öne Çıkan Blog Yazısı - Carousel */}
                <Row className="g-4 mb-5">
                  {featuredPostsPages[currentCarouselPage].map((post) => (
                    <Col lg={4} md={6} key={post.id}>
                      <Card
                        className="h-100 border-0 shadow-sm"
                        style={{
                          borderRadius: "20px",
                          transition: "all 0.3s ease",
                          overflow: "hidden",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-10px)";
                          e.currentTarget.style.boxShadow =
                            "0 15px 35px rgba(0,0,0,0.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow =
                            "0 2px 10px rgba(0,0,0,0.1)";
                        }}
                      >
                        <div
                          style={{
                            height: "200px",
                            overflow: "hidden",
                            position: "relative",
                          }}
                        >
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-100 h-100"
                            style={{
                              objectFit: "cover",
                              transition: "transform 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = "scale(1)";
                            }}
                          />
                        </div>
                        <Card.Body className="p-4 d-flex flex-column">
                          <div className="mb-2">
                            <small
                              className="text-muted d-block"
                              style={{ fontSize: "0.8rem" }}
                            >
                              {post.author}
                            </small>
                            <small
                              className="text-muted d-block"
                              style={{ fontSize: "0.8rem" }}
                            >
                              {post.date}
                            </small>
                          </div>
                          <h5
                            className="fw-bold mb-3"
                            style={{
                              fontSize: "1.1rem",
                              color: "#333",
                              fontFamily: "Roboto Condensed, sans-serif",
                              lineHeight: "1.4",
                              height: "50px",
                              overflow: "hidden",
                              display: "-webkit-box",
                              WebkitLineClamp: "2",
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {post.title}
                          </h5>
                          <p
                            className="text-muted mb-3"
                            style={{
                              fontSize: "0.9rem",
                              lineHeight: "1.6",
                              height: "100px",
                              overflow: "hidden",
                              display: "-webkit-box",
                              WebkitLineClamp: "5",
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {post.excerpt}
                          </p>
                          <div className="text-center mt-auto">
                            <button
                              className="btn"
                              style={{
                                backgroundColor: "transparent",
                                color: "#2c5aa0",
                                border: "2px solid #2c5aa0",
                                borderRadius: "20px",
                                fontSize: "0.8rem",
                                padding: "8px 20px",
                                transition: "all 0.3s ease",
                                width: "100%",
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#2c5aa0";
                                e.target.style.color = "white";
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "#2c5aa0";
                              }}
                            >
                              Yazıyı Oku
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>

                                                               {/* İlk 3 Kart için 3 Nokta - Carousel Navigasyonu */}
                 <div className="text-center mb-4">
                   <div className="d-flex justify-content-center align-items-center gap-2">
                     {[0, 1, 2].map((pageIndex) => (
                       <div
                         key={pageIndex}
                         style={{
                           width: "12px",
                           height: "12px",
                           borderRadius: "50%",
                           backgroundColor: pageIndex === currentCarouselPage ? "#2c5aa0" : "#e9ecef",
                           cursor: "pointer",
                           transition: "all 0.3s ease",
                         }}
                         onClick={() => handleCarouselPageChange(pageIndex)}
                         onMouseEnter={(e) => {
                           if (pageIndex !== currentCarouselPage) {
                             e.target.style.backgroundColor = "#2c5aa0";
                           }
                         }}
                         onMouseLeave={(e) => {
                           if (pageIndex !== currentCarouselPage) {
                             e.target.style.backgroundColor = "#e9ecef";
                           }
                         }}
                       />
                     ))}
                   </div>
                 </div>

                                   {/* Carousel Altı Tüm Yazılar Butonu */}
                  <div className="text-center mb-5">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#20B2AA",
                        color: "white",
                        borderRadius: "25px",
                        padding: "12px 30px",
                        fontSize: "1rem",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#1a8f8a";
                        e.target.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#20B2AA";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      ✏️ Tüm Yazılar
                    </button>
                  </div>

                  {/* CANLI Video Bölümü */}
                  <div className="mb-5">
                    <h3
                      ref={canliRef}
                      className="fw-bold mb-4"
                      style={{
                        fontSize: "2rem",
                        color: "#5a6c57",
                        fontFamily: "Roboto Condensed, sans-serif",
                        textTransform: "uppercase",
                      }}
                    >
                      CANLI
                    </h3>
                    
                                         {/* Video Player */}
                     <div
                       style={{
                         position: "relative",
                         width: "100%",
                         height: "600px",
                         backgroundColor: "#000",
                         borderRadius: "15px",
                         overflow: "hidden",
                         boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                       }}
                     >
                       <iframe
                         width="100%"
                         height="100%"
                         src="https://www.youtube.com/embed/9C9EEWdS9jA"
                         title="/ Mustafa Tatcı"
                         frameBorder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                         referrerPolicy="strict-origin-when-cross-origin"
                         allowFullScreen
                         style={{
                           border: "none",
                           borderRadius: "15px",
                         }}
                                            />
                   </div>
                 </div>

                 {/* Video Altı Carousel - 3 Kartlık Yapı */}
                 <div className="mb-5">
                   <h3
                     ref={anadoluNefesiRef}
                     className="fw-bold mb-4"
                     style={{
                       fontSize: "2rem",
                       color: "#5a6c57",
                       fontFamily: "Roboto Condensed, sans-serif",
                       textTransform: "uppercase",
                     }}
                   >
                     ANADOLU'NUN NEFESİ
                   </h3>
                   
                   {/* 3 Kartlık Grid */}
                   <Row className="g-4 mb-4">
                     {anadoluCarouselPages[currentAnadoluPage].map((post) => (
                       <Col lg={4} md={6} key={post.id}>
                         <Card
                           className="h-100 border-0 shadow-sm"
                           style={{
                             borderRadius: "20px",
                             transition: "all 0.3s ease",
                             overflow: "hidden",
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.transform = "translateY(-10px)";
                             e.currentTarget.style.boxShadow =
                               "0 15px 35px rgba(0,0,0,0.15)";
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.transform = "translateY(0)";
                             e.currentTarget.style.boxShadow =
                               "0 2px 10px rgba(0,0,0,0.1)";
                           }}
                         >
                           <div
                             style={{
                               height: "200px",
                               overflow: "hidden",
                               position: "relative",
                             }}
                           >
                             <img
                               src={post.image}
                               alt={post.title}
                               className="w-100 h-100"
                               style={{
                                 objectFit: "cover",
                                 transition: "transform 0.3s ease",
                               }}
                               onMouseEnter={(e) => {
                                 e.target.style.transform = "scale(1.1)";
                               }}
                               onMouseLeave={(e) => {
                                 e.target.style.transform = "scale(1)";
                               }}
                             />
                           </div>
                           <Card.Body className="p-4 d-flex flex-column">
                             <div className="mb-2">
                               <small
                                 className="text-muted d-block"
                                 style={{ fontSize: "0.8rem" }}
                               >
                                 {post.author}
                               </small>
                               <small
                                 className="text-muted d-block"
                                 style={{ fontSize: "0.8rem" }}
                               >
                                 {post.date}
                               </small>
                             </div>
                             <h5
                               className="fw-bold mb-3"
                               style={{
                                 fontSize: "1.1rem",
                                 color: "#333",
                                 fontFamily: "Roboto Condensed, sans-serif",
                                 lineHeight: "1.4",
                                 height: "50px",
                                 overflow: "hidden",
                                 display: "-webkit-box",
                                 WebkitLineClamp: "2",
                                 WebkitBoxOrient: "vertical",
                               }}
                             >
                               {post.title}
                             </h5>
                             <p
                               className="text-muted mb-3"
                               style={{
                                 fontSize: "0.9rem",
                                 lineHeight: "1.6",
                                 height: "100px",
                                 overflow: "hidden",
                                 display: "-webkit-box",
                                 WebkitLineClamp: "5",
                                 WebkitBoxOrient: "vertical",
                               }}
                             >
                               {post.excerpt}
                             </p>
                             <div className="text-center mt-auto">
                               <button
                                 className="btn"
                                 style={{
                                   backgroundColor: "transparent",
                                   color: "#2c5aa0",
                                   border: "2px solid #2c5aa0",
                                   borderRadius: "20px",
                                   fontSize: "0.8rem",
                                   padding: "8px 20px",
                                   transition: "all 0.3s ease",
                                   width: "100%",
                                 }}
                                 onMouseEnter={(e) => {
                                   e.target.style.backgroundColor = "#2c5aa0";
                                   e.target.style.color = "white";
                                 }}
                                 onMouseLeave={(e) => {
                                   e.target.style.backgroundColor = "transparent";
                                   e.target.style.color = "#2c5aa0";
                                 }}
                               >
                                 Yazıyı Oku
                               </button>
                             </div>
                           </Card.Body>
                         </Card>
                       </Col>
                     ))}
                   </Row>

                   {/* 3 Nokta Navigasyonu */}
                   <div className="text-center mb-4">
                     <div className="d-flex justify-content-center align-items-center gap-2">
                       {[0, 1, 2].map((pageIndex) => (
                         <div
                           key={pageIndex}
                           style={{
                             width: "12px",
                             height: "12px",
                             borderRadius: "50%",
                             backgroundColor: pageIndex === currentAnadoluPage ? "#2c5aa0" : "#e9ecef",
                             cursor: "pointer",
                             transition: "all 0.3s ease",
                           }}
                           onClick={() => setCurrentAnadoluPage(pageIndex)}
                           onMouseEnter={(e) => {
                             if (pageIndex !== currentAnadoluPage) {
                               e.target.style.backgroundColor = "#2c5aa0";
                             }
                           }}
                           onMouseLeave={(e) => {
                             if (pageIndex !== currentAnadoluPage) {
                               e.target.style.backgroundColor = "#e9ecef";
                             }
                           }}
                         />
                       ))}
                     </div>
                   </div>

                   {/* Tüm Yazılar Butonu */}
                   <div className="text-center mb-5">
                     <button
                       className="btn"
                       style={{
                         backgroundColor: "#20B2AA",
                         color: "white",
                         borderRadius: "25px",
                         padding: "12px 30px",
                         fontSize: "1rem",
                         fontWeight: "600",
                         transition: "all 0.3s ease",
                       }}
                       onMouseEnter={(e) => {
                         e.target.style.backgroundColor = "#1a8f8a";
                         e.target.style.transform = "translateY(-2px)";
                       }}
                       onMouseLeave={(e) => {
                         e.target.style.backgroundColor = "#20B2AA";
                         e.target.style.transform = "translateY(0)";
                       }}
                     >
                       ✏️ Tüm Yazılar
                     </button>
                   </div>
                 </div>

                 {/* GENÇ BİLGELER Bölümü */}
                 <div className="mb-5">
                   <h3
                     ref={gençBilgelerRef}
                     className="fw-bold mb-4"
                     style={{
                       fontSize: "2rem",
                       color: "#5a6c57",
                       fontFamily: "Roboto Condensed, sans-serif",
                       textTransform: "uppercase",
                     }}
                   >
                     GENÇ BİLGELER
                   </h3>
                   
                   {/* 3 Kartlık Grid */}
                   <Row className="g-4 mb-4">
                     {gençBilgelerCarouselPages[currentGençBilgelerPage].map((post) => (
                       <Col lg={4} md={6} key={post.id}>
                         <Card
                           className="h-100 border-0 shadow-sm"
                           style={{
                             borderRadius: "20px",
                             transition: "all 0.3s ease",
                             overflow: "hidden",
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.transform = "translateY(-10px)";
                             e.currentTarget.style.boxShadow =
                               "0 15px 35px rgba(0,0,0,0.15)";
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.transform = "translateY(0)";
                             e.currentTarget.style.boxShadow =
                               "0 2px 10px rgba(0,0,0,0.1)";
                           }}
                         >
                           <div
                             style={{
                               height: "200px",
                               overflow: "hidden",
                               position: "relative",
                             }}
                           >
                             <img
                               src={post.image}
                               alt={post.title}
                               className="w-100 h-100"
                               style={{
                                 objectFit: "cover",
                                 transition: "transform 0.3s ease",
                               }}
                               onMouseEnter={(e) => {
                                 e.target.style.transform = "scale(1.1)";
                               }}
                               onMouseLeave={(e) => {
                                 e.target.style.transform = "scale(1)";
                               }}
                             />
                           </div>
                           <Card.Body className="p-4 d-flex flex-column">
                             <div className="mb-2">
                               <small
                                 className="text-muted d-block"
                                 style={{ fontSize: "0.8rem" }}
                               >
                                 {post.author}
                               </small>
                               <small
                                 className="text-muted d-block"
                                 style={{ fontSize: "0.8rem" }}
                               >
                                 {post.date}
                               </small>
                             </div>
                             <h5
                               className="fw-bold mb-3"
                               style={{
                                 fontSize: "1.1rem",
                                 color: "#333",
                                 fontFamily: "Roboto Condensed, sans-serif",
                                 lineHeight: "1.4",
                                 height: "50px",
                                 overflow: "hidden",
                                 display: "-webkit-box",
                                 WebkitLineClamp: "2",
                                 WebkitBoxOrient: "vertical",
                               }}
                             >
                               {post.title}
                             </h5>
                             <p
                               className="text-muted mb-3"
                               style={{
                                 fontSize: "0.9rem",
                                 lineHeight: "1.6",
                                 height: "100px",
                                 overflow: "hidden",
                                 display: "-webkit-box",
                                 WebkitLineClamp: "5",
                                 WebkitBoxOrient: "vertical",
                               }}
                             >
                               {post.excerpt}
                             </p>
                             <div className="text-center mt-auto">
                               <button
                                 className="btn"
                                 style={{
                                   backgroundColor: "transparent",
                                   color: "#2c5aa0",
                                   border: "2px solid #2c5aa0",
                                   borderRadius: "20px",
                                   fontSize: "0.8rem",
                                   padding: "8px 20px",
                                   transition: "all 0.3s ease",
                                   width: "100%",
                                 }}
                                 onMouseEnter={(e) => {
                                   e.target.style.backgroundColor = "#2c5aa0";
                                   e.target.style.color = "white";
                                 }}
                                 onMouseLeave={(e) => {
                                   e.target.style.backgroundColor = "transparent";
                                   e.target.style.color = "#2c5aa0";
                                 }}
                               >
                                 Yazıyı Oku
                               </button>
                             </div>
                           </Card.Body>
                         </Card>
                       </Col>
                     ))}
                   </Row>

                  {/* 3 Nokta Navigasyonu (2 sayfa) */}
                  <div className="text-center mb-4">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      {[0, 1].map((pageIndex) => (
                         <div
                           key={pageIndex}
                           style={{
                             width: "12px",
                             height: "12px",
                             borderRadius: "50%",
                             backgroundColor: pageIndex === currentGençBilgelerPage ? "#2c5aa0" : "#e9ecef",
                             cursor: "pointer",
                             transition: "all 0.3s ease",
                           }}
                           onClick={() => setCurrentGençBilgelerPage(pageIndex)}
                           onMouseEnter={(e) => {
                             if (pageIndex !== currentGençBilgelerPage) {
                               e.target.style.backgroundColor = "#2c5aa0";
                             }
                           }}
                           onMouseLeave={(e) => {
                             if (pageIndex !== currentGençBilgelerPage) {
                               e.target.style.backgroundColor = "#e9ecef";
                             }
                           }}
                         />
                       ))}
                     </div>
                   </div>

                   {/* Tüm Yazılar Butonu */}
                   <div className="text-center mb-5">
                     <button
                       className="btn"
                       style={{
                         backgroundColor: "#20B2AA",
                         color: "white",
                         borderRadius: "25px",
                         padding: "12px 30px",
                         fontSize: "1rem",
                         fontWeight: "600",
                         transition: "all 0.3s ease",
                       }}
                       onMouseEnter={(e) => {
                         e.target.style.backgroundColor = "#1a8f8a";
                         e.target.style.transform = "translateY(-2px)";
                       }}
                       onMouseLeave={(e) => {
                         e.target.style.backgroundColor = "#20B2AA";
                         e.target.style.transform = "translateY(0)";
                       }}
                     >
                       ✏️ Tüm Yazılar
                     </button>
                   </div>
                 </div>

                 {/* PORTRELER Bölümü */}
                 <div className="mb-5">
                   <h3
                     ref={portrelerRef}
                     className="fw-bold mb-4"
                     style={{
                       fontSize: "2rem",
                       color: "#5a6c57",
                       fontFamily: "Roboto Condensed, sans-serif",
                       textTransform: "uppercase",
                     }}
                   >
                     PORTRELER
                   </h3>
                   
                   {/* 3 Kartlık Grid */}
                   <Row className="g-4 mb-4">
                     {portrelerCarouselPages[currentPortrelerPage].map((post) => (
                       <Col lg={4} md={6} key={post.id}>
                         <Card
                           className="h-100 border-0 shadow-sm"
                           style={{
                             borderRadius: "20px",
                             transition: "all 0.3s ease",
                             overflow: "hidden",
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.transform = "translateY(-10px)";
                             e.currentTarget.style.boxShadow =
                               "0 15px 35px rgba(0,0,0,0.15)";
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.transform = "translateY(0)";
                             e.currentTarget.style.boxShadow =
                               "0 2px 10px rgba(0,0,0,0.1)";
                           }}
                         >
                           <div
                             style={{
                               height: "200px",
                               overflow: "hidden",
                               position: "relative",
                             }}
                           >
                             <img
                               src={post.image}
                               alt={post.title}
                               className="w-100 h-100"
                               style={{
                                 objectFit: "cover",
                                 transition: "transform 0.3s ease",
                               }}
                               onMouseEnter={(e) => {
                                 e.target.style.transform = "scale(1.1)";
                               }}
                               onMouseLeave={(e) => {
                                 e.target.style.transform = "scale(1)";
                               }}
                             />
                           </div>
                           <Card.Body className="p-4 d-flex flex-column">
                             <div className="mb-2">
                               <small
                                 className="text-muted d-block"
                                 style={{ fontSize: "0.8rem" }}
                               >
                                 {post.author}
                               </small>
                               <small
                                 className="text-muted d-block"
                                 style={{ fontSize: "0.8rem" }}
                               >
                                 {post.date}
                               </small>
                             </div>
                             <h5
                               className="fw-bold mb-3"
                               style={{
                                 fontSize: "1.1rem",
                                 color: "#333",
                                 fontFamily: "Roboto Condensed, sans-serif",
                                 lineHeight: "1.4",
                                 height: "50px",
                                 overflow: "hidden",
                                 display: "-webkit-box",
                                 WebkitLineClamp: "2",
                                 WebkitBoxOrient: "vertical",
                               }}
                             >
                               {post.title}
                             </h5>
                             <p
                               className="text-muted mb-3"
                               style={{
                                 fontSize: "0.9rem",
                                 lineHeight: "1.6",
                                 height: "100px",
                                 overflow: "hidden",
                                 display: "-webkit-box",
                                 WebkitLineClamp: "5",
                                 WebkitBoxOrient: "vertical",
                               }}
                             >
                               {post.excerpt}
                             </p>
                             <div className="text-center mt-auto">
                               <button
                                 className="btn"
                                 style={{
                                   backgroundColor: "transparent",
                                   color: "#2c5aa0",
                                   border: "2px solid #2c5aa0",
                                   borderRadius: "20px",
                                   fontSize: "0.8rem",
                                   padding: "8px 20px",
                                   transition: "all 0.3s ease",
                                   width: "100%",
                                 }}
                                 onMouseEnter={(e) => {
                                   e.target.style.backgroundColor = "#2c5aa0";
                                   e.target.style.color = "white";
                                 }}
                                 onMouseLeave={(e) => {
                                   e.target.style.backgroundColor = "transparent";
                                   e.target.style.color = "#2c5aa0";
                                 }}
                               >
                                 Yazıyı Oku
                               </button>
                             </div>
                           </Card.Body>
                         </Card>
                       </Col>
                     ))}
                   </Row>

                   {/* 3 Nokta Navigasyonu */}
                   <div className="text-center mb-4">
                     <div className="d-flex justify-content-center align-items-center gap-2">
                       {[0, 1].map((pageIndex) => (
                         <div
                           key={pageIndex}
                           style={{
                             width: "12px",
                             height: "12px",
                             borderRadius: "50%",
                             backgroundColor: pageIndex === currentPortrelerPage ? "#2c5aa0" : "#e9ecef",
                             cursor: "pointer",
                             transition: "all 0.3s ease",
                           }}
                           onClick={() => setCurrentPortrelerPage(pageIndex)}
                           onMouseEnter={(e) => {
                             if (pageIndex !== currentPortrelerPage) {
                               e.target.style.backgroundColor = "#2c5aa0";
                             }
                           }}
                           onMouseLeave={(e) => {
                             if (pageIndex !== currentPortrelerPage) {
                               e.target.style.backgroundColor = "#e9ecef";
                             }
                           }}
                         />
                       ))}
                     </div>
                   </div>

                   {/* Tüm Yazılar Butonu */}
                   <div className="text-center mb-5">
                     <button
                       className="btn"
                       style={{
                         backgroundColor: "#20B2AA",
                         color: "white",
                         borderRadius: "25px",
                         padding: "12px 30px",
                         fontSize: "1rem",
                         fontWeight: "600",
                         transition: "all 0.3s ease",
                       }}
                       onMouseEnter={(e) => {
                         e.target.style.backgroundColor = "#1a8f8a";
                         e.target.style.transform = "translateY(-2px)";
                       }}
                       onMouseLeave={(e) => {
                         e.target.style.backgroundColor = "#20B2AA";
                         e.target.style.transform = "translateY(0)";
                       }}
                     >
                       ✏️ Tüm Yazılar
                     </button>
                   </div>
                 </div>

                 

               {/* Kalan Kategoriler */}
               {/* SARI ÇİÇEĞİN DEDİĞİ Bölümü */}
               <div className="mb-5">
                 <h3
                   ref={sarıÇiçekRef}
                   className="fw-bold mb-4"
                   style={{
                     fontSize: "2rem",
                     color: "#5a6c57",
                     fontFamily: "Roboto Condensed, sans-serif",
                     textTransform: "uppercase",
                   }}
                 >
                   SARI ÇİÇEĞİN DEDİĞİ
                 </h3>
                 
                 {/* 3 Kartlık Grid */}
                   <Row className="g-4 mb-4">
                    {sarıÇiçekPages3[currentSarıÇiçekPage].map((post) => (
                     <Col lg={4} md={6} key={post.id}>
                       <Card
                         className="h-100 border-0 shadow-sm"
                         style={{
                           borderRadius: "20px",
                           transition: "all 0.3s ease",
                           overflow: "hidden",
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.transform = "translateY(-10px)";
                           e.currentTarget.style.boxShadow =
                             "0 15px 35px rgba(0,0,0,0.15)";
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.transform = "translateY(0)";
                           e.currentTarget.style.boxShadow =
                             "0 2px 10px rgba(0,0,0,0.1)";
                         }}
                       >
                         <div
                           style={{
                             height: "200px",
                             overflow: "hidden",
                             position: "relative",
                           }}
                         >
                           <img
                             src={post.image}
                             alt={post.title}
                             className="w-100 h-100"
                             style={{
                               objectFit: "cover",
                               transition: "transform 0.3s ease",
                             }}
                             onMouseEnter={(e) => {
                               e.target.style.transform = "scale(1.1)";
                             }}
                             onMouseLeave={(e) => {
                               e.target.style.transform = "scale(1)";
                             }}
                           />
                         </div>
                         <Card.Body className="p-4 d-flex flex-column">
                           <div className="mb-2">
                             <small
                               className="text-muted d-block"
                               style={{ fontSize: "0.8rem" }}
                             >
                               {post.author}
                             </small>
                             <small
                               className="text-muted d-block"
                               style={{ fontSize: "0.8rem" }}
                             >
                               {post.date}
                             </small>
                           </div>
                           <h5
                             className="fw-bold mb-3"
                             style={{
                               fontSize: "1.1rem",
                               color: "#333",
                               fontFamily: "Roboto Condensed, sans-serif",
                               lineHeight: "1.4",
                               height: "50px",
                               overflow: "hidden",
                               display: "-webkit-box",
                               WebkitLineClamp: "2",
                               WebkitBoxOrient: "vertical",
                             }}
                           >
                             {post.title}
                           </h5>
                           <p
                             className="text-muted mb-3"
                             style={{
                               fontSize: "0.9rem",
                               lineHeight: "1.6",
                               height: "100px",
                               overflow: "hidden",
                               display: "-webkit-box",
                               WebkitLineClamp: "5",
                               WebkitBoxOrient: "vertical",
                             }}
                           >
                             {post.excerpt}
                           </p>
                           <div className="text-center mt-auto">
                             <button
                               className="btn"
                               style={{
                                 backgroundColor: "transparent",
                                 color: "#2c5aa0",
                                 border: "2px solid #2c5aa0",
                                 borderRadius: "20px",
                                 fontSize: "0.8rem",
                                 padding: "8px 20px",
                                 transition: "all 0.3s ease",
                                 width: "100%",
                               }}
                               onMouseEnter={(e) => {
                                 e.target.style.backgroundColor = "#2c5aa0";
                                 e.target.style.color = "white";
                               }}
                               onMouseLeave={(e) => {
                                 e.target.style.backgroundColor = "transparent";
                                 e.target.style.color = "#2c5aa0";
                               }}
                             >
                               Yazıyı Oku
                             </button>
                           </div>
                         </Card.Body>
                       </Card>
                     </Col>
                   ))}
                 </Row>

                  {/* 3 Nokta Navigasyonu */}
                  <div className="text-center mb-4">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      {[0, 1, 2].map((pageIndex) => (
                        <div
                          key={pageIndex}
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: pageIndex === currentSarıÇiçekPage ? "#2c5aa0" : "#e9ecef",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                          onClick={() => setCurrentSarıÇiçekPage(pageIndex)}
                          onMouseEnter={(e) => {
                            if (pageIndex !== currentSarıÇiçekPage) {
                              e.target.style.backgroundColor = "#2c5aa0";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (pageIndex !== currentSarıÇiçekPage) {
                              e.target.style.backgroundColor = "#e9ecef";
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Tüm Yazılar Butonu */}
                  <div className="text-center mb-5">
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#20B2AA",
                        color: "white",
                        borderRadius: "25px",
                        padding: "12px 30px",
                        fontSize: "1rem",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#1a8f8a";
                        e.target.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#20B2AA";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      ✏️ Tüm Yazılar
                    </button>
                  </div>
               </div>

               {/* ERENLERİN İZİNDE Bölümü */}
               <div className="mb-5">
                 <h3
                   ref={erenlerinİzindeRef}
                   className="fw-bold mb-4"
                   style={{
                     fontSize: "2rem",
                     color: "#5a6c57",
                     fontFamily: "Roboto Condensed, sans-serif",
                     textTransform: "uppercase",
                   }}
                 >
                   ERENLERİN İZİNDE
                 </h3>
                 
                 {/* 3 Kartlık Grid */}
                 <Row className="g-4 mb-4">
                   {erenlerinİzindeCarouselPages[currentErenlerinİzindePage].map((post) => (
                     <Col lg={4} md={6} key={post.id}>
                       <Card
                         className="h-100 border-0 shadow-sm"
                         style={{
                           borderRadius: "20px",
                           transition: "all 0.3s ease",
                           overflow: "hidden",
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.transform = "translateY(-10px)";
                           e.currentTarget.style.boxShadow =
                             "0 15px 35px rgba(0,0,0,0.15)";
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.transform = "translateY(0)";
                           e.currentTarget.style.boxShadow =
                             "0 2px 10px rgba(0,0,0,0.1)";
                         }}
                       >
                         <div
                           style={{
                             height: "200px",
                             overflow: "hidden",
                             position: "relative",
                           }}
                         >
                           <img
                             src={post.image}
                             alt={post.title}
                             className="w-100 h-100"
                             style={{
                               objectFit: "cover",
                               transition: "transform 0.3s ease",
                             }}
                             onMouseEnter={(e) => {
                               e.target.style.transform = "scale(1.1)";
                             }}
                             onMouseLeave={(e) => {
                               e.target.style.transform = "scale(1)";
                             }}
                           />
                         </div>
                         <Card.Body className="p-4 d-flex flex-column">
                           <div className="mb-2">
                             <small
                               className="text-muted d-block"
                               style={{ fontSize: "0.8rem" }}
                             >
                               {post.author}
                             </small>
                             <small
                               className="text-muted d-block"
                               style={{ fontSize: "0.8rem" }}
                             >
                               {post.date}
                             </small>
                           </div>
                           <h5
                             className="fw-bold mb-3"
                             style={{
                               fontSize: "1.1rem",
                               color: "#333",
                               fontFamily: "Roboto Condensed, sans-serif",
                               lineHeight: "1.4",
                               height: "50px",
                               overflow: "hidden",
                               display: "-webkit-box",
                               WebkitLineClamp: "2",
                               WebkitBoxOrient: "vertical",
                             }}
                           >
                             {post.title}
                           </h5>
                           <p
                             className="text-muted mb-3"
                             style={{
                               fontSize: "0.9rem",
                               lineHeight: "1.6",
                               height: "100px",
                               overflow: "hidden",
                               display: "-webkit-box",
                               WebkitLineClamp: "5",
                               WebkitBoxOrient: "vertical",
                             }}
                           >
                             {post.excerpt}
                           </p>
                           <div className="text-center mt-auto">
                             <button
                               className="btn"
                               style={{
                                 backgroundColor: "transparent",
                                 color: "#2c5aa0",
                                 border: "2px solid #2c5aa0",
                                 borderRadius: "20px",
                                 fontSize: "0.8rem",
                                 padding: "8px 20px",
                                 transition: "all 0.3s ease",
                                 width: "100%",
                               }}
                               onMouseEnter={(e) => {
                                 e.target.style.backgroundColor = "#2c5aa0";
                                 e.target.style.color = "white";
                               }}
                               onMouseLeave={(e) => {
                                 e.target.style.backgroundColor = "transparent";
                                 e.target.style.color = "#2c5aa0";
                               }}
                             >
                               Yazıyı Oku
                             </button>
                           </div>
                         </Card.Body>
                       </Card>
                     </Col>
                   ))}
                 </Row>

                 {/* 3 Nokta Navigasyonu */}
                 <div className="text-center mb-4">
                   <div className="d-flex justify-content-center align-items-center gap-2">
                     {[0, 1, 2].map((pageIndex) => (
                       <div
                         key={pageIndex}
                         style={{
                           width: "12px",
                           height: "12px",
                           borderRadius: "50%",
                           backgroundColor: pageIndex === currentErenlerinİzindePage ? "#2c5aa0" : "#e9ecef",
                           cursor: "pointer",
                           transition: "all 0.3s ease",
                         }}
                         onClick={() => setCurrentErenlerinİzindePage(pageIndex)}
                         onMouseEnter={(e) => {
                           if (pageIndex !== currentErenlerinİzindePage) {
                             e.target.style.backgroundColor = "#2c5aa0";
                           }
                         }}
                         onMouseLeave={(e) => {
                           if (pageIndex !== currentErenlerinİzindePage) {
                             e.target.style.backgroundColor = "#e9ecef";
                           }
                         }}
                       />
                     ))}
                   </div>
                 </div>

                 {/* Tüm Yazılar Butonu */}
                 <div className="text-center mb-5">
                   <button
                     className="btn"
                     style={{
                       backgroundColor: "#20B2AA",
                       color: "white",
                       borderRadius: "25px",
                       padding: "12px 30px",
                       fontSize: "1rem",
                       fontWeight: "600",
                       transition: "all 0.3s ease",
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.backgroundColor = "#1a8f8a";
                       e.target.style.transform = "translateY(-2px)";
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.backgroundColor = "#20B2AA";
                       e.target.style.transform = "translateY(0)";
                     }}
                   >
                     ✏️ Tüm Yazılar
                   </button>
                 </div>
               </div>

               {/* İNSANLIK HALİ Bölümü */}
               <div className="mb-5">
                 <h3
                   ref={insanlıkHaliRef}
                   className="fw-bold mb-4"
                   style={{
                     fontSize: "2rem",
                     color: "#5a6c57",
                     fontFamily: "Roboto Condensed, sans-serif",
                     textTransform: "uppercase",
                   }}
                 >
                   İNSANLIK HALİ
                 </h3>
                 
                 {/* 3 Kartlık Grid */}
                 <Row className="g-4 mb-4">
                   {insanlıkHaliCarouselPages[currentİnsanlıkHaliPage].map((post) => (
                     <Col lg={4} md={6} key={post.id}>
                       <Card
                         className="h-100 border-0 shadow-sm"
                         style={{
                           borderRadius: "20px",
                           transition: "all 0.3s ease",
                           overflow: "hidden",
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.transform = "translateY(-10px)";
                           e.currentTarget.style.boxShadow =
                             "0 15px 35px rgba(0,0,0,0.15)";
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.transform = "translateY(0)";
                           e.currentTarget.style.boxShadow =
                             "0 2px 10px rgba(0,0,0,0.1)";
                         }}
                       >
                         <div
                           style={{
                             height: "200px",
                             overflow: "hidden",
                             position: "relative",
                           }}
                         >
                           <img
                             src={post.image}
                             alt={post.title}
                             className="w-100 h-100"
                             style={{
                               objectFit: "cover",
                               transition: "transform 0.3s ease",
                             }}
                             onMouseEnter={(e) => {
                               e.target.style.transform = "scale(1.1)";
                             }}
                             onMouseLeave={(e) => {
                               e.target.style.transform = "scale(1)";
                             }}
                           />
                         </div>
                         <Card.Body className="p-4 d-flex flex-column">
                           <div className="mb-2">
                             <small
                               className="text-muted d-block"
                               style={{ fontSize: "0.8rem" }}
                             >
                               {post.author}
                             </small>
                             <small
                               className="text-muted d-block"
                               style={{ fontSize: "0.8rem" }}
                             >
                               {post.date}
                             </small>
                           </div>
                           <h5
                             className="fw-bold mb-3"
                             style={{
                               fontSize: "1.1rem",
                               color: "#333",
                               fontFamily: "Roboto Condensed, sans-serif",
                               lineHeight: "1.4",
                               height: "50px",
                               overflow: "hidden",
                               display: "-webkit-box",
                               WebkitLineClamp: "2",
                               WebkitBoxOrient: "vertical",
                             }}
                           >
                             {post.title}
                           </h5>
                           <p
                             className="text-muted mb-3"
                             style={{
                               fontSize: "0.9rem",
                               lineHeight: "1.6",
                               height: "100px",
                               overflow: "hidden",
                               display: "-webkit-box",
                               WebkitLineClamp: "5",
                               WebkitBoxOrient: "vertical",
                             }}
                           >
                             {post.excerpt}
                           </p>
                           <div className="text-center mt-auto">
                             <button
                               className="btn"
                               style={{
                                 backgroundColor: "transparent",
                                 color: "#2c5aa0",
                                 border: "2px solid #2c5aa0",
                                 borderRadius: "20px",
                                 fontSize: "0.8rem",
                                 padding: "8px 20px",
                                 transition: "all 0.3s ease",
                                 width: "100%",
                               }}
                               onMouseEnter={(e) => {
                                 e.target.style.backgroundColor = "#2c5aa0";
                                 e.target.style.color = "white";
                               }}
                               onMouseLeave={(e) => {
                                 e.target.style.backgroundColor = "transparent";
                                 e.target.style.color = "#2c5aa0";
                               }}
                             >
                               Yazıyı Oku
                             </button>
                           </div>
                         </Card.Body>
                       </Card>
                     </Col>
                   ))}
                 </Row>

                 {/* 3 Nokta Navigasyonu */}
                 <div className="text-center mb-4">
                   <div className="d-flex justify-content-center align-items-center gap-2">
                     {[0, 1, 2].map((pageIndex) => (
                       <div
                         key={pageIndex}
                         style={{
                           width: "12px",
                           height: "12px",
                           borderRadius: "50%",
                           backgroundColor: pageIndex === currentİnsanlıkHaliPage ? "#2c5aa0" : "#e9ecef",
                           cursor: "pointer",
                           transition: "all 0.3s ease",
                         }}
                         onClick={() => setCurrentİnsanlıkHaliPage(pageIndex)}
                         onMouseEnter={(e) => {
                           if (pageIndex !== currentİnsanlıkHaliPage) {
                             e.target.style.backgroundColor = "#2c5aa0";
                           }
                         }}
                         onMouseLeave={(e) => {
                           if (pageIndex !== currentİnsanlıkHaliPage) {
                             e.target.style.backgroundColor = "#e9ecef";
                           }
                         }}
                       />
                     ))}
                   </div>
                 </div>

                 {/* Tüm Yazılar Butonu */}
                 <div className="text-center mb-5">
                   <button
                     className="btn"
                     style={{
                       backgroundColor: "#20B2AA",
                       color: "white",
                       borderRadius: "25px",
                       padding: "12px 30px",
                       fontSize: "1rem",
                       fontWeight: "600",
                       transition: "all 0.3s ease",
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.backgroundColor = "#1a8f8a";
                       e.target.style.transform = "translateY(-2px)";
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.backgroundColor = "#20B2AA";
                       e.target.style.transform = "translateY(0)";
                     }}
                   >
                     ✏️ Tüm Yazılar
                   </button>
                 </div>
               </div>

               {/* OKUMAKTAN MANA NE Bölümü */}
               <div className="mb-5">
                 <h3
                   ref={okumaktanManaRef}
                   className="fw-bold mb-4"
                   style={{
                     fontSize: "2rem",
                     color: "#5a6c57",
                     fontFamily: "Roboto Condensed, sans-serif",
                     textTransform: "uppercase",
                   }}
                 >
                   OKUMAKTAN MANA NE
                 </h3>
                 
                 {/* 3 Kartlık Grid */}
                 <Row className="g-4 mb-4">
                   {okumaktanManaCarouselPages[currentOkumaktanManaPage].map((post) => (
                     <Col lg={4} md={6} key={post.id}>
                       <Card
                         className="h-100 border-0 shadow-sm"
                         style={{
                           borderRadius: "20px",
                           transition: "all 0.3s ease",
                           overflow: "hidden",
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.transform = "translateY(-10px)";
                           e.currentTarget.style.boxShadow =
                             "0 15px 35px rgba(0,0,0,0.15)";
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.transform = "translateY(0)";
                           e.currentTarget.style.boxShadow =
                             "0 2px 10px rgba(0,0,0,0.1)";
                         }}
                       >
                         <div
                           style={{
                             height: "200px",
                             overflow: "hidden",
                             position: "relative",
                           }}
                         >
                           <img
                             src={post.image}
                             alt={post.title}
                             className="w-100 h-100"
                             style={{
                               objectFit: "cover",
                               transition: "transform 0.3s ease",
                             }}
                             onMouseEnter={(e) => {
                               e.target.style.transform = "scale(1.1)";
                             }}
                             onMouseLeave={(e) => {
                               e.target.style.transform = "scale(1)";
                             }}
                           />
                         </div>
                         <Card.Body className="p-4 d-flex flex-column">
                           <div className="mb-2">
                             <small
                               className="text-muted d-block"
                               style={{ fontSize: "0.8rem" }}
                             >
                               {post.author}
                             </small>
                             <small
                               className="text-muted d-block"
                               style={{ fontSize: "0.8rem" }}
                             >
                               {post.date}
                             </small>
                           </div>
                           <h5
                             className="fw-bold mb-3"
                             style={{
                               fontSize: "1.1rem",
                               color: "#333",
                               fontFamily: "Roboto Condensed, sans-serif",
                               lineHeight: "1.4",
                               height: "50px",
                               overflow: "hidden",
                               display: "-webkit-box",
                               WebkitLineClamp: "2",
                               WebkitBoxOrient: "vertical",
                             }}
                           >
                             {post.title}
                           </h5>
                           <p
                             className="text-muted mb-3"
                             style={{
                               fontSize: "0.9rem",
                               lineHeight: "1.6",
                               height: "100px",
                               overflow: "hidden",
                               display: "-webkit-box",
                               WebkitLineClamp: "5",
                               WebkitBoxOrient: "vertical",
                             }}
                           >
                             {post.excerpt}
                           </p>
                           <div className="text-center mt-auto">
                             <button
                               className="btn"
                               style={{
                                 backgroundColor: "transparent",
                                 color: "#2c5aa0",
                                 border: "2px solid #2c5aa0",
                                 borderRadius: "20px",
                                 fontSize: "0.8rem",
                                 padding: "8px 20px",
                                 transition: "all 0.3s ease",
                                 width: "100%",
                               }}
                               onMouseEnter={(e) => {
                                 e.target.style.backgroundColor = "#2c5aa0";
                                 e.target.style.color = "white";
                               }}
                               onMouseLeave={(e) => {
                                 e.target.style.backgroundColor = "transparent";
                                 e.target.style.color = "#2c5aa0";
                               }}
                             >
                               Yazıyı Oku
                             </button>
                           </div>
                         </Card.Body>
                       </Card>
                     </Col>
                   ))}
                 </Row>

                 {/* 3 Nokta Navigasyonu */}
                 <div className="text-center mb-4">
                   <div className="d-flex justify-content-center align-items-center gap-2">
                     {[0, 1, 2].map((pageIndex) => (
                       <div
                         key={pageIndex}
                         style={{
                           width: "12px",
                           height: "12px",
                           borderRadius: "50%",
                           backgroundColor: pageIndex === currentOkumaktanManaPage ? "#2c5aa0" : "#e9ecef",
                           cursor: "pointer",
                           transition: "all 0.3s ease",
                         }}
                         onClick={() => setCurrentOkumaktanManaPage(pageIndex)}
                         onMouseEnter={(e) => {
                           if (pageIndex !== currentOkumaktanManaPage) {
                             e.target.style.backgroundColor = "#2c5aa0";
                           }
                         }}
                         onMouseLeave={(e) => {
                           if (pageIndex !== currentOkumaktanManaPage) {
                             e.target.style.backgroundColor = "#e9ecef";
                           }
                         }}
                       />
                     ))}
                   </div>
                 </div>

                 {/* Tüm Yazılar Butonu */}
                 <div className="text-center mb-5">
                   <button
                     className="btn"
                     style={{
                       backgroundColor: "#20B2AA",
                       color: "white",
                       borderRadius: "25px",
                       padding: "12px 30px",
                       fontSize: "1rem",
                       fontWeight: "600",
                       transition: "all 0.3s ease",
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.backgroundColor = "#1a8f8a";
                       e.target.style.transform = "translateY(-2px)";
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.backgroundColor = "#20B2AA";
                       e.target.style.transform = "translateY(0)";
                     }}
                   >
                     ✏️ Tüm Yazılar
                   </button>
                 </div>
               </div>

               {/* ÇOK GEZEN BİLİR Bölümü */}
               <div className="mb-5">
                 <h3
                   ref={çokGezenRef}
                   className="fw-bold mb-4"
                   style={{
                     fontSize: "2rem",
                     color: "#5a6c57",
                     fontFamily: "Roboto Condensed, sans-serif",
                     textTransform: "uppercase",
                   }}
                 >
                   ÇOK GEZEN BİLİR
                 </h3>
                 
                 {/* 3 Kartlık Grid */}
                 <Row className="g-4 mb-4">
                   {çokGezenCarouselPages[currentÇokGezenPage].map((post) => (
                     <Col lg={4} md={6} key={post.id}>
                       <Card
                         className="h-100 border-0 shadow-sm"
                         style={{
                           borderRadius: "20px",
                           transition: "all 0.3s ease",
                           overflow: "hidden",
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.transform = "translateY(-10px)";
                           e.currentTarget.style.boxShadow =
                             "0 15px 35px rgba(0,0,0,0.15)";
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.transform = "translateY(0)";
                           e.currentTarget.style.boxShadow =
                             "0 2px 10px rgba(0,0,0,0.1)";
                         }}
                       >
                         <div
                           style={{
                             height: "200px",
                             overflow: "hidden",
                             position: "relative",
                           }}
                         >
                           <img
                             src={post.image}
                             alt={post.title}
                             className="w-100 h-100"
                             style={{
                               objectFit: "cover",
                               transition: "transform 0.3s ease",
                             }}
                             onMouseEnter={(e) => {
                               e.target.style.backgroundColor = "#2c5aa0";
                             }}
                             onMouseLeave={(e) => {
                               e.target.style.backgroundColor = "transparent";
                             }}
                           />
                         </div>
                         <Card.Body className="p-4 d-flex flex-column">
                           <div className="mb-2">
                             <small
                               className="text-muted d-block"
                               style={{ fontSize: "0.8rem" }}
                             >
                               {post.author}
                             </small>
                             <small
                               className="text-muted d-block"
                               style={{ fontSize: "0.8rem" }}
                             >
                               {post.date}
                             </small>
                           </div>
                           <h5
                             className="fw-bold mb-3"
                             style={{
                               fontSize: "1.1rem",
                               color: "#333",
                               fontFamily: "Roboto Condensed, sans-serif",
                               lineHeight: "1.4",
                               height: "50px",
                               overflow: "hidden",
                               display: "-webkit-box",
                               WebkitLineClamp: "2",
                               WebkitBoxOrient: "vertical",
                             }}
                           >
                             {post.title}
                           </h5>
                           <p
                             className="text-muted mb-3"
                             style={{
                               fontSize: "0.9rem",
                               lineHeight: "1.6",
                               height: "100px",
                               overflow: "hidden",
                               display: "-webkit-box",
                               WebkitLineClamp: "5",
                               WebkitBoxOrient: "vertical",
                             }}
                           >
                             {post.excerpt}
                           </p>
                           <div className="text-center mt-auto">
                             <button
                               className="btn"
                               style={{
                                 backgroundColor: "transparent",
                                 color: "#2c5aa0",
                                 border: "2px solid #2c5aa0",
                                 borderRadius: "20px",
                                 fontSize: "0.8rem",
                                 padding: "8px 20px",
                                 transition: "all 0.3s ease",
                                 width: "100%",
                               }}
                               onMouseEnter={(e) => {
                                 e.target.style.backgroundColor = "#2c5aa0";
                                 e.target.style.color = "white";
                               }}
                               onMouseLeave={(e) => {
                                 e.target.style.backgroundColor = "transparent";
                                 e.target.style.color = "#2c5aa0";
                               }}
                             >
                               Yazıyı Oku
                             </button>
                           </div>
                         </Card.Body>
                       </Card>
                     </Col>
                   ))}
                 </Row>

                 {/* 2 Nokta Navigasyonu */}
                 <div className="text-center mb-4">
                   <div className="d-flex justify-content-center align-items-center gap-2">
                     {[0, 1].map((pageIndex) => (
                       <div
                         key={pageIndex}
                         style={{
                           width: "12px",
                           height: "12px",
                           borderRadius: "50%",
                           backgroundColor: pageIndex === currentÇokGezenPage ? "#2c5aa0" : "#e9ecef",
                           cursor: "pointer",
                           transition: "all 0.3s ease",
                         }}
                         onClick={() => setCurrentÇokGezenPage(pageIndex)}
                         onMouseEnter={(e) => {
                           if (pageIndex !== currentÇokGezenPage) {
                             e.target.style.backgroundColor = "#2c5aa0";
                           }
                         }}
                         onMouseLeave={(e) => {
                           if (pageIndex !== currentÇokGezenPage) {
                             e.target.style.backgroundColor = "#e9ecef";
                           }
                         }}
                       />
                     ))}
                   </div>
                 </div>

                 {/* Tüm Yazılar Butonu */}
                 <div className="text-center mb-5">
                   <button
                     className="btn"
                     style={{
                       backgroundColor: "#20B2AA",
                       color: "white",
                       borderRadius: "25px",
                       padding: "12px 30px",
                       fontSize: "1rem",
                       fontWeight: "600",
                       transition: "all 0.3s ease",
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.backgroundColor = "#1a8f8a";
                       e.target.style.transform = "translateY(-2px)";
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.backgroundColor = "#20B2AA";
                       e.target.style.transform = "translateY(0)";
                     }}
                   >
                     ✏️ Tüm Yazılar
                   </button>
                 </div>
               </div>

               {/* EDİTÖRÜN SEÇTİKLERİ Bölümü */}
               <div className="mb-5">
                 <h3
                   ref={editörünSeçtikleriRef}
                   className="fw-bold mb-4"
                   style={{
                     fontSize: "2rem",
                     color: "#5a6c57",
                     fontFamily: "Roboto Condensed, sans-serif",
                     textTransform: "uppercase",
                   }}
                 >
                   EDİTÖRÜN SEÇTİKLERİ
                 </h3>
                 
                 {/* 3 Kartlık Grid */}
                 <Row className="g-4 mb-4">
                   {editörünSeçtikleriCarouselPages[currentEditörünSeçtikleriPage].map((post) => (
                     <Col lg={4} md={6} key={post.id}>
                       <Card
                         className="h-100 border-0 shadow-sm"
                         style={{
                           borderRadius: "20px",
                           transition: "all 0.3s ease",
                           overflow: "hidden",
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.transform = "translateY(-10px)";
                           e.currentTarget.style.boxShadow =
                             "0 15px 35px rgba(0,0,0,0.15)";
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.transform = "translateY(0)";
                           e.currentTarget.style.boxShadow =
                             "0 2px 10px rgba(0,0,0,0.1)";
                         }}
                       >
                         <div
                           style={{
                             height: "200px",
                             overflow: "hidden",
                             position: "relative",
                           }}
                         >
                           <img
                             src={post.image}
                             alt={post.title}
                             className="w-100 h-100"
                             style={{
                               objectFit: "cover",
                               transition: "transform 0.3s ease",
                             }}
                             onMouseEnter={(e) => {
                               e.target.style.backgroundColor = "#2c5aa0";
                               e.target.style.color = "white";
                             }}
                             onMouseLeave={(e) => {
                               e.target.style.backgroundColor = "transparent";
                               e.target.style.color = "#2c5aa0";
                             }}
                           />
                         </div>
                         <Card.Body className="p-4 d-flex flex-column">
                           <div className="mb-2">
                             <small
                               className="text-muted d-block"
                               style={{ fontSize: "0.8rem" }}
                             >
                               {post.author}
                             </small>
                             <small
                               className="text-muted d-block"
                               style={{ fontSize: "0.8rem" }}
                             >
                               {post.date}
                             </small>
                           </div>
                           <h5
                             className="fw-bold mb-3"
                             style={{
                               fontSize: "1.1rem",
                               color: "#333",
                               fontFamily: "Roboto Condensed, sans-serif",
                               lineHeight: "1.4",
                               height: "50px",
                               overflow: "hidden",
                               display: "-webkit-box",
                               WebkitLineClamp: "2",
                               WebkitBoxOrient: "vertical",
                             }}
                           >
                             {post.title}
                           </h5>
                           <p
                             className="text-muted mb-3"
                             style={{
                               fontSize: "0.9rem",
                               lineHeight: "1.6",
                               height: "100px",
                               overflow: "hidden",
                               display: "-webkit-box",
                               WebkitLineClamp: "5",
                               WebkitBoxOrient: "vertical",
                             }}
                           >
                             {post.excerpt}
                           </p>
                           <div className="text-center mt-auto">
                             <button
                               className="btn"
                               style={{
                                 backgroundColor: "transparent",
                                 color: "#2c5aa0",
                                 border: "2px solid #2c5aa0",
                                 borderRadius: "20px",
                                 fontSize: "0.8rem",
                                 padding: "8px 20px",
                                 transition: "all 0.3s ease",
                                 width: "100%",
                               }}
                               onMouseEnter={(e) => {
                                 e.target.style.backgroundColor = "#2c5aa0";
                                 e.target.style.color = "white";
                               }}
                               onMouseLeave={(e) => {
                                 e.target.style.backgroundColor = "transparent";
                                 e.target.style.color = "#2c5aa0";
                               }}
                             >
                               Yazıyı Oku
                             </button>
                           </div>
                         </Card.Body>
                       </Card>
                     </Col>
                   ))}
                 </Row>

                 {/* 3 Nokta Navigasyonu */}
                 <div className="text-center mb-4">
                   <div className="d-flex justify-content-center align-items-center gap-2">
                     {[0, 1, 2].map((pageIndex) => (
                       <div
                         key={pageIndex}
                         style={{
                           width: "12px",
                           height: "12px",
                           borderRadius: "50%",
                           backgroundColor: pageIndex === currentEditörünSeçtikleriPage ? "#2c5aa0" : "#e9ecef",
                           cursor: "pointer",
                           transition: "all 0.3s ease",
                         }}
                         onClick={() => setCurrentEditörünSeçtikleriPage(pageIndex)}
                         onMouseEnter={(e) => {
                           if (pageIndex !== currentEditörünSeçtikleriPage) {
                             e.target.style.backgroundColor = "#2c5aa0";
                           }
                         }}
                         onMouseLeave={(e) => {
                           if (pageIndex !== currentEditörünSeçtikleriPage) {
                             e.target.style.backgroundColor = "#e9ecef";
                           }
                         }}
                       />
                     ))}
                   </div>
                 </div>

                 {/* Tüm Yazılar Butonu */}
                 <div className="text-center mb-5">
                   <button
                     className="btn"
                     style={{
                       backgroundColor: "#20B2AA",
                       color: "white",
                       borderRadius: "25px",
                       padding: "12px 30px",
                       fontSize: "1rem",
                       fontWeight: "600",
                       transition: "all 0.3s ease",
                     }}
                     onMouseEnter={(e) => {
                       e.target.style.backgroundColor = "#1a8f8a";
                       e.target.style.transform = "translateY(-2px)";
                     }}
                     onMouseLeave={(e) => {
                       e.target.style.backgroundColor = "#20B2AA";
                       e.target.style.transform = "translateY(0)";
                     }}
                   >
                     ✏️ Tüm Yazılar
                   </button>
                 </div>
               </div>

                                {/* YAZARLAR Bölümü */}
                 <div className="mb-4">
                   <h3
                     ref={yazarlarRef}
                     className="fw-bold mb-3"
                     style={{
                       fontSize: "1.8rem",
                       color: "#5a6c57",
                       fontFamily: "Roboto Condensed, sans-serif",
                       textTransform: "uppercase",
                     }}
                   >
                     YAZARLAR
                   </h3>
                   
                   {/* Yazarlar Layout - Sol Sidebar + Sağ İçerik */}
                   <Row>
                     {/* Sol Sidebar - Yazar Listesi */}
                     <Col lg={4} className="mb-3">
                       <div className="d-flex flex-column gap-2">
                         {yazarlar.map((yazar) => (
                           <div
                             key={yazar.id}
                             className={`p-2 rounded-4 shadow-sm cursor-pointer transition-all ${
                               selectedAuthor.id === yazar.id 
                                 ? 'bg-primary text-white' 
                                 : 'bg-light text-dark'
                             }`}
                             style={{
                               cursor: 'pointer',
                               transition: 'all 0.3s ease',
                               border: selectedAuthor.id === yazar.id ? '2px solid #2c5aa0' : 'none',
                               backgroundColor: selectedAuthor.id === yazar.id ? '#2c5aa0' : '#f8f9fa',
                               color: selectedAuthor.id === yazar.id ? 'white' : '#333',
                               borderRadius: '20px'
                             }}
                             onClick={() => setSelectedAuthor(yazar)}
                             onMouseEnter={(e) => {
                               if (selectedAuthor.id !== yazar.id) {
                                 e.currentTarget.style.transform = 'translateX(5px)';
                                 e.currentTarget.style.backgroundColor = '#e9ecef';
                               }
                             }}
                             onMouseLeave={(e) => {
                               if (selectedAuthor.id !== yazar.id) {
                                 e.currentTarget.style.transform = 'translateX(0)';
                                 e.currentTarget.style.backgroundColor = '#f8f9fa';
                               }
                             }}
                           >
                             <span className="fw-medium" style={{ fontSize: '0.9rem' }}>{yazar.name}</span>
                           </div>
                         ))}
                       </div>
                     </Col>

                     {/* Sağ İçerik - Seçilen Yazar Detayları */}
                     <Col lg={8} className="mb-3">
                       <div className="bg-white p-3 rounded-3 shadow-sm h-100">
                         {/* Yazar Avatar ve İkon */}
                         <div className="text-center mb-3">
                           <div
                             className="mx-auto mb-2"
                             style={{
                               width: '100px',
                               height: '100px',
                               backgroundColor: '#e8f5e8',
                               borderRadius: '15px',
                               display: 'flex',
                               alignItems: 'center',
                               justifyContent: 'center',
                               border: '2px solid #2c5aa0',
                               overflow: 'hidden'
                             }}
                           >
                             {selectedAuthor.type === 'heading' ? (
                               <div
                                 style={{
                                   fontSize: '48px',
                                   color: '#2c5aa0'
                                 }}
                               >
                                 ✒️
                               </div>
                             ) : (
                               <img
                                 src={selectedAuthor.avatar}
                                 alt={selectedAuthor.name}
                                 style={{
                                   width: '100%',
                                   height: '100%',
                                   objectFit: 'cover'
                                 }}
                               />
                             )}
                           </div>
                           <h4
                             className="fw-bold mb-2"
                             style={{
                               fontSize: '1.3rem',
                               color: '#333'
                             }}
                           >
                             {selectedAuthor.name}
                           </h4>
                           <p
                             className="text-muted mb-2"
                             style={{ fontSize: '0.85rem' }}
                           >
                             Tüm Yazıları
                           </p>
                           
                           {/* İçerik Alanı */}
                           <div
                             className="w-100 p-2 rounded"
                             style={{
                               backgroundColor: '#f8f9fa',
                               border: '1px solid #e9ecef',
                               minHeight: '150px',
                               display: 'flex',
                               alignItems: 'center',
                               justifyContent: 'center'
                             }}
                           >
                             <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
                               {selectedAuthor.name} için içerik burada görüntülenecek...
                             </p>
                           </div>
                         </div>
                       </div>
                     </Col>
                   </Row>


                 </div>


            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default BlogPage;
