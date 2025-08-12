import React from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";

const NewsPageNew = () => {
  return (
    <div className="news-page bg-white">
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
                  BİZDEN<br />
                  HABERLER
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
                  FAALİYETLERİMİZ VE PROJELER
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
                  ABAD olarak toplumsal sorumluluk projelerimiz, eğitim faaliyetlerimiz ve kültürel etkinliklerimizle ilgili son gelişmeleri sizlerle paylaşıyoruz. Gönüllülerimizin katılımıyla gerçekleştirdiğimiz projeler ve Türkiye'nin çeşitli bölgelerindeki çalışmalarımız hakkında detaylı bilgi edinin.
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
                  Eğitimden çevre korumaya, kültürden sosyal yardımlaşmaya kadar birçok alanda gerçekleştirdiğimiz çalışmalarımızı takip ederek bizlerle bu anlamlı yolculukta yer alabilirsiniz.
                </p>
              </div>
            </Col>
          </Row>

          {/* İkinci Satır - Haber Kutuları */}
          <div className="pb-5">
            {/* İlk Satır */}
            <Row className="mb-3">
              {/* Sol tarafta büyük haber */}
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
                    src="/src/assets/images/YUNUS-EMRE-ANAOKULU.jpg"
                    alt="Yunus Emre Anaokulu Projesi"
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
                      Yunus Emre Anaokulu Projesi İçin Sakarya Valisi Yaşar Karadeniz'i Ziyaret Ettik
                    </h4>
                  </div>
                </div>
              </Col>

              {/* Sağ tarafta 2x2 küçük haberler */}
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
                        src="/src/assets/images/blog-1.jpg"
                        alt="Kitap Bağışı"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                      <div 
                        className="position-absolute bottom-0 start-0 end-0 p-2"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                          color: "white"
                        }}
                      >
                        <h6 
                          className="fw-bold mb-0"
                          style={{
                            fontSize: "0.9rem",
                            fontFamily: "Open Sans, sans-serif"
                          }}
                        >
                          Adıyaman Bölükyayla Ortaokulu Kütüphanesine Kitaplarını Gönderdik
                        </h6>
                      </div>
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
                        src="/src/assets/images/blog-2.jpg"
                        alt="Kıyafet Yardımı"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                      <div 
                        className="position-absolute bottom-0 start-0 end-0 p-2"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                          color: "white"
                        }}
                      >
                        <h6 
                          className="fw-bold mb-0"
                          style={{
                            fontSize: "0.9rem",
                            fontFamily: "Open Sans, sans-serif"
                          }}
                        >
                          Eskişehir'de Hassas Grupları Çocuklarımıza Kitap, Kıyafet, İhtiyaç Malzemelerini Gönderdik
                        </h6>
                      </div>
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
                        src="/src/assets/images/blog-3-1.jpg"
                        alt="Fidan Dikimi"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                      <div 
                        className="position-absolute bottom-0 start-0 end-0 p-2"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                          color: "white"
                        }}
                      >
                        <h6 
                          className="fw-bold mb-0"
                          style={{
                            fontSize: "0.9rem",
                            fontFamily: "Open Sans, sans-serif"
                          }}
                        >
                          Erzurum Meyve Fidanı Dikimi
                        </h6>
                      </div>
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
                        src="/src/assets/images/blog-5-1.jpg"
                        alt="Kıyafet Yardımı"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                      <div 
                        className="position-absolute bottom-0 start-0 end-0 p-2"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                          color: "white"
                        }}
                      >
                        <h6 
                          className="fw-bold mb-0"
                          style={{
                            fontSize: "0.9rem",
                            fontFamily: "Open Sans, sans-serif"
                          }}
                        >
                          Hatay'da 300 Çocuğumuza Yazlık Kıyafetlerini Gönderdik
                        </h6>
                      </div>
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
                      ABAD Meyve Fidanları Gazi Üniversitesi Gölbaşı Yerleşkesinde Toprağa Kavuştu
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
                    src="/src/assets/images/blog-6.jpg"
                    alt="Genel Kurul"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div 
                    className="position-absolute bottom-0 start-0 end-0 p-3"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      color: "white"
                    }}
                  >
                    <h5 
                      className="fw-bold mb-0"
                      style={{
                        fontSize: "1.1rem",
                        fontFamily: "Open Sans, sans-serif"
                      }}
                    >
                      Genel Kurul İlanı 2023
                    </h5>
                  </div>
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
                      Yunus Emre Hikaye Yarışması
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
                      ABAD'ın Fidanları Serhadde de Ulaştı
                    </h5>
                  </div>
                </div>
              </Col>

              {/* Ortada görsel */}
              <Col md={3} className="mb-3">
                <div 
                  className="position-relative overflow-hidden"
                  style={{
                    height: "180px",
                    borderRadius: "15px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <img
                    src="/src/assets/images/blog-11.jpg"
                    alt="Fidan Dikimi"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div 
                    className="position-absolute bottom-0 start-0 end-0 p-2"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      color: "white"
                    }}
                  >
                    <h6 
                      className="fw-bold mb-0"
                      style={{
                        fontSize: "0.9rem",
                        fontFamily: "Open Sans, sans-serif"
                      }}
                    >
                      Ankara Meyve Fidanı Dikimi
                    </h6>
                  </div>
                </div>
              </Col>

              {/* Sağda büyük görsel */}
              <Col md={6} className="mb-3">
                <div 
                  className="position-relative overflow-hidden"
                  style={{
                    height: "180px",
                    borderRadius: "15px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <img
                    src="/src/assets/images/blog-12.jpg"
                    alt="ABAD'dan Minik Fidanlara Cansuyu"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div 
                    className="position-absolute bottom-0 start-0 end-0 p-3"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      color: "white"
                    }}
                  >
                    <h4 
                      className="fw-bold mb-1"
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
            </Row>
          </div>

        </Container>
      </main>
    </div>
  );
};

export default NewsPageNew;