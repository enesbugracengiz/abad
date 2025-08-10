import React from "react";
import Header from "../components/Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page bg-white">
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
                  HAKKIMIZDA
                </h1>
                <h2
                  className="mb-0"
                  style={{
                    fontSize: "2.5rem",
                    color: "#2c5aa0",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  ANADOLU BİLGELERİNİ ARAŞTIRMA DERNEĞİ
                </h2>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Ana İçerik */}
        <Container fluid className="px-5" style={{ maxWidth: "1400px" }}>
          {/* Dernek Tanıtımı */}
          <section className="mb-5">
            <Row className="py-5">
              <Col lg={8} className="mx-auto">
                <div className="text-center mb-5">
                  <h3
                    className="fw-bold mb-4"
                    style={{
                      fontSize: "2rem",
                      color: "#5a6c57",
                      fontFamily: "Roboto Condensed, sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Elbirliğiyle gönüller abad olsun diye çalışmaya devam...
                  </h3>
                </div>

                <div className="mb-5">
                  <p
                    className="mb-4 text-center"
                    style={{
                      fontSize: "1.1rem",
                      color: "#333",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "1.8",
                      fontStyle: "italic",
                    }}
                  >
                    Anadolu, büyük bir kalp gibi. Binlerce yıldır atıp duruyor.
                    Dünyaya bilgi, paylaşma, birlik ve dayanışma duygusu
                    dağıtıyor. Yaklaştıkça, mesafeleri kaldırdıkça, tanıdıkça,
                    bildikçe, sevdikçe kendini daha yüksek sesle anlatıyor.
                  </p>

                  <p
                    className="mb-4"
                    style={{
                      fontSize: "1rem",
                      color: "#333",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "1.8",
                    }}
                  >
                    Bin yıllardır medeniyetler, devletler, seyyahlar,
                    filozoflar, şairler, sanatçılar, bilginler gelip geçiyor
                    üzerinden. Her biri en değerli tohumunu o herkesin anası
                    Anadolu toprağına ekiyor. Derneğimiz bu birikimi bütün
                    unsurları ile yakından tanımak, sevmek, bilmek ve paylaşmak
                    isteyen bir grup tarafından{" "}
                    <strong>14 Kasım 2019'da, Üsküdar'da</strong> kuruldu.
                  </p>

                  <p
                    className="mb-4"
                    style={{
                      fontSize: "1rem",
                      color: "#333",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "1.8",
                    }}
                  >
                    Anadolu'yu turist gibi değil seyyah gibi gezen ve gördükçe
                    büyülenen, tanıdıkça büyük bir saygı ve sevgi ile bağlanan
                    bir grup. Anadolu'nun dört bir yanında kitap kampanyaları,
                    gençlere ve çocuklara yönelik çeşitli edebiyat ve kültür
                    yarışmaları, kültürel içerikli online ve yüz yüze eğitim
                    faaliyetleri, meyve fidanı ve ağaçlandırma çalışmaları ve
                    çeşitli kültür gezileri gibi faaliyetler düzenleyerek bu
                    hedeflerimizi gerçekleştirmeye çalışıyoruz.
                  </p>

                  <p
                    className="mb-0"
                    style={{
                      fontSize: "1rem",
                      color: "#333",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "1.8",
                    }}
                  >
                    Tüm bu proje ve faaliyetleri gerçekleştirirken Anadolu
                    insanının yerel kültürü ve irfanı, öte yandan Anadolu
                    bilgelerinin bu yerelliği aşan evrensel öğretileri en büyük
                    ilham kaynağımız olmaya devam ediyor.
                  </p>
                </div>
              </Col>
            </Row>
          </section>

          {/* İstatistikler Bölümü */}
          <section className="mb-5">
            <Row className="g-4 mb-5">
              <Col lg={3} md={6}>
                <Card
                  className="h-100 border-0 shadow-sm text-center"
                  style={{
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #6B8E6B 0%, #5A7B5A 100%)",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 35px rgba(107, 142, 107, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="py-4">
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        fontFamily: "Roboto Condensed, sans-serif",
                      }}
                    >
                      15.000
                    </h3>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      FİDAN DİKTİK
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6}>
                <Card
                  className="h-100 border-0 shadow-sm text-center"
                  style={{
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #2c5aa0 0%, #1a4480 100%)",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 35px rgba(44, 90, 160, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="py-4">
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        fontFamily: "Roboto Condensed, sans-serif",
                      }}
                    >
                      5.000
                    </h3>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      KİTAP GÖNDERDİK
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6}>
                <Card
                  className="h-100 border-0 shadow-sm text-center"
                  style={{
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #00baa3 0%, #008c7a 100%)",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 35px rgba(0, 186, 163, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="py-4">
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        fontFamily: "Roboto Condensed, sans-serif",
                      }}
                    >
                      2.300
                    </h3>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      ÇOCUĞA ULAŞTIK
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3} md={6}>
                <Card
                  className="h-100 border-0 shadow-sm text-center"
                  style={{
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #ebc858 0%, #d9b347 100%)",
                    color: "#333",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 35px rgba(235, 200, 88, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="py-4">
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        fontFamily: "Roboto Condensed, sans-serif",
                      }}
                    >
                      80
                    </h3>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      KURUMLA ÇALIŞTIK
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* Hedeflerimiz Bölümü */}
          <section className="mb-5">
            <Row className="mb-5">
              <Col lg={10} className="mx-auto">
                <div className="text-center mb-5">
                  <h3
                    className="fw-bold mb-4"
                    style={{
                      fontSize: "2.5rem",
                      color: "#5a6c57",
                      fontFamily: "Roboto Condensed, sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                    }}
                  >
                    HEDEFİMİZ
                  </h3>
                </div>

                <Row className="g-4">
                  <Col md={6}>
                    <div
                      className="h-100 p-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                        borderRadius: "20px",
                        border: "3px solid #6B8E6B",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 25px rgba(107, 142, 107, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="d-flex align-items-start mb-3">
                        <div
                          className="me-3 flex-shrink-0"
                          style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "#6B8E6B",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                          }}
                        >
                          ✓
                        </div>
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "1rem",
                            color: "#333",
                            fontFamily: "Open Sans, sans-serif",
                            lineHeight: "1.7",
                          }}
                        >
                          Anadolumuzun, daha geniş anlamda kültür coğrafyamızın
                          unutulan değerlerini keşfetmek, hatırlamak, öğrenmek.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div
                      className="h-100 p-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                        borderRadius: "20px",
                        border: "3px solid #2c5aa0",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 25px rgba(44, 90, 160, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="d-flex align-items-start mb-3">
                        <div
                          className="me-3 flex-shrink-0"
                          style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "#2c5aa0",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                          }}
                        >
                          ✓
                        </div>
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "1rem",
                            color: "#333",
                            fontFamily: "Open Sans, sans-serif",
                            lineHeight: "1.7",
                          }}
                        >
                          Geleneksel değerlerimizi evrensel kültürel değerlerle
                          buluşturmak ve genç nesillere yaratıcı ve yenilikçi
                          bir içerikle aktarabilmek.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div
                      className="h-100 p-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                        borderRadius: "20px",
                        border: "3px solid #00baa3",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 25px rgba(0, 186, 163, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="d-flex align-items-start mb-3">
                        <div
                          className="me-3 flex-shrink-0"
                          style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "#00baa3",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                          }}
                        >
                          ✓
                        </div>
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "1rem",
                            color: "#333",
                            fontFamily: "Open Sans, sans-serif",
                            lineHeight: "1.7",
                          }}
                        >
                          Anadolu'nun tarım ve çevre konularındaki geleneksel
                          birikimini ve bilgisini yakından tanımak.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div
                      className="h-100 p-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                        borderRadius: "20px",
                        border: "3px solid #ebc858",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 25px rgba(235, 200, 88, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="d-flex align-items-start mb-3">
                        <div
                          className="me-3 flex-shrink-0"
                          style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "#ebc858",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#333",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                          }}
                        >
                          ✓
                        </div>
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "1rem",
                            color: "#333",
                            fontFamily: "Open Sans, sans-serif",
                            lineHeight: "1.7",
                          }}
                        >
                          Çevreci bir etiğin gelişimine Anadolu'muzun
                          değerlerinden beslenen katkılar sunabilmek.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={12}>
                    <div
                      className="h-100 p-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #6B8E6B 0%, #5A7B5A 100%)",
                        borderRadius: "20px",
                        color: "white",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 15px 30px rgba(107, 142, 107, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="d-flex align-items-start">
                        <div
                          className="me-3 flex-shrink-0"
                          style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                          }}
                        >
                          ✓
                        </div>
                        <p
                          className="mb-0"
                          style={{
                            fontSize: "1rem",
                            fontFamily: "Open Sans, sans-serif",
                            lineHeight: "1.7",
                          }}
                        >
                          Tüm bu hedeflerimizi gerçekleştirebilmek için ulusal
                          ve uluslararası projeler üretmek, proje ortaklıkları
                          geliştirmek.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>

          {/* Misyon ve Vizyon */}
          <section className="mb-5">
            <Row>
              <Col lg={10} className="mx-auto">
                <div
                  className="p-5"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(44, 90, 160, 0.1) 0%, rgba(107, 142, 107, 0.1) 100%)",
                    borderRadius: "25px",
                    border: "2px solid rgba(107, 142, 107, 0.2)",
                  }}
                >
                  <p
                    className="mb-4"
                    style={{
                      fontSize: "1.1rem",
                      color: "#333",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "1.8",
                      textAlign: "justify",
                    }}
                  >
                    Bugüne kadar <strong>15 bin fidan diktik</strong>,{" "}
                    <strong>5 bine yakın kitap dağıttık</strong>,{" "}
                    <strong>2 binden fazla çocuğa ulaştık</strong> ve{" "}
                    <strong>80 kadar kurumla işbirliği yürüttük</strong>.
                    Etkinlik alanlarımız yaptıkça, yeni şeyler öğrendikçe
                    genişliyor.
                  </p>

                  <p
                    className="mb-4"
                    style={{
                      fontSize: "1rem",
                      color: "#333",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "1.8",
                      textAlign: "justify",
                    }}
                  >
                    Yerel kültürel değerlerin evrensel değerlerle iç içe
                    yaşanmasına, tanınmasına ve geleceğe aktarılmasına hizmet
                    etmek, ulusal ve uluslararası alanda farkındalık oluşturmak
                    için çalışmalarımızı sürdürüyoruz.
                  </p>

                  <p
                    className="mb-0"
                    style={{
                      fontSize: "1rem",
                      color: "#333",
                      fontFamily: "Open Sans, sans-serif",
                      lineHeight: "1.8",
                      textAlign: "justify",
                    }}
                  >
                    Ülkemizin de taraf olduğu{" "}
                    <strong>1954 tarihli Avrupa Kültürü Sözleşmesi</strong>,{" "}
                    <strong>
                      1972 Tarihli UNESCO Dünya Kültürel ve Doğal Mirasın
                      Korunması Sözleşmesi
                    </strong>
                    ,{" "}
                    <strong>
                      2003 Tarihli UNESCO Somut Olmayan Kültürel Mirasın
                      Korunması Sözleşmesi
                    </strong>{" "}
                    gibi uluslararası metinleri göz önünde bulundurarak Anadolu
                    kültürünü, tüm yerel unsurları ve derinlikleri ile tanımayı,
                    özellikle doğa ve çevreye dair değerlerini korumayı,
                    çocukların ve gençlerin de bu bilince dahil olmasını
                    sağlamayı hedefliyoruz.
                  </p>
                </div>
              </Col>
            </Row>
          </section>

          {/* Kültürel Miras Yaklaşımı */}
          <section className="mb-5">
            <Row>
              <Col lg={10} className="mx-auto">
                <Card
                  className="border-0 shadow-lg"
                  style={{
                    borderRadius: "25px",
                    overflow: "hidden",
                  }}
                >
                  <Card.Body
                    className="p-5"
                    style={{
                      background:
                        "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    }}
                  >
                    <h4
                      className="fw-bold mb-4 text-center"
                      style={{
                        fontSize: "1.8rem",
                        color: "#5a6c57",
                        fontFamily: "Roboto Condensed, sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Kültürel Miras Yaklaşımımız
                    </h4>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "1rem",
                        color: "#333",
                        fontFamily: "Open Sans, sans-serif",
                        lineHeight: "1.8",
                        textAlign: "justify",
                      }}
                    >
                      Anadolu kültürel mirasını sadece mimari ve yazılı eserler
                      üzerinden değil{" "}
                      <strong>sözlü gelenekler ve anlatımlar</strong>,{" "}
                      <strong>el sanatları</strong>,{" "}
                      <strong>toplumsal uygulamalar</strong>,{" "}
                      <strong>
                        doğa ve çevre ile ilgili bilgi ve uygulamaları
                      </strong>{" "}
                      da dikkate alarak öğrenmeyi ve aktarmayı amaçlıyoruz.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* Faaliyet Alanları */}
          <section className="mb-5">
            <div className="text-center mb-5">
              <h3
                className="fw-bold mb-4"
                style={{
                  fontSize: "2.5rem",
                  color: "#5a6c57",
                  fontFamily: "Roboto Condensed, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                FAALİYET ALANLARIMIZ
              </h3>
            </div>

            <Row className="g-4">
              <Col lg={6}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                    border: "3px solid #6B8E6B",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(107, 142, 107, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div className="text-center mb-3">
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          backgroundColor: "#6B8E6B",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                          fontSize: "2rem",
                          color: "white",
                        }}
                      >
                        📚
                      </div>
                    </div>
                    <h5
                      className="fw-bold text-center mb-3"
                      style={{
                        fontSize: "1.3rem",
                        color: "#5a6c57",
                        fontFamily: "Roboto Condensed, sans-serif",
                        textTransform: "uppercase",
                      }}
                    >
                      Kırsal Alan Kitap Kampanyaları
                    </h5>
                    <p
                      className="text-center mb-0"
                      style={{
                        fontSize: "1rem",
                        color: "#666",
                        fontFamily: "Open Sans, sans-serif",
                        lineHeight: "1.6",
                      }}
                    >
                      Kırsal bölgeler başta olmak üzere Anadolu'nun dört yanına
                      kampanyalar düzenleyerek kitap ulaştırıyoruz,
                      çocuklarımızın ve gençlerimizin okuma ve öğrenme azmini
                      geliştirmeyi hedefliyoruz.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                    border: "3px solid #2c5aa0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(44, 90, 160, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div className="text-center mb-3">
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          backgroundColor: "#2c5aa0",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                          fontSize: "2rem",
                          color: "white",
                        }}
                      >
                        🏆
                      </div>
                    </div>
                    <h5
                      className="fw-bold text-center mb-3"
                      style={{
                        fontSize: "1.3rem",
                        color: "#2c5aa0",
                        fontFamily: "Roboto Condensed, sans-serif",
                        textTransform: "uppercase",
                      }}
                    >
                      Edebiyat ve Kültür Yarışmaları
                    </h5>
                    <p
                      className="text-center mb-0"
                      style={{
                        fontSize: "1rem",
                        color: "#666",
                        fontFamily: "Open Sans, sans-serif",
                        lineHeight: "1.6",
                      }}
                    >
                      Çocuklarımıza ve gençlerimize yönelik edebiyat, kültür ve
                      sanat alanlarında yarışmalar düzenliyoruz.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                    border: "3px solid #00baa3",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(0, 186, 163, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div className="text-center mb-3">
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          backgroundColor: "#00baa3",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                          fontSize: "2rem",
                          color: "white",
                        }}
                      >
                        🌱
                      </div>
                    </div>
                    <h5
                      className="fw-bold text-center mb-3"
                      style={{
                        fontSize: "1.3rem",
                        color: "#00baa3",
                        fontFamily: "Roboto Condensed, sans-serif",
                        textTransform: "uppercase",
                      }}
                    >
                      Fidan Dikim Etkinlikleri
                    </h5>
                    <p
                      className="text-center mb-0"
                      style={{
                        fontSize: "1rem",
                        color: "#666",
                        fontFamily: "Open Sans, sans-serif",
                        lineHeight: "1.6",
                      }}
                    >
                      Çocuklarımız ve gençlerimiz başta olmak üzere
                      gönüllülerimizin katılımıyla geniş çaplı fidan, özellikle
                      meyve fidanı dikim etkinlikleri düzenliyoruz.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                    border: "3px solid #ebc858",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(235, 200, 88, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div className="text-center mb-3">
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          backgroundColor: "#ebc858",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                          fontSize: "2rem",
                          color: "#333",
                        }}
                      >
                        🏛️
                      </div>
                    </div>
                    <h5
                      className="fw-bold text-center mb-3"
                      style={{
                        fontSize: "1.3rem",
                        color: "#ebc858",
                        fontFamily: "Roboto Condensed, sans-serif",
                        textTransform: "uppercase",
                      }}
                    >
                      Kültür Gezileri
                    </h5>
                    <p
                      className="text-center mb-0"
                      style={{
                        fontSize: "1rem",
                        color: "#666",
                        fontFamily: "Open Sans, sans-serif",
                        lineHeight: "1.6",
                      }}
                    >
                      Anadolumuzun kültürel ve tarihi değerlerini keşfetmek,
                      tanımak ve öğrenmek için "seyyah olayım bir zaman" diyerek
                      kültür gezileri organize ediyoruz.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* Yönetim Kurulu */}
          <section className="mb-5">
            <div className="text-center mb-5">
              <h3
                className="fw-bold mb-4"
                style={{
                  fontSize: "2.5rem",
                  color: "#5a6c57",
                  fontFamily: "Roboto Condensed, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                YÖNETİM KURULU
              </h3>
            </div>

            <Row className="g-4 mb-5">
              <Col lg={4} md={6}>
                <Card
                  className="h-100 border-0 shadow-sm text-center"
                  style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div
                      className="mb-3 mx-auto"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#6B8E6B",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      👤
                    </div>
                    <h6
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "0.9rem",
                        color: "#6B8E6B",
                        fontFamily: "Open Sans, sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Yönetim Kurulu Başkanı
                    </h6>
                    <h5
                      className="mb-0"
                      style={{
                        fontSize: "1.2rem",
                        color: "#333",
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      Ayşe Figen Tan
                    </h5>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6}>
                <Card
                  className="h-100 border-0 shadow-sm text-center"
                  style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div
                      className="mb-3 mx-auto"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#2c5aa0",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      👤
                    </div>
                    <h6
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "0.9rem",
                        color: "#2c5aa0",
                        fontFamily: "Open Sans, sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Başkan Yardımcısı
                    </h6>
                    <h5
                      className="mb-0"
                      style={{
                        fontSize: "1.2rem",
                        color: "#333",
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      Zuhal Öztürk
                    </h5>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6}>
                <Card
                  className="h-100 border-0 shadow-sm text-center"
                  style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div
                      className="mb-3 mx-auto"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#00baa3",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      👤
                    </div>
                    <h6
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "0.9rem",
                        color: "#00baa3",
                        fontFamily: "Open Sans, sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Genel Sekreter
                    </h6>
                    <h5
                      className="mb-0"
                      style={{
                        fontSize: "1.2rem",
                        color: "#333",
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      Gonca Arslancan
                    </h5>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6}>
                <Card
                  className="h-100 border-0 shadow-sm text-center"
                  style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div
                      className="mb-3 mx-auto"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#ebc858",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        color: "#333",
                      }}
                    >
                      👤
                    </div>
                    <h6
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "0.9rem",
                        color: "#ebc858",
                        fontFamily: "Open Sans, sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Sayman
                    </h6>
                    <h5
                      className="mb-0"
                      style={{
                        fontSize: "1.2rem",
                        color: "#333",
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      Başak Yılmaztürk
                    </h5>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6}>
                <Card
                  className="h-100 border-0 shadow-sm text-center"
                  style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div
                      className="mb-3 mx-auto"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#727475",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      👤
                    </div>
                    <h6
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "0.9rem",
                        color: "#727475",
                        fontFamily: "Open Sans, sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Üye
                    </h6>
                    <h5
                      className="mb-0"
                      style={{
                        fontSize: "1.2rem",
                        color: "#333",
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      Muhammet Bağkır Köse
                    </h5>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Denetim Kurulu */}
            <div className="text-center mb-4">
              <h4
                className="fw-bold"
                style={{
                  fontSize: "2rem",
                  color: "#5a6c57",
                  fontFamily: "Roboto Condensed, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                DENETİM KURULU
              </h4>
            </div>

            <Row className="g-4 justify-content-center">
              <Col lg={4} md={6}>
                <Card
                  className="h-100 border-0 shadow-sm text-center"
                  style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div
                      className="mb-3 mx-auto"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#6B8E6B",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      👤
                    </div>
                    <h6
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "0.9rem",
                        color: "#6B8E6B",
                        fontFamily: "Open Sans, sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Denetim Kurulu Başkanı
                    </h6>
                    <h5
                      className="mb-0"
                      style={{
                        fontSize: "1.2rem",
                        color: "#333",
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      Ümmü Füsun Özcan İnceoğlu
                    </h5>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6}>
                <Card
                  className="h-100 border-0 shadow-sm text-center"
                  style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div
                      className="mb-3 mx-auto"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#2c5aa0",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      👤
                    </div>
                    <h6
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "0.9rem",
                        color: "#2c5aa0",
                        fontFamily: "Open Sans, sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Üye
                    </h6>
                    <h5
                      className="mb-0"
                      style={{
                        fontSize: "1.2rem",
                        color: "#333",
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      Fatih Ergüner
                    </h5>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4} md={6}>
                <Card
                  className="h-100 border-0 shadow-sm text-center"
                  style={{
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="p-4">
                    <div
                      className="mb-3 mx-auto"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#00baa3",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      👤
                    </div>
                    <h6
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "0.9rem",
                        color: "#00baa3",
                        fontFamily: "Open Sans, sans-serif",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Üye
                    </h6>
                    <h5
                      className="mb-0"
                      style={{
                        fontSize: "1.2rem",
                        color: "#333",
                        fontFamily: "Roboto Condensed, sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      Selma Ünlü
                    </h5>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default AboutPage;
