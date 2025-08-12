import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useContent from "../hooks/useContent";

const News = () => {
  const { content, loading } = useContent();
  const navigate = useNavigate();

  if (loading) {
    return (
      <section className="py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "400px" }}>
        <Container style={{ maxWidth: "1200px" }}>
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Yükleniyor...</span>
            </div>
            <p className="mt-3">Haberler yükleniyor...</p>
          </div>
        </Container>
      </section>
    );
  }

  const news = content?.news || {};
  const backgroundImage = news.backgroundImage || "/src/assets/genel/arayuzver2-19.png";

  return (
    <section
      className="py-5 position-relative"
      style={{
        backgroundColor: news?.styles?.backgroundColor || "#f8f9fa",
        backgroundImage: `url("${backgroundImage}")`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom",
        backgroundSize: "auto 130px",
        paddingTop: `${news?.styles?.paddingTop || 80}px`,
        paddingBottom: `${news?.styles?.paddingBottom || 200}px`,
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
          opacity: news?.styles?.logoOpacity || 0.1,
          zIndex: 1,
        }}
      >
        <img
          src={news?.logoImage || "/src/assets/images/abad-logo-seffaf-buyuk.png"}
          alt="ABAD Logo"
          style={{
            width: `${news?.styles?.logoWidth || 300}px`,
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
                    width: `${news?.styles?.portraitSize || 350}px`,
                    height: `${news?.styles?.portraitSize || 350}px`,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: `${news?.styles?.portraitBorderWidth || 8}px solid ${news?.styles?.portraitBorderColor || "#f5f5dc"}`,
                    background: news?.styles?.portraitBorderColor || "#f5f5dc",
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
                      backgroundImage: `url("${news?.portraitImage || '/src/assets/images/1.jpg'}")`,
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
                    color: news?.styles?.title?.color || "#2c5f88",
                    fontSize: `${news?.styles?.title?.fontSize || 3.2}rem`,
                    fontWeight: "bold",
                    fontFamily: news?.styles?.title?.fontFamily || "Poppins, sans-serif",
                    marginBottom: "30px",
                    lineHeight: "1.2",
                  }}
                >
                  {news?.title || "Bizden Haberler"}
                </h2>
              </div>

              {/* Açıklama metni */}
              <div className="mb-4">
                <p
                  style={{
                    fontSize: `${news?.styles?.content?.fontSize || 1.1}rem`,
                    color: news?.styles?.content?.color || "#333",
                    fontFamily: news?.styles?.content?.fontFamily || "Open Sans, sans-serif",
                    lineHeight: "1.8",
                    textAlign: "justify",
                    marginBottom: "30px",
                  }}
                >
                  {news?.content || 
                    "Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi Rektör Yardımcısı Prof. Dr. Yücel Gelişli, Yapancı Diller Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın Güngör, Sağlık Hizmetleri Meslek Yüksekokulu Müdürü Doç. Dr. Hakan Tekedere, Müdür Yardımcısı Dr. Öğr Üyesi Alper Ertem, Sağlık Hizmetleri MYO Bölüm Başkanları Prof. Dr. Meltem Uzunhisarcıklı, Prof. Dr."
                  }
                </p>

                <div className="text-end">
                  <button
                    style={{
                      backgroundColor: news?.styles?.button?.backgroundColor || "#5a6c57",
                      color: "white",
                      border: "none",
                      padding: "12px 35px",
                      borderRadius: `${news?.styles?.button?.borderRadius || 5}px`,
                      fontSize: `${news?.styles?.button?.fontSize || 0.9}rem`,
                      fontWeight: "600",
                      fontFamily: news?.styles?.button?.fontFamily || "Open Sans, sans-serif",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      letterSpacing: "0.5px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#4a5a47";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = news?.styles?.button?.backgroundColor || "#5a6c57";
                    }}
                    onClick={() => {
                      navigate('/news');
                    }}
                  >
                    {news?.buttonText || "DAHA FAZLA BİLGİ EDİNİN"}
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