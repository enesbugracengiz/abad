import { Container, Row, Col, Card } from "react-bootstrap";

const MapPage = () => {
  const statistics = [
    {
      id: 1,
      icon: "🌳",
      count: "1455",
      title: "Dikilen Fidan",
      color: "success",
    },
    {
      id: 2,
      icon: "📚",
      count: "127",
      title: "Eğitim Semineri",
      color: "info",
    },
    {
      id: 3,
      icon: "👥",
      count: "2340",
      title: "Katılımcı",
      color: "warning",
    },
    {
      id: 4,
      icon: "🎯",
      count: "48",
      title: "Proje",
      color: "primary",
    },
  ];

  return (
    <div className="map-page">
      {/* Header */}
      <section className="map-hero-section py-5">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={12} className="text-center">
              <div className="hero-badge mb-4">
                <span className="badge bg-success px-4 py-2 fs-5">
                  🗺️ HARİTA
                </span>
              </div>
              <h1 className="display-2 fw-bold text-white mb-4 map-title">
                Faaliyetlerimiz Haritası
              </h1>
              <p className="lead text-white-50 mb-4 fs-3">
                ABAD'ın Türkiye genelindeki faaliyetlerini ve istatistiklerini
                keşfedin.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Turkey Map Section */}
      <section className="turkey-map py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-header text-center mb-5">
                <span className="text-success fw-bold">🌍 COĞRAFİ</span>
                <h2 className="display-6 fw-bold text-dark mt-2">
                  Türkiye Faaliyetler Haritası
                </h2>
                <div className="divider mx-auto my-3"></div>
              </div>
              <Card className="shadow-lg border-0 map-card">
                <Card.Body className="p-0">
                  {/* Map Container */}
                  <div className="map-container position-relative">
                    <div
                      className="turkey-map-placeholder bg-light d-flex align-items-center justify-content-center rounded"
                      style={{ height: "500px", position: "relative" }}
                    >
                      {/* Turkey Map SVG Placeholder */}
                      <div
                        className="turkey-outline"
                        style={{ width: "100%", maxWidth: "600px" }}
                      >
                        <svg
                          viewBox="0 0 600 300"
                          className="w-100 h-100"
                          style={{
                            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))",
                          }}
                        >
                          {/* Simplified Turkey shape */}
                          <path
                            d="M50,150 Q100,100 200,120 Q300,110 400,130 Q500,120 550,150 Q520,200 450,220 Q350,240 250,230 Q150,220 50,150 Z"
                            fill="#e8f5e8"
                            stroke="#28a745"
                            strokeWidth="2"
                          />

                          {/* City markers */}
                          <circle cx="150" cy="160" r="8" fill="#28a745" />
                          <circle cx="200" cy="140" r="6" fill="#ffc107" />
                          <circle cx="300" cy="150" r="10" fill="#dc3545" />
                          <circle cx="400" cy="160" r="7" fill="#007bff" />
                          <circle cx="450" cy="180" r="5" fill="#28a745" />

                          {/* City labels */}
                          <text
                            x="150"
                            y="180"
                            textAnchor="middle"
                            className="small fill-dark"
                          >
                            İstanbul
                          </text>
                          <text
                            x="200"
                            y="125"
                            textAnchor="middle"
                            className="small fill-dark"
                          >
                            Ankara
                          </text>
                          <text
                            x="300"
                            y="135"
                            textAnchor="middle"
                            className="small fill-dark"
                          >
                            Kayseri
                          </text>
                          <text
                            x="400"
                            y="145"
                            textAnchor="middle"
                            className="small fill-dark"
                          >
                            Erzurum
                          </text>
                          <text
                            x="450"
                            y="200"
                            textAnchor="middle"
                            className="small fill-dark"
                          >
                            Gaziantep
                          </text>
                        </svg>
                      </div>
                    </div>

                    {/* Map Legend */}
                    <div className="map-legend position-absolute bottom-0 start-0 m-3 p-3 bg-white rounded shadow-sm">
                      <h6 className="mb-2">Faaliyet Türleri</h6>
                      <div className="d-flex flex-column gap-1">
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className="legend-color bg-success rounded-circle"
                            style={{ width: "12px", height: "12px" }}
                          ></div>
                          <small>Fidan Dikimi</small>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className="legend-color bg-warning rounded-circle"
                            style={{ width: "12px", height: "12px" }}
                          ></div>
                          <small>Eğitim Semineri</small>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className="legend-color bg-danger rounded-circle"
                            style={{ width: "12px", height: "12px" }}
                          ></div>
                          <small>Sosyal Projeler</small>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className="legend-color bg-primary rounded-circle"
                            style={{ width: "12px", height: "12px" }}
                          ></div>
                          <small>Araştırma</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="statistics py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <span className="text-primary fw-bold">📊 BAŞARILAR</span>
              <h2 className="display-5 fw-bold text-dark mt-2 mb-3">
                Rakamlarla ABAD
              </h2>
              <p className="lead text-muted">
                Bugüne kadar gerçekleştirdiğimiz faaliyetlerin özeti
              </p>
            </Col>
          </Row>
          <Row>
            {statistics.map((stat) => (
              <Col lg={3} md={6} key={stat.id} className="mb-4">
                <Card className="h-100 shadow-lg border-0 text-center stat-card-modern">
                  <Card.Body className="p-5">
                    <div
                      className={`stat-icon bg-${stat.color} text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                      style={{ width: "80px", height: "80px" }}
                    >
                      <span className="fs-1">{stat.icon}</span>
                    </div>
                    <h3 className={`display-4 fw-bold text-${stat.color} mb-2`}>
                      {stat.count}
                    </h3>
                    <h4 className="h5 text-muted mb-0">{stat.title}</h4>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Activity Timeline */}
      <section className="activity-timeline py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="h3 mb-5 text-center text-primary">
                Son Faaliyetler
              </h2>

              <div className="timeline">
                <div className="timeline-item mb-4">
                  <div className="timeline-marker bg-success"></div>
                  <div className="timeline-content">
                    <h5 className="mb-2">Gölbaşı Fidan Dikimi</h5>
                    <p className="text-muted mb-1">15 Ocak 2024</p>
                    <p className="small text-muted">
                      Gazi Üniversitesi Gölbaşı Yerleşkesi'nde 150 fidan
                      dikildi.
                    </p>
                  </div>
                </div>

                <div className="timeline-item mb-4">
                  <div className="timeline-marker bg-warning"></div>
                  <div className="timeline-content">
                    <h5 className="mb-2">Çevre Bilinci Semineri</h5>
                    <p className="text-muted mb-1">10 Ocak 2024</p>
                    <p className="small text-muted">
                      Ankara'da düzenlenen seminere 80 kişi katıldı.
                    </p>
                  </div>
                </div>

                <div className="timeline-item mb-4">
                  <div className="timeline-marker bg-info"></div>
                  <div className="timeline-content">
                    <h5 className="mb-2">Babalar Günü Kampanyası</h5>
                    <p className="text-muted mb-1">5 Ocak 2024</p>
                    <p className="small text-muted">
                      E-sertifikalı meyve fidanı bağış kampanyası başlatıldı.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default MapPage;
