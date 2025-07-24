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
import { useState } from "react";
import PaymentService from "../components/PaymentService";

const CertificatePage = () => {
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
    // Simulate login redirect
    alert("Üye giriş sayfasına yönlendiriliyorsunuz...");
    setShowLoginModal(false);
  };

  return (
    <div className="tema-donation-page">
      {/* TEMA Benzeri Hero Section */}
      <section className="tema-hero-section" style={{ 
        background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
      }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="tema-hero-content">
                <h1 className="display-4 fw-bold mb-4" style={{ fontSize: '3.5rem' }}>
                  AYLIK DÜZENLİ BAĞIŞÇIMIZ OLUN
                </h1>
                <p className="lead mb-5" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                  Başta toprak olmak üzere tüm doğal varlıklarımızı korumak için yürüttüğümüz çalışmalara
                  destek olun.
                </p>
                
                {/* TEMA'nın Tam Tutar Seçim Sistemi */}
                <div className="tema-amount-selection mb-5">
                  <div className="d-flex justify-content-center gap-3 mb-4">
                    <Button
                      size="lg"
                      variant={selectedAmount === '50' ? 'light' : 'outline-light'}
                      className="px-4 py-3"
                      style={{ 
                        minWidth: '120px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        borderRadius: '25px'
                      }}
                      onClick={() => handleAmountSelect('50')}
                    >
                      50 ₺
                    </Button>
                    <Button
                      size="lg"
                      variant={selectedAmount === '100' ? 'light' : 'outline-light'}
                      className="px-4 py-3"
                      style={{ 
                        minWidth: '120px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        borderRadius: '25px'
                      }}
                      onClick={() => handleAmountSelect('100')}
                    >
                      100 ₺
                    </Button>
                    <Button
                      size="lg"
                      variant={selectedAmount === '200' ? 'light' : 'outline-light'}
                      className="px-4 py-3"
                      style={{ 
                        minWidth: '120px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        borderRadius: '25px',
                        backgroundColor: selectedAmount === '200' ? '#4CAF50' : 'transparent',
                        borderColor: selectedAmount === '200' ? '#4CAF50' : 'white',
                        color: selectedAmount === '200' ? 'white' : 'white'
                      }}
                      onClick={() => handleAmountSelect('200')}
                    >
                      200 ₺
                    </Button>
                  </div>
                  
                  <div className="tema-custom-amount">
                    <p className="mb-2" style={{ opacity: 0.8 }}>veya</p>
                    <Form.Control
                      type="number"
                      placeholder="Başka bir tutar girin"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="text-center mx-auto"
                      style={{
                        maxWidth: '250px',
                        borderRadius: '25px',
                        padding: '12px 20px',
                        fontSize: '1.1rem',
                        border: '2px solid white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        color: 'white'
                      }}
                      min="1"
                    />
                  </div>
                </div>

                {/* TEMA Benzeri Ana Bağış Butonu */}
                <Button
                  size="lg"
                  className="tema-main-donate-btn px-5 py-3"
                  style={{
                    backgroundColor: '#FF6B35',
                    borderColor: '#FF6B35',
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    minWidth: '200px'
                  }}
                  onClick={() => setShowLoginModal(true)}
                >
                  HEMEN BAĞIŞ YAP
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Login/Guest Modal - TEMA Benzeri */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered size="md">
        <Modal.Header closeButton style={{ backgroundColor: '#2E7D32', color: 'white' }}>
          <Modal.Title>Giriş Yapın</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <div className="text-center mb-4">
            <p className="text-muted">
              Veya üzem kayıt olmak için işlem üz ilk bağışınızı yapmak için giriş yapın
              o zaman detaylarınız bizim APP büründə saqland.
            </p>
          </div>
          
          <Form className="mb-4">
            <Form.Group className="mb-3">
              <Form.Label>E-posta Adresiniz</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="ornek@email.com"
                style={{ borderRadius: '8px' }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Şifreniz</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="*******"
                style={{ borderRadius: '8px' }}
              />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Form.Check type="checkbox" label="Beni hatırla" />
              <a href="#" className="text-decoration-none" style={{ color: '#2E7D32' }}>
                Şifremi mi unutturum?
              </a>
            </div>
          </Form>
          
          <div className="d-grid gap-2">
            <Button 
              variant="success" 
              size="lg"
              onClick={handleLogin}
              style={{ 
                backgroundColor: '#2E7D32',
                borderColor: '#2E7D32',
                borderRadius: '8px'
              }}
            >
              GİRİŞ YAP
            </Button>
            <Button 
              variant="outline-success" 
              size="lg"
              onClick={handleGuestContinue}
              style={{ 
                borderColor: '#2E7D32',
                color: '#2E7D32',
                borderRadius: '8px'
              }}
            >
              ÜYE OLMADAN DEVAM ET
            </Button>
          </div>
          
          <div className="text-center mt-3">
            <small className="text-muted">
              Hesabınız yok mu? <a href="#" style={{ color: '#2E7D32' }}>Şimdi kaydolun!</a>
            </small>
          </div>
        </Modal.Body>
      </Modal>

      {/* Main Donation Form - Only show if guest or logged in */}
      {(isGuest || showSuccess) && (
        <section className="tema-donation-form py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <Card className="shadow border-0" style={{ borderRadius: '15px' }}>
                  <Card.Body className="p-5">
                    {showSuccess && (
                      <Alert variant="success" className="mb-4" style={{ borderRadius: '10px' }}>
                        <h5><i className="fas fa-check-circle me-2"></i>Bağış Tamamlandı!</h5>
                        <p className="mb-1">İşlem No: {paymentResult?.transactionId}</p>
                        <p className="mb-1">Tutar: {paymentResult?.amount}₺</p>
                        <p className="mb-0">Teşekkür ederiz! Bağışınız için bir onay e-postası gönderilecektir.</p>
                      </Alert>
                    )}

                    {/* Donation Type Selection */}
                    <div className="tema-donation-type text-center mb-4">
                      <h4 className="mb-4" style={{ color: '#2E7D32' }}>Bağış Türünü Seçin</h4>
                      <div className="btn-group" role="group">
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
                          className="btn btn-outline-success px-4 py-2" 
                          htmlFor="oneTime"
                          style={{ borderRadius: '25px 0 0 25px', minWidth: '150px' }}
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
                          className="btn btn-outline-success px-4 py-2" 
                          htmlFor="monthly"
                          style={{ borderRadius: '0 25px 25px 0', minWidth: '150px' }}
                        >
                          Aylık
                        </label>
                      </div>
                    </div>

                    {/* Payment Method Selection */}
                    <div className="tema-payment-method mb-4">
                      <h5 className="text-center mb-3" style={{ color: '#2E7D32' }}>Ödeme Yöntemi</h5>
                      <Row>
                        <Col md={6} className="mb-3">
                          <div 
                            className={`payment-option p-3 border rounded-3 text-center ${paymentMethod === 'creditCard' ? 'border-success bg-light' : 'border-secondary'}`}
                            style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                            onClick={() => handlePaymentMethodChange('creditCard')}
                          >
                            <input 
                              type="radio" 
                              name="paymentMethod" 
                              value="creditCard"
                              checked={paymentMethod === 'creditCard'}
                              onChange={() => handlePaymentMethodChange('creditCard')}
                              className="me-2"
                            />
                            <i className="fas fa-credit-card me-2 text-primary" style={{ fontSize: '1.2rem' }}></i>
                            <strong>Kredi Kartı ile Öde</strong>
                          </div>
                        </Col>
                        <Col md={6} className="mb-3">
                          <div 
                            className={`payment-option p-3 border rounded-3 text-center ${paymentMethod === 'bankTransfer' ? 'border-success bg-light' : 'border-secondary'}`}
                            style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                            onClick={() => handlePaymentMethodChange('bankTransfer')}
                          >
                            <input 
                              type="radio" 
                              name="paymentMethod" 
                              value="bankTransfer"
                              checked={paymentMethod === 'bankTransfer'}
                              onChange={() => handlePaymentMethodChange('bankTransfer')}
                              className="me-2"
                            />
                            <i className="fas fa-university me-2 text-warning" style={{ fontSize: '1.2rem' }}></i>
                            <strong>Havale / EFT ile Öde</strong>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* IBAN Information - Dynamic Display */}
                    {paymentMethod === 'bankTransfer' && (
                      <div className="tema-iban-info mb-4 p-4 rounded-3" style={{ backgroundColor: '#e8f5e8', border: '1px solid #4CAF50' }}>
                        <h6 style={{ color: '#2E7D32' }} className="mb-3">
                          <i className="fas fa-university me-2"></i>
                          Havale / EFT Bilgileri
                        </h6>
                        <Row>
                          <Col md={8}>
                            <div className="iban-details">
                              <p className="mb-2"><strong>IBAN:</strong> <code>TR33 0006 4000 0011 2345 6789 01</code></p>
                              <p className="mb-2"><strong>Alıcı Adı:</strong> Anadolu Bilgelerini Araştırma Derneği</p>
                              <p className="mb-2"><strong>Açıklama:</strong> {formData.name ? `${formData.name} ${formData.surname}` : '[Ad Soyad]'} - Bağış</p>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="alert alert-warning p-2 small">
                              <strong>Not:</strong> Lütfen açıklama kısmına Ad Soyad ve 'Bağış' ibaresini ekleyin.
                            </div>
                          </Col>
                        </Row>
                      </div>
                    )}

                    {/* Donor Information Form */}
                    <Form>
                      <h5 className="mb-4" style={{ color: '#2E7D32' }}>Destekçi Bilgileri</h5>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">
                              <i className="fas fa-user me-2 text-success"></i>
                              Adınız
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              placeholder="Adınızı girin"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              style={{ borderRadius: '8px' }}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">
                              <i className="fas fa-user me-2 text-success"></i>
                              Soyadınız
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="surname"
                              placeholder="Soyadınızı girin"
                              value={formData.surname}
                              onChange={handleInputChange}
                              required
                              style={{ borderRadius: '8px' }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">
                              <i className="fas fa-envelope me-2 text-primary"></i>
                              E-posta
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="ornek@email.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              style={{ borderRadius: '8px' }}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">
                              <i className="fas fa-phone me-2 text-warning"></i>
                              Telefon
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              name="phone"
                              placeholder="0555 555 55 55"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              style={{ borderRadius: '8px' }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Form.Group className="mb-4">
                        <Form.Label className="fw-semibold">
                          <i className="fas fa-message me-2 text-info"></i>
                          Özel Mesaj (Opsiyonel)
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="message"
                          placeholder="Özel mesajınızı buraya yazabilirsiniz..."
                          value={formData.message}
                          onChange={handleInputChange}
                          style={{ borderRadius: '8px' }}
                        />
                      </Form.Group>

                      {/* KVKK Consent */}
                      <Form.Group className="mb-4">
                        <Form.Check
                          type="checkbox"
                          id="kvkkConsent"
                          label={
                            <span>
                              <strong>KVKK Aydınlatma ve Rıza Metni</strong> kapsamında kişisel verilerimin işlenmesine onay veriyorum.
                              <a href="/privacy-policy" className="ms-2" style={{ color: '#2E7D32' }} target="_blank">
                                Detayları oku
                              </a>
                            </span>
                          }
                          required
                        />
                      </Form.Group>

                      {/* Payment Button */}
                      <div className="text-center">
                        {paymentMethod === 'bankTransfer' ? (
                          // Bank Transfer Case
                          donationAmount > 0 ? (
                            <div>
                              <Button
                                variant="warning"
                                size="lg"
                                className="px-5 py-3 mb-3"
                                style={{ borderRadius: '25px', fontWeight: 'bold' }}
                                onClick={() => {
                                  alert(`Bağış Tutarı: ${donationAmount}₺\n\nIBAN: TR33 0006 4000 0011 2345 6789 01\nAlıcı: Anadolu Bilgelerini Araştırma Derneği\nAçıklama: ${formData.name ? `${formData.name} ${formData.surname}` : '[Ad Soyad]'} - Bağış\n\nHavale/EFT işleminizi yaptıktan sonra bilgi@abad.org.tr adresine bilgi veriniz.`);
                                }}
                              >
                                <i className="fas fa-university me-2"></i>
                                Havale/EFT Bilgilerini Göster - {donationAmount}₺
                              </Button>
                              <div className="mt-2">
                                <small className="text-muted">
                                  Havale/EFT işleminizi yaptıktan sonra onay e-postası gönderilecektir.
                                </small>
                              </div>
                            </div>
                          ) : (
                            <Button
                              variant="warning"
                              size="lg"
                              className="px-5 py-3"
                              style={{ borderRadius: '25px' }}
                              disabled
                            >
                              <i className="fas fa-university me-2"></i>
                              Bağış Tutarını Seçin
                            </Button>
                          )
                        ) : (
                          // Credit Card Case
                          donationAmount > 0 ? (
                            <PaymentService
                              donationAmount={donationAmount}
                              donorInfo={formData}
                              onPaymentSuccess={handlePaymentSuccess}
                              onPaymentError={handlePaymentError}
                            />
                          ) : (
                            <Button
                              variant="success"
                              size="lg"
                              className="px-5 py-3"
                              style={{ 
                                backgroundColor: '#2E7D32',
                                borderColor: '#2E7D32',
                                borderRadius: '25px'
                              }}
                              disabled
                            >
                              <i className="fas fa-credit-card me-2"></i>
                              Bağış Tutarını Seçin
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