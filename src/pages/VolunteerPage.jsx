import React, { useState } from "react";
import Header from "../components/Header";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    tcNumber: "",
    email: "",
    phone: "",
    birthDate: "",
    gender: "",
    education: "",
    profession: "",
    motivation: "",
    socialMedia: [],
    city: "",
    supportAreas: [],
    interestAreas: "",
    otherSupportAreas: "",
    howDidYouHear: [],
    volunteerMotivation: "",
    wantToParticipate: ""
  });

  const [showExtendedForm, setShowExtendedForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(i => i !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic here
  };

  return (
    <div className="volunteer-page bg-white">
      <Header />

      <main className="main-content">
        {/* Hero Section */}
        <section
          className="py-5 mb-5"
          style={{
            background: "linear-gradient(135deg, #e8f5e8 0%, #f8f9fa 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="white" opacity="0.1"/><circle cx="30" cy="30" r="1" fill="white" opacity="0.1"/><circle cx="60" cy="20" r="1" fill="white" opacity="0.1"/><circle cx="80" cy="50" r="1" fill="white" opacity="0.1"/><circle cx="20" cy="70" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="80" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\') repeat',
              zIndex: 1,
            }}
          />

          <Container className="position-relative" style={{ zIndex: 2 }}>
            <Row className="align-items-center min-vh-50">
              <Col md={12} className="text-center">
                <div className="mb-4">
                  <img
                    src="/src/assets/images/abad-logo-seffaf-buyuk.png"
                    alt="ABAD Logo"
                    style={{ height: "100px", marginBottom: "2rem" }}
                  />
                </div>
                <h1
                  className="fw-bold mb-4"
                  style={{
                    fontSize: "4rem",
                    color: "#5a6c57",
                    fontFamily: "Roboto Condensed, sans-serif",
                    lineHeight: "1.2",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  GÖNÜLLÜ OL
                </h1>
                <h2
                  className="mb-0"
                  style={{
                    fontSize: "2rem",
                    color: "#2c5aa0",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  BİZE KATIL
                </h2>
              </Col>
            </Row>
          </Container>
        </section>

        <Container fluid className="px-5" style={{ maxWidth: "1400px" }}>
          <Row>
            {/* Sol Taraf - Form */}
            <Col lg={8}>
              <Card
                className="border-0 shadow-lg mb-5"
                style={{
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              >
                <Card.Header
                  className="text-center py-4"
                  style={{
                    background: "linear-gradient(135deg, #6B8E6B 0%, #5A7B5A 100%)",
                    color: "white",
                    border: "none",
                  }}
                >
                  <h3
                    className="mb-0"
                    style={{
                      fontSize: "2rem",
                      fontFamily: "Roboto Condensed, sans-serif",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Gönüllü Ol, Bize Katıl
                  </h3>
                </Card.Header>

                <Card.Body className="p-5">
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      {/* Kişisel Bilgiler */}
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label
                            style={{
                              fontWeight: "600",
                              color: "#333",
                              fontFamily: "Open Sans, sans-serif",
                            }}
                          >
                            Ad ve Soyadınızı giriniz *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Ad ve Soyadınızı giriniz"
                            required
                            style={{
                              borderRadius: "10px",
                              border: "2px solid #e9ecef",
                              padding: "12px",
                            }}
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label
                            style={{
                              fontWeight: "600",
                              color: "#333",
                              fontFamily: "Open Sans, sans-serif",
                            }}
                          >
                            T.C. Kimlik Numaranızı giriniz *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="tcNumber"
                            value={formData.tcNumber}
                            onChange={handleInputChange}
                            placeholder="T.C Kimlik Numaranızı giriniz"
                            required
                            style={{
                              borderRadius: "10px",
                              border: "2px solid #e9ecef",
                              padding: "12px",
                            }}
                          />
                        </Form.Group>
                      </Col>

                      {/* Cinsiyet */}
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Label
                            style={{
                              fontWeight: "600",
                              color: "#333",
                              fontFamily: "Open Sans, sans-serif",
                            }}
                          >
                            Cinsiyetiniz *
                          </Form.Label>
                          <div className="d-flex gap-4 mt-2">
                            <Form.Check
                              type="radio"
                              id="female"
                              name="gender"
                              value="female"
                              label="Kadın"
                              onChange={handleInputChange}
                              style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                            <Form.Check
                              type="radio"
                              id="male"
                              name="gender"
                              value="male"
                              label="Erkek"
                              onChange={handleInputChange}
                              style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      {/* İletişim Bilgileri */}
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label
                            style={{
                              fontWeight: "600",
                              color: "#333",
                              fontFamily: "Open Sans, sans-serif",
                            }}
                          >
                            E-posta Adresinizi Giriniz *
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="E-posta adresinizi giriniz"
                            required
                            style={{
                              borderRadius: "10px",
                              border: "2px solid #e9ecef",
                              padding: "12px",
                            }}
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label
                            style={{
                              fontWeight: "600",
                              color: "#333",
                              fontFamily: "Open Sans, sans-serif",
                            }}
                          >
                            Telefon Numaranızı Giriniz *
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Telefon numaranızı giriniz"
                            required
                            style={{
                              borderRadius: "10px",
                              border: "2px solid #e9ecef",
                              padding: "12px",
                            }}
                          />
                        </Form.Group>
                      </Col>

                      {/* Doğum Tarihi ve Eğitim */}
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label
                            style={{
                              fontWeight: "600",
                              color: "#333",
                              fontFamily: "Open Sans, sans-serif",
                            }}
                          >
                            Doğum Tarihiniz *
                          </Form.Label>
                          <Form.Control
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleInputChange}
                            required
                            style={{
                              borderRadius: "10px",
                              border: "2px solid #e9ecef",
                              padding: "12px",
                            }}
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label
                            style={{
                              fontWeight: "600",
                              color: "#333",
                              fontFamily: "Open Sans, sans-serif",
                            }}
                          >
                            Eğitim Durumunuz *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="education"
                            value={formData.education}
                            onChange={handleInputChange}
                            placeholder="Eğitim durumunuzu giriniz"
                            required
                            style={{
                              borderRadius: "10px",
                              border: "2px solid #e9ecef",
                              padding: "12px",
                            }}
                          />
                          <Form.Text className="text-muted">
                            * (Öğrenciyseniz okul, bölüm, sınıf)
                          </Form.Text>
                        </Form.Group>
                      </Col>

                      {/* Meslek */}
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Label
                            style={{
                              fontWeight: "600",
                              color: "#333",
                              fontFamily: "Open Sans, sans-serif",
                            }}
                          >
                            Mesleğiniz *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="profession"
                            value={formData.profession}
                            onChange={handleInputChange}
                            placeholder="Mesleğinizi giriniz"
                            required
                            style={{
                              borderRadius: "10px",
                              border: "2px solid #e9ecef",
                              padding: "12px",
                            }}
                          />
                        </Form.Group>
                      </Col>


                      {/* Form devamı için tıklayınız */}
                      <Col md={12}>
                        <div className="text-center mb-4">
                          <button
                            type="button"
                            onClick={() => setShowExtendedForm(!showExtendedForm)}
                            style={{
                              padding: "15px 30px",
                              backgroundColor: "#f8f9fa",
                              borderRadius: "10px",
                              border: "2px dashed #6B8E6B",
                              color: "#6B8E6B",
                              fontFamily: "Open Sans, sans-serif",
                              fontWeight: "600",
                              fontSize: "1.1rem",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                              width: "100%",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#6B8E6B";
                              e.target.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "#f8f9fa";
                              e.target.style.color = "#6B8E6B";
                            }}
                          >
                            {showExtendedForm ? "⬆ Formun devamını gizle ⬆" : "⬇ Formun devamı için tıklayınız ⬇"}
                          </button>
                        </div>
                      </Col>

                      {/* Sosyal Medya Hesapları */}
                      {showExtendedForm && (
                        <Col md={12}>
                          <Form.Group className="mb-4">
                            <Form.Label
                              style={{
                                fontWeight: "600",
                                color: "#333",
                                fontFamily: "Open Sans, sans-serif",
                              }}
                            >
                              Sosyal Medya Hesaplarınızı Takip Ediyor musunuz? *
                            </Form.Label>
                            <div className="mt-3">
                              {["Instagram", "Facebook", "Youtube", "Twitter"].map((platform) => (
                                <Form.Check
                                  key={platform}
                                  type="checkbox"
                                  id={platform}
                                  label={platform}
                                  checked={formData.socialMedia.includes(platform)}
                                  onChange={() => handleCheckboxChange('socialMedia', platform)}
                                  className="mb-2"
                                  style={{ fontFamily: "Open Sans, sans-serif" }}
                                />
                              ))}
                            </div>
                          </Form.Group>
                        </Col>
                      )}

                      {/* Yaşadığınız Şehir */}
                      {showExtendedForm && (
                        <Col md={12}>
                          <Form.Group className="mb-3">
                            <Form.Label
                              style={{
                                fontWeight: "600",
                                color: "#333",
                                fontFamily: "Open Sans, sans-serif",
                              }}
                            >
                              Yaşadığınız Şehir *
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              placeholder="Yaşadığınız şehri giriniz"
                              required
                              style={{
                                borderRadius: "10px",
                                border: "2px solid #e9ecef",
                                padding: "12px",
                              }}
                            />
                          </Form.Group>
                        </Col>
                      )}

                      {/* Destek Verebileceğiniz Alanlar */}
                      {showExtendedForm && (
                        <Col md={12}>
                          <Form.Group className="mb-4">
                            <Form.Label
                              style={{
                                fontWeight: "600",
                                color: "#333",
                                fontFamily: "Open Sans, sans-serif",
                              }}
                            >
                              Destek Verebileceğiniz Alanlar *
                            </Form.Label>
                            <div className="mt-3">
                              {[
                                "Eğitim çalışmalarında görev alabilirim",
                                "Etkinliklerde görev alabilirim",
                                "Sosyal medyada görev alabilirim",
                                "Araştırma çalışmalarına destek olurum",
                                "Sanatsal Faaliyetler",
                                "El Becerileri",
                                "Bilgi İşlem",
                                "Tasarım",
                                "Seslendirme",
                                "Görsel Tasarım (video, fotoğraf)"
                              ].map((area) => (
                                <Form.Check
                                  key={area}
                                  type="checkbox"
                                  id={area}
                                  label={area}
                                  checked={formData.supportAreas.includes(area)}
                                  onChange={() => handleCheckboxChange('supportAreas', area)}
                                  className="mb-2"
                                  style={{ fontFamily: "Open Sans, sans-serif" }}
                                />
                              ))}
                            </div>
                          </Form.Group>
                        </Col>
                      )}

                      {/* İlgi Alanlarınız */}
                      {showExtendedForm && (
                        <Col md={12}>
                          <Form.Group className="mb-3">
                            <Form.Label
                              style={{
                                fontWeight: "600",
                                color: "#333",
                                fontFamily: "Open Sans, sans-serif",
                              }}
                            >
                              İlgi Alanlarınız
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="interestAreas"
                              value={formData.interestAreas}
                              onChange={handleInputChange}
                              placeholder="İlgi alanlarınızı giriniz"
                              style={{
                                borderRadius: "10px",
                                border: "2px solid #e9ecef",
                                padding: "12px",
                              }}
                            />
                          </Form.Group>
                        </Col>
                      )}

                      {/* Destek Olabileceğiniz Diğer Alanlar */}
                      {showExtendedForm && (
                        <Col md={12}>
                          <Form.Group className="mb-3">
                            <Form.Label
                              style={{
                                fontWeight: "600",
                                color: "#333",
                                fontFamily: "Open Sans, sans-serif",
                              }}
                            >
                              Destek Olabileceğiniz Diğer Alanlar
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="otherSupportAreas"
                              value={formData.otherSupportAreas}
                              onChange={handleInputChange}
                              placeholder="Diğer alanları giriniz"
                              style={{
                                borderRadius: "10px",
                                border: "2px solid #e9ecef",
                                padding: "12px",
                              }}
                            />
                          </Form.Group>
                        </Col>
                      )}

                      {/* ABAD Derneği'ni nereden duydunuz */}
                      {showExtendedForm && (
                        <Col md={12}>
                          <Form.Group className="mb-4">
                            <Form.Label
                              style={{
                                fontWeight: "600",
                                color: "#333",
                                fontFamily: "Open Sans, sans-serif",
                              }}
                            >
                              ABAD Derneği'ni nereden duydunuz? *
                            </Form.Label>
                            <div className="mt-3">
                              {["Yazılı Basın", "Sosyal Medya", "Diğer"].map((source) => (
                                <Form.Check
                                  key={source}
                                  type="checkbox"
                                  id={source}
                                  label={source}
                                  checked={formData.howDidYouHear.includes(source)}
                                  onChange={() => handleCheckboxChange('howDidYouHear', source)}
                                  className="mb-2"
                                  style={{ fontFamily: "Open Sans, sans-serif" }}
                                />
                              ))}
                            </div>
                          </Form.Group>
                        </Col>
                      )}

                      {/* Gönüllü motivasyonu */}
                      {showExtendedForm && (
                        <Col md={12}>
                          <Form.Group className="mb-4">
                            <Form.Label
                              style={{
                                fontWeight: "600",
                                color: "#333",
                                fontFamily: "Open Sans, sans-serif",
                              }}
                            >
                              Derneğimize neden gönüllü olarak üye olmak istediğinizi birkaç cümle ile belirtir misiniz?
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={4}
                              name="volunteerMotivation"
                              value={formData.volunteerMotivation}
                              onChange={handleInputChange}
                              placeholder="Cümlerinizi giriniz"
                              style={{
                                borderRadius: "10px",
                                border: "2px solid #e9ecef",
                                padding: "12px",
                              }}
                            />
                          </Form.Group>
                        </Col>
                      )}

                      {/* Gönüllü çalışmalara katılmak istiyorum */}
                      {showExtendedForm && (
                        <Col md={12}>
                          <Form.Group className="mb-4">
                            <Form.Label
                              style={{
                                fontWeight: "600",
                                color: "#333",
                                fontFamily: "Open Sans, sans-serif",
                              }}
                            >
                              ANADOLU BİLGELERİNİ ARAŞTIRMA DERNEĞİ'nde gönüllü olarak çalışmalara katılmak istiyorum. *
                            </Form.Label>
                            <div className="d-flex gap-4 mt-2">
                              <Form.Check
                                type="radio"
                                id="wantToParticipate"
                                name="wantToParticipate"
                                value="İstiyorum"
                                label="İstiyorum"
                                onChange={handleInputChange}
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                              />
                              <Form.Check
                                type="radio"
                                id="dontWantToParticipate"
                                name="wantToParticipate"
                                value="İstemiyorum"
                                label="İstemiyorum"
                                onChange={handleInputChange}
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                              />
                            </div>
                          </Form.Group>
                        </Col>
                      )}
                    </Row>

                    {/* Submit Button */}
                    <div className="text-center">
                      <Button
                        type="submit"
                        size="lg"
                        style={{
                          background: "linear-gradient(135deg, #6B8E6B 0%, #5A7B5A 100%)",
                          border: "none",
                          borderRadius: "15px",
                          padding: "15px 40px",
                          fontSize: "1.2rem",
                          fontFamily: "Roboto Condensed, sans-serif",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateY(-2px)";
                          e.target.style.boxShadow = "0 8px 25px rgba(107, 142, 107, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        GÖNDER
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Sağ Taraf - Gönüllülük Bilgileri */}
            <Col lg={4}>
              {/* Gönüllülük Çeşitleri */}
              <Card
                className="border-0 shadow-sm mb-4"
                style={{
                  borderRadius: "20px",
                }}
              >
                <Card.Body className="p-4">
                  <h4
                    className="fw-bold mb-4"
                    style={{
                      fontSize: "1.5rem",
                      color: "#5a6c57",
                      fontFamily: "Roboto Condensed, sans-serif",
                      textTransform: "uppercase",
                    }}
                  >
                    Gönüllülük Çeşitleri ve İş Tanımları
                  </h4>

                  <div className="mb-4">
                    <h6
                      className="fw-bold mb-2"
                      style={{
                        color: "#2c5aa0",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      1- Ofis Gönüllüsü:
                    </h6>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: "1.6",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Derneğin iş akışının sürdürülebilmesi için yapılması gereken faaliyetlerin bir bölümünü üstlenir.
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: "1.6",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Veri girişleri ve raporlama desteği (gönüllü başvuruları, bağışçı vb.)
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: "1.6",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Çeviri desteği
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: "1.6",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      İnternet araştırmaları ve sosyal medya desteği
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: "1.6",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Hediye ve malzeme dağıtımının organize edilmesi (ayırma, paketleme, vb.)
                    </p>
                  </div>

                  <div className="mb-4">
                    <h6
                      className="fw-bold mb-2"
                      style={{
                        color: "#00baa3",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      2- Etkinlik Gönüllüsü:
                    </h6>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: "1.6",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Dernek ve kamuoyu arasındaki iletişim faaliyetlerinde aktif olarak rol alıp, düzenlenen etkinliklere destek olarak iş yükünü paylaşır.
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: "1.6",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Toplantı organizasyonlarına destek
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: "1.6",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Derneğin tanıtım ve irtibatci Ürünleri Dükkanı için açılan stantlarına destek verilmesi,
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: "1.6",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Broşür, afiş, e-bülten vb. tanıtım materyallerinin yayımlaştırılmasına destek verilmesi
                    </p>
                  </div>
                </Card.Body>
              </Card>

              {/* İstanbul Dışından Nasıl Destek Olabilirim */}
              <Card
                className="border-0 shadow-sm"
                style={{
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                }}
              >
                <Card.Body className="p-4">
                  <h4
                    className="fw-bold mb-4"
                    style={{
                      fontSize: "1.5rem",
                      color: "#5a6c57",
                      fontFamily: "Roboto Condensed, sans-serif",
                      textTransform: "uppercase",
                    }}
                  >
                    İstanbul Dışından Nasıl Destek Olabilirim?
                  </h4>

                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#333",
                      lineHeight: "1.7",
                      fontFamily: "Open Sans, sans-serif",
                      marginBottom: "20px",
                    }}
                  >
                    İstanbul dışından başvuru yapan gönüllü adaylarımıza, şehir dışından hangi alanlarda destek sağlayabilecekleri konusunda e-posta yoluyla iletişime geçilecektir.
                  </p>

                  <div
                    className="p-3"
                    style={{
                      backgroundColor: "rgba(107, 142, 107, 0.1)",
                      borderRadius: "10px",
                      borderLeft: "4px solid #6B8E6B",
                    }}
                  >
                    <h6
                      className="fw-bold mb-2"
                      style={{
                        color: "#6B8E6B",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Sorularınız İçin
                    </h6>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#333",
                        marginBottom: "5px",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      info@abad.org.tr adresinden bizimle iletişime geçebilirsiniz.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default VolunteerPage;