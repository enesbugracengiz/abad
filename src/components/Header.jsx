import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import useContent from "../hooks/useContent";

const Header = () => {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <header className="bg-white py-4 shadow-sm">
        <Container fluid className="px-5" style={{ maxWidth: "1400px" }}>
          <div className="text-center py-3">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Yükleniyor...</span>
            </div>
          </div>
        </Container>
      </header>
    );
  }

  return (
    <header className="bg-white py-4 shadow-sm">
      <Container fluid className="px-5" style={{ maxWidth: "1400px" }}>
        {/* Telefon numarası - Sağ üst köşe */}
        <Row>
          <Col className="text-end">
            <div
              className="text-primary fw-normal"
              style={{
                color: "#2c5aa0 !important",
                fontSize: "18px",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              {content?.header?.phone || "0212 880 00 00"}
            </div>
          </Col>
        </Row>

        {/* Ana header içeriği */}
        <Row className="align-items-center mt-4">
          {/* Sol taraf - Logo */}
          <Col xs="auto">
            <Link to="/" className="text-decoration-none">
              <img
                src={content?.header?.logo?.src || "/src/assets/harita/web-logo-yazili-512-x-512-piksel.png"}
                alt={content?.header?.logo?.alt || "ABAD Logo"}
                style={{ height: "180px", width: "auto" }}
                className="img-fluid"
              />
            </Link>
          </Col>

          {/* Orta kısım - Navigasyon linkleri */}
          <Col className="d-flex justify-content-center">
            <Nav className="gap-5">
              <div className="d-flex flex-column align-items-center">
                <Link
                  to={content?.header?.navigation?.home?.path || "/"}
                  className="text-decoration-none fw-normal"
                  style={{
                    color: "#2c5aa0",
                    fontSize: "20px",
                    fontFamily: "Open Sans, sans-serif",
                    transition: "color 0.3s ease",
                  }}
                >
                  {content?.header?.navigation?.home?.text || "ABAD"}
                </Link>
                <div
                  style={{
                    width: "50px",
                    height: "2px",
                    backgroundColor: "#D4A574",
                  }}
                  className="mt-2"
                />
              </div>

              <div className="d-flex flex-column align-items-center">
                <Link
                  to=""
                  className="text-decoration-none fw-normal"
                  style={{
                    color: "#2c5aa0",
                    fontSize: "20px",
                    fontFamily: "Open Sans, sans-serif",
                    transition: "color 0.3s ease",
                  }}
                >
                  Harekete Geçin
                </Link>
                <div
                  style={{
                    width: "130px",
                    height: "2px",
                    backgroundColor: "#D4A574",
                  }}
                  className="mt-2"
                />
              </div>

              <div className="d-flex flex-column align-items-center">
                <Link
                  to=""
                  className="text-decoration-none fw-normal"
                  style={{
                    color: "#2c5aa0",
                    fontSize: "20px",
                    fontFamily: "Open Sans, sans-serif",
                    transition: "color 0.3s ease",
                  }}
                >
                  Yunus Emre Anaokulu
                </Link>
                <div
                  style={{
                    width: "200px",
                    height: "2px",
                    backgroundColor: "#D4A574",
                  }}
                  className="mt-2"
                />
              </div>
            </Nav>
          </Col>

          {/* Sağ taraf - İkonlar ve Butonlar */}
          <Col xs="auto" className="d-flex gap-3 align-items-center">
            {/* Dükkan - İkon ve Buton */}
            <div className="d-flex align-items-center gap-2">
              <img
                src="/src/assets/genel/arayuzver2-18.png"
                alt="Dükkan İkonu"
                style={{ width: "24px", height: "24px" }}
              />
              <Link
                to="/shop"
                className="btn text-white text-decoration-none"
                style={{
                  backgroundColor: "#2B5F7F",
                  borderRadius: "15px",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "16px",
                  padding: "10px 20px",
                  transition: "all 0.3s ease",
                }}
              >
                Dükkan
              </Link>
            </div>

            {/* Bağış - İkon ve Buton */}
            <div className="d-flex align-items-center gap-2">
              <img
                src="/src/assets/genel/arayuzver2-17.png"
                alt="Bağış İkonu"
                style={{ width: "24px", height: "24px" }}
              />
              <Link
                to="/donate"
                className="btn text-white text-decoration-none"
                style={{
                  backgroundColor: "#2E8B57",
                  borderRadius: "15px",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "16px",
                  padding: "10px 20px",
                  transition: "all 0.3s ease",
                }}
              >
                Bağış Yapın
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
