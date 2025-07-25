import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header>
      {/* ABAD'ın gerçek tasarımına uygun header */}
      <Navbar
        className="abad-header shadow-sm"
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e9ecef',
          padding: '1rem 0'
        }}
      >
        <Container>
          {/* ABAD Logosu */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img 
              src="/src/assets/images/abad-logo-seffaf-buyuk.png" 
              alt="ABAD Logo" 
              style={{
                height: '60px',
                width: 'auto'
              }}
            />
            <div className="ms-3">
              <div 
                style={{
                  color: '#00baa3',
                  fontWeight: 'bold',
                  fontSize: '1.4rem',
                  lineHeight: '1.2'
                }}
              >
                ABAD
              </div>
              <div 
                style={{
                  color: '#727475',
                  fontSize: '0.85rem',
                  lineHeight: '1.2'
                }}
              >
                Anadolu Bilgelerini
                <br />
                Araştırma Derneği
              </div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            style={{
              borderColor: '#00baa3',
              color: '#00baa3'
            }}
          />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                as={Link}
                to="/"
                style={{
                  color: '#727475',
                  fontWeight: '500',
                  fontSize: '1rem',
                  marginRight: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00baa3'}
                onMouseLeave={(e) => e.target.style.color = '#727475'}
              >
                Ana Sayfa
              </Nav.Link>
              
              <Nav.Link
                as={Link}
                to="/activities"
                style={{
                  color: '#727475',
                  fontWeight: '500',
                  fontSize: '1rem',
                  marginRight: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00baa3'}
                onMouseLeave={(e) => e.target.style.color = '#727475'}
              >
                Faaliyetler
              </Nav.Link>
              
              <Nav.Link
                as={Link}
                to="/news"
                style={{
                  color: '#727475',
                  fontWeight: '500',
                  fontSize: '1rem',
                  marginRight: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00baa3'}
                onMouseLeave={(e) => e.target.style.color = '#727475'}
              >
                Haberler
              </Nav.Link>
              
              <Nav.Link
                as={Link}
                to="/map"
                style={{
                  color: '#727475',
                  fontWeight: '500',
                  fontSize: '1rem',
                  marginRight: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#00baa3'}
                onMouseLeave={(e) => e.target.style.color = '#727475'}
              >
                Hakkımızda
              </Nav.Link>
              
              {/* ABAD Dükkan Butonu */}
              <Button
                as={Link}
                to="/shop"
                variant="outline-warning"
                className="me-3"
                style={{
                  borderColor: '#ebc858',
                  color: '#ebc858',
                  fontWeight: '600',
                  padding: '8px 20px',
                  borderRadius: '25px',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ebc858';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#ebc858';
                }}
              >
                <i className="fas fa-store me-2"></i>
                Dükkan
              </Button>
              
              {/* ABAD Bağış Butonu */}
              <Button
                as={Link}
                to="/certificate"
                className="abad-donate-btn"
                style={{
                  backgroundColor: '#00baa3',
                  borderColor: '#00baa3',
                  color: '#ffffff',
                  fontWeight: '600',
                  padding: '10px 25px',
                  borderRadius: '25px',
                  boxShadow: '0 4px 15px rgba(0,186,163,0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#008c7a';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0,186,163,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#00baa3';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0,186,163,0.3)';
                }}
              >
                <i className="fas fa-heart me-2"></i>
                Bağış Yapın
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;