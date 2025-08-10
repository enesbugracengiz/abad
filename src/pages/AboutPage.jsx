import React from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div className="about-page bg-white">
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
                  HAKKIMIZDA
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
                  14 Kasım 2019 tarihinde Üsküdar'da kurulan Anadolu Bilgelerini Araştırma Derneği, Anadolu kültür coğrafyasının unutulmuş değerlerini keşfetmek, geleneksel değerlerle evrensel kültür değerlerini buluşturmak ve Anadolu'nun tarım ve çevre geleneklerini öğrenmek amacıyla faaliyet göstermektedir.
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
                  Sözlü gelenekler, el sanatları, sosyal uygulamalar ve çevre bilgisi dahil olmak üzere Anadolu kültürünü kapsamlı bir şekilde anlayarak, çevreye duyarlı bir etik geliştirmek ve bu değerleri genç nesillere aktarmak için milli ve milletlerarası projeler üretiyoruz.
                </p>
              </div>
            </Col>
          </Row>

          {/* İkinci Satır - Görsel Kutuları */}
          <div className="pb-5">
            {/* İlk Satır */}
            <Row className="mb-3">
              {/* Sol tarafta büyük görsel */}
              <Col md={6} className="mb-3">
                <div 
                  className="position-relative overflow-hidden"
                  style={{
                    height: "320px",
                    borderRadius: "15px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <img
                    src="/src/assets/images/parallax-1.jpg"
                    alt="Kırsal Alan Kitap Kampanyaları"
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
                      Kırsal Alan Kitap Kampanyaları
                    </h4>
                  </div>
                </div>
              </Col>

              {/* Sağ tarafta 2x2 küçük görseller */}
              <Col md={6}>
                <Row>
                  <Col xs={6} className="mb-3">
                    <div 
                      className="position-relative overflow-hidden"
                      style={{
                        height: "155px",
                        borderRadius: "15px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                      }}
                    >
                      <img
                        src="/src/assets/images/focus-1.jpg"
                        alt="Gençlik Edebiyat Yarışmaları"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                  <Col xs={6} className="mb-3">
                    <div 
                      className="position-relative overflow-hidden"
                      style={{
                        height: "155px",
                        borderRadius: "15px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                      }}
                    >
                      <img
                        src="/src/assets/images/focus-2.jpg"
                        alt="Kültürel ve Eğitim Etkinlikleri"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div 
                      className="position-relative overflow-hidden"
                      style={{
                        height: "155px",
                        borderRadius: "15px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                      }}
                    >
                      <img
                        src="/src/assets/images/focus-3.jpg"
                        alt="Ağaç ve Meyve Fidanı Dikimi"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div 
                      className="position-relative overflow-hidden"
                      style={{
                        height: "155px",
                        borderRadius: "15px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                      }}
                    >
                      <img
                        src="/src/assets/images/focus-4.jpg"
                        alt="Kültür Turları"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* İkinci Satır */}
            <Row className="mb-3">
              {/* Sol tarafta yazılı yeşil alan */}
              <Col md={4} className="mb-3">
                <div 
                  className="position-relative overflow-hidden d-flex align-items-center justify-content-center"
                  style={{
                    height: "200px",
                    backgroundColor: "#6B8E6B",
                    borderRadius: "15px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="text-center text-white p-4">
                    <h4 
                      className="fw-bold mb-2"
                      style={{
                        fontSize: "1.3rem",
                        fontFamily: "Open Sans, sans-serif",
                        lineHeight: "1.3"
                      }}
                    >
                      Gençlik Edebiyat ve Kültür Yarışmaları
                    </h4>
                  </div>
                </div>
              </Col>

              {/* Ortada büyük görsel */}
              <Col md={5} className="mb-3">
                <div 
                  className="position-relative overflow-hidden"
                  style={{
                    height: "200px",
                    borderRadius: "15px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <img
                    src="/src/assets/images/cause-1.jpg"
                    alt="Kültürel Miras Keşfi"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Col>

              {/* Sağda küçük yazılı alan */}
              <Col md={3} className="mb-3">
                <div 
                  className="position-relative overflow-hidden d-flex align-items-center justify-content-center"
                  style={{
                    height: "200px",
                    backgroundColor: "#6B8E6B",
                    borderRadius: "15px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="text-center text-white p-3">
                    <h5 
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "1.1rem",
                        fontFamily: "Open Sans, sans-serif",
                        lineHeight: "1.3"
                      }}
                    >
                      Kültür Turları
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Üçüncü Satır */}
            <Row>
              {/* Sol tarafta yazılı yeşil alan */}
              <Col md={3} className="mb-3">
                <div 
                  className="position-relative overflow-hidden d-flex align-items-center justify-content-center"
                  style={{
                    height: "180px",
                    backgroundColor: "#6B8E6B",
                    borderRadius: "15px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="text-center text-white p-3">
                    <h5 
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "1.1rem",
                        fontFamily: "Open Sans, sans-serif",
                        lineHeight: "1.3"
                      }}
                    >
                      15.000 Fidan Dikildi
                    </h5>
                  </div>
                </div>
              </Col>

              {/* Ortada yazılı yeşil alan */}
              <Col md={3} className="mb-3">
                <div 
                  className="position-relative overflow-hidden d-flex align-items-center justify-content-center"
                  style={{
                    height: "180px",
                    backgroundColor: "#6B8E6B",
                    borderRadius: "15px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="text-center text-white p-3">
                    <h5 
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "1.1rem",
                        fontFamily: "Open Sans, sans-serif",
                        lineHeight: "1.3"
                      }}
                    >
                      4.800 Kitap Dağıtıldı
                    </h5>
                  </div>
                </div>
              </Col>

              {/* Sağda büyük yazılı yeşil alan */}
              <Col md={6} className="mb-3">
                <div 
                  className="position-relative overflow-hidden d-flex align-items-center justify-content-center"
                  style={{
                    height: "180px",
                    backgroundColor: "#6B8E6B",
                    borderRadius: "15px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="text-center text-white p-4">
                    <h4 
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "1.3rem",
                        fontFamily: "Open Sans, sans-serif",
                        lineHeight: "1.3"
                      }}
                    >
                      2.300 Çocuğa Ulaştık - 80 Kurum İş Birliği
                    </h4>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

        </Container>
      </main>
    </div>
  );
};

export default AboutPage;