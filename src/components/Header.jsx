import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        padding: "30px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
        }}
      >
        {/* Telefon numarası - Sağ üst köşe */}
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "40px",
            color: "#2c5aa0",
            fontSize: "18px",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "400",
          }}
        >
          0212 880 00 00
        </div>

        {/* Ana header içeriği */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          {/* Sol taraf - Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/src/assets/harita/web-logo-yazili-512-x-512-piksel.png"
              alt="ABAD Logo"
              style={{
                height: "140px",
                width: "auto",
              }}
            />
          </div>

          {/* Orta kısım - Navigasyon linkleri */}
          <div
            style={{
              display: "flex",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Link
                to="/"
                style={{
                  color: "#2c5aa0",
                  textDecoration: "none",
                  fontSize: "20px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "400",
                  transition: "color 0.3s ease",
                }}
              >
                ABAD
              </Link>
              <div
                style={{
                  width: "50px",
                  height: "2px",
                  backgroundColor: "#D4A574",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Link
                to="/activities"
                style={{
                  color: "#2c5aa0",
                  textDecoration: "none",
                  fontSize: "20px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "400",
                  transition: "color 0.3s ease",
                }}
              >
                Harekete Geçin
              </Link>
              <div
                style={{
                  width: "130px",
                  height: "2px",
                  backgroundColor: "#D4A574",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Link
                to="/kindergarten"
                style={{
                  color: "#2c5aa0",
                  textDecoration: "none",
                  fontSize: "20px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "400",
                  transition: "color 0.3s ease",
                }}
              >
                Yunus Emre Anaokulu
              </Link>
              <div
                style={{
                  width: "200px",
                  height: "2px",
                  backgroundColor: "#D4A574",
                }}
              />
            </div>
          </div>

          {/* Sağ taraf - İkonlar ve Butonlar */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {/* Dükkan - İkon ve Buton */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src="/src/assets/genel/arayuzver2-18.png"
                alt="Dükkan İkonu"
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
              <Link
                to="/shop"
                style={{
                  backgroundColor: "#2B5F7F",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "15px",
                  textDecoration: "none",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "400",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                }}
              >
                Dükkan
              </Link>
            </div>

            {/* Bağış - İkon ve Buton */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src="/src/assets/genel/arayuzver2-17.png"
                alt="Bağış İkonu"
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
              <Link
                to="/donate"
                style={{
                  backgroundColor: "#2E8B57",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "15px",
                  textDecoration: "none",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "400",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                }}
              >
                Bağış Yapın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
