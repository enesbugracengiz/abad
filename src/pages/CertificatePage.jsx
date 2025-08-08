import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Alert,
  Modal,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PaymentService from "../components/PaymentService";
import Header from "../components/Header";

const CertificatePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [donationAmount, setDonationAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [donationType, setDonationType] = useState("oneTime");
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
      setFormData(prev => ({
        ...prev,
        name: JSON.parse(userData).name || "",
        surname: JSON.parse(userData).surname || "",
        email: JSON.parse(userData).email || "",
        phone: JSON.parse(userData).phone || ""
      }));
      setIsGuest(true); // Skip login modal if already logged in
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setDonationAmount(parseInt(amount));
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && !isNaN(value)) {
      setDonationAmount(parseInt(value));
      setSelectedAmount("");
    } else {
      setDonationAmount(0);
    }
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePaymentSuccess = (result) => {
    setPaymentResult(result);
    setShowSuccess(true);
  };

  const handlePaymentError = (error) => {
    console.error("Payment error:", error);
  };

  const handleGuestContinue = () => {
    setIsGuest(true);
    setShowLoginModal(false);
  };

  const handleLogin = () => {
    navigate('/auth');
  };

  const handleMemberRegister = () => {
    navigate('/auth');
  };

  return (
    <div className="tema-donation-page" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Header />
      {/* TEMA Benzeri Hero Section */}
      <section 
        className="tema-hero-section" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,186,163,0.9), rgba(0,140,122,0.9)), url('/src/assets/images/bagis.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          position: 'relative'
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <div className="tema-hero-content">
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
                    🌱 ABAD'a Bağış Yapın
                  </span>
                </div>
                
                <h1 
                  className="display-3 fw-bold mb-4" 
                  style={{ 
                    fontSize: '3.5rem',
                    lineHeight: '1.1',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  AYLIK DÜZENLİ BAĞIŞÇIMIZ OLUN
                </h1>
                
                <p 
                  className="lead mb-5" 
                  style={{ 
                    fontSize: '1.3rem', 
                    opacity: 0.95,
                    maxWidth: '800px',
                    margin: '0 auto 3rem auto',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  Başta toprak olmak üzere tüm doğal varlıklarımızı korumak için yürüttüğümüz çalışmalara
                  destek olun. Anadolu'nun bilgelerini gelecek nesillere aktarma misyonumuzda bize katılın.
                </p>
                
                {/* TEMA'nın Tam Tutar Seçim Sistemi */}
                <div className="tema-amount-selection mb-5">
                  <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
                    <Button
                      size="lg"
                      className="tema-amount-btn"
                      style={{ 
                        minWidth: '140px',
                        height: '70px',
                        fontWeight: 'bold',
                        fontSize: '1.4rem',
                        borderRadius: '35px',
                        border: '3px solid white',
                        backgroundColor: selectedAmount === '50' ? '#ebc858' : 'rgba(255,255,255,0.1)',
                        color: selectedAmount === '50' ? '#000' : 'white',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)'
                      }}
                      onClick={() => handleAmountSelect('50')}
                      onMouseEnter={(e) => {
                        if (selectedAmount !== '50') {
                          e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedAmount !== '50') {
                          e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                        }
                      }}
                    >
                      50 ₺
                    </Button>
                    
                    <Button
                      size="lg"
                      className="tema-amount-btn"
                      style={{ 
                        minWidth: '140px',
                        height: '70px',
                        fontWeight: 'bold',
                        fontSize: '1.4rem',
                        borderRadius: '35px',
                        border: '3px solid white',
                        backgroundColor: selectedAmount === '100' ? '#ebc858' : 'rgba(255,255,255,0.1)',
                        color: selectedAmount === '100' ? '#000' : 'white',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)'
                      }}
                      onClick={() => handleAmountSelect('100')}
                      onMouseEnter={(e) => {
                        if (selectedAmount !== '100') {
                          e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedAmount !== '100') {
                          e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                        }
                      }}
                    >
                      100 ₺
                    </Button>
                    
                    <Button
                      size="lg"
                      className="tema-amount-btn tema-highlighted"
                      style={{ 
                        minWidth: '140px',
                        height: '70px',
                        fontWeight: 'bold',
                        fontSize: '1.4rem',
                        borderRadius: '35px',
                        border: '3px solid white',
                        backgroundColor: selectedAmount === '200' ? '#ebc858' : '#eb8958',
                        color: selectedAmount === '200' ? '#000' : 'white',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 6px 20px rgba(235,137,88,0.4)',
                        position: 'relative'
                      }}
                      onClick={() => handleAmountSelect('200')}
                    >
                      200 ₺
                      <span 
                        style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-10px',
                          backgroundColor: '#ebc858',
                          color: '#000',
                          fontSize: '0.7rem',
                          padding: '2px 8px',
                          borderRadius: '15px',
                          fontWeight: 'bold'
                        }}
                      >
                        ÖNERİLEN
                      </span>
                    </Button>
                  </div>
                  
                  <div className="tema-custom-amount text-center">
                    <p className="mb-3" style={{ opacity: 0.9, fontSize: '1.1rem' }}>veya</p>
                    <Form.Control
                      type="number"
                      placeholder="Başka bir tutar girin"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="text-center mx-auto"
                      style={{
                        maxWidth: '300px',
                        height: '55px',
                        borderRadius: '30px',
                        padding: '15px 25px',
                        fontSize: '1.2rem',
                        border: '3px solid white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        backdropFilter: 'blur(10px)'
                      }}
                      min="1"
                    />
                  </div>
                </div>

                <Button
                  size="lg"
                  className="tema-main-donate-btn"
                  style={{
                    backgroundColor: '#ebc858',
                    borderColor: '#ebc858',
                    color: '#000',
                    borderRadius: '35px',
                    fontWeight: 'bold',
                    fontSize: '1.3rem',
                    minWidth: '280px',
                    height: '70px',
                    boxShadow: '0 8px 25px rgba(235,200,88,0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setShowLoginModal(true)}
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Login/Guest Modal - TEMA Benzeri */}
      <Modal 
        show={showLoginModal} 
        onHide={() => setShowLoginModal(false)} 
        centered 
        size="md"
        style={{ zIndex: 9999 }}
        backdrop={true}
        keyboard={true}
      >
        <Modal.Header 
          closeButton 
          style={{ 
            backgroundColor: '#00baa3', 
            color: 'white',
            borderBottom: 'none',
            borderRadius: '20px 20px 0 0'
          }}
        >
          <Modal.Title style={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}>
            ABAD'a Hoşgeldiniz
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4" style={{ backgroundColor: '#fafafa' }}>
          <div className="text-center mb-4">
            <img 
              src="/src/assets/images/abad-logo-seffaf-buyuk.png"
              alt="ABAD Logo"
              style={{ height: '60px', marginBottom: '1rem' }}
            />
            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>
              Bağış yapmak için giriş yapabilir veya üye olmadan devam edebilirsiniz.
            </p>
          </div>
          
          <Form className="mb-4">
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '600', color: '#727475' }}>
                E-posta Adresiniz
              </Form.Label>
              <Form.Control 
                type="email" 
                placeholder="ornek@email.com"
                style={{ 
                  borderRadius: '12px',
                  border: '2px solid #e9ecef',
                  padding: '12px 15px',
                  fontSize: '1rem'
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: '600', color: '#727475' }}>
                Şifreniz
              </Form.Label>
              <Form.Control 
                type="password" 
                placeholder="········"
                style={{ 
                  borderRadius: '12px',
                  border: '2px solid #e9ecef',
                  padding: '12px 15px',
                  fontSize: '1rem'
                }}
              />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Form.Check 
                type="checkbox" 
                label="Beni hatırla" 
                style={{ fontSize: '0.9rem', color: '#727475' }}
              />
              <a 
                href="#" 
                className="text-decoration-none" 
                style={{ color: '#00baa3', fontSize: '0.9rem' }}
              >
                Şifremi unuttum
              </a>
            </div>
          </Form>
          
          <div className="d-grid gap-3">
            <Button 
              size="lg"
              onClick={handleLogin}
              style={{ 
                backgroundColor: '#00baa3',
                borderColor: '#00baa3',
                borderRadius: '12px',
                fontWeight: 'bold',
                padding: '12px',
                fontSize: '1.1rem'
              }}
            >
              GİRİŞ YAP
            </Button>
            <Button 
              variant="outline-primary"
              size="lg"
              onClick={handleGuestContinue}
              style={{ 
                borderColor: '#00baa3',
                color: '#00baa3',
                borderRadius: '12px',
                fontWeight: 'bold',
                padding: '12px',
                fontSize: '1.1rem',
                borderWidth: '2px'
              }}
            >
              ÜYE OLMADAN DEVAM ET
            </Button>
          </div>
          
          <div className="text-center mt-4">
            <small className="text-muted">
              Hesabınız yok mu? 
              <Button 
                variant="link" 
                onClick={handleMemberRegister}
                className="p-0"
                style={{ color: '#00baa3', textDecoration: 'none', marginLeft: '5px', fontSize: 'inherit' }}
              >
                Üye olun
              </Button>
            </small>
          </div>
        </Modal.Body>
      </Modal>

      {/* Ana Bağış Formu */}
      {(isGuest || showSuccess) && (
        <section 
          className="tema-donation-form py-5" 
          style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} xl={7}>
                <Card 
                  className="shadow border-0" 
                  style={{ 
                    borderRadius: '25px',
                    overflow: 'hidden'
                  }}
                >
                  <Card.Body className="p-5">
                    {showSuccess && (
                      <Alert 
                        variant="success" 
                        className="mb-4" 
                        style={{ 
                          borderRadius: '15px',
                          border: 'none',
                          backgroundColor: '#d4edda',
                          color: '#155724'
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <i className="fas fa-check-circle me-3" style={{ fontSize: '2rem' }}></i>
                          <div>
                            <h5 className="mb-1">Bağışınız Tamamlandı!</h5>
                            <p className="mb-1">İşlem No: {paymentResult?.transactionId}</p>
                            <p className="mb-1">Tutar: {paymentResult?.amount}₺</p>
                            <p className="mb-0">ABAD ailesi olarak teşekkür ederiz!</p>
                          </div>
                        </div>
                      </Alert>
                    )}

                    <div className="text-center mb-5">
                      <h4 className="mb-4" style={{ color: '#00baa3', fontWeight: 'bold', fontSize: '1.5rem' }}>
                        Bağış Türünü Seçin
                      </h4>
                      <div className="btn-group w-100" role="group" style={{ borderRadius: '25px', overflow: 'hidden', maxWidth: '400px' }}>
                        <input 
                          type="radio" 
                          className="btn-check" 
                          name="donationType" 
                          id="oneTime" 
                          value="oneTime"
                          checked={donationType === "oneTime"}
                          onChange={(e) => setDonationType(e.target.value)}
                        />
                        <label 
                          className="btn btn-outline-primary py-3" 
                          htmlFor="oneTime"
                          style={{ 
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            borderColor: '#00baa3',
                            color: donationType === 'oneTime' ? 'white' : '#00baa3',
                            backgroundColor: donationType === 'oneTime' ? '#00baa3' : 'transparent',
                            flex: 1
                          }}
                        >
                          Tek Seferlik
                        </label>
                        
                        <input 
                          type="radio" 
                          className="btn-check" 
                          name="donationType" 
                          id="monthly" 
                          value="monthly"
                          checked={donationType === "monthly"}
                          onChange={(e) => setDonationType(e.target.value)}
                        />
                        <label 
                          className="btn btn-outline-primary py-3" 
                          htmlFor="monthly"
                          style={{ 
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            borderColor: '#00baa3',
                            color: donationType === 'monthly' ? 'white' : '#00baa3',
                            backgroundColor: donationType === 'monthly' ? '#00baa3' : 'transparent',
                            flex: 1
                          }}
                        >
                          Aylık
                        </label>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h5 className="text-center mb-4" style={{ color: '#00baa3', fontWeight: 'bold' }}>
                        Ödeme Yöntemi Seçin
                      </h5>
                      <Row>
                        <Col md={6} className="mb-3">
                          <div 
                            className={`payment-option p-4 border rounded-4 text-center position-relative ${paymentMethod === 'creditCard' ? 'border-primary bg-light' : 'border-secondary'}`}
                            style={{ 
                              cursor: 'pointer', 
                              transition: 'all 0.3s ease',
                              borderWidth: '3px',
                              minHeight: '120px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderColor: paymentMethod === 'creditCard' ? '#00baa3' : '#dee2e6',
                              backgroundColor: paymentMethod === 'creditCard' ? 'rgba(0,186,163,0.1)' : 'transparent'
                            }}
                            onClick={() => handlePaymentMethodChange('creditCard')}
                          >
                            <input 
                              type="radio" 
                              name="paymentMethod" 
                              value="creditCard"
                              checked={paymentMethod === 'creditCard'}
                              onChange={() => handlePaymentMethodChange('creditCard')}
                              style={{ 
                                position: 'absolute',
                                top: '15px',
                                left: '15px',
                                transform: 'scale(1.5)'
                              }}
                            />
                            <div>
                              <i className="fas fa-credit-card mb-3" style={{ fontSize: '2.5rem', color: '#00baa3' }}></i>
                              <div>
                                <strong style={{ fontSize: '1.2rem', color: '#727475' }}>Kredi Kartı</strong>
                                <div style={{ fontSize: '0.9rem', color: '#999', marginTop: '5px' }}>
                                  Hızlı ve güvenli
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={6} className="mb-3">
                          <div 
                            className={`payment-option p-4 border rounded-4 text-center position-relative ${paymentMethod === 'bankTransfer' ? 'border-primary bg-light' : 'border-secondary'}`}
                            style={{ 
                              cursor: 'pointer', 
                              transition: 'all 0.3s ease',
                              borderWidth: '3px',
                              minHeight: '120px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderColor: paymentMethod === 'bankTransfer' ? '#ebc858' : '#dee2e6',
                              backgroundColor: paymentMethod === 'bankTransfer' ? 'rgba(235,200,88,0.1)' : 'transparent'
                            }}
                            onClick={() => handlePaymentMethodChange('bankTransfer')}
                          >
                            <input 
                              type="radio" 
                              name="paymentMethod" 
                              value="bankTransfer"
                              checked={paymentMethod === 'bankTransfer'}
                              onChange={() => handlePaymentMethodChange('bankTransfer')}
                              style={{ 
                                position: 'absolute',
                                top: '15px',
                                left: '15px',
                                transform: 'scale(1.5)'
                              }}
                            />
                            <div>
                              <i className="fas fa-university mb-3" style={{ fontSize: '2.5rem', color: '#ebc858' }}></i>
                              <div>
                                <strong style={{ fontSize: '1.2rem', color: '#727475' }}>Havale / EFT</strong>
                                <div style={{ fontSize: '0.9rem', color: '#999', marginTop: '5px' }}>
                                  Banka hesabından
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {paymentMethod === 'bankTransfer' && (
                      <div 
                        className="tema-iban-info mb-5 p-4 rounded-4" 
                        style={{ 
                          backgroundColor: '#e8f5f3', 
                          border: '2px solid #00baa3'
                        }}
                      >
                        <h6 style={{ color: '#00baa3', fontWeight: 'bold' }} className="mb-3">
                          <i className="fas fa-university me-2"></i>
                          Havale / EFT Bilgileri
                        </h6>
                        <Row>
                          <Col md={8}>
                            <div className="iban-details">
                              <p className="mb-2">
                                <strong>IBAN:</strong> 
                                <code 
                                  style={{ 
                                    backgroundColor: '#fff', 
                                    padding: '8px 12px', 
                                    borderRadius: '8px',
                                    marginLeft: '10px',
                                    fontSize: '1.1rem',
                                    letterSpacing: '1px'
                                  }}
                                >
                                  TR33 0006 4000 0011 2345 6789 01
                                </code>
                              </p>
                              <p className="mb-2">
                                <strong>Alıcı:</strong> Anadolu Bilgelerini Araştırma Derneği
                              </p>
                              <p className="mb-2">
                                <strong>Açıklama:</strong> {formData.name ? `${formData.name} ${formData.surname}` : '[Ad Soyad]'} - ABAD Bağış
                              </p>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div 
                              className="alert alert-warning p-3" 
                              style={{ fontSize: '0.9rem', borderRadius: '12px' }}
                            >
                              <strong>Önemli:</strong> Havale açıklamasına adınızı ve "ABAD Bağış" yazınız.
                            </div>
                          </Col>
                        </Row>
                      </div>
                    )}

                    <Form>
                      <h5 className="mb-4" style={{ color: '#00baa3', fontWeight: 'bold' }}>
                        İletişim Bilgileri
                      </h5>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: '#727475', fontWeight: '600' }}>
                              <i className="fas fa-user me-2" style={{ color: '#00baa3' }}></i>
                              Adınız
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              placeholder="Adınızı girin"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              style={{ 
                                borderRadius: '12px',
                                border: '2px solid #e9ecef',
                                padding: '12px 15px',
                                fontSize: '1rem'
                              }}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: '#727475', fontWeight: '600' }}>
                              <i className="fas fa-user me-2" style={{ color: '#00baa3' }}></i>
                              Soyadınız
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="surname"
                              placeholder="Soyadınızı girin"
                              value={formData.surname}
                              onChange={handleInputChange}
                              required
                              style={{ 
                                borderRadius: '12px',
                                border: '2px solid #e9ecef',
                                padding: '12px 15px',
                                fontSize: '1rem'
                              }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: '#727475', fontWeight: '600' }}>
                              <i className="fas fa-envelope me-2" style={{ color: '#00baa3' }}></i>
                              E-posta
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="ornek@email.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              style={{ 
                                borderRadius: '12px',
                                border: '2px solid #e9ecef',
                                padding: '12px 15px',
                                fontSize: '1rem'
                              }}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: '#727475', fontWeight: '600' }}>
                              <i className="fas fa-phone me-2" style={{ color: '#ebc858' }}></i>
                              Telefon
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              name="phone"
                              placeholder="0555 555 55 55"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              style={{ 
                                borderRadius: '12px',
                                border: '2px solid #e9ecef',
                                padding: '12px 15px',
                                fontSize: '1rem'
                              }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Form.Group className="mb-4">
                        <Form.Label style={{ color: '#727475', fontWeight: '600' }}>
                          <i className="fas fa-message me-2" style={{ color: '#eb8958' }}></i>
                          Mesajınız (Opsiyonel)
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="message"
                          placeholder="ABAD'a iletmek istediğiniz mesajınız..."
                          value={formData.message}
                          onChange={handleInputChange}
                          style={{ 
                            borderRadius: '12px',
                            border: '2px solid #e9ecef',
                            padding: '12px 15px',
                            fontSize: '1rem'
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-5">
                        <Form.Check
                          type="checkbox"
                          id="kvkkConsent"
                          label={
                            <span style={{ fontSize: '0.95rem', color: '#727475' }}>
                              <strong>KVKK Aydınlatma Metni</strong>'ni okudum, kişisel verilerimin işlenmesine onay veriyorum.
                              <a 
                                href="/privacy-policy" 
                                className="ms-2" 
                                style={{ color: '#00baa3' }} 
                                target="_blank"
                              >
                                Detayları oku
                              </a>
                            </span>
                          }
                          required
                        />
                      </Form.Group>

                      <div className="text-center">
                        {paymentMethod === 'bankTransfer' ? (
                          donationAmount > 0 ? (
                            <div>
                              <Button
                                size="lg"
                                className="px-5 py-3 mb-3"
                                style={{ 
                                  borderRadius: '30px', 
                                  fontWeight: 'bold',
                                  fontSize: '1.2rem',
                                  minWidth: '350px',
                                  height: '60px',
                                  backgroundColor: '#ebc858',
                                  borderColor: '#ebc858',
                                  color: '#000',
                                  transition: 'all 0.3s ease'
                                }}
                                onClick={() => {
                                  alert(`Bağış Tutarı: ${donationAmount}₺\n\nIBAN: TR33 0006 4000 0011 2345 6789 01\nAlıcı: Anadolu Bilgelerini Araştırma Derneği\nAçıklama: ${formData.name ? `${formData.name} ${formData.surname}` : '[Ad Soyad]'} - ABAD Bağış\n\nHavale/EFT işleminizi yaptıktan sonra info@abad.org.tr adresine bilgi veriniz.`);
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.transform = 'translateY(-2px)';
                                  e.target.style.boxShadow = '0 8px 20px rgba(235,200,88,0.4)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.transform = 'translateY(0)';
                                  e.target.style.boxShadow = 'none';
                                }}
                              >
                                <i className="fas fa-university me-2"></i>
                                Havale Bilgilerini Göster - {donationAmount}₺
                              </Button>
                              <div className="mt-3">
                                <small className="text-muted" style={{ fontSize: '0.95rem' }}>
                                  Havale işleminizi yaptıktan sonra onay e-postası alacaksınız.
                                </small>
                              </div>
                            </div>
                          ) : (
                            <Button
                              size="lg"
                              className="px-5 py-3"
                              style={{ 
                                borderRadius: '30px',
                                fontSize: '1.2rem',
                                minWidth: '350px',
                                height: '60px',
                                backgroundColor: '#dee2e6',
                                borderColor: '#dee2e6',
                                color: '#6c757d'
                              }}
                              disabled
                            >
                              <i className="fas fa-university me-2"></i>
                              Tutarı Seçin
                            </Button>
                          )
                        ) : (
                          donationAmount > 0 ? (
                            <PaymentService
                              donationAmount={donationAmount}
                              donorInfo={formData}
                              onPaymentSuccess={handlePaymentSuccess}
                              onPaymentError={handlePaymentError}
                            />
                          ) : (
                            <Button
                              size="lg"
                              className="px-5 py-3"
                              style={{ 
                                backgroundColor: '#dee2e6',
                                borderColor: '#dee2e6',
                                color: '#6c757d',
                                borderRadius: '30px',
                                fontSize: '1.2rem',
                                minWidth: '350px',
                                height: '60px'
                              }}
                              disabled
                            >
                              <i className="fas fa-credit-card me-2"></i>
                              Tutarı Seçin
                            </Button>
                          )
                        )}
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </div>
  );
};

export default CertificatePage;