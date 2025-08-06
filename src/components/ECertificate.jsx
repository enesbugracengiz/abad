import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useContent from "../hooks/useContent";

const ECertificate = () => {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <section className="py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "400px" }}>
        <Container style={{ maxWidth: "1200px" }}>
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Yükleniyor...</span>
            </div>
            <p className="mt-3">E-Sertifika bölümü yükleniyor...</p>
          </div>
        </Container>
      </section>
    );
  }

  const ecertificate = content?.ecertificate || {};
  const backgroundImage = ecertificate.backgroundImage || "/src/assets/genel/arayuzver2-19.png";

  return (
    <section
      className="py-5 position-relative"
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage: `url("${backgroundImage}")`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom",
        backgroundSize: "auto 130px",
        paddingTop: "80px",
        paddingBottom: "200px",
        minHeight: "600px",
      }}
    >
      <Container
        style={{ maxWidth: "1200px", position: "relative", zIndex: 2 }}
      >
        <Row
          className="align-items-center g-5 justify-content-center"
          style={{
            marginBottom: "150px",
            marginLeft: "0",
            marginRight: "0",
          }}
        >
          {/* Sol taraf - Toprak tutan eller görseli ve alıntı */}
          <Col
            lg={6}
            md={8}
            sm={10}
            xs={12}
            className="text-center text-lg-start"
          >
            <div className="position-relative">
              {/* Toprak tutan eller görseli */}
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
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #5a6c57",
                    boxShadow: "0 10px 30px rgba(90, 108, 87, 0.3)",
                  }}
                >
                  <img
                    src={ecertificate.leftSection?.image || "/src/assets/genel/toprak.jpg"}
                    alt={ecertificate.leftSection?.imageAlt || "Toprak tutan eller"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>

              {/* Alıntı metni */}
              <div className="mb-4">
                <h3
                  className="mb-4"
                  style={{
                    fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
                    color: "#5a6c57",
                    fontStyle: "italic",
                    fontFamily: "Georgia, serif",
                    lineHeight: "1.4",
                    fontWeight: "400",
                  }}
                >
{ecertificate.leftSection?.quote?.split(', ').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  )) || (
                    <>
                      "Baban İçin Toprağa Hayat,
                      <br />
                      Gökyüzüne Umut."
                    </>
                  )}
                </h3>

                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#5a6c57",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                >
{ecertificate.leftSection?.subtitle || "E-sertifikan Babanın İsmiyle Yeşersin!"}
                </p>
              </div>
            </div>
          </Col>

          {/* Sağ taraf - e-Sertifikalı başlığı ve sertifika görseli */}
          <Col lg={6} md={8} sm={10} xs={12}>
            <div className="text-center">
              {/* e-Sertifikalı başlığı */}
              <div className="mb-4">
                <div
                  className="d-inline-block px-4 py-2 mb-3"
                  style={{
                    backgroundColor: "#5a6c57",
                    borderRadius: "25px",
                    boxShadow: "0 5px 15px rgba(90, 108, 87, 0.3)",
                  }}
                >
                  <h2
                    className="mb-0"
                    style={{
                      color: "white",
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
{ecertificate.rightSection?.title || "e-Sertifikalı"}
                  </h2>
                </div>

                <h3
                  style={{
                    color: "#5a6c57",
                    fontSize: "1.4rem",
                    fontWeight: "500",
                    fontFamily: "Open Sans, sans-serif",
                    marginBottom: "30px",
                  }}
                >
{ecertificate.rightSection?.subtitle || "Meyve Fidan Bağışları"}
                </h3>
              </div>

              {/* Babalar günü sertifikası görseli */}
              <div
                className="position-relative"
                style={{
                  display: "inline-block",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
                  borderRadius: "15px",
                  overflow: "hidden",
                  transform: "rotate(-2deg)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotate(0deg) scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotate(-2deg) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(0, 0, 0, 0.15)";
                }}
              >
                <img
                  src={ecertificate.rightSection?.certificateImage || "/src/assets/genel/babalar-gunu-sertifikasi.jpg"}
                  alt={ecertificate.rightSection?.certificateAlt || "Babalar Günü Meyve Fidanı Bağışı Sertifikası"}
                  style={{
                    width: "350px",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ECertificate;
