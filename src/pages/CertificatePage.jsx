import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import PaymentService from "../components/PaymentService";

const CertificatePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    certificateName: "",
    seedCount: "",
    message: "",
  });

  const [donationAmount, setDonationAmount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "seedCount") {
      const prices = {
        1: 50,
        5: 225,
        10: 450,
        25: 1000,
      };
      setDonationAmount(prices[value] || 0);
    }
  };

  const handlePaymentSuccess = (result) => {
    setPaymentResult(result);
    setShowSuccess(true);
  };

  const handlePaymentError = (error) => {
    console.error("Payment error:", error);
  };
  return (
    <div className="certificate-page">
      {/* Hero Section */}
      <section className="certificate-hero-section py-5">
        <Container>
          <Row className="align-items-center min-vh-75">
            <Col lg={6}>
              <div className="hero-content">
                <div className="hero-badge mb-3">
                  <span className="badge bg-warning px-3 py-2 fs-6">
                    🎁 ÖZEL KAMPANYA
                  </span>
                </div>
                <h1 className="display-3 fw-bold text-white mb-4 hero-title">
                  e-Sertifikalı
                </h1>
                <h2 className="h1 text-warning mb-4 hero-subtitle">
                  Meyve Fidan Bağışları
                </h2>
                <blockquote className="blockquote hero-quote">
                  <p
                    className="lead text-white mb-4"
                    style={{ fontSize: "1.8rem", fontStyle: "italic" }}
                  >
                    "Baban İçin Toprağa Hayat,
                    <br />
                    Gökyüzüne Umut."
                  </p>
                  <footer className="blockquote-footer text-warning fs-5">
                    <strong>E-sertifikan Babanın İsmiyle Yeşersin!</strong>
                  </footer>
                </blockquote>
              </div>
            </Col>
            <Col lg={6}>
              <div className="certificate-preview">
                <Card className="shadow-lg border-0 certificate-card">
                  <Card.Body className="p-0">
                    <div className="certificate-design-modern text-center">
                      <div className="certificate-header">
                        <div className="certificate-logo mb-3">
                          <i
                            className="fas fa-certificate text-warning"
                            style={{ fontSize: "3rem" }}
                          ></i>
                        </div>
                        <h3 className="text-success mb-2 fw-bold">
                          BABALAR GÜNÜ
                        </h3>
                        <h4 className="text-primary mb-4 fw-bold">
                          MEYVE FİDANI BAĞIŞI SERTİFİKASI
                        </h4>
                      </div>
                      <div className="certificate-content">
                        <div className="certificate-field mb-4">
                          <label className="text-muted small">Sevgili</label>
                          <div className="certificate-input-line">
                            {formData.certificateName ||
                              "........................"}
                          </div>
                        </div>
                        <p className="mb-4 text-dark">
                          Babalar Günü anısına,
                          <br />
                          <strong className="text-success">
                            {formData.seedCount || "......"} adet meyve fidanı
                          </strong>{" "}
                          bağışladı.
                        </p>
                        <p className="mb-4 text-dark">
                          ABAD olarak Doğaya katkınızdan
                          <br />
                          dolayı teşekkür eder,
                        </p>
                        <p
                          className="text-success fw-bold mb-4"
                          style={{ fontSize: "1.2rem" }}
                        >
                          BABALAR GÜNÜMÜZÜ
                          <br />
                          KUTLARIZ
                        </p>
                      </div>
                      <div className="certificate-footer">
                        <div className="certificate-icons mb-3">
                          <span className="badge bg-success me-2 px-3 py-2">
                            🌳 DOĞA
                          </span>
                          <span className="badge bg-warning px-3 py-2">
                            🎁 BAĞIŞ
                          </span>
                        </div>
                        <div className="certificate-brand">
                          <span className="fw-bold text-primary">ABAD</span>
                          <small className="text-muted d-block">
                            Anadolu Bilgelerini Araştırma Derneği
                          </small>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Donation Form Section */}
      <section className="donation-section py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="shadow-lg border-0 donation-card">
                <Card.Body className="p-5">
                  <div className="text-center mb-5">
                    <div className="donation-icon mb-3">
                      <i
                        className="fas fa-heart text-danger"
                        style={{ fontSize: "3rem" }}
                      ></i>
                    </div>
                    <h3 className="text-success fw-bold mb-2">
                      Fidan Bağışı Yapın
                    </h3>
                    <p className="text-muted">
                      Doğaya katkı sağlayın, gelecek nesillere yeşil bir dünya
                      bırakın
                    </p>
                  </div>
                  {showSuccess && (
                    <Alert variant="success" className="mb-4">
                      <h5>Bağış Tamamlandı!</h5>
                      <p>İşlem No: {paymentResult?.transactionId}</p>
                      <p>Tutar: {paymentResult?.amount}₺</p>
                      <p>E-sertifikanız e-posta adresinize gönderilecektir.</p>
                    </Alert>
                  )}

                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold text-dark">
                            <i className="fas fa-user me-2 text-primary"></i>
                            Bağışçı Adı
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Adınızı girin"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="form-control-modern"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold text-dark">
                            <i className="fas fa-user me-2 text-primary"></i>
                            Bağışçı Soyadı
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="surname"
                            placeholder="Soyadınızı girin"
                            value={formData.surname}
                            onChange={handleInputChange}
                            required
                            className="form-control-modern"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold text-dark">
                            <i className="fas fa-envelope me-2 text-success"></i>
                            E-posta
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="E-posta adresinizi girin"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="form-control-modern"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold text-dark">
                            <i className="fas fa-phone me-2 text-warning"></i>
                            Telefon
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            placeholder="Telefon numaranızı girin"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="form-control-modern"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold text-dark">
                        <i className="fas fa-certificate me-2 text-warning"></i>
                        Sertifikada Yazılacak İsim
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="certificateName"
                        placeholder="Sertifikada görünecek ismi girin"
                        value={formData.certificateName}
                        onChange={handleInputChange}
                        required
                        className="form-control-modern"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold text-dark">
                        <i className="fas fa-seedling me-2 text-success"></i>
                        Fidan Sayısı
                      </Form.Label>
                      <Form.Select
                        name="seedCount"
                        value={formData.seedCount}
                        onChange={handleInputChange}
                        required
                        className="form-control-modern"
                      >
                        <option value="">Fidan sayısını seçin</option>
                        <option value="1">1 Fidan - 50₺</option>
                        <option value="5">5 Fidan - 225₺</option>
                        <option value="10">10 Fidan - 450₺</option>
                        <option value="25">25 Fidan - 1000₺</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label className="fw-semibold text-dark">
                        <i className="fas fa-message me-2 text-info"></i>
                        Özel Mesaj (Opsiyonel)
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        placeholder="Özel mesajınızı buraya yazabilirsiniz"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-control-modern"
                      />
                    </Form.Group>
                    <div className="text-center">
                      {donationAmount > 0 ? (
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
                          disabled
                        >
                          Fidan Sayısını Seçin
                        </Button>
                      )}
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CertificatePage;
