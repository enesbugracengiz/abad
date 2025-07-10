import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section-main py-5">
        <Container>
          <Row className="align-items-center min-vh-75">
            <Col lg={6}>
              <div className="hero-content">
                <div className="hero-badge mb-3">
                  <span className="badge bg-success px-3 py-2 fs-6">
                    🌱 YEŞİL PROJE
                  </span>
                </div>
                <h1 className="display-3 fw-bold text-white mb-4">
                  ÖNE ÇIKAN PROJELER
                </h1>
                <h2 className="h2 text-warning mb-4">
                  ABAD'ın Fidanları
                  <br />
                  Gazi'nin Toprağı ile Buluşuyor
                </h2>
                <p className="lead text-white-50 mb-4">
                  Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine ABAD
                  Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi
                  Rektör Yardımcısı Prof. Dr. Yücel Gelişli, Yabancı Diller
                  Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın Güngör, Sağlık
                  Hizmetleri Meslek Yüksekokulu Müdürü Doç. Dr. Hakan Tekedere,
                  Müdür...
                </p>
                <Button
                  as={Link}
                  to="/certificate"
                  variant="warning"
                  size="lg"
                  className="px-5 py-3 fw-bold"
                >
                  DAHA FAZLA BİLGİ EDİNİN
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero-image">
                <div className="hero-image-wrapper">
                  <div
                    className="hero-placeholder bg-gradient rounded-3 shadow-lg"
                    style={{ height: "450px" }}
                  >
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <div className="text-center">
                        <i
                          className="fas fa-seedling text-success mb-3"
                          style={{ fontSize: "4rem" }}
                        ></i>
                        <h4 className="text-white">Proje Görseli</h4>
                        <p className="text-white-50">
                          Fidan Dikimi & Doğa Projeleri
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects py-5 bg-light">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-5">
              <div className="section-header">
                <span className="text-success fw-bold">🌟 PROJELER</span>
                <h2 className="display-5 fw-bold text-dark mt-2">
                  ÖNE ÇIKAN PROJELER
                </h2>
                <div className="divider mx-auto my-3"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-lg project-card border-0">
                <div className="project-icon text-center pt-4">
                  <i
                    className="fas fa-seedling text-success"
                    style={{ fontSize: "3rem" }}
                  ></i>
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="text-success fw-bold mb-3">
                    Fidan Dikimi
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine ABAD
                    Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi
                    Rektör Yardımcısı katılım sağladı.
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/activities"
                    variant="success"
                    className="px-4"
                  >
                    Detayları Görüntüle
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-lg project-card border-0">
                <div className="project-icon text-center pt-4">
                  <i
                    className="fas fa-certificate text-warning"
                    style={{ fontSize: "3rem" }}
                  ></i>
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="text-success fw-bold mb-3">
                    e-Sertifikalı Meyve Fidan Bağışları
                  </Card.Title>
                  <Card.Text className="text-muted">
                    "Baban İçin Toprağa Hayat, Gökyüzüne Umut." E-sertifikan
                    Babanın İsmiyle Yeşersin! Özel günlerde anlamlı hediyeler.
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/certificate"
                    variant="warning"
                    className="px-4"
                  >
                    Bağış Yap
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-lg project-card border-0">
                <div className="project-icon text-center pt-4">
                  <i
                    className="fas fa-graduation-cap text-primary"
                    style={{ fontSize: "3rem" }}
                  ></i>
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="text-success fw-bold mb-3">
                    Eğitim Faaliyetleri
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Doğa bilinci, çevre koruma ve sürdürülebilir yaşam
                    konularında eğitim seminerleri ve çocuk-genç programları
                    düzenliyoruz.
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/activities"
                    variant="primary"
                    className="px-4"
                  >
                    Eğitimleri İncele
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
