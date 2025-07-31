import React from "react";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  return (
    <section className="featured-projects">
      <div className="featured-projects-container">
        <h2 className="section-title">ÖNE ÇIKAN PROJELER</h2>
        
        <div className="projects-grid">
          {/* Sol taraf - Sadece metin içeriği */}
          <div className="main-project-card pb-5">
            <div className="main-project-content">
              <h3 className="main-project-title">
                ABAD'ın Fidanları<br />
                Gazi'nin Toprağı ile Buluşuyor
              </h3>
              <p className="main-project-description pb-5">
                Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimi ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi Rektör Yardımcısı Prof. Dr. Yücel Gelişli, Yabancı Diller Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın Güngör, Sağlık Hizmetleri Meslek Yüksekokulu Müdürü Doç. Dr. Hakan Tekedere, Müdür Yardımcısı...
              </p>
            </div>
          </div>

          {/* Sağ taraf - Kartlar */}
          <div className="right-cards-container">
            {/* Üst boş kart */}
            <div className="empty-top-card">
            </div>

            {/* Alt küçük proje kartı */}
            <div className="small-project-card">
              <div className="small-project-header">
                <h3 className="small-project-title">ÖNE ÇIKAN PROJELER</h3>
              </div>
              <div className="small-project-content">
                <p className="small-project-description">
                  Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimi ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Alt kısımda buton */}
        <div className="bottom-button-section">
          <button className="more-info-btn">
            DAHA FAZLA BİLGİ EDİNİN
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;