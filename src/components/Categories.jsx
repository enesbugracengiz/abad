import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Categories = () => {
  return (
    <section 
      className="py-5"
      style={{
        backgroundImage: `url("/src/assets/genel/arayuzver2-19.png")`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom",
        backgroundSize: "auto",
        paddingBottom: "120px",
      }}
    >
      <Container style={{ maxWidth: "1200px" }}>
        <Row className="mb-5">
          <Col>
            <h2
              className="text-center fw-semibold mb-5"
              style={{
                fontSize: "2.5rem",
                color: "#5a6c57",
                letterSpacing: "1px",
              }}
            >
              CATEGORIES
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <div className="text-center">
              <p 
                className="text-muted"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontFamily: "Open Sans, sans-serif"
                }}
              >
                Bu bölüm daha sonra oluşturulacak.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Categories;