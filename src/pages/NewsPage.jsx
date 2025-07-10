import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "Gölbaşı Yerleşkesinde Fidan Dikimi Gerçekleştirildi",
      excerpt:
        "Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi Üniversitesi Rektör Yardımcısı Prof. Dr. Yücel Gelişli, Yabancı Diller Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın Güngör...",
      date: "2024-01-15",
      category: "Proje",
      image: "/news-1.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Babalar Günü Meyve Fidanı Bağış Kampanyası Başladı",
      excerpt:
        "Babalar Günü anısına düzenlenen meyve fidanı bağış kampanyası büyük ilgi gördü. Kampanya kapsamında e-sertifika sistemi devreye alındı...",
      date: "2024-01-10",
      category: "Kampanya",
      image: "/news-2.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Eğitim ve Seminer Faaliyetleri Devam Ediyor",
      excerpt:
        "ABAD olarak düzenlediğimiz eğitim ve seminer faaliyetleri yoğun katılımla devam ediyor. Son seminerimizde çevre bilinci konusu işlendi...",
      date: "2024-01-05",
      category: "Eğitim",
      image: "/news-3.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Çocuk ve Genç Faaliyetleri Kış Dönemi Programı",
      excerpt:
        "Kış dönemi çocuk ve genç faaliyetleri programımız hazırlandı. Program kapsamında doğa yürüyüşleri ve fidan bakımı eğitimleri yer alıyor...",
      date: "2024-01-02",
      category: "Faaliyet",
      image: "/news-4.jpg",
      featured: false,
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Proje":
        return "success";
      case "Kampanya":
        return "warning";
      case "Eğitim":
        return "info";
      case "Faaliyet":
        return "primary";
      default:
        return "secondary";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="news-hero-section py-5">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={12} className="text-center">
              <div className="hero-badge mb-4">
                <span className="badge bg-info px-4 py-2 fs-5">
                  📰 HABERLER
                </span>
              </div>
              <h1 className="display-2 fw-bold text-white mb-4 news-title">
                Bizden Haberler
              </h1>
              <p className="lead text-white-50 mb-4 fs-3">
                ABAD'ın faaliyetleri, projeler ve gelişmeler hakkında güncel
                haberler ve duyurular.
              </p>
              <div className="news-stats d-flex justify-content-center gap-4 mt-5">
                <div className="stat-item text-center">
                  <h3 className="text-info fw-bold mb-1">48</h3>
                  <span className="text-white-50">Haber</span>
                </div>
                <div className="stat-item text-center">
                  <h3 className="text-info fw-bold mb-1">4</h3>
                  <span className="text-white-50">Kategori</span>
                </div>
                <div className="stat-item text-center">
                  <h3 className="text-info fw-bold mb-1">2024</h3>
                  <span className="text-white-50">Yılı</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured News */}
      {newsItems.filter((item) => item.featured).length > 0 && (
        <section className="featured-news py-5">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="section-header text-center mb-5">
                  <span className="text-warning fw-bold">⭐ ÖZEL</span>
                  <h2 className="display-6 fw-bold text-dark mt-2">
                    Öne Çıkan Haber
                  </h2>
                  <div className="divider mx-auto my-3"></div>
                </div>
                {newsItems
                  .filter((item) => item.featured)
                  .map((item) => (
                    <Card
                      key={item.id}
                      className="mb-4 shadow-lg border-0 featured-news-card"
                    >
                      <Row className="g-0">
                        <Col md={4}>
                          <div className="featured-news-image">
                            <div className="news-icon-wrapper">
                              <i className="fas fa-newspaper text-primary"></i>
                            </div>
                          </div>
                        </Col>
                        <Col md={8}>
                          <Card.Body className="p-5">
                            <div className="d-flex justify-content-between align-items-start mb-4">
                              <Badge
                                bg={getCategoryColor(item.category)}
                                className="px-3 py-2 fs-6"
                              >
                                <i className="fas fa-tag me-2"></i>
                                {item.category}
                              </Badge>
                              <div className="news-date">
                                <i className="fas fa-calendar-alt text-muted me-2"></i>
                                <small className="text-muted">
                                  {formatDate(item.date)}
                                </small>
                              </div>
                            </div>
                            <Card.Title className="h3 mb-4 text-dark">
                              {item.title}
                            </Card.Title>
                            <Card.Text className="text-muted mb-4 lh-base">
                              {item.excerpt}
                            </Card.Text>
                            <Button
                              variant="success"
                              size="lg"
                              className="btn-modern"
                            >
                              <i className="fas fa-arrow-right me-2"></i>
                              Devamını Oku
                            </Button>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  ))}
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* All News */}
      <section className="all-news py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-header text-center mb-5">
                <span className="text-primary fw-bold">📚 ARSIV</span>
                <h2 className="display-6 fw-bold text-dark mt-2">
                  Tüm Haberler
                </h2>
                <div className="divider mx-auto my-3"></div>
              </div>
            </Col>
          </Row>
          <Row>
            {newsItems
              .filter((item) => !item.featured)
              .map((item) => (
                <Col lg={4} md={6} key={item.id} className="mb-4">
                  <Card className="h-100 shadow-lg border-0 news-card-modern">
                    <div className="news-card-header">
                      <div className="news-icon-small">
                        <i
                          className={`fas ${
                            item.category === "Proje"
                              ? "fa-project-diagram"
                              : item.category === "Kampanya"
                              ? "fa-bullhorn"
                              : item.category === "Eğitim"
                              ? "fa-graduation-cap"
                              : "fa-users"
                          } text-white`}
                        ></i>
                      </div>
                    </div>
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <Badge
                          bg={getCategoryColor(item.category)}
                          className="px-3 py-2 category-badge"
                        >
                          {item.category}
                        </Badge>
                        <div className="news-date">
                          <i className="fas fa-clock text-muted me-1"></i>
                          <small className="text-muted">
                            {formatDate(item.date)}
                          </small>
                        </div>
                      </div>
                      <Card.Title className="h5 mb-3 text-dark lh-base">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="text-muted mb-4 lh-base">
                        {item.excerpt.substring(0, 150)}...
                      </Card.Text>
                      <Button
                        variant={getCategoryColor(item.category)}
                        size="sm"
                        className="w-100 btn-modern"
                      >
                        <i className="fas fa-eye me-2"></i>
                        Devamını Oku
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-signup py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className="newsletter-icon mb-4">
                <i
                  className="fas fa-envelope text-success"
                  style={{ fontSize: "3rem" }}
                ></i>
              </div>
              <h3 className="h3 mb-3 text-success fw-bold">
                Haberlerden Haberdar Olun
              </h3>
              <p className="text-muted mb-5 fs-5">
                ABAD'ın güncel haberlerini ve duyurularını e-posta ile almak
                için bültenimize abone olun.
              </p>
              <div className="d-flex justify-content-center">
                <div
                  className="input-group newsletter-form"
                  style={{ maxWidth: "500px" }}
                >
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="E-posta adresinizi girin"
                  />
                  <Button
                    variant="success"
                    type="submit"
                    size="lg"
                    className="btn-modern"
                  >
                    <i className="fas fa-paper-plane me-2"></i>
                    Abone Ol
                  </Button>
                </div>
              </div>
              <small className="text-muted mt-3 d-block">
                <i className="fas fa-shield-alt me-2"></i>
                E-posta adresiniz güvenli ve gizlidir
              </small>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NewsPage;
