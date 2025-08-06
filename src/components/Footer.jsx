import { Container, Row, Col } from "react-bootstrap";
import useContent from "../hooks/useContent";

const Footer = () => {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <footer style={{ background: 'linear-gradient(135deg, #727475 0%, #5a5a5a 100%)', minHeight: '200px' }}>
        <Container>
          <div className="text-center py-5">
            <div className="spinner-border text-white" role="status">
              <span className="visually-hidden">Yükleniyor...</span>
            </div>
            <p className="text-white mt-3">Footer yükleniyor...</p>
          </div>
        </Container>
      </footer>
    );
  }

  const footer = content?.footer || {};

  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #727475 0%, #5a5a5a 100%)',
      color: 'white',
      marginTop: '3rem',
      borderTop: '4px solid #00baa3',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <div className="footer-main py-5">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="footer-brand">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="/src/assets/images/abad-logo-seffaf-buyuk.png" 
                    alt="ABAD Logo" 
                    style={{ height: '50px', marginRight: '15px' }}
                  />
                  <div>
                    <div style={{ 
                      color: '#00baa3', 
                      fontWeight: 'bold', 
                      fontSize: '1.5rem',
                      lineHeight: '1.2'
                    }}>
                      ABAD
                    </div>
                    <div style={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      fontSize: '0.75rem',
                      lineHeight: '1.2'
                    }}>
                      Anadolu Bilgelerini<br/>
                      Araştırma Derneği
                    </div>
                  </div>
                </div>
                <p style={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  marginBottom: '1.5rem',
                  lineHeight: '1.5',
                  fontSize: '0.95rem'
                }}>
                  Hiçbir yer, hiçbir gönül çorak kalmasın. Anadolu'nun bilgelerini 
                  gelecek nesillere aktarıyor, doğaya sahip çıkıyoruz.
                </p>
                <div className="footer-social">
                  <a 
                    href="#" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '45px',
                      height: '45px',
                      backgroundColor: 'rgba(0,186,163,0.2)',
                      borderRadius: '50%',
                      color: '#00baa3',
                      textDecoration: 'none',
                      marginRight: '10px',
                      transition: 'all 0.3s ease',
                      border: '2px solid rgba(0,186,163,0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#00baa3';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(0,186,163,0.2)';
                      e.target.style.color = '#00baa3';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="#" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '45px',
                      height: '45px',
                      backgroundColor: 'rgba(235,200,88,0.2)',
                      borderRadius: '50%',
                      color: '#ebc858',
                      textDecoration: 'none',
                      marginRight: '10px',
                      transition: 'all 0.3s ease',
                      border: '2px solid rgba(235,200,88,0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#ebc858';
                      e.target.style.color = '#000';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(235,200,88,0.2)';
                      e.target.style.color = '#ebc858';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href="#" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '45px',
                      height: '45px',
                      backgroundColor: 'rgba(235,137,88,0.2)',
                      borderRadius: '50%',
                      color: '#eb8958',
                      textDecoration: 'none',
                      marginRight: '10px',
                      transition: 'all 0.3s ease',
                      border: '2px solid rgba(235,137,88,0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#eb8958';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(235,137,88,0.2)';
                      e.target.style.color = '#eb8958';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href="#" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '45px',
                      height: '45px',
                      backgroundColor: 'rgba(0,186,163,0.2)',
                      borderRadius: '50%',
                      color: '#00baa3',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '2px solid rgba(0,186,163,0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#00baa3';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(0,186,163,0.2)';
                      e.target.style.color = '#00baa3';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={2} md={6} className="mb-4">
              <h6 style={{ color: '#00baa3', fontWeight: 'bold', marginBottom: '1rem' }}>
                Hızlı Linkler
              </h6>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href="/" 
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00baa3'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    Ana Sayfa
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href="/activities" 
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00baa3'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    Faaliyetler
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href="/certificate" 
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ebc858'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    Bağış Yap
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href="/news" 
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00baa3'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    Haberler
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href="/map" 
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00baa3'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    Hakkımızda
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h6 style={{ color: '#ebc858', fontWeight: 'bold', marginBottom: '1rem' }}>
                Faaliyet Alanları
              </h6>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href="/activities" 
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00baa3'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <i className="fas fa-seedling me-2" style={{ color: '#00baa3' }}></i>
                    Doğa Faaliyetleri
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href="/activities" 
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#eb8958'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <i className="fas fa-child me-2" style={{ color: '#eb8958' }}></i>
                    Çocuk & Genç
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href="/activities" 
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ebc858'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <i className="fas fa-graduation-cap me-2" style={{ color: '#ebc858' }}></i>
                    Eğitim & Seminer
                  </a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href="/certificate" 
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ebc858'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    <i className="fas fa-heart me-2" style={{ color: '#ebc858' }}></i>
                    Bağış Desteği
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h6 style={{ color: '#eb8958', fontWeight: 'bold', marginBottom: '1rem' }}>
                İletişim Bilgileri
              </h6>
              <div className="footer-contact">
                <div 
                  className="contact-item mb-3" 
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <i 
                    className="fas fa-phone me-3" 
                    style={{ color: '#00baa3', fontSize: '1.1rem' }}
                  ></i>
                  <a 
                    href="tel:+902128800000" 
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00baa3'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
{footer.phone || "0212 880 00 00"}
                  </a>
                </div>
                <div 
                  className="contact-item mb-3" 
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <i 
                    className="fas fa-envelope me-3" 
                    style={{ color: '#ebc858', fontSize: '1.1rem' }}
                  ></i>
                  <a 
                    href="mailto:info@abad.org.tr" 
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ebc858'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
                  >
{footer.email || "info@abad.org.tr"}
                  </a>
                </div>
                <div 
                  className="contact-item"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <i 
                    className="fas fa-map-marker-alt me-3" 
                    style={{ color: '#eb8958', fontSize: '1.1rem' }}
                  ></i>
                  <span 
                    style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      fontSize: '0.9rem' 
                    }}
                  >
{footer.address && footer.city ? `${footer.address}, ${footer.city}` : "İstanbul, Türkiye"}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div 
        className="footer-bottom py-3" 
        style={{ 
          backgroundColor: 'rgba(0,0,0,0.3)', 
          borderTop: '1px solid rgba(255,255,255,0.1)' 
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <p 
                className="mb-0" 
                style={{ 
                  color: 'rgba(255,255,255,0.6)', 
                  fontSize: '0.85rem' 
                }}
              >
{footer.copyright || "© 2025 ABAD - Anadolu Bilgelerini Araştırma Derneği. Tüm hakları saklıdır."}
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <p 
                className="mb-0" 
                style={{ 
                  color: 'rgba(255,255,255,0.6)', 
                  fontSize: '0.85rem' 
                }}
              >
                <i className="fas fa-heart me-2" style={{ color: '#eb8958' }}></i>
                Hiçbir yer, hiçbir gönül çorak kalmasın
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
