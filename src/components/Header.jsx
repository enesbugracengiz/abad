import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Dropdown } from "react-bootstrap";
import { useState } from "react";
import useContent from "../hooks/useContent";
import { useAuth } from "../contexts/AuthContext";
import { FaUser, FaSignOutAlt, FaUserCog } from "react-icons/fa";

const Header = () => {
  const { content, loading } = useContent();
  const { isAuthenticated, user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [showFaaliyetSubMenu, setShowFaaliyetSubMenu] = useState(false);
  const [showHareketeGecinSubMenu, setShowHareketeGecinSubMenu] =
    useState(false);
  const [showNavbarHareketeGecinDropdown, setShowNavbarHareketeGecinDropdown] =
    useState(false);
  const [navbarTimeoutId, setNavbarTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsDropdownOpen(false);
      setShowFaaliyetSubMenu(false); // Alt menüyü de kapat
      setShowHareketeGecinSubMenu(false); // Harekete Geçin alt menüsünü de kapat
    }, 300); // 300ms delay
    setTimeoutId(id);
  };

  const handleFaaliyetClick = (e) => {
    e.preventDefault();
    setShowFaaliyetSubMenu(!showFaaliyetSubMenu);
  };

  const handleHareketeGecinClick = (e) => {
    e.preventDefault();
    setShowHareketeGecinSubMenu(!showHareketeGecinSubMenu);
  };

  const handleNavbarHareketeGecinMouseEnter = () => {
    if (navbarTimeoutId) {
      clearTimeout(navbarTimeoutId);
    }
    setShowNavbarHareketeGecinDropdown(true);
  };

  const handleNavbarHareketeGecinMouseLeave = () => {
    const id = setTimeout(() => {
      setShowNavbarHareketeGecinDropdown(false);
    }, 300); // 300ms delay
    setNavbarTimeoutId(id);
  };

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
    <>
      <header className="bg-white py-4 position-relative">
        <Container fluid className="px-5" style={{ maxWidth: "1400px" }}>
          {/* Telefon numarası - Sağ üst köşe */}
          <Row>
            <Col className="text-end">
              <div
                className="text-primary fw-normal"
                style={{
                  color: content?.header?.styles?.phone?.color || "#2c5aa0",
                  fontSize: `${
                    content?.header?.styles?.phone?.fontSize || 18
                  }px`,
                  fontFamily:
                    content?.header?.styles?.phone?.fontFamily ||
                    "Open Sans, sans-serif",
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
                  src={
                    content?.header?.logo?.src ||
                    "/src/assets/harita/web-logo-yazili-512-x-512-piksel.png"
                  }
                  alt={content?.header?.logo?.alt || "ABAD Logo"}
                  style={{
                    height: `${content?.header?.logo?.height || 180}px`,
                    width: "auto",
                  }}
                  className="img-fluid"
                />
              </Link>
            </Col>

            {/* Orta kısım - Navigasyon linkleri */}
            <Col className="d-flex justify-content-center">
              <Nav className="gap-5">
                <div
                  className="d-flex flex-column align-items-center position-relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={content?.header?.navigation?.home?.path || "/"}
                    className="text-decoration-none fw-normal"
                    style={{
                      color:
                        content?.header?.styles?.navigation?.color || "#2c5aa0",
                      fontSize: `${
                        content?.header?.styles?.navigation?.fontSize || 20
                      }px`,
                      fontFamily:
                        content?.header?.styles?.navigation?.fontFamily ||
                        "Open Sans, sans-serif",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {content?.header?.navigation?.home?.text || "ABAD"}
                  </Link>
                  <div
                    style={{
                      width: "50px",
                      height: "2px",
                      backgroundColor:
                        content?.header?.styles?.navigation?.underlineColor ||
                        "#D4A574",
                    }}
                    className="mt-2"
                  />
                </div>

                <div
                  className="d-flex flex-column align-items-center position-relative"
                  onMouseEnter={handleNavbarHareketeGecinMouseEnter}
                  onMouseLeave={handleNavbarHareketeGecinMouseLeave}
                >
                  <div
                    onClick={handleHareketeGecinClick}
                    className="text-decoration-none fw-normal"
                    style={{
                      color:
                        content?.header?.styles?.navigation?.color || "#2c5aa0",
                      fontSize: `${
                        content?.header?.styles?.navigation?.fontSize || 20
                      }px`,
                      fontFamily:
                        content?.header?.styles?.navigation?.fontFamily ||
                        "Open Sans, sans-serif",
                      transition: "color 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    Harekete Geçin
                  </div>
                  <div
                    style={{
                      width: "130px",
                      height: "2px",
                      backgroundColor:
                        content?.header?.styles?.navigation?.underlineColor ||
                        "#D4A574",
                    }}
                    className="mt-2"
                  />
                </div>

                <div className="d-flex flex-column align-items-center">
                  <Link
                    to=""
                    className="text-decoration-none fw-normal"
                    style={{
                      color:
                        content?.header?.styles?.navigation?.color || "#2c5aa0",
                      fontSize: `${
                        content?.header?.styles?.navigation?.fontSize || 20
                      }px`,
                      fontFamily:
                        content?.header?.styles?.navigation?.fontFamily ||
                        "Open Sans, sans-serif",
                      transition: "color 0.3s ease",
                    }}
                  >
                    Yunus Emre Anaokulu
                  </Link>
                  <div
                    style={{
                      width: "200px",
                      height: "2px",
                      backgroundColor:
                        content?.header?.styles?.navigation?.underlineColor ||
                        "#D4A574",
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
                    backgroundColor:
                      content?.header?.styles?.buttons?.shop?.backgroundColor ||
                      "#2B5F7F",
                    borderRadius: "15px",
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: `${
                      content?.header?.styles?.buttons?.fontSize || 16
                    }px`,
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
                    backgroundColor:
                      content?.header?.styles?.buttons?.donate
                        ?.backgroundColor || "#2E8B57",
                    borderRadius: "15px",
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: `${
                      content?.header?.styles?.buttons?.fontSize || 16
                    }px`,
                    padding: "10px 20px",
                    transition: "all 0.3s ease",
                  }}
                >
                  Bağış Yapın
                </Link>
              </div>

              {/* Kullanıcı Girişi - İkon */}
              <div className="d-flex align-items-center">
                {isAuthenticated && user ? (
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      as="div"
                      className="text-decoration-none d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#2E8B57",
                        borderRadius: "50%",
                        width: "45px",
                        height: "45px",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        border: "2px solid #fff"
                      }}
                      title={`${user.name} ${user.surname}`}
                    >
                      <FaUser 
                        style={{ 
                          color: "white", 
                          fontSize: "16px" 
                        }} 
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu 
                      style={{ 
                        borderRadius: "15px",
                        minWidth: "220px",
                        padding: "10px 0",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
                      }}
                    >
                      <div className="px-3 py-2 border-bottom">
                        <div style={{ fontSize: "0.85rem", color: "#6c757d" }}>Hoşgeldiniz</div>
                        <div style={{ fontWeight: "600", color: "#2c5aa0" }}>
                          {user.name} {user.surname}
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "#6c757d" }}>
                          {user.email}
                        </div>
                      </div>
                      
                      <Dropdown.Item 
                        as={Link} 
                        to="/profile"
                        style={{ 
                          display: "flex", 
                          alignItems: "center", 
                          padding: "8px 16px" 
                        }}
                      >
                        <FaUserCog style={{ marginRight: "8px", color: "#2c5aa0" }} />
                        Profilim
                      </Dropdown.Item>
                      
                      <Dropdown.Divider />
                      
                      <Dropdown.Item 
                        onClick={logout}
                        style={{ 
                          display: "flex", 
                          alignItems: "center", 
                          padding: "8px 16px",
                          color: "#dc3545"
                        }}
                      >
                        <FaSignOutAlt style={{ marginRight: "8px" }} />
                        Çıkış Yap
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Link
                    to="/auth"
                    className="text-decoration-none d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#2c5aa0",
                      borderRadius: "50%",
                      width: "45px",
                      height: "45px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#1e4080";
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#2c5aa0";
                      e.target.style.transform = "scale(1)";
                    }}
                    title="Üye İşlemleri"
                  >
                    <FaUser 
                      style={{ 
                        color: "white", 
                        fontSize: "18px" 
                      }} 
                    />
                  </Link>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Dropdown Menü - Header'ın Dışında */}
      {isDropdownOpen && (
        <div
          className="position-relative shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            width: "100%",
            zIndex: 999,
            backgroundColor: "#D4A574",
            padding: "0",
            borderRadius: "0",
          }}
        >
          {!showFaaliyetSubMenu && !showHareketeGecinSubMenu ? (
            // Ana menü - 3x2 grid
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: "3px",
              }}
            >
              {/* Üst sıra - 3 kart */}
              <Link
                to="#"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "50px 30px",
                  fontSize: "22px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                HAKKIMIZDA
              </Link>

              <div
                className="text-decoration-none"
                onClick={handleFaaliyetClick}
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "50px 30px",
                  fontSize: "22px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                FAALİYET ALANLARIMIZ
              </div>

              <div
                className="text-decoration-none"
                onClick={handleHareketeGecinClick}
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "50px 30px",
                  fontSize: "22px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                HAREKETE GEÇİN
              </div>

              {/* Alt sıra - 3 kart */}
              <Link
                to="#"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "40px 25px",
                  fontSize: "18px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "150px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: "1.3",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                <div style={{ marginBottom: "10px" }}>YUNUS'UN İZİNDE</div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    opacity: "0.9",
                    textTransform: "none",
                  }}
                >
                  Çevrimiçi Atölye Portalı
                </div>
              </Link>

              <Link
                to="#"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "50px 30px",
                  fontSize: "22px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                BLOG
              </Link>

              <Link
                to="#"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "50px 30px",
                  fontSize: "22px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                GÖNÜLLÜ OL
              </Link>
            </div>
          ) : showFaaliyetSubMenu ? (
            // Faaliyet Alt Menüsü - 3 kart yan yana
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "3px",
              }}
            >
              <Link
                to="/nature"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "60px 40px",
                  fontSize: "20px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: "1.4",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                DOĞA FAALİYETLERİMİZ
              </Link>

              <Link
                to="/youth"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "60px 40px",
                  fontSize: "20px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: "1.4",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                ÇOCUK VE GENÇ FAALİYETLERİMİZ
              </Link>

              <Link
                to="#"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "60px 40px",
                  fontSize: "20px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: "1.4",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                EĞİTİM VE SEMİNER FAALİYETLERİMİZ
              </Link>
            </div>
          ) : showHareketeGecinSubMenu ? (
            // Harekete Geçin Alt Menüsü - 3x2 grid (6 kart)
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: "3px",
              }}
            >
              {/* Üst sıra - 3 kart */}
              <Link
                to="#"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "50px 30px",
                  fontSize: "20px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: "1.4",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                PROJEYE DESTEK OL
              </Link>

              <Link
                to="#"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "50px 30px",
                  fontSize: "20px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: "1.4",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                HEDİYE MAĞAZASI
              </Link>

              <Link
                to="#"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "50px 30px",
                  fontSize: "20px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: "1.4",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                BAĞIŞ YAPIN
              </Link>

              {/* Alt sıra - 3 kart */}
              <Link
                to="#"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "35px 25px",
                  fontSize: "18px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "180px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: "1.3",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                <div style={{ marginBottom: "10px" }}>YUNUS'UN İZİNDE</div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    opacity: "0.9",
                    textTransform: "none",
                  }}
                >
                  Çevrimiçi Atölye Portalı
                </div>
              </Link>

              <Link
                to="#"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "40px 20px",
                  fontSize: "18px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: "1.4",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                ANADOLU BAŞTAN BAŞA HEDİYE ET
              </Link>

              <Link
                to="#"
                className="text-decoration-none"
                style={{
                  backgroundColor: "#6B8E6B",
                  color: "white",
                  padding: "50px 30px",
                  fontSize: "20px",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: "700",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: "1.4",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5A7B5A";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#6B8E6B";
                  e.target.style.transform = "scale(1)";
                }}
              >
                GÖNÜLLÜ OL
              </Link>
            </div>
          ) : null}
        </div>
      )}

      {/* Navbar Harekete Geçin Dropdown - Header'ın Dışında */}
      {showNavbarHareketeGecinDropdown && (
        <div
          className="position-relative shadow-lg"
          onMouseEnter={handleNavbarHareketeGecinMouseEnter}
          onMouseLeave={handleNavbarHareketeGecinMouseLeave}
          style={{
            width: "100%",
            zIndex: 999,
            backgroundColor: "#D4A574",
            padding: "0",
            borderRadius: "0",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: "3px",
            }}
          >
            {/* Üst sıra - 3 kart */}
            <Link
              to="#"
              className="text-decoration-none"
              style={{
                backgroundColor: "#6B8E6B",
                color: "white",
                padding: "50px 30px",
                fontSize: "22px",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "700",
                textAlign: "center",
                transition: "all 0.3s ease",
                minHeight: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5A7B5A";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#6B8E6B";
                e.target.style.transform = "scale(1)";
              }}
            >
              PROJEYE DESTEK OL
            </Link>

            <Link
              to="#"
              className="text-decoration-none"
              style={{
                backgroundColor: "#6B8E6B",
                color: "white",
                padding: "50px 30px",
                fontSize: "22px",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "700",
                textAlign: "center",
                transition: "all 0.3s ease",
                minHeight: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5A7B5A";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#6B8E6B";
                e.target.style.transform = "scale(1)";
              }}
            >
              HEDİYE MAĞAZASI
            </Link>

            <Link
              to="#"
              className="text-decoration-none"
              style={{
                backgroundColor: "#6B8E6B",
                color: "white",
                padding: "50px 30px",
                fontSize: "22px",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "700",
                textAlign: "center",
                transition: "all 0.3s ease",
                minHeight: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5A7B5A";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#6B8E6B";
                e.target.style.transform = "scale(1)";
              }}
            >
              BAĞIŞ YAPIN
            </Link>

            {/* Alt sıra - 3 kart */}
            <Link
              to="#"
              className="text-decoration-none"
              style={{
                backgroundColor: "#6B8E6B",
                color: "white",
                padding: "40px 25px",
                fontSize: "18px",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "700",
                textAlign: "center",
                transition: "all 0.3s ease",
                minHeight: "150px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "1.3",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5A7B5A";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#6B8E6B";
                e.target.style.transform = "scale(1)";
              }}
            >
              <div style={{ marginBottom: "10px" }}>YUNUS'UN İZİNDE</div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  opacity: "0.9",
                  textTransform: "none",
                }}
              >
                Çevrimiçi Atölye Portalı
              </div>
            </Link>

            <Link
              to="#"
              className="text-decoration-none"
              style={{
                backgroundColor: "#6B8E6B",
                color: "white",
                padding: "40px 20px",
                fontSize: "18px",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "700",
                textAlign: "center",
                transition: "all 0.3s ease",
                minHeight: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "uppercase",
                letterSpacing: "1px",
                lineHeight: "1.4",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5A7B5A";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#6B8E6B";
                e.target.style.transform = "scale(1)";
              }}
            >
              ANADOLU BAŞTAN BAŞA HEDİYE ET
            </Link>

            <Link
              to="#"
              className="text-decoration-none"
              style={{
                backgroundColor: "#6B8E6B",
                color: "white",
                padding: "50px 30px",
                fontSize: "22px",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "700",
                textAlign: "center",
                transition: "all 0.3s ease",
                minHeight: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5A7B5A";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#6B8E6B";
                e.target.style.transform = "scale(1)";
              }}
            >
              GÖNÜLLÜ OL
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
