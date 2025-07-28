import React from "react";

const MapSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "60px 0",
        textAlign: "center",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Türkiye Haritası */}
        <div
          style={{
            marginBottom: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/src/assets/harita/turkey-map.png"
            alt="Türkiye Haritası"
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "800px",
            }}
          />
        </div>

        {/* İkonlar ve Butonlar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Eğitim ve Seminer İkonu */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/src/assets/harita/arayuzver2-08.png"
                alt="Eğitim ve Seminer"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <button
              style={{
                backgroundColor: "#c67366",
                color: "#ffffff",
                border: "none",
                padding: "8px 20px",
                borderRadius: "15px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease",
                minWidth: "80px",
              }}
            >
              1455
            </button>
          </div>

          {/* Doğa Faaliyetleri İkonu */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/src/assets/harita/arayuzver2-10.png"
                alt="Doğa Faaliyetleri"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <button
              style={{
                backgroundColor: "#c67366",
                color: "#ffffff",
                border: "none",
                padding: "8px 20px",
                borderRadius: "15px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease",
                minWidth: "80px",
              }}
            >
              1455
            </button>
          </div>

          {/* Kitap/Blog İkonu */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/src/assets/harita/arayuzver2-09.png"
                alt="Blog"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <button
              style={{
                backgroundColor: "#c67366",
                color: "#ffffff",
                border: "none",
                padding: "8px 20px",
                borderRadius: "15px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease",
                minWidth: "80px",
              }}
            >
              1455
            </button>
          </div>

          {/* Gönüllü/Bağış İkonu */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/src/assets/harita/arayuzver2-11.png"
                alt="Gönüllü"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <button
              style={{
                backgroundColor: "#c67366",
                color: "#ffffff",
                border: "none",
                padding: "8px 20px",
                borderRadius: "15px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease",
                minWidth: "80px",
              }}
            >
              1455
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;