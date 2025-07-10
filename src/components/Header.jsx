import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header>
      {/* Üst bar - Telefon numarası */}
      <div className="top-bar bg-abad-green py-2">
        <Container>
          <div className="d-flex justify-content-end">
            <span className="text-white fw-bold">0212 880 00 00</span>
          </div>
        </Container>
      </div>

      {/* Ana Navigation */}
      <Navbar
        className="bg-abad-green shadow-sm"
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
        variant="dark"
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <div className="logo-container">
              <div className="logo-text">
                <span className="logo-ab text-white">AB</span>
                <span className="logo-ad text-white">AD</span>
              </div>
              <div className="logo-subtitle text-white">
                <small>
                  Anadolu Bilgelerini
                  <br />
                  Araştırma Derneği
                </small>
              </div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                as={Link}
                to="/"
                className="text-white fw-semibold me-3"
              >
                ABAD
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/activities"
                className="text-white fw-semibold me-3"
              >
                Harekete Geçin
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/news"
                className="text-white fw-semibold me-3"
              >
                Yunus Emre Anaokulu
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/map"
                className="text-white fw-semibold me-3"
              >
                <span className="border border-white px-3 py-1 rounded bg-white text-primary">
                  Dükkan
                </span>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/certificate"
                className="text-white fw-semibold"
              >
                <span className="border border-warning px-3 py-1 rounded bg-warning text-dark">
                  Bağış Yapın
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
