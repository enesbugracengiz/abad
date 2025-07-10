import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-main py-5">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="footer-brand">
                <div className="footer-logo mb-3">
                  <span className="logo-ab text-success">AB</span>
                  <span className="logo-ad text-primary">AD</span>
                </div>
                <h5 className="text-white mb-3">
                  Anadolu Bilgelerini Araştırma Derneği
                </h5>
                <p className="text-white-50 mb-4">
                  Doğayı korumak, gelecek nesillere yeşil bir dünya bırakmak
                  için çalışıyoruz.
                </p>
                <div className="footer-social">
                  <a href="#" className="social-link me-3">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-link me-3">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link me-3">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={2} md={6} className="mb-4">
              <h6 className="text-white mb-3">Hızlı Linkler</h6>
              <ul className="footer-links">
                <li>
                  <a href="/">Ana Sayfa</a>
                </li>
                <li>
                  <a href="/activities">Faaliyetler</a>
                </li>
                <li>
                  <a href="/certificate">Bağış Yap</a>
                </li>
                <li>
                  <a href="/news">Haberler</a>
                </li>
                <li>
                  <a href="/map">Harita</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h6 className="text-white mb-3">Faaliyetler</h6>
              <ul className="footer-links">
                <li>
                  <a href="/activities">Doğa Faaliyetleri</a>
                </li>
                <li>
                  <a href="/activities">Çocuk & Genç</a>
                </li>
                <li>
                  <a href="/activities">Eğitim & Seminer</a>
                </li>
                <li>
                  <a href="/certificate">Fidan Bağışı</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <h6 className="text-white mb-3">İletişim</h6>
              <div className="footer-contact">
                <div className="contact-item mb-3">
                  <i className="fas fa-phone text-success me-2"></i>
                  <a href="tel:02128800000" className="text-white-50">
                    0212 880 00 00
                  </a>
                </div>
                <div className="contact-item mb-3">
                  <i className="fas fa-envelope text-success me-2"></i>
                  <a href="mailto:info@abad.org.tr" className="text-white-50">
                    info@abad.org.tr
                  </a>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt text-success me-2"></i>
                  <span className="text-white-50">İstanbul, Türkiye</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom py-3">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <p className="mb-0 text-white-50">
                © 2024 ABAD. Tüm hakları saklıdır.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="mb-0 text-white-50">
                <i className="fas fa-heart text-danger me-1"></i>
                Doğa sevgisiyle yapıldı
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
