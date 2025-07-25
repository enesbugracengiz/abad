import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ActivitiesPage = () => {
  const activities = [
    {
      id: 1,
      title: "Doğa Faaliyetleri",
      description: "Fidan dikimi, ağaçlandırma ve çevre koruma projeleri ile doğaya sahip çıkıyoruz. Ankara, Bursa, Kastamonu ve birçok ilde gerçekleştirdiğimiz fidan dikim etkinlikleri ile yeşil alanları artırıyoruz.",
      image: "/src/assets/images/doga-faaliyetleri.jpg",
      color: "#00baa3",
      icon: "fa-seedling",
      stats: "500+ Fidan",
      projects: [
        "Gazi Üniversitesi Fidan Dikimi",
        "Ankara Meyve Fidanı Dikimi", 
        "Bursa Ağaçlandırma Projesi",
        "Kastamonu Orman Koruma"
      ]
    },
    {
      id: 2,
      title: "Çocuk ve Genç Faaliyetleri",
      description: "Yunus Emre Anaokulu projemiz ve çocukların gelecek için bilinçlendirilmesi faaliyetleri. Çocuk ve genç hikaye yarışmaları düzenleyerek kültürel değerlerin aktarımını sağlıyoruz.",
      image: "/src/assets/images/cocuk-ve-genc-faaliyetleri.jpg",
      color: "#eb8958",
      icon: "fa-child",
      stats: "1000+ Çocuk",
      projects: [
        "Yunus Emre Anaokulu",
        "Çocuk Hikaye Yarışması",
        "Aşık Veysel Hikaye Yarışması",
        "Cumhuriyeti Anlamak Yarışması"
      ]
    },
    {
      id: 3,
      title: "Eğitim ve Seminer Faaliyetleri",
      description: "Çocuk ve genç eğitimi, kültürel değerlerin aktarımı ve farkındalık seminerleri düzenliyoruz. Anadolu'nun bilgelerini gelecek nesillere aktarma misyonumuzun temel ayağıdır.",
      image: "/src/assets/images/eğitim-ve-seminer.jpg",
      color: "#ebc858",
      icon: "fa-graduation-cap",
      stats: "50+ Seminer",
      projects: [
        "Kültürel Değerler Semineri",
        "Anadolu Bilgeleri Eğitimi",
        "Çocuk Gelişimi Atölyeleri",
        "Yunus'un İzinde Atölye"
      ]
    }
  ];

  return (
    <div className="activities-page" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* TEMA Benzeri Hero Section */}
      <section 
        className="activities-hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,186,163,0.9), rgba(0,140,122,0.9)), url('/src/assets/images/parallax-7.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          position: 'relative'
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <div className="hero-content">
                <div className="hero-badge mb-4">
                  <span 
                    className="badge px-4 py-3"
                    style={{
                      backgroundColor: 'rgba(235,200,88,0.9)',
                      color: '#000',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      borderRadius: '30px',
                      border: '2px solid rgba(255,255,255,0.3)'
                    }}
                  >
                    🎯 Faaliyetlerimiz
                  </span>
                </div>
                
                <h1 
                  className="display-2 fw-bold mb-4"
                  style={{
                    fontSize: '4rem',
                    lineHeight: '1.1',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  Doğa, Eğitim ve Gelecek İçin
                  <br />
                  <span style={{ color: '#ebc858' }}>Birlikte Çalışıyoruz</span>
                </h1>
                
                <p 
                  className="lead mb-5"
                  style={{
                    fontSize: '1.4rem',
                    opacity: 0.95,
                    maxWidth: '800px',
                    margin: '0 auto 3rem auto',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  ABAD olarak topluma ve çevreye fayda sağlayan çeşitli faaliyetler düzenlemekteyiz. 
                  Her proje, Anadolu'nun bilgelerini koruma misyonumuzun bir parçasıdır.
                </p>
                
                {/* İstatistik Kartları */}
                <div className="stats-row d-flex justify-content-center gap-4 flex-wrap">
                  <div className="stat-card">
                    <div 
                      style={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        borderRadius: '20px', 
                        padding: '20px 30px',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      <h3 className="fw-bold mb-1" style={{ color: '#ebc858', fontSize: '2.5rem' }}>500+</h3>
                      <p className="mb-0" style={{ fontSize: '1.1rem' }}>Dikilmiş Fidan</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div 
                      style={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        borderRadius: '20px', 
                        padding: '20px 30px',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      <h3 className="fw-bold mb-1" style={{ color: '#ebc858', fontSize: '2.5rem' }}>1000+</h3>
                      <p className="mb-0" style={{ fontSize: '1.1rem' }}>Çocuk</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div 
                      style={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        borderRadius: '20px', 
                        padding: '20px 30px',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      <h3 className="fw-bold mb-1" style={{ color: '#ebc858', fontSize: '2.5rem' }}>50+</h3>
                      <p className="mb-0" style={{ fontSize: '1.1rem' }}>Proje</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Ana Faaliyetler Bölümü */}
      <section className="activities-main py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 
                className="display-4 fw-bold mb-4"
                style={{ color: '#00baa3' }}
              >
                Faaliyet Alanlarımız
              </h2>
              <div 
                style={{
                  width: '100px',
                  height: '4px',
                  backgroundColor: '#ebc858',
                  margin: '0 auto',
                  borderRadius: '2px'
                }}
              />
              <p 
                className="lead mt-4"
                style={{
                  color: '#727475',
                  maxWidth: '700px',
                  margin: '1rem auto'
                }}
              >
                Her faaliyet alanımız, sürdürülebilir bir gelecek için atılmış adımlardır.
              </p>
            </Col>
          </Row>

          <Row className="g-5">
            {activities.map((activity, index) => (
              <Col lg={12} key={activity.id} className="mb-5">
                <Card 
                  className="border-0 shadow-lg overflow-hidden"
                  style={{ borderRadius: '25px' }}
                >
                  <Row className="g-0 align-items-center">
                    <Col md={6} className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                      <div className="position-relative overflow-hidden h-100">
                        <img 
                          src={activity.image}
                          alt={activity.title}
                          style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover'
                          }}
                        />
                        <div 
                          style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            backgroundColor: activity.color,
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '25px',
                            fontWeight: 'bold',
                            fontSize: '1rem'
                          }}
                        >
                          <i className={`fas ${activity.icon} me-2`}></i>
                          {activity.stats}
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                      <Card.Body className="p-5">
                        <div className="d-flex align-items-center mb-3">
                          <div 
                            style={{
                              width: '60px',
                              height: '60px',
                              backgroundColor: activity.color,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: '15px'
                            }}
                          >
                            <i className={`fas ${activity.icon} text-white`} style={{ fontSize: '1.5rem' }}></i>
                          </div>
                          <div>
                            <span 
                              className="badge px-3 py-2"
                              style={{
                                backgroundColor: `${activity.color}20`,
                                color: activity.color,
                                fontSize: '0.8rem',
                                borderRadius: '15px'
                              }}
                            >
                              Faaliyet Alanı
                            </span>
                          </div>
                        </div>
                        
                        <h3 
                          className="fw-bold mb-4"
                          style={{ 
                            color: activity.color,
                            fontSize: '2rem'
                          }}
                        >
                          {activity.title}
                        </h3>
                        
                        <p 
                          className="mb-4"
                          style={{ 
                            color: '#727475',
                            lineHeight: '1.7',
                            fontSize: '1.1rem'
                          }}
                        >
                          {activity.description}
                        </p>

                        <div className="mb-4">
                          <h6 
                            className="fw-bold mb-3" 
                            style={{ color: '#727475' }}
                          >
                            Örnek Projelerimiz:
                          </h6>
                          <Row>
                            {activity.projects.map((project, idx) => (
                              <Col sm={6} key={idx} className="mb-2">
                                <div className="d-flex align-items-center">
                                  <i 
                                    className="fas fa-check-circle me-2" 
                                    style={{ color: activity.color, fontSize: '0.9rem' }}
                                  ></i>
                                  <span style={{ fontSize: '0.95rem', color: '#727475' }}>
                                    {project}
                                  </span>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </div>
                        
                        <div className="d-flex gap-3 flex-wrap">
                          <Button
                            style={{
                              backgroundColor: activity.color,
                              borderColor: activity.color,
                              borderRadius: '25px',
                              padding: '12px 25px',
                              fontWeight: 'bold',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = 'translateY(-2px)';
                              e.target.style.boxShadow = `0 8px 20px ${activity.color}40`;
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = 'none';
                            }}
                          >
                            Detayları İncele <i className="fas fa-arrow-right ms-2"></i>
                          </Button>
                          
                          <Button
                            as={Link}
                            to="/certificate"
                            variant="outline-primary"
                            style={{
                              borderColor: activity.color,
                              color: activity.color,
                              borderRadius: '25px',
                              padding: '12px 25px',
                              fontWeight: 'bold',
                              borderWidth: '2px',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = activity.color;
                              e.target.style.color = 'white';
                              e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = 'transparent';
                              e.target.style.color = activity.color;
                              e.target.style.transform = 'translateY(0)';
                            }}
                          >
                            <i className="fas fa-heart me-2"></i>
                            Destekle
                          </Button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Bağış Çağrısı */}
      <section 
        className="activities-donation py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(235,137,88,0.9), rgba(213,83,66,0.9)), url('/src/assets/images/fidanBagisAbad.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white'
        }}
      >
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h3 
                className="display-5 fw-bold mb-4"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
              >
                Bu Projelerin Devamı İçin Desteğinize İhtiyacımız Var
              </h3>
              <p 
                className="lead mb-4"
                style={{ 
                  fontSize: '1.3rem',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)' 
                }}
              >
                Her bağışınız, bu değerli projelerin sürdürülmesi ve yeni projeler geliştirilmesi için önemlidir.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button
                  as={Link}
                  to="/certificate"
                  size="lg"
                  style={{
                    backgroundColor: '#ebc858',
                    borderColor: '#ebc858',
                    color: '#000',
                    fontWeight: 'bold',
                    padding: '15px 40px',
                    borderRadius: '30px',
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 12px 30px rgba(235,200,88,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <i className="fas fa-heart me-2"></i>
                  BAĞIŞ YAP
                </Button>
                
                <Button
                  as={Link}
                  to="/"
                  variant="outline-light"
                  size="lg"
                  style={{
                    borderWidth: '2px',
                    fontWeight: 'bold',
                    padding: '15px 40px',
                    borderRadius: '30px',
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="fas fa-users me-2"></i>
                  GÖNÜLLÜ OL
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