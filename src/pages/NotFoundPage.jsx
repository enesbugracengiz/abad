import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Container, Row, Col, Button } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <div className="not-found-page bg-white">
      <Header />
      
      <main className="main-content">
        <Container fluid className="px-5" style={{ maxWidth: "1400px" }}>
          
          {/* 404 İçerik */}
          <Row className="py-5 justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
            <Col md={8} lg={6} className="text-center">
              {/* 404 Numarası */}
              <div className="mb-4">
                <h1 
                  className="fw-bold mb-0"
                  style={{
                    fontSize: "8rem",
                    color: "#6B8E6B",
                    fontFamily: "Open Sans, sans-serif",
                    lineHeight: "1",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
                  }}
                >
                  404
                </h1>
              </div>

              {/* Ana Başlık */}
              <h2 
                className="fw-bold mb-4"
                style={{
                  fontSize: "2.5rem",
                  color: "#5a6c57",
                  fontFamily: "Open Sans, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "2px"
                }}
              >
                SAYFA BULUNAMADI
              </h2>

              {/* Açıklama */}
              <p 
                className="mb-5"
                style={{
                  fontSize: "1.2rem",
                  color: "#666",
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: "1.6",
                  maxWidth: "500px",
                  margin: "0 auto 2rem auto"
                }}
              >
                Aradığınız sayfa mevcut değil veya taşınmış olabilir. Bu sayfa henüz hazırlanma aşamasındadır.
              </p>

              {/* Butonlar */}
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/">
                  <Button
                    style={{
                      backgroundColor: "#6B8E6B",
                      border: "none",
                      borderRadius: "25px",
                      padding: "12px 30px",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#5A7B5A";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#6B8E6B";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    Ana Sayfaya Dön
                  </Button>
                </Link>

                <Link to="/about">
                  <Button
                    variant="outline-secondary"
                    style={{
                      border: "2px solid #6B8E6B",
                      color: "#6B8E6B",
                      borderRadius: "25px",
                      padding: "12px 30px",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      transition: "all 0.3s ease",
                      backgroundColor: "transparent"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#6B8E6B";
                      e.target.style.color = "white";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#6B8E6B";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    Hakkımızda
                  </Button>
                </Link>
              </div>

              {/* Dekoratif Element */}
              <div className="mt-5">
                <div 
                  style={{
                    width: "100px",
                    height: "4px",
                    backgroundColor: "#D4A574",
                    margin: "0 auto",
                    borderRadius: "2px"
                  }}
                />
              </div>

              {/* ABAD Logosu */}
              <div className="mt-4">
                <img
                  src="/src/assets/images/abad-logo-seffaf-buyuk.png"
                  alt="ABAD Logo"
                  style={{ 
                    height: "80px", 
                    opacity: "0.6",
                    filter: "grayscale(20%)"
                  }}
                />
              </div>

              {/* Alt Açıklama */}
              <p 
                className="mt-4 mb-0"
                style={{
                  fontSize: "0.9rem",
                  color: "#999",
                  fontFamily: "Open Sans, sans-serif",
                  fontStyle: "italic"
                }}
              >
                Bu sayfa yakında sizlerle buluşacak. Gelişmelerimizi takip etmeyi unutmayın.
              </p>
            </Col>
          </Row>

        </Container>
      </main>
    </div>
  );
};

export default NotFoundPage;