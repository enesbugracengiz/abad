import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MapPage = () => {
  return (
    <div className="map-page bg-white vh-100">
      <Container fluid className="h-100 position-relative" style={{ maxWidth: "1400px" }}>
        {/* Header - Üst Kısım */}
        <Row className="py-3">
          {/* ABAD Logo - Sol Üst */}
          <Col xs="auto">
            <Link to="/" className="text-decoration-none">
              <img
                src="/src/assets/harita/web-logo-yazili-512-x-512-piksel.png"
                alt="ABAD Logo"
                style={{ height: "80px", width: "auto" }}
                className="img-fluid"
              />
            </Link>
          </Col>

          {/* Navigation - Orta */}
          <Col className="d-flex justify-content-center align-items-center">
            <Nav className="gap-4">
              <Link
                to="/"
                className="text-decoration-none fw-normal"
                style={{
                  color: "#2c5aa0",
                  fontSize: "18px",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                ABAD
              </Link>
              <Link
                to="/activities"
                className="text-decoration-none fw-normal"
                style={{
                  color: "#2c5aa0",
                  fontSize: "18px",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                Harekete Geçin
              </Link>
              <Link
                to="/kindergarten"
                className="text-decoration-none fw-normal"
                style={{
                  color: "#2c5aa0",
                  fontSize: "18px",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                Yunus Emre Anaokulu
              </Link>
            </Nav>
          </Col>

          {/* Phone & Action Buttons - Sağ */}
          <Col xs="auto" className="d-flex flex-column align-items-end gap-2">
            {/* Phone Number */}
            <div
              className="text-primary fw-normal"
              style={{
                color: "#2c5aa0 !important",
                fontSize: "16px",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              0212 880 00 00
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-2 align-items-center">
              {/* Dükkan Button */}
              <div className="d-flex align-items-center gap-1">
                <img
                  src="/src/assets/genel/arayuzver2-18.png"
                  alt="Dükkan İkonu"
                  style={{ width: "20px", height: "20px" }}
                />
                <Link
                  to="/shop"
                  className="btn text-white text-decoration-none"
                  style={{
                    backgroundColor: "#2B5F7F",
                    borderRadius: "12px",
                    fontSize: "14px",
                    padding: "6px 12px",
                  }}
                >
                  Dükkan
                </Link>
              </div>

              {/* Bağış Yapın Button */}
              <div className="d-flex align-items-center gap-1">
                <img
                  src="/src/assets/genel/arayuzver2-17.png"
                  alt="Bağış İkonu"
                  style={{ width: "20px", height: "20px" }}
                />
                <Link
                  to="/donate"
                  className="btn text-white text-decoration-none"
                  style={{
                    backgroundColor: "#2E8B57",
                    borderRadius: "12px",
                    fontSize: "14px",
                    padding: "6px 12px",
                  }}
                >
                  Bağış Yapın
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        {/* Main Content - Harita ve İkonlar */}
        <Row className="flex-grow-1 justify-content-center align-items-center">
          <Col lg={10} xl={8} className="text-center">
            {/* Turkey Map */}
            <div className="mb-4">
              <img
                src="/src/assets/harita/turkey-map.png"
                alt="Türkiye Faaliyetler Haritası"
                className="img-fluid"
                style={{ maxWidth: "700px", width: "100%" }}
                onError={(e) => {
                  console.error("Harita görseli yüklenemedi:", e.target.src);
                  e.target.style.display = "none";
                }}
                onLoad={() => {
                  console.log("Harita görseli başarıyla yüklendi");
                }}
              />
            </div>

            {/* Category Icons */}
            <Row className="justify-content-center g-3">
              {/* Grup */}
              <Col xs={3} sm={2} className="d-flex flex-column align-items-center">
                <div
                  className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src="/src/assets/harita/arayuzver2-11.png"
                    alt="Grup"
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>
                <div
                  className="btn btn-sm text-white rounded-pill fw-medium"
                  style={{
                    backgroundColor: "#c67366",
                    fontSize: "14px",
                    minWidth: "60px",
                  }}
                >
                  1455
                </div>
              </Col>

              {/* Ağaç */}
              <Col xs={3} sm={2} className="d-flex flex-column align-items-center">
                <div
                  className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src="/src/assets/harita/arayuzver2-10.png"
                    alt="Ağaç"
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>
                <div
                  className="btn btn-sm text-white rounded-pill fw-medium"
                  style={{
                    backgroundColor: "#c67366",
                    fontSize: "14px",
                    minWidth: "60px",
                  }}
                >
                  1455
                </div>
              </Col>

              {/* Kitap */}
              <Col xs={3} sm={2} className="d-flex flex-column align-items-center">
                <div
                  className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src="/src/assets/harita/arayuzver2-09.png"
                    alt="Kitap"
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>
                <div
                  className="btn btn-sm text-white rounded-pill fw-medium"
                  style={{
                    backgroundColor: "#c67366",
                    fontSize: "14px",
                    minWidth: "60px",
                  }}
                >
                  1455
                </div>
              </Col>

              {/* Kalp */}
              <Col xs={3} sm={2} className="d-flex flex-column align-items-center">
                <div
                  className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src="/src/assets/harita/arayuzver2-08.png"
                    alt="Kalp"
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>
                <div
                  className="btn btn-sm text-white rounded-pill fw-medium"
                  style={{
                    backgroundColor: "#c67366",
                    fontSize: "14px",
                    minWidth: "60px",
                  }}
                >
                  1455
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MapPage;
