const MapPage = () => {
  return (
    <div
      className="map-page"
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Header Navigation - Harita üzerinde şeffaf */}
      <nav
        className="navbar navbar-expand-lg position-absolute w-100"
        style={{
          zIndex: 1000,
          backgroundColor: "transparent",
          padding: "20px 0",
        }}
      >
        <div className="container">
          {/* Sol: ABAD Logo */}
          <a href="#" className="navbar-brand d-flex align-items-center">
            <img
              src="/harita/web-logo-yazili-512-x-512-piksel.png"
              alt="ABAD Logo"
              style={{ height: "50px", width: "auto" }}
            />
          </a>

          {/* Sağ: Telefon + Navigation + Butonlar */}
          <div className="d-flex align-items-center gap-4 ms-auto">
            {/* Telefon Numarası - Sağ üstte */}
            <div
              className="d-none d-md-block fw-normal"
              style={{ fontSize: "14px", color: "#1e3a8a" }}
            >
              0552 331 96 17
            </div>

            {/* Navigation Menu */}
            <div className="navbar-nav d-flex align-items-center gap-3 me-3">
              <a
                href="#"
                className="nav-link text-dark fw-normal px-2"
                style={{ fontSize: "14px" }}
              >
                ABAD
              </a>
              <a
                href="#"
                className="nav-link text-dark fw-normal px-2"
                style={{ fontSize: "14px" }}
              >
                Harekete Geçin
              </a>
              <a
                href="#"
                className="nav-link text-dark fw-normal px-2"
                style={{ fontSize: "14px" }}
              >
                Yunus Emre Anaokulu
              </a>
            </div>

            {/* Action Buttons */}
            <div className="d-flex align-items-center gap-2">
              <img
                src="/genel/arayuzver2-18.png"
                alt="Dükkan İkonu"
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
              <button
                className="btn btn-sm rounded-pill px-3 py-1"
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  backgroundColor: "#1e3a8a",
                  border: "none",
                  color: "white",
                  minWidth: "80px",
                }}
              >
                Dükkan
              </button>
              <img
                src="/genel/arayuzver2-17.png"
                alt="Bağış İkonu"
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
              <button
                className="btn btn-sm rounded-pill px-3 py-1"
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  backgroundColor: "#16a34a",
                  border: "none",
                  color: "white",
                  minWidth: "100px",
                }}
              >
                Bağış Yapın
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Harita Bölümü */}
      <div className="w-100">
        <div
          className="map-container position-relative"
          style={{ paddingTop: "100px" }}
        >
          {/* Türkiye Haritası */}
          <div
            className="turkey-map-wrapper d-flex align-items-center justify-content-center"
            style={{ height: "450px", position: "relative" }}
          >
            <img
              src="/harita/turkey-map.png"
              alt="Türkiye Faaliyetler Haritası"
              className="img-fluid"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
                filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.1))",
              }}
              onError={(e) => {
                console.error("Harita görseli yüklenemedi:", e.target.src);
                e.target.style.display = "none";
              }}
              onLoad={() => {
                console.log("Harita görseli başarıyla yüklendi");
              }}
            />
          </div>

          {/* Kategori İkonları - Harita Altında */}
          <div className="category-icons d-flex justify-content-center gap-4 mt-4 pb-4">
            {/* Konum - Kırmızı Buton */}
            <div className="category-item text-center">
              <img
                src="/harita/arayuzver2-11.png"
                alt="Konum"
                style={{
                  width: "40px",
                  height: "40px",
                  marginBottom: "8px",
                }}
              />
              <div
                className="rounded-pill d-flex align-items-center justify-content-center mx-auto"
                style={{
                  backgroundColor: "#CD7F7F",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "8px 16px",
                  minWidth: "80px",
                  border: "1px solid #B76B6B",
                }}
              >
                1455
              </div>
            </div>

            {/* Gönül - Kırmızı Buton */}
            <div className="category-item text-center">
              <img
                src="/harita/arayuzver2-10.png"
                alt="Gönül"
                style={{
                  width: "40px",
                  height: "40px",
                  marginBottom: "8px",
                }}
              />
              <div
                className="rounded-pill d-flex align-items-center justify-content-center mx-auto"
                style={{
                  backgroundColor: "#CD7F7F",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "8px 16px",
                  minWidth: "80px",
                  border: "1px solid #B76B6B",
                }}
              >
                1455
              </div>
            </div>

            {/* Kalp - Kırmızı Buton */}
            <div className="category-item text-center">
              <img
                src="/harita/arayuzver2-09.png"
                alt="Kalp"
                style={{
                  width: "40px",
                  height: "40px",
                  marginBottom: "8px",
                }}
              />
              <div
                className="rounded-pill d-flex align-items-center justify-content-center mx-auto"
                style={{
                  backgroundColor: "#CD7F7F",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "8px 16px",
                  minWidth: "80px",
                  border: "1px solid #B76B6B",
                }}
              >
                1455
              </div>
            </div>

            {/* Yıldız - Kırmızı Buton */}
            <div className="category-item text-center">
              <img
                src="/harita/arayuzver2-08.png"
                alt="Yıldız"
                style={{
                  width: "40px",
                  height: "40px",
                  marginBottom: "8px",
                }}
              />
              <div
                className="rounded-pill d-flex align-items-center justify-content-center mx-auto"
                style={{
                  backgroundColor: "#CD7F7F",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "8px 16px",
                  minWidth: "80px",
                  border: "1px solid #B76B6B",
                }}
              >
                1455
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
