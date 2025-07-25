import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="abad-homepage">
      {/* TEMA Benzeri Hero Section - ABAD Kimliği ile */}
      <section 
        className="abad-hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,186,163,0.85), rgba(0,140,122,0.85)), url('/src/assets/images/parallax-7.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
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
                    🌱 Anadolu Bilgelerini Araştırma Derneği
                  </span>
                </div>
                
                <h1 
                  className="display-2 fw-bold mb-4"
                  style={{
                    fontSize: '4rem',
                    lineHeight: '1.1',
                    fontFamily: 'Poppins, sans-serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  HİÇBİR YER, HİÇBİR GÖNÜL
                  <br />
                  <span style={{ color: '#ebc858' }}>ÇORAK KALMASIN</span>
                </h1>
                
                <p 
                  className="lead mb-5"
                  style={{
                    fontSize: '1.4rem',
                    opacity: 0.95,
                    lineHeight: '1.6',
                    maxWidth: '800px',
                    margin: '0 auto 3rem auto',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  Anadolu'nun bilgelerini gelecek nesillere aktarma misyonumuzda bize katılın. 
                  Doğaya sahip çıkma yolculuğumuzda her adım, her bağış değerlidir.
                </p>
                
                <div className="hero-buttons d-flex flex-wrap justify-content-center gap-3">
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
                      boxShadow: '0 6px 20px rgba(235,200,88,0.4)',
                      transition: 'all 0.3s ease',
                      minWidth: '200px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(235,200,88,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 6px 20px rgba(235,200,88,0.4)';
                    }}
                  >
                    <i className="fas fa-heart me-2"></i>
                    BAĞIŞ YAP
                  </Button>
                  
                  <Button
                    as={Link}
                    to="/activities"
                    variant="outline-light"
                    size="lg"
                    style={{
                      borderWidth: '3px',
                      fontWeight: 'bold',
                      padding: '15px 40px',
                      borderRadius: '30px',
                      fontSize: '1.2rem',
                      minWidth: '200px',
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
                    <i className="fas fa-leaf me-2"></i>
                    FAALİYETLERİMİZ
                  </Button>
                  
                  <Button
                    as={Link}
                    to="/news"
                    variant="outline-light"
                    size="lg"
                    style={{
                      borderWidth: '3px',
                      fontWeight: 'bold',
                      padding: '15px 40px',
                      borderRadius: '30px',
                      fontSize: '1.2rem',
                      minWidth: '200px',
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
                    <i className="fas fa-newspaper me-2"></i>
                    HABERLER
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        
        {/* Scroll down indicator */}
        <div 
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite'
          }}
        >
          <i 
            className="fas fa-chevron-down" 
            style={{ 
              fontSize: '2rem', 
              color: '#ebc858',
              opacity: 0.8
            }}
          ></i>
        </div>
      </section>

      {/* Faaliyetler Bölümü - ABAD Görselleri ile */}
      <section 
        className="abad-activities py-5"
        style={{
          backgroundColor: '#f8f9fa'
        }}
      >
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 
                className="display-4 fw-bold mb-4"
                style={{
                  color: '#00baa3',
                  fontFamily: 'Poppins, sans-serif'
                }}
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
                  margin: '1rem auto',
                  fontSize: '1.2rem'
                }}
              >
                Doğa, eğitim ve kültür alanlarında sürdürülebilir projeler geliştiriyoruz.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {/* Doğa Faaliyetleri */}
            <Col lg={4} md={6}>
              <Card 
                className="h-100 border-0 shadow-lg overflow-hidden"
                style={{
                  borderRadius: '20px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,186,163,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                  <img 
                    src="/src/assets/images/doga-faaliyetleri.jpg"
                    alt="Doğa Faaliyetleri"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.8)'
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      backgroundColor: '#00baa3',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}
                  >
                    <i className="fas fa-seedling me-2"></i>
                    Doğa
                  </div>
                </div>
                <Card.Body className="p-4">
                  <h5 
                    className="fw-bold mb-3"
                    style={{ color: '#00baa3', fontSize: '1.3rem' }}
                  >
                    Doğa Faaliyetleri
                  </h5>
                  
                  <p 
                    className="mb-4"
                    style={{ 
                      color: '#727475',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}
                  >
                    Fidan dikimi, ağaçlandırma ve çevre koruma projeleri ile doğaya sahip çıkıyoruz. 
                    Her ağaç gelecek için bir nefes.
                  </p>
                  
                  <Button
                    as={Link}
                    to="/activities"
                    style={{
                      backgroundColor: '#00baa3',
                      borderColor: '#00baa3',
                      borderRadius: '25px',
                      padding: '10px 25px',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#008c7a';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#00baa3';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Keşfet <i className="fas fa-arrow-right ms-2"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            {/* Eğitim Faaliyetleri */}
            <Col lg={4} md={6}>
              <Card 
                className="h-100 border-0 shadow-lg overflow-hidden"
                style={{
                  borderRadius: '20px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(235,200,88,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                  <img 
                    src="/src/assets/images/eğitim-ve-seminer.jpg"
                    alt="Eğitim ve Seminer"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.8)'
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      backgroundColor: '#ebc858',
                      color: '#000',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}
                  >
                    <i className="fas fa-graduation-cap me-2"></i>
                    Eğitim
                  </div>
                </div>
                <Card.Body className="p-4">
                  <h5 
                    className="fw-bold mb-3"
                    style={{ color: '#ebc858', fontSize: '1.3rem' }}
                  >
                    Eğitim ve Seminer
                  </h5>
                  
                  <p 
                    className="mb-4"
                    style={{ 
                      color: '#727475',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}
                  >
                    Çocuk ve genç eğitimi, kültürel değerlerin aktarımı ve farkındalık seminerleri ile bilgiyi paylaşıyoruz.
                  </p>
                  
                  <Button
                    as={Link}
                    to="/activities"
                    style={{
                      backgroundColor: '#ebc858',
                      borderColor: '#ebc858',
                      color: '#000',
                      borderRadius: '25px',
                      padding: '10px 25px',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#d9b347';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#ebc858';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Keşfet <i className="fas fa-arrow-right ms-2"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            {/* Çocuk Faaliyetleri */}
            <Col lg={4} md={6}>
              <Card 
                className="h-100 border-0 shadow-lg overflow-hidden"
                style={{
                  borderRadius: '20px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(235,137,88,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                  <img 
                    src="/src/assets/images/cocuk-ve-genc-faaliyetleri.jpg"
                    alt="Çocuk ve Genç Faaliyetleri"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.8)'
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      backgroundColor: '#eb8958',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}
                  >
                    <i className="fas fa-child me-2"></i>
                    Gençlik
                  </div>
                </div>
                <Card.Body className="p-4">
                  <h5 
                    className="fw-bold mb-3"
                    style={{ color: '#eb8958', fontSize: '1.3rem' }}
                  >
                    Çocuk ve Genç
                  </h5>
                  
                  <p 
                    className="mb-4"
                    style={{ 
                      color: '#727475',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}
                  >
                    Yunus Emre Anaokulu ve çocukların gelecek için bilinçlendirilmesi projeleri. Geleceğin tohumu bugün.
                  </p>
                  
                  <Button
                    as={Link}
                    to="/news"
                    style={{
                      backgroundColor: '#eb8958',
                      borderColor: '#eb8958',
                      borderRadius: '25px',
                      padding: '10px 25px',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#d77347';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#eb8958';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Keşfet <i className="fas fa-arrow-right ms-2"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Bağış Çağrısı Bölümü - TEMA Benzeri */}
      <section 
        className="abad-donation-call py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(235,137,88,0.9), rgba(213,83,66,0.9)), url('/src/assets/images/fidanBagisAbad.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
          position: 'relative'
        }}
      >
        <Container>
          <Row className="align-items-center text-center text-lg-start">
            <Col lg={8}>
              <h3 
                className="display-5 fw-bold mb-4"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Hiçbir Yer, Hiçbir Gönül Çorak Kalmasın
              </h3>
              <p 
                className="lead mb-4"
                style={{ 
                  opacity: 0.95,
                  fontSize: '1.3rem',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Doğaya sahip çıkma misyonumuzda bize katılın. Her bağış, gelecek nesiller için bir tohum. 
                Anadolu'nun bilgelerini koruma yolculuğunda yanımızda olun.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <div className="donation-stat text-center">
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.2)', 
                      borderRadius: '15px', 
                      padding: '15px 25px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <h4 className="fw-bold mb-1" style={{ color: '#ebc858' }}>500+</h4>
                    <small>Dikilmiş Fidan</small>
                  </div>
                </div>
                <div className="donation-stat text-center">
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.2)', 
                      borderRadius: '15px', 
                      padding: '15px 25px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <h4 className="fw-bold mb-1" style={{ color: '#ebc858' }}>50+</h4>
                    <small>Proje</small>
                  </div>
                </div>
                <div className="donation-stat text-center">
                  <div 
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.2)', 
                      borderRadius: '15px', 
                      padding: '15px 25px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <h4 className="fw-bold mb-1" style={{ color: '#ebc858' }}>1000+</h4>
                    <small>Destekçi</small>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="text-center mt-4 mt-lg-0">
              <div className="donation-buttons d-flex flex-column gap-3">
                <Button
                  as={Link}
                  to="/certificate"
                  size="lg"
                  style={{
                    backgroundColor: '#ebc858',
                    borderColor: '#ebc858',
                    color: '#000',
                    fontWeight: 'bold',
                    padding: '18px 40px',
                    borderRadius: '30px',
                    boxShadow: '0 8px 25px rgba(235,200,88,0.4)',
                    fontSize: '1.2rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 12px 30px rgba(235,200,88,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 25px rgba(235,200,88,0.4)';
                  }}
                >
                  <i className="fas fa-heart me-3"></i>
                  HEMEN BAĞIŞ YAP
                </Button>
                
                <Button
                  as={Link}
                  to="/news"
                  variant="outline-light"
                  size="lg"
                  style={{
                    borderWidth: '2px',
                    fontWeight: 'bold',
                    padding: '15px 40px',
                    borderRadius: '30px',
                    fontSize: '1.1rem',
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
                  <i className="fas fa-users me-3"></i>
                  GÖNÜLLÜ OL
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Yunus Emre Anaokulu Bölümü */}
      <section className="abad-anaokulu py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <img 
                src="/src/assets/images/YUNUS-EMRE-ANAOKULU.jpg"
                alt="Yunus Emre Anaokulu"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                }}
              />
            </Col>
            <Col lg={6}>
              <div className="ps-lg-5 mt-4 mt-lg-0">
                <span 
                  className="badge px-3 py-2 mb-3"
                  style={{
                    backgroundColor: '#eb8958',
                    color: 'white',
                    fontSize: '0.9rem',
                    borderRadius: '20px'
                  }}
                >
                  Özel Proje
                </span>
                <h3 
                  className="display-6 fw-bold mb-4"
                  style={{ color: '#00baa3', fontFamily: 'Poppins, sans-serif' }}
                >
                  Yunus Emre Anaokulu
                </h3>
                <p 
                  className="lead mb-4"
                  style={{ color: '#727475', lineHeight: '1.6' }}
                >
                  Çocuklarımızın sağlıklı bir eğitim alabilmesi için Yunus Emre Anaokulu projemizi hayata geçirdik. 
                  Gelecek nesillerin Anadolu kültürü ve değerleri ile yetişmesi en büyük hedefimizdir.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Button
                    as={Link}
                    to="/news"
                    style={{
                      backgroundColor: '#eb8958',
                      borderColor: '#eb8958',
                      borderRadius: '25px',
                      padding: '12px 30px',
                      fontWeight: 'bold'
                    }}
                  >
                    Daha Fazla Bilgi
                  </Button>
                  <Button
                    as={Link}
                    to="/certificate"
                    variant="outline-primary"
                    style={{
                      borderColor: '#00baa3',
                      color: '#00baa3',
                      borderRadius: '25px',
                      padding: '12px 30px',
                      fontWeight: 'bold',
                      borderWidth: '2px'
                    }}
                  >
                    Projeyi Destekle
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;