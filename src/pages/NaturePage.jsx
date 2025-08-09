import React from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";

const NaturePage = () => {
  return (
    <div className="nature-page bg-white">
      <Header />
      
      <main className="main-content">
        <Container fluid className="px-5" style={{ maxWidth: "1400px" }}>
          
          {/* İlk Satır - Başlık ve Açıklama */}
          <Row className="py-5 mb-5">
            {/* Sol Taraf - Ana Başlık */}
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h1 
                  className="fw-bold mb-0"
                  style={{
                    fontSize: "4rem",
                    color: "#5a6c57",
                    fontFamily: "Open Sans, sans-serif",
                    lineHeight: "1.2",
                    textTransform: "uppercase",
                    letterSpacing: "2px"
                  }}
                >
                  BİRLİKTE<br />
                  YAPIYORUZ
                </h1>
              </div>
            </Col>

            {/* Sağ Taraf - Açıklama */}
            <Col md={6}>
              <div className="ps-4">
                <h2 
                  className="fw-bold mb-4"
                  style={{
                    fontSize: "2.2rem",
                    color: "#5a6c57",
                    fontFamily: "Open Sans, sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}
                >
                  DOĞA FAALİYETLERİMİZ
                </h2>
                
                <p 
                  className="mb-4"
                  style={{
                    fontSize: "1rem",
                    color: "#333",
                    fontFamily: "Open Sans, sans-serif",
                    lineHeight: "1.8"
                  }}
                >
                  Doğayı korumak Babalarımızı yeryüzünde iz bırakır ağaçlar, dağlar, tarih üreten kuşlar ve ormanlarımızı geliştiren bu topraklarda ABAD gizemlerini doğa ile birlik edip sıfır atık ve yeşillenmeye yol açar. Türkiye'de sıfır atık ağaçlandırma.
                </p>

                <p 
                  className="mb-0"
                  style={{
                    fontSize: "1rem",
                    color: "#333",
                    fontFamily: "Open Sans, sans-serif",
                    lineHeight: "1.8"
                  }}
                >
                  Tabiatla durumlu halkımız iklimleri, şehirleri iklim araştırmaz olan. İşi topluluğu gözlemleriz yeni dayanışma yaşa çıkarma yön derlenmiş günler ber köklü takım. Türkiye'de küresel coğrafya tek haliyle yaşların ve karakterler Türk ters düşüp.
                </p>
              </div>
            </Col>
          </Row>

          {/* İkinci Satır - Görsel Kutuları */}
          <Row className="pb-5">
            {/* Üst Sol */}
            <Col md={6} lg={3} className="mb-4">
              <div 
                className="position-relative overflow-hidden h-100"
                style={{
                  minHeight: "300px",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src="/src/assets/images/doga-faaliyetleri.jpg"
                  alt="Erzurum Meyve Fidanı Dikimi"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
                <div 
                  className="position-absolute bottom-0 start-0 end-0 p-4"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)",
                    color: "white"
                  }}
                >
                  <h4 
                    className="fw-bold mb-2"
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "Open Sans, sans-serif"
                    }}
                  >
                    Erzurum Meyve Fidanı Dikimi
                  </h4>
                </div>
              </div>
            </Col>

            {/* Üst Sağ */}
            <Col md={6} lg={3} className="mb-4">
              <div 
                className="position-relative overflow-hidden h-100"
                style={{
                  minHeight: "300px",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src="/src/assets/images/square-1.jpg"
                  alt="Doğa Faaliyeti"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
                <div 
                  className="position-absolute bottom-0 start-0 end-0 p-4"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)",
                    color: "white"
                  }}
                >
                  <h4 
                    className="fw-bold mb-2"
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "Open Sans, sans-serif"
                    }}
                  >
                    Doğa Koruma Çalışmaları
                  </h4>
                </div>
              </div>
            </Col>

            {/* Alt Sol */}
            <Col md={6} lg={3} className="mb-4">
              <div 
                className="position-relative overflow-hidden h-100"
                style={{
                  minHeight: "300px",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src="/src/assets/images/square-2.jpg"
                  alt="ABAD Meyve Fidanları Gazi Üniversitesi Gölbaşı Yerleşkesinde Toprağa Kavuştu"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
                <div 
                  className="position-absolute bottom-0 start-0 end-0 p-4"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)",
                    color: "white"
                  }}
                >
                  <h4 
                    className="fw-bold mb-2"
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "1.4"
                    }}
                  >
                    ABAD Meyve Fidanları Gazi Üniversitesi Gölbaşı Yerleşkesinde Toprağa Kavuştu
                  </h4>
                </div>
              </div>
            </Col>

            {/* Alt Sağ */}
            <Col md={6} lg={3} className="mb-4">
              <div 
                className="position-relative overflow-hidden h-100"
                style={{
                  minHeight: "300px",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src="/src/assets/images/square-3.jpg"
                  alt="ABAD'dan Yeşillendirme Projesi"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
                <div 
                  className="position-absolute bottom-0 start-0 end-0 p-4"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)",
                    color: "white"
                  }}
                >
                  <h4 
                    className="fw-bold mb-2"
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "Open Sans, sans-serif"
                    }}
                  >
                    ABAD'dan Yeşillendirme Projesi
                  </h4>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
      </main>
    </div>
  );
};

export default NaturePage;