import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ActivitiesPage = () => {
  const activities = [
    {
      id: 1,
      title: "Doğa Faaliyetleri",
      description:
        "Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi Rektör Yardımcısı Prof. Dr. Yücel Gelişli...",
      image: "/nature-activities.jpg",
      color: "success",
    },
    {
      id: 2,
      title: "Çocuk ve Genç Faaliyetleri",
      description:
        "Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi Rektör Yardımcısı Prof. Dr. Yücel Gelişli...",
      image: "/children-activities.jpg",
      color: "warning",
    },
    {
      id: 3,
      title: "Eğitim ve Seminer Faaliyetleri",
      description:
        "Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi Rektör Yardımcısı Prof. Dr. Yücel Gelişli...",
      image: "/education-activities.jpg",
      color: "info",
    },
  ];

  return (
    <div className="activities-page">
      {/* Hero Section */}
      <section className="activities-hero-section py-5">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={12} className="text-center">
              <div className="hero-badge mb-4">
                <span className="badge bg-warning px-4 py-2 fs-5">
                  🎯 HEDEF
                </span>
              </div>
              <h1 className="display-2 fw-bold text-white mb-4 activities-title">
                Faaliyetlerimiz
              </h1>
              <p className="lead text-white-50 mb-4 fs-3">
                ABAD olarak topluma ve çevreye fayda sağlayan çeşitli
                faaliyetler düzenlemekteyiz.
              </p>
              <div className="stats-row d-flex justify-content-center gap-4 mt-5">
                <div className="stat-item text-center">
                  <h3 className="text-warning fw-bold mb-1">3</h3>
                  <span className="text-white-50">Kategori</span>
                </div>
                <div className="stat-item text-center">
                  <h3 className="text-warning fw-bold mb-1">127</h3>
                  <span className="text-white-50">Etkinlik</span>
                </div>
                <div className="stat-item text-center">
                  <h3 className="text-warning fw-bold mb-1">2340</h3>
                  <span className="text-white-50">Katılımcı</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Activities Grid */}
      <section className="activities-grid py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <div className="section-header">
                <span className="text-success fw-bold">🎯 ALANLAR</span>
                <h2 className="display-5 fw-bold text-dark mt-2">
                  Faaliyet Kategorileri
                </h2>
                <div className="divider mx-auto my-3"></div>
              </div>
            </Col>
          </Row>
          <Row>
            {activities.map((activity) => (
              <Col lg={4} md={6} key={activity.id} className="mb-4">
                <Card className="h-100 shadow-lg border-0 activity-card-modern">
                  <div
                    className="card-image-container"
                    style={{ height: "350px", position: "relative" }}
                  >
                    <div
                      className={`card-image-modern bg-gradient-${activity.color}`}
                      style={{
                        height: "100%",
                        borderRadius: "20px 20px 0 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div className="activity-icon-wrapper">
                        <i
                          className={`fas ${
                            activity.id === 1
                              ? "fa-leaf"
                              : activity.id === 2
                              ? "fa-child"
                              : "fa-graduation-cap"
                          } text-white activity-icon`}
                        ></i>
                      </div>
                      <div className="card-overlay-modern">
                        <h3 className="text-white mb-0 fw-bold">
                          {activity.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <Card.Body className="p-4">
                    <Card.Text className="text-muted mb-4 lh-base">
                      {activity.description}
                    </Card.Text>
                    <Button
                      variant={activity.color}
                      className="w-100 btn-modern"
                      size="lg"
                    >
                      <i className="fas fa-arrow-right me-2"></i>
                      Detayları Gör
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Activity Details */}
      <section className="activity-details py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="text-center mb-5">
                <span className="text-success fw-bold">⭐ AVANTAJLAR</span>
                <h2 className="display-5 fw-bold text-dark mt-2 mb-3">
                  Faaliyetlerimize Katılın
                </h2>
                <p className="lead text-muted">
                  ABAD'ın düzenlediği etkinliklere katılmak için bizimle
                  iletişime geçin.
                </p>
              </div>

              <Row>
                <Col md={4} className="text-center mb-4">
                  <div className="feature-box-modern">
                    <div className="feature-icon-modern bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4">
                      <i
                        className="fas fa-leaf"
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </div>
                    <h4 className="h4 mb-3 text-success fw-bold">Doğa Dostu</h4>
                    <p className="text-muted">
                      Çevre bilinci ile yapılan faaliyetler. Doğayı korumak ve
                      gelecek nesillere temiz bir çevre bırakmak.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="text-center mb-4">
                  <div className="feature-box-modern">
                    <div className="feature-icon-modern bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4">
                      <i
                        className="fas fa-hands-helping"
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </div>
                    <h4 className="h4 mb-3 text-warning fw-bold">
                      Sosyal Sorumluluk
                    </h4>
                    <p className="text-muted">
                      Topluma fayda sağlayan projeler. Birlikte daha güçlü bir
                      toplum inşa etmek için çalışıyoruz.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="text-center mb-4">
                  <div className="feature-box-modern">
                    <div className="feature-icon-modern bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4">
                      <i
                        className="fas fa-graduation-cap"
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </div>
                    <h4 className="h4 mb-3 text-info fw-bold">Eğitim</h4>
                    <p className="text-muted">
                      Bilinçlendirme ve eğitim çalışmaları. Toplumsal
                      farkındalığı artırmak için sürekli eğitim veriyoruz.
                    </p>
                  </div>
                </Col>
              </Row>

              <div className="text-center mt-5">
                <Button
                  variant="success"
                  size="lg"
                  className="px-5 py-3 btn-modern"
                >
                  <i className="fas fa-rocket me-2"></i>
                  Hemen Katıl
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ActivitiesPage;
