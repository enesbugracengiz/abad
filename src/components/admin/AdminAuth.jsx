import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";

const AdminAuth = ({ onAuthenticate }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Basit authentication - production'da JWT kullanılmalı
  const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "abad2025",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API call delay
    setTimeout(() => {
      if (
        formData.username === ADMIN_CREDENTIALS.username &&
        formData.password === ADMIN_CREDENTIALS.password
      ) {
        onAuthenticate(true);
      } else {
        setError("Kullanıcı adı veya şifre hatalı!");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div 
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #2c5aa0 0%, #1a4480 100%)",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <Card className="shadow-lg border-0">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <img
                    src="/src/assets/harita/web-logo-yazili-512-x-512-piksel.png"
                    alt="ABAD Logo"
                    style={{ height: "80px", width: "auto" }}
                    className="mb-3"
                  />
                  <h4 className="text-dark fw-bold">Yönetici Girişi</h4>
                  <p className="text-muted">ABAD Yönetici Paneli</p>
                </div>

                {error && (
                  <Alert variant="danger" className="mb-4">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Kullanıcı Adı</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Kullanıcı adınızı girin"
                      required
                      className="py-3"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Şifre</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Şifrenizi girin"
                      required
                      className="py-3"
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 py-3"
                    style={{
                      backgroundColor: "#2c5aa0",
                      border: "none",
                      borderRadius: "10px",
                    }}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Giriş Yapılıyor...
                      </>
                    ) : (
                      "Giriş Yap"
                    )}
                  </Button>
                </Form>

                <div className="text-center mt-4">
                  <small className="text-muted">
                    Demo: admin / abad2025
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminAuth;