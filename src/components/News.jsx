import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const News = () => {
  return (
    <section
      className="py-5 position-relative"
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage: `url("/src/assets/genel/arayuzver2-19.png")`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom",
        paddingTop: "80px",
        paddingBottom: "200px",
        minHeight: "600px",
      }}
    >
      {/* Sol tarafta şeffaf ABAD logosu */}
      <div
        style={{
          position: "absolute",
          left: "50px",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.1,
          zIndex: 1,
        }}
      >
        <img
          src="/src/assets/images/abad-logo-seffaf-buyuk.png"
          alt="ABAD Logo"
          style={{
            width: "300px",
            height: "auto",
          }}
        />
      </div>

      <Container
        style={{ maxWidth: "1200px", position: "relative", zIndex: 2 }}
      >
        <Row
          className="align-items-center g-5"
          style={{ marginBottom: "150px" }}
        >
          {/* Sol taraf - Kişi portresi (görseldeki gibi orta-sol konumda) */}
          <Col lg={6}>
            <div className="position-relative text-center">
              {/* Kişi portresi - görseldeki gibi yuvarlak çerçeve */}
              <div
                className="mb-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "350px",
                    height: "350px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "8px solid #f5f5dc",
                    background: "#f5f5dc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Görseldeki kişi portresi */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      backgroundImage: "url('/src/assets/images/1.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
          </Col>

          {/* Sağ taraf - Bizden Haberler başlığı ve açıklama metni */}
          <Col lg={6} className="text-start">
            <div className="position-relative">
              {/* Bizden Haberler başlığı - görseldeki gibi mavi renkte */}
              <div className="mb-4">
                <h2
                  style={{
                    color: "#2c5f88",
                    fontSize: "3.2rem",
                    fontWeight: "bold",
                    fontFamily: "Poppins, sans-serif",
                    marginBottom: "30px",
                    lineHeight: "1.2",
                  }}
                >
                  Bizden Haberler
                </h2>
              </div>

              {/* Açıklama metni */}
              <div className="mb-4">
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#333",
                    fontFamily: "Open Sans, sans-serif",
                    lineHeight: "1.8",
                    textAlign: "justify",
                    marginBottom: "30px",
                  }}
                >
                  Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine ABAD
                  Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi
                  Rektör Yardımcısı Prof. Dr. Yücel Gelişli, Yapancı Diller
                  Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın Güngör, Sağlık
                  Hizmetleri Meslek Yüksekokulu Müdürü Doç. Dr. Hakan Tekedere,
                  Müdür Yardımcısı Dr. Öğr Üyesi Alper Ertem, Sağlık Hizmetleri
                  MYO Bölüm Başkanları Prof. Dr. Meltem Uzunhisarcıklı, Prof.
                  Dr.
                </p>

                <div className="text-end">
                  <button
                    style={{
                      backgroundColor: "#5a6c57",
                      color: "white",
                      border: "none",
                      padding: "12px 35px",
                      borderRadius: "5px",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      letterSpacing: "0.5px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#4a5a47";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#5a6c57";
                    }}
                  >
                    DAHA FAZLA BİLGİ EDİNİN
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Alt boşluk arkaplan görseli için */}
      <div style={{ height: "80px" }}></div>
    </section>
  );
};

export default News;
