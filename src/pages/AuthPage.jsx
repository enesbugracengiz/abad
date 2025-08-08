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
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";

const AuthPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    surname: "",
    phone: "",
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (!isLogin) {
        // Registration validation
        if (formData.password !== formData.confirmPassword) {
          throw new Error("Şifreler eşleşmiyor");
        }
        if (formData.password.length < 6) {
          throw new Error("Şifre en az 6 karakter olmalıdır");
        }
      }

      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
      const response = await fetch(`http://localhost:5001${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Bir hata oluştu");
      }

      if (isLogin) {
        login(data.token, data.user);
        setSuccess("Giriş başarılı! Yönlendiriliyorsunuz...");
        setTimeout(() => {
          navigate("/donate");
        }, 1500);
      } else {
        setSuccess("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
        setTimeout(() => {
          setIsLogin(true);
          setFormData({
            email: formData.email,
            password: "",
            confirmPassword: "",
            name: "",
            surname: "",
            phone: "",
            rememberMe: false,
          });
        }, 2000);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    alert("Şifre sıfırlama linki e-posta adresinize gönderilecektir.");
  };

  const handleGuestContinue = () => {
    navigate("/donate");
  };

  return (
    <div
      style={{
        fontFamily: "Open Sans, sans-serif",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <Header />

      <section className="py-5">
        <Container>
          <Row
            className="justify-content-center align-items-center"
            style={{ minHeight: "80vh" }}
          >
            <Col lg={5} md={7} sm={9}>
              <Card
                className="shadow-lg border-0"
                style={{
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              >
                <Card.Body className="p-5" style={{ backgroundColor: "white" }}>
                  {/* Header */}
                  <div className="text-center mb-4">
                    <img
                      src="/src/assets/images/abad-logo-seffaf-buyuk.png"
                      alt="ABAD Logo"
                      style={{ height: "60px", marginBottom: "1rem" }}
                    />
                    <h2
                      className="fw-bold mb-3"
                      style={{
                        color: "#2c5aa0",
                        fontSize: "2rem",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      {isLogin ? "Giriş Yapın" : "Üye Olun"}
                    </h2>
                    <p
                      className="text-muted mb-4"
                      style={{ fontSize: "1rem", lineHeight: "1.5" }}
                    >
                      {isLogin
                        ? "Web sitesi üyesi olarak giriş yapmak için lütfen e-posta adresinizi ve şifrenizi yazın. GİRİŞ YAP butonuna basın."
                        : "ABAD ailesine katılmak için lütfen aşağıdaki bilgileri doldurun."}
                    </p>
                  </div>

                  {/* Error/Success Messages */}
                  {error && (
                    <Alert
                      variant="danger"
                      className="mb-4"
                      style={{ borderRadius: "12px" }}
                    >
                      {error}
                    </Alert>
                  )}
                  {success && (
                    <Alert
                      variant="success"
                      className="mb-4"
                      style={{ borderRadius: "12px" }}
                    >
                      {success}
                    </Alert>
                  )}

                  {/* Form */}
                  <Form onSubmit={handleSubmit}>
                    {/* Registration Fields */}
                    {!isLogin && (
                      <>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label
                                style={{ fontWeight: "600", color: "#727475" }}
                              >
                                Adınız
                              </Form.Label>
                              <Form.Control
                                type="text"
                                name="name"
                                placeholder="Adınızı girin"
                                value={formData.name}
                                onChange={handleInputChange}
                                required={!isLogin}
                                style={{
                                  borderRadius: "12px",
                                  border: "2px solid #e9ecef",
                                  padding: "12px 15px",
                                  fontSize: "1rem",
                                  backgroundColor: "#f8f9fa",
                                }}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label
                                style={{ fontWeight: "600", color: "#727475" }}
                              >
                                Soyadınız
                              </Form.Label>
                              <Form.Control
                                type="text"
                                name="surname"
                                placeholder="Soyadınızı girin"
                                value={formData.surname}
                                onChange={handleInputChange}
                                required={!isLogin}
                                style={{
                                  borderRadius: "12px",
                                  border: "2px solid #e9ecef",
                                  padding: "12px 15px",
                                  fontSize: "1rem",
                                  backgroundColor: "#f8f9fa",
                                }}
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group className="mb-3">
                          <Form.Label
                            style={{ fontWeight: "600", color: "#727475" }}
                          >
                            Telefon
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            placeholder="0555 555 55 55"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required={!isLogin}
                            style={{
                              borderRadius: "12px",
                              border: "2px solid #e9ecef",
                              padding: "12px 15px",
                              fontSize: "1rem",
                              backgroundColor: "#f8f9fa",
                            }}
                          />
                        </Form.Group>
                      </>
                    )}

                    {/* Email Field */}
                    <Form.Group className="mb-3">
                      <Form.Label
                        style={{ fontWeight: "600", color: "#727475" }}
                      >
                        E-posta Adresiniz
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="email@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{
                          borderRadius: "12px",
                          border: "2px solid #e9ecef",
                          padding: "12px 15px",
                          fontSize: "1rem",
                          backgroundColor: "#f8f9fa",
                        }}
                      />
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group className="mb-3">
                      <Form.Label
                        style={{ fontWeight: "600", color: "#727475" }}
                      >
                        Şifreniz
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="········"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        style={{
                          borderRadius: "12px",
                          border: "2px solid #e9ecef",
                          padding: "12px 15px",
                          fontSize: "1rem",
                          backgroundColor: "#f8f9fa",
                        }}
                      />
                    </Form.Group>

                    {/* Confirm Password (Registration only) */}
                    {!isLogin && (
                      <Form.Group className="mb-3">
                        <Form.Label
                          style={{ fontWeight: "600", color: "#727475" }}
                        >
                          Şifrenizi Tekrar Girin
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          placeholder="········"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required={!isLogin}
                          style={{
                            borderRadius: "12px",
                            border: "2px solid #e9ecef",
                            padding: "12px 15px",
                            fontSize: "1rem",
                            backgroundColor: "#f8f9fa",
                          }}
                        />
                      </Form.Group>
                    )}

                    {/* Remember Me / Forgot Password (Login only) */}
                    {isLogin && (
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <Form.Check
                          type="checkbox"
                          name="rememberMe"
                          label="Beni Hatırla"
                          checked={formData.rememberMe}
                          onChange={handleInputChange}
                          style={{ fontSize: "0.95rem", color: "#727475" }}
                        />
                        <Button
                          variant="link"
                          onClick={handleForgotPassword}
                          className="p-0 text-decoration-none"
                          style={{ color: "#2c5aa0", fontSize: "0.95rem" }}
                        >
                          Şifrenizi mi unuttunuz?
                        </Button>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="d-grid mb-3">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={loading}
                        style={{
                          backgroundColor: "#2E8B57",
                          borderColor: "#2E8B57",
                          borderRadius: "15px",
                          fontWeight: "bold",
                          padding: "12px",
                          fontSize: "1.1rem",
                          fontFamily: "Open Sans, sans-serif",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#228B22";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "#2E8B57";
                        }}
                      >
                        {loading
                          ? "İşlem Yapılıyor..."
                          : isLogin
                          ? "GİRİŞ YAP"
                          : "ÜYE OL"}
                      </Button>
                    </div>

                    {/* Toggle Login/Register */}
                    <div className="text-center mb-3">
                      <span
                        className="text-muted"
                        style={{ fontSize: "0.95rem" }}
                      >
                        {isLogin
                          ? "Hesabınız yok mu?"
                          : "Zaten hesabınız var mı?"}
                      </span>
                      <Button
                        variant="link"
                        onClick={() => {
                          setIsLogin(!isLogin);
                          setError("");
                          setSuccess("");
                          setFormData({
                            email: "",
                            password: "",
                            confirmPassword: "",
                            name: "",
                            surname: "",
                            phone: "",
                            rememberMe: false,
                          });
                        }}
                        className="p-0 ms-2 text-decoration-none fw-bold"
                        style={{ color: "#2c5aa0", fontSize: "0.95rem" }}
                      >
                        {isLogin ? "Hemen hesap oluşturun!" : "Giriş yapın!"}
                      </Button>
                    </div>

                    {/* Continue Without Membership */}
                    <div className="d-grid">
                      <Button
                        variant="outline-success"
                        size="lg"
                        onClick={handleGuestContinue}
                        style={{
                          borderColor: "#2E8B57",
                          color: "#2E8B57",
                          borderRadius: "15px",
                          fontWeight: "bold",
                          padding: "12px",
                          fontSize: "1.1rem",
                          borderWidth: "2px",
                          fontFamily: "Open Sans, sans-serif",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#2E8B57";
                          e.target.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.color = "#2E8B57";
                        }}
                      >
                        ÜYE OLMADAN DEVAM ET
                      </Button>
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

export default AuthPage;
