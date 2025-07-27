import './MapPageExact.css';

const MapPage = () => {
  return (
    <div className="map-page-exact">
      <div className="main-container-exact">
        {/* ABAD Logo - Sol Üst */}
        <div className="abad-logo-exact">
          <a href="#">
            <img
              src="/harita/web-logo-yazili-512-x-512-piksel.png"
              alt="ABAD Logo"
            />
          </a>
        </div>

        {/* Phone Number - Sağ Üst */}
        <div className="phone-exact">
          0552 331 96 17
        </div>

        {/* Navigation - Orta Üst */}
        <nav className="navigation-exact">
          <a href="#">ABAD</a>
          <a href="#">Harekete Geçin</a>
          <a href="#">Yunus Emre Anaokulu</a>
        </nav>

        {/* Action Buttons - Sağ */}
        <div className="action-buttons-exact">
          {/* Dükkan Button */}
          <div className="button-wrapper-exact">
            <img
              src="/genel/arayuzver2-18.png"
              alt="Sepet İkonu"
              className="icon-exact cart-icon-exact"
            />
            <button className="button-exact shop-button-exact">
              Dükkan
            </button>
          </div>

          {/* Bağış Yapın Button */}
          <div className="button-wrapper-exact">
            <img
              src="/harita/arayuzver2-08.png"
              alt="Kalp İkonu"
              className="icon-exact heart-icon-exact"
            />
            <button className="button-exact donate-button-exact">
              Bağış Yapın
            </button>
          </div>
        </div>

        {/* Turkey Map */}
        <div className="map-container-exact">
          <img
            src="/harita/turkey-map.png"
            alt="Türkiye Faaliyetler Haritası"
            className="turkey-map-exact"
            onError={(e) => {
              console.error("Harita görseli yüklenemedi:", e.target.src);
              e.target.style.display = "none";
            }}
            onLoad={() => {
              console.log("Harita görseli başarıyla yüklendi");
            }}
          />
        </div>

        {/* Category Icons */}
        <div className="category-section-exact">
          {/* Grup */}
          <div className="category-item-exact">
            <img
              src="/harita/arayuzver2-11.png"
              alt="Grup"
              className="category-icon-exact"
            />
            <div className="category-number-exact">
              1455
            </div>
          </div>

          {/* Ağaç */}
          <div className="category-item-exact">
            <img
              src="/harita/arayuzver2-10.png"
              alt="Ağaç"
              className="category-icon-exact"
            />
            <div className="category-number-exact">
              1455
            </div>
          </div>

          {/* Kitap */}
          <div className="category-item-exact">
            <img
              src="/harita/arayuzver2-09.png"
              alt="Kitap"
              className="category-icon-exact"
            />
            <div className="category-number-exact">
              1455
            </div>
          </div>

          {/* Kalp */}
          <div className="category-item-exact">
            <img
              src="/harita/arayuzver2-08.png"
              alt="Kalp"
              className="category-icon-exact"
            />
            <div className="category-number-exact">
              1455
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;