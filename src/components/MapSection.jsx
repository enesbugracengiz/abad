import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MapSection = () => {
  return (
    <section className="bg-white py-5 text-center min-vh-100 d-flex align-items-center">
      <Container style={{ maxWidth: "1200px" }}>
        {/* Türkiye Haritası */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} lg={10} xl={8}>
            <img
              src="/src/assets/harita/turkey-map.png"
              alt="Türkiye Haritası"
              className="img-fluid"
              style={{ maxWidth: "800px", width: "100%" }}
            />
          </Col>
        </Row>

        {/* İkonlar ve Butonlar */}
        <Row className="justify-content-center align-items-center g-4">
          {/* Eğitim ve Seminer İkonu */}
          <Col xs={6} md={3} className="d-flex flex-column align-items-center">
            <div
              className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm mb-3"
              style={{ width: "80px", height: "80px" }}
            >
              <img
                src="/src/assets/harita/arayuzver2-08.png"
                alt="Eğitim ve Seminer"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <button
              className="btn text-white border-0 rounded-pill fw-medium"
              style={{
                backgroundColor: "#c67366",
                padding: "8px 20px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                minWidth: "80px",
                transition: "all 0.3s ease",
              }}
            >
              1455
            </button>
          </Col>

          {/* Doğa Faaliyetleri İkonu */}
          <Col xs={6} md={3} className="d-flex flex-column align-items-center">
            <div
              className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm mb-3"
              style={{ width: "80px", height: "80px" }}
            >
              <img
                src="/src/assets/harita/arayuzver2-10.png"
                alt="Doğa Faaliyetleri"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <button
              className="btn text-white border-0 rounded-pill fw-medium"
              style={{
                backgroundColor: "#c67366",
                padding: "8px 20px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                minWidth: "80px",
                transition: "all 0.3s ease",
              }}
            >
              1455
            </button>
          </Col>

          {/* Kitap/Blog İkonu */}
          <Col xs={6} md={3} className="d-flex flex-column align-items-center">
            <div
              className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm mb-3"
              style={{ width: "80px", height: "80px" }}
            >
              <img
                src="/src/assets/harita/arayuzver2-09.png"
                alt="Blog"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <button
              className="btn text-white border-0 rounded-pill fw-medium"
              style={{
                backgroundColor: "#c67366",
                padding: "8px 20px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                minWidth: "80px",
                transition: "all 0.3s ease",
              }}
            >
              1455
            </button>
          </Col>

          {/* Gönüllü/Bağış İkonu */}
          <Col xs={6} md={3} className="d-flex flex-column align-items-center">
            <div
              className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm mb-3"
              style={{ width: "80px", height: "80px" }}
            >
              <img
                src="/src/assets/harita/arayuzver2-11.png"
                alt="Gönüllü"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <button
              className="btn text-white border-0 rounded-pill fw-medium"
              style={{
                backgroundColor: "#c67366",
                padding: "8px 20px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                minWidth: "80px",
                transition: "all 0.3s ease",
              }}
            >
              1455
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MapSection;