import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const FeaturedProjects = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage: `url("/src/assets/genel/arayuzver2_calismayuzeyicopy.png"), url("/src/assets/genel/arayuzver2-19.png")`,
        backgroundRepeat: "repeat, repeat-x",
        backgroundPosition: "center, bottom",
        backgroundSize: "auto, auto 130px",
        paddingBottom: "120px",
      }}
    >
      <Container style={{ maxWidth: "1200px" }}>
        <Row className="mb-5">
          <Col>
            <h2
              className="text-center fw-semibold mb-5"
              style={{
                fontSize: "2.5rem",
                color: "#5a6c57",
                letterSpacing: "1px",
              }}
            >
              ÖNE ÇIKAN PROJELER
            </h2>
          </Col>
        </Row>

        <Row className="g-4 align-items-start">
          {/* Sol taraf - Ana proje içeriği */}
          <Col lg={8}>
            <div className="h-100" style={{ position: "relative" }}>
              {/* Arka plan görseli */}
              <div
                style={{
                  position: "absolute",
                  left: "-50px",
                  top: "-60px",
                  width: "200px",
                  height: "200px",
                  backgroundImage: `url("/src/assets/genel/arayuzver2-14.png")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  zIndex: "1",
                }}
              />

              {/* Ana proje içeriği */}
              <div
                className="mb-4"
                style={{ position: "relative", zIndex: "2" }}
              >
                <h3
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "1.8rem",
                    color: "#2c5282",
                    lineHeight: "1.3",
                  }}
                >
                  ABAD'ın Fidanları
                  <br />
                  Gazi'nin Toprağı ile Buluşuyor
                </h3>
                <p
                  className="text-muted mb-5"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    textAlign: "justify",
                  }}
                >
                  Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimi ABAD
                  Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi
                  Rektör Yardımcısı Prof. Dr. Yücel Gelişli, Yabancı Diller
                  Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın Güngör, Sağlık
                  Hizmetleri Meslek Yüksekokulu Müdürü Doç. Dr. Hakan Tekedere,
                  Müdür Yardımcısı...
                </p>
              </div>

              {/* Buton */}
              <div style={{ position: "relative", zIndex: "2" }}>
                <Button
                  className="border-0 text-uppercase fw-semibold"
                  style={{
                    backgroundColor: "#5a6c57",
                    padding: "15px 35px",
                    borderRadius: "0",
                    fontSize: "1rem",
                    letterSpacing: "1px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#4a5a47";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 8px 20px rgba(90, 108, 87, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#5a6c57";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  DAHA FAZLA BİLGİ EDİNİN
                </Button>
              </div>
            </div>
          </Col>

          {/* Sağ taraf - Kartlar */}
          <Col lg={4}>
            <div className="d-flex flex-column gap-3 h-100">
              {/* Üst boş kart */}
              <Card
                className="border-2"
                style={{
                  borderColor: "#5a6c57",
                  borderRadius: "15px",
                  height: "120px",
                }}
              >
                <Card.Body></Card.Body>
              </Card>

              {/* Alt küçük proje kartı */}
              <Card
                className="border-2 h-100"
                style={{
                  borderColor: "#5a6c57",
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Card.Body className="p-4">
                  <Card.Title
                    className="text-center fw-semibold mb-4"
                    style={{
                      fontSize: "1.1rem",
                      color: "#5a6c57",
                      letterSpacing: "0.5px",
                    }}
                  >
                    ÖNE ÇIKAN PROJELER
                  </Card.Title>
                  <Card.Text
                    className="text-center text-muted"
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: "1.5",
                    }}
                  >
                    Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimi ABAD
                    Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
