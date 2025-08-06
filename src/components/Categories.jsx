import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import useContent from "../hooks/useContent";

const Categories = () => {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <section className="py-5" style={{ backgroundColor: "#f8f9fa", minHeight: "400px" }}>
        <Container style={{ maxWidth: "1200px" }}>
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Yükleniyor...</span>
            </div>
            <p className="mt-3">Kategoriler yükleniyor...</p>
          </div>
        </Container>
      </section>
    );
  }

  const categories = content?.categories?.items || [];
  const backgroundImage = content?.categories?.backgroundImage || "/src/assets/genel/arayuzver2-19.png";

  return (
    <section
      className="py-5 position-relative"
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage: `url("${backgroundImage}")`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom",
        backgroundSize: "auto 130px",
        paddingTop: "60px",
        paddingBottom: "250px",
        minHeight: "800px",
      }}
    >
      <Container
        style={{ maxWidth: "1200px", position: "relative", zIndex: 2 }}
      >
        {/* Kategori kartları */}
        <Row
          className="justify-content-center g-5"
          style={{ marginBottom: "100px", paddingBottom: "30px" }}
        >
          {categories.length === 0 ? (
            <Col xs={12}>
              <div className="text-center py-5">
                <h5 className="text-muted">Henüz kategori eklenmemiş</h5>
                <p className="text-muted">Admin panelinden kategori ekleyebilirsiniz.</p>
              </div>
            </Col>
          ) : (
            categories.map((category) => (
              <Col key={category.id} xs={12} md={6} lg={4} className="mb-5">
                <Card
                  className="h-100 border-0 shadow"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    backgroundColor: "white",
                    border: "2px solid #e8f5e8",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(90, 108, 87, 0.2)";
                    e.currentTarget.style.borderColor = "#5a6c57";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 20px rgba(0,0,0,0.1)";
                    e.currentTarget.style.borderColor = "#e8f5e8";
                  }}
                >
                  {/* Görsel bölümü */}
                  <div
                    className="position-relative"
                    style={{
                      height: "220px",
                      overflow: "hidden",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={category.image}
                      alt={category.title}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}
                      onError={(e) => {
                        e.target.style.backgroundColor = "#f8f9fa";
                        e.target.style.display = "flex";
                        e.target.style.alignItems = "center";
                        e.target.style.justifyContent = "center";
                        e.target.alt = "Görsel yüklenemedi";
                      }}
                    />
                    {/* Üstte yeşil çerçeve efekti */}
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        height: "4px",
                        background:
                          "linear-gradient(90deg, #5a6c57 0%, #7a8c77 100%)",
                      }}
                    ></div>
                  </div>

                  <Card.Body className="p-4">
                    <Card.Title
                      className="text-center mb-3"
                      style={{
                        color: "#5a6c57",
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "1.3",
                      }}
                    >
                      {category.title}
                    </Card.Title>

                    <Card.Text
                      className="text-center"
                      style={{
                        color: "#666",
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      {category.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>

      {/* Alt boşluk arkaplan görseli için - Çakışmayı önlemek için ek boşluk */}
      <div style={{ height: "80px" }}></div>
    </section>
  );
};

export default Categories;
