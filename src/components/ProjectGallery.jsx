import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import useContent from "../hooks/useContent";

const ProjectGallery = () => {
  const { content, loading } = useContent();
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  if (loading) {
    return (
      <section
        className="py-5"
        style={{ backgroundColor: "#f8f9fa", minHeight: "400px" }}
      >
        <Container style={{ maxWidth: "1200px" }}>
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Yükleniyor...</span>
            </div>
            <p className="mt-3">Proje galerisi yükleniyor...</p>
          </div>
        </Container>
      </section>
    );
  }

  const gallery = content?.projectGallery || {};
  const backgroundImage =
    gallery.backgroundImage || "/src/assets/genel/arayuzver2-19.png";

  return (
    <section
      className="py-5 position-relative"
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage: `url("${backgroundImage}")`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom",
        backgroundSize: "auto 130px",
        paddingTop: "80px",
        paddingBottom: "200px",
        minHeight: "600px",
      }}
    >
      <Container
        style={{ maxWidth: "1200px", position: "relative", zIndex: 2 }}
      >
        {/* Ana Grid Layout - 2x3 yapısı */}
        <Row
          className="g-3 justify-content-center"
          style={{ marginBottom: "150px" }}
        >
          {/* Üst Satır */}
          <Row className="g-3 mb-3 justify-content-center">
            {gallery.grid?.topRow?.map((item, index) => (
              <Col key={index} lg={4} md={6} sm={8} xs={12}>
                {item.type === "image" ? (
                  <Card
                    className="border-0 h-100"
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      height: "200px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.src || "/src/assets/images/parallax-1.jpg"}
                      alt={item.alt || ""}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                ) : item.type === "news" ? (
                  <Card
                    className="border-0 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      borderRadius: "15px",
                      backgroundColor: item.backgroundColor || "#e8e8e8",
                      height: expandedCards['news-top'] ? "auto" : "200px",
                      minHeight: "200px",
                      padding: "20px",
                      transition: "height 0.3s ease",
                    }}
                  >
                    <div className="text-center">
                      <h3
                        style={{
                          color: "#2c5f88",
                          fontSize: "1.8rem",
                          fontWeight: "bold",
                          fontFamily: "Poppins, sans-serif",
                          marginBottom: "15px",
                        }}
                      >
                        {gallery.newsSection?.title || "Bizden Haberler"}
                      </h3>
                      <p
                        style={{
                          color: "#333",
                          fontSize: "0.85rem",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "1.4",
                          textAlign: "left",
                          marginBottom: "15px",
                        }}
                      >
                        {gallery.newsSection?.content || ""}
                      </p>
                      {expandedCards['news-top'] && (
                        <p
                          style={{
                            color: "#333",
                            fontSize: "0.85rem",
                            fontFamily: "Open Sans, sans-serif",
                            lineHeight: "1.4",
                            textAlign: "left",
                            marginBottom: "15px",
                          }}
                        >
                          {gallery.newsSection?.fullContent || "Gelişli, Yabancı Diller Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın Güngör, Sağlık Hizmetleri Meslek Yüksekokulu Müdürü Doç. Dr. Hakan Tekedere, Müdür Yardımcısı Dr. Öğr Üyesi Alper Ertem, Sağlık Hizmetleri MYO Bölüm Başkanları Prof. Dr. Meltem Uzunhisar ve diğer akademisyenlerle birlikte katılım göstermiştir. Bu değerli etkinlik ile çevreye duyarlılığımızı bir kez daha göstermiş olduk."}
                        </p>
                      )}
                      <p
                        style={{
                          color: "#2c5f88",
                          fontSize: "1rem",
                          fontWeight: "600",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleCard('news-top')}
                      >
                        {expandedCards['news-top'] ? "Kapat" : (gallery.newsSection?.readMore || "Devamını Oku")}
                      </p>
                    </div>
                  </Card>
                ) : (
                  <Card
                    className="border-0 h-100"
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      height: "200px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.src || "/src/assets/images/parallax-17.jpg"}
                      alt={item.alt || "Proje görseli"}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                )}
              </Col>
            )) || (
              // Fallback to original content if no data
              <>
                <Col lg={4} md={6} sm={8} xs={12}>
                  <Card
                    className="border-0 h-100"
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      height: "200px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="/src/assets/images/parallax-1.jpg"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                </Col>
                <Col lg={4} md={6} sm={8} xs={12}>
                  <Card
                    className="border-0 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      borderRadius: "15px",
                      backgroundColor: "#e8e8e8",
                      height: expandedCards['news-fallback'] ? "auto" : "200px",
                      minHeight: "200px",
                      padding: "20px",
                      transition: "height 0.3s ease",
                    }}
                  >
                    <div className="text-center">
                      <h3
                        style={{
                          color: "#2c5f88",
                          fontSize: "1.8rem",
                          fontWeight: "bold",
                          fontFamily: "Poppins, sans-serif",
                          marginBottom: "15px",
                        }}
                      >
                        Bizden Haberler
                      </h3>
                      <p
                        style={{
                          color: "#333",
                          fontSize: "0.85rem",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "1.4",
                          textAlign: "left",
                          marginBottom: "15px",
                        }}
                      >
                        Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine
                        ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi
                        Üniversitesi Rektör Yardımcısı Prof. Dr. Yücel
                      </p>
                      {expandedCards['news-fallback'] && (
                        <p
                          style={{
                            color: "#333",
                            fontSize: "0.85rem",
                            fontFamily: "Open Sans, sans-serif",
                            lineHeight: "1.4",
                            textAlign: "left",
                            marginBottom: "15px",
                          }}
                        >
                          Gelişli, Yabancı Diller Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın Güngör, Sağlık Hizmetleri Meslek Yüksekokulu Müdürü Doç. Dr. Hakan Tekedere, Müdür Yardımcısı Dr. Öğr Üyesi Alper Ertem, Sağlık Hizmetleri MYO Bölüm Başkanları Prof. Dr. Meltem Uzunhisar ve diğer akademisyenlerle birlikte katılım göstermiştir. Bu değerli etkinlik ile çevreye duyarlılığımızı bir kez daha göstermiş olduk.
                        </p>
                      )}
                      <p
                        style={{
                          color: "#2c5f88",
                          fontSize: "1rem",
                          fontWeight: "600",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleCard('news-fallback')}
                      >
                        {expandedCards['news-fallback'] ? "Kapat" : "Devamını Oku"}
                      </p>
                    </div>
                  </Card>
                </Col>
                <Col lg={4} md={6} sm={8} xs={12}>
                  <Card
                    className="border-0 h-100"
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      height: "200px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="/src/assets/images/parallax-17.jpg"
                      alt="Proje görseli"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                </Col>
              </>
            )}
          </Row>

          {/* Alt Satır */}
          <Row className="g-3 justify-content-center">
            {gallery.grid?.bottomRow?.map((item, index) => (
              <Col key={index} lg={4} md={6} sm={8} xs={12}>
                {item.type === "image" ? (
                  <Card
                    className="border-0 h-100"
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      height: "200px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.src || "/src/assets/images/parallax-24.jpg"}
                      alt={item.alt || "Proje görseli"}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                ) : item.type === "content" ? (
                  <Card
                    className="border-0 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      borderRadius: "15px",
                      backgroundColor: item.backgroundColor || "#e8e8e8",
                      height: expandedCards[`content-${index}`] ? "auto" : "200px",
                      minHeight: "200px",
                      padding: "20px",
                      transition: "height 0.3s ease",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          color: "#333",
                          fontSize: "0.85rem",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "1.4",
                          textAlign: "left",
                          marginBottom: "15px",
                        }}
                      >
                        {item.content}
                      </p>
                      {expandedCards[`content-${index}`] && (
                        <p
                          style={{
                            color: "#333",
                            fontSize: "0.85rem",
                            fontFamily: "Open Sans, sans-serif",
                            lineHeight: "1.4",
                            textAlign: "left",
                            marginBottom: "15px",
                          }}
                        >
                          {item.fullContent || "Bu içeriğin devamında, projemizin detayları ve gelecek planlarımız hakkında daha fazla bilgi bulabilirsiniz. Çevre dostu yaklaşımımız ve sürdürülebilir çözümlerimizle topluma değer katmaya devam ediyoruz."}
                        </p>
                      )}
                      <p
                        style={{
                          color: "#2c5f88",
                          fontSize: "1rem",
                          fontWeight: "600",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleCard(`content-${index}`)}
                      >
                        {expandedCards[`content-${index}`] ? "Kapat" : (item.readMore || "Devamını Oku")}
                      </p>
                    </div>
                  </Card>
                ) : item.type === "longContent" ? (
                  <Card
                    className="border-0 h-100 d-flex flex-column justify-content-between"
                    style={{
                      borderRadius: "15px",
                      backgroundColor: item.backgroundColor || "#e8e8e8",
                      height: expandedCards[`longContent-${index}`] ? "auto" : "200px",
                      minHeight: "200px",
                      padding: "20px",
                      transition: "height 0.3s ease",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          color: "#333",
                          fontSize: "0.8rem",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "1.4",
                          textAlign: "left",
                          marginBottom: expandedCards[`longContent-${index}`] ? "15px" : "0",
                        }}
                      >
                        {item.content}
                      </p>
                      {expandedCards[`longContent-${index}`] && (
                        <p
                          style={{
                            color: "#333",
                            fontSize: "0.8rem",
                            fontFamily: "Open Sans, sans-serif",
                            lineHeight: "1.4",
                            textAlign: "left",
                            marginBottom: "0",
                          }}
                        >
                          {item.fullContent || "ve akademik kadromuzla birlikte gerçekleştirdiğimiz bu anlamlı etkinlik sayesinde doğaya katkıda bulunduk. Gelecek nesillere daha yeşil bir dünya bırakma hedefimiz doğrultusunda bu tür faaliyetleri sürdürmeye devam edeceğiz."}
                        </p>
                      )}
                    </div>
                    <p
                      style={{
                        color: "#2c5f88",
                        fontSize: "1rem",
                        fontWeight: "600",
                        textAlign: "left",
                        marginBottom: "0",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleCard(`longContent-${index}`)}
                    >
                      {expandedCards[`longContent-${index}`] ? "Kapat" : (item.readMore || "Devamını Oku")}
                    </p>
                  </Card>
                ) : (
                  <Card
                    className="border-0 h-100"
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      height: "200px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.src || "/src/assets/images/parallax-24.jpg"}
                      alt={item.alt || "Proje görseli"}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                )}
              </Col>
            )) || (
              // Fallback content
              <>
                {/* Sol: Proje görsel */}
                <Col lg={4} md={6} sm={8} xs={12}>
                  <Card
                    className="border-0 h-100"
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      height: "200px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="/src/assets/images/parallax-24.jpg"
                      alt="Proje görseli"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                </Col>

                {/* Orta: Metin içeriği */}
                <Col lg={4} md={6} sm={8} xs={12}>
                  <Card
                    className="border-0 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      borderRadius: "15px",
                      backgroundColor: "#e8e8e8",
                      height: expandedCards['bottom-middle'] ? "auto" : "200px",
                      minHeight: "200px",
                      padding: "20px",
                      transition: "height 0.3s ease",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          color: "#333",
                          fontSize: "0.85rem",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "1.4",
                          textAlign: "left",
                          marginBottom: "15px",
                        }}
                      >
                        Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine
                        ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi
                        Üniversitesi Rektör Yardımcısı Prof. Dr. Yücel
                      </p>
                      {expandedCards['bottom-middle'] && (
                        <p
                          style={{
                            color: "#333",
                            fontSize: "0.85rem",
                            fontFamily: "Open Sans, sans-serif",
                            lineHeight: "1.4",
                            textAlign: "left",
                            marginBottom: "15px",
                          }}
                        >
                          Gelişli, Yabancı Diller Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın Güngör, Sağlık Hizmetleri Meslek Yüksekokulu Müdürü Doç. Dr. Hakan Tekedere ve diğer değerli katılımcılar ile birlikte gerçekleştirilen bu anlamlı etkinlik kapsamında çok sayıda fidan toprakla buluşturulmuştur.
                        </p>
                      )}
                      <p
                        style={{
                          color: "#2c5f88",
                          fontSize: "1rem",
                          fontWeight: "600",
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleCard('bottom-middle')}
                      >
                        {expandedCards['bottom-middle'] ? "Kapat" : "Devamını Oku"}
                      </p>
                    </div>
                  </Card>
                </Col>

                {/* Sağ: Uzun metin bloğu */}
                <Col lg={4} md={6} sm={8} xs={12}>
                  <Card
                    className="border-0 h-100 d-flex flex-column justify-content-between"
                    style={{
                      borderRadius: "15px",
                      backgroundColor: "#e8e8e8",
                      height: expandedCards['bottom-right'] ? "auto" : "200px",
                      minHeight: "200px",
                      padding: "20px",
                      transition: "height 0.3s ease",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          color: "#333",
                          fontSize: "0.8rem",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "1.4",
                          textAlign: "left",
                          marginBottom: "0",
                        }}
                      >
                        Gölbaşı yerleşkesinde gerçekleştirilen fidan dikimine
                        ABAD Yönetim Kurulu Başkanımız Ayşe Figen Tan, Gazi
                        Üniversitesi Rektör Yardımcısı Prof. Dr. Yücel Gelişli,
                        Yabancı Diller Yüksekokulu Müdürü Öğr. Gör. Mustafa Akın
                        Güngör, Sağlık Hizmetleri Meslek Yüksekokulu Müdürü Doç.
                        Dr. Hakan Tekedere, Müdür Yardımcısı Dr. Öğr Üyesi Alper
                        Ertem, Sağlık Hizmetleri MYO Bölüm Başkanları Prof. Dr.
                        Meltem Uzunhisar-
                      </p>
                      {expandedCards['bottom-right'] && (
                        <p
                          style={{
                            color: "#333",
                            fontSize: "0.8rem",
                            fontFamily: "Open Sans, sans-serif",
                            lineHeight: "1.4",
                            textAlign: "left",
                            marginBottom: "0",
                          }}
                        >
                          Çeliktepe ve Dr. Öğr. Üyesi Fatma Zehta Köse ile birlikte gerçekleştirilen bu çevre dostu etkinlik, üniversitemizin doğaya ve sürdürülebilirliğe verdiği önemi göstermektedir. Bu faaliyetlerle gelecek nesillere daha yaşanabilir bir dünya bırakma hedefimize katkıda bulunuyoruz.
                        </p>
                      )}
                    </div>
                    <p
                      style={{
                        color: "#2c5f88",
                        fontSize: "1rem",
                        fontWeight: "600",
                        textAlign: "left",
                        marginBottom: "0",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleCard('bottom-right')}
                    >
                      {expandedCards['bottom-right'] ? "Kapat" : "Devamını Oku"}
                    </p>
                  </Card>
                </Col>
              </>
            )}
          </Row>
        </Row>
      </Container>

      {/* Alt boşluk arkaplan görseli için */}
      <div style={{ height: "80px" }}></div>
    </section>
  );
};

export default ProjectGallery;
