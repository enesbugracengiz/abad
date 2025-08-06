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
      // Fallback content
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
          }
        }
      });
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