import { useState, useEffect } from 'react';

const useContent = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5001/api/admin/content');
      
      if (response.ok) {
        const data = await response.json();
        setContent(data);
        setError(null);
      } else {
        throw new Error('İçerik yüklenemedi');
      }
    } catch (err) {
      console.error('Error loading content:', err);
      setError(err.message);
      // Fallback content - site-content.json'dan statik veriler kullan
      try {
        const staticContentModule = await import('../data/site-content.json');
        const staticContent = staticContentModule.default;
        setContent(staticContent);
      } catch (staticErr) {
        console.error('Static content da yüklenemedi, minimal fallback kullanılıyor:', staticErr);
        setContent({
          header: {
            phone: "0212 880 00 00",
            logo: {
              src: "/src/assets/harita/web-logo-yazili-512-x-512-piksel.png",
              alt: "ABAD Logo"
            },
            navigation: {
              home: {
                text: "ABAD",
                path: "/"
              }
            }
          },
          homepage: {
            hero: {
              title: "Hiç Bir Yer Hiç Bir Gönül Çorak Kalmasın",
              subtitle: "ABAD - Anadolu Bilgileri Derneği",
              description: "Eğitim, kültür ve sosyal yardım alanında faaliyet gösteren derneğimiz, toplumsal dayanışmayı güçlendirmeyi amaçlamaktadır."
            },
            featured_projects: {
              title: "ÖNE ÇIKAN PROJELER",
              subtitle: "Toplumsal değer yaratan projelerimizle fark yaratıyoruz",
              backgroundPattern: "/src/assets/genel/arayuzver2_calismayuzeyicopy.png",
              bottomPattern: "/src/assets/genel/arayuzver2-19.png",
              leftIcon: "/src/assets/genel/arayuzver2-14.png",
              mainProject: {
                title: "ABAD'ın Fidanları Gazi'nin Toprağı ile Buluşuyor",
                subtitle: "ABAD'ın Fidanları\nGazi'nin Toprağı ile Buluşuyor",
                description: "Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimi ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi Rektör Yardımcısı Prof. Dr. Yücel Gelişli, Yabancı Diller Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın Güngör, Sağlık Hizmetleri Meslek Yüksekokulu Müdürü Doç. Dr. Hakan Tekedere, Müdür Yardımcısı...",
                buttonText: "DAHA FAZLA BİLGİ EDİNİN",
                buttonColor: "#5a6c57",
                link: "/projects/fidan-dikimi"
              }
            },
            categories: {
              title: "Faaliyet Alanlarımız",
              subtitle: "Çeşitli alanlarda topluma hizmet ediyoruz"
            }
          },
          categories: {
            title: "Faaliyet Alanlarımız",
            subtitle: "Toplumsal değer yaratan projelerimizle fark yaratıyoruz",
            backgroundImage: "/src/assets/genel/arayuzver2-19.png",
            styles: {
              backgroundColor: "#f8f9fa",
              paddingTop: 60,
              paddingBottom: 250,
              card: {
                borderRadius: 20,
                borderColor: "#e8f5e8",
                hoverBorderColor: "#5a6c57",
                titleColor: "#5a6c57",
                titleFontSize: 1.3,
                titleFontFamily: "Poppins, sans-serif",
                contentColor: "#666",
                contentFontSize: 0.95,
                contentFontFamily: "Open Sans, sans-serif"
              }
            },
            items: [
              {
                id: 1,
                title: "Doğa Faaliyetleri",
                image: "/src/assets/images/doga-faaliyetleri.jpg",
                description: "Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimi ve doğa koruma çalışmaları. ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan öncülüğünde sürdürülen çevre dostu projeler."
              },
              {
                id: 2,
                title: "Çocuk ve Genç Faaliyetleri",
                image: "/src/assets/images/cocuk-ve-genc-faaliyetleri.jpg",
                description: "Çocukların ve gençlerin doğa ile buluştuğu, eğitici ve eğlenceli aktiviteler. Bahçe bakımı, fidan dikimi ve çevre bilinci kazandırma etkinlikleri."
              },
              {
                id: 3,
                title: "Eğitim ve Seminer Faaliyetleri",
                image: "/src/assets/images/seminer-ve-egitim-abad-anadolu-bilgleri.jpg",
                description: "Çevre bilinci, sürdürülebilirlik ve doğa koruma konularında eğitim programları ve seminerler. Uzman konuşmacılar eşliğinde bilgilendirici oturumlar."
              }
            ]
          },
          news: {
            title: "Bizden Haberler",
            content: "Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi Rektör Yardımcısı Prof. Dr. Yücel Gelişli, Yapancı Diller Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın Güngör, Sağlık Hizmetleri Meslek Yüksekokulu Müdürü Doç. Dr. Hakan Tekedere, Müdür Yardımcısı Dr. Öğr Üyesi Alper Ertem, Sağlık Hizmetleri MYO Bölüm Başkanları Prof. Dr. Meltem Uzunhisarcıklı, Prof. Dr.",
            buttonText: "DAHA FAZLA BİLGİ EDİNİN",
            buttonLink: "/news",
            backgroundImage: "/src/assets/genel/arayuzver2-19.png",
            portraitImage: "/src/assets/images/1.jpg",
            logoImage: "/src/assets/images/abad-logo-seffaf-buyuk.png",
            styles: {
              backgroundColor: "#f8f9fa",
              paddingTop: 80,
              paddingBottom: 200,
              title: {
                fontFamily: "Poppins, sans-serif",
                fontSize: 3.2,
                color: "#2c5f88"
              },
              content: {
                fontFamily: "Open Sans, sans-serif",
                fontSize: 1.1,
                color: "#333333"
              },
              portraitSize: 350,
              portraitBorderColor: "#f5f5dc",
              portraitBorderWidth: 8,
              logoWidth: 300,
              logoOpacity: 0.1,
              button: {
                backgroundColor: "#5a6c57",
                fontFamily: "Open Sans, sans-serif",
                fontSize: 0.9,
                borderRadius: 5
              }
            }
          }
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const refetchContent = () => {
    loadContent();
  };

  return {
    content,
    loading,
    error,
    refetchContent
  };
};

export default useContent;