import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ProjectGallery = () => {
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
      <Container
        style={{ maxWidth: "1200px", position: "relative", zIndex: 2 }}
      >
        {/* Ana Grid Layout - 2x3 yapısı */}
        <Row className="g-3" style={{ marginBottom: "150px" }}>
          {/* Üst Satır */}
          <Row className="g-3 mb-3">
            {/* Sol: Orman manzarası */}
            <Col lg={4}>
              <Card
                className="border-0 h-100"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundColor: "white",
                  height: "200px",
                }}
              >
                <Card.Img
                  variant="top"
                  src="/src/assets/images/parallax-1.jpg"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Card>
            </Col>

            {/* Orta: Bizden Haberler başlığı ve metin */}
            <Col lg={4}>
              <Card
                className="border-0 h-100 d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#e8e8e8",
                  height: "200px",
                  padding: "20px",
                }}
              >
                <div className="text-center">
                  <h3
                    style={{
                      color: "#2c5f88",
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif",
                      marginBottom: "15px",
                    }}
                  >
                    Bizden Haberler
                  </h3>
                  <p
                    style={{
                      color: "#333",
                      fontSize: "0.85rem",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "1.4",
                      textAlign: "left",
                      marginBottom: "15px",
                    }}
                  >
                    Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine ABAD
                    Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi
                    Rektör Yardımcısı Prof. Dr. Yücel
                  </p>
                  <p
                    style={{
                      color: "#2c5f88",
                      fontSize: "1rem",
                      fontWeight: "600",
                      textAlign: "left",
                    }}
                  >
                    Devamını OKu
                  </p>
                </div>
              </Card>
            </Col>

            {/* Sağ: Düz yeşil alan */}
            <Col lg={4}>
              <Card
                className="border-0 h-100"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#5a6c57",
                  height: "200px",
                }}
              ></Card>
            </Col>
          </Row>

          {/* Alt Satır */}
          <Row className="g-3">
            {/* Sol: Düz yeşil alan */}
            <Col lg={4}>
              <Card
                className="border-0 h-100"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#5a6c57",
                  height: "200px",
                }}
              ></Card>
            </Col>

            {/* Orta: Metin içeriği */}
            <Col lg={4}>
              <Card
                className="border-0 h-100 d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#e8e8e8",
                  height: "200px",
                  padding: "20px",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#333",
                      fontSize: "0.85rem",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "1.4",
                      textAlign: "left",
                      marginBottom: "15px",
                    }}
                  >
                    Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine ABAD
                    Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi
                    Rektör Yardımcısı Prof. Dr. Yücel
                  </p>
                  <p
                    style={{
                      color: "#2c5f88",
                      fontSize: "1rem",
                      fontWeight: "600",
                      textAlign: "left",
                    }}
                  >
                    Devamını OKu
                  </p>
                </div>
              </Card>
            </Col>

            {/* Sağ: Uzun metin bloğu */}
            <Col lg={4}>
              <Card
                className="border-0 h-100 d-flex flex-column justify-content-between"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#e8e8e8",
                  height: "200px",
                  padding: "20px",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#333",
                      fontSize: "0.8rem",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "1.4",
                      textAlign: "left",
                      marginBottom: "0",
                    }}
                  >
                    Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine ABAD
                    Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi
                    Rektör Yardımcısı Prof. Dr. Yücel Gelişli, Yabancı Diller
                    Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın Güngör, Sağlık
                    Hizmetleri Meslek Yüksekokulu Müdürü Doç. Dr. Hakan
                    Tekedere, Müdür Yardımcısı Dr. Öğr Üyesi Alper Ertem, Sağlık
                    Hizmetleri MYO Bölüm Başkanları Prof. Dr. Meltem Uzunhisar-
                  </p>
                </div>
                <p
                  style={{
                    color: "#2c5f88",
                    fontSize: "1rem",
                    fontWeight: "600",
                    textAlign: "left",
                    marginBottom: "0",
                  }}
                >
                  Devamını OKu
                </p>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>

      {/* Alt boşluk arkaplan görseli için */}
      <div style={{ height: "80px" }}></div>
    </section>
  );
};

export default ProjectGallery;
