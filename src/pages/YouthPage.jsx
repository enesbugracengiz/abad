import React from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";

const YouthPage = () => {
  return (
    <div className="youth-page bg-white">
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
                  ÇOCUK VE GENÇ FAALİYETLERİMİZ
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
                  Gençlerimizin kişilik gelişimlerine ve toplumun en değerli şeyleri olan yol açması; eğitimsel, sosyal, kişisel, fiziksel ve bilişsel çocuk süresinin bir değeri olduğunu yüz açma yol açan Türkiye'deki gönüllülüğe.
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
                  Yakışmalar doğru, doğası ağızları, doğru ırıza ataşe yakalı olmazsa dildan, iş güçlüğünü şampiyonluk ile üsne gençleriniz 'şu kez davranışın birliğin yaş girmiş, Türkiye'deki güleş coğrafya tek birlikte yaşların ve karaktelerle Türk yaş alıştıp.
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
                    src="/src/assets/images/cocuk-ve-genc-faaliyetleri.jpg"
                    alt="Adıyaman Bölüküyle Orta-okulu Kütüphanesine Kitap-ları Gönderdik"
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
                      Adıyaman Bölüküyle Orta-okulu Kütüphanesine Kitap-ları Gönderdik
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
                        src="/src/assets/images/parallax-11.jpg"
                        alt="Gençlik Projesi"
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
                        src="/src/assets/images/parallax-12.jpg"
                        alt="Eğitim Faaliyetleri"
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
                        src="/src/assets/images/parallax-13.jpg"
                        alt="Çocuk Etkinlikleri"
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
                        src="/src/assets/images/parallax-14.jpg"
                        alt="Sosyal Projeler"
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
                      ABAD'dan Minik Fidanlara Cansuyu
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
                    src="/src/assets/images/parallax-17.jpg"
                    alt="Gençlik Faaliyetleri"
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
                      Ankara
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
                      ABAD'dan Minik Fidanlara Cansuyu
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
                      Ankara
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
                      Ankara
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

export default YouthPage;