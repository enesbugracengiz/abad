import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import MapSection from "../components/MapSection";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="home-page bg-white">
      <Header />

      {/* Main Content */}
      <main className="main-content">
        {/* Section 1 - Harita */}
        <MapSection />

        {/* Section 2 - Öne Çıkan Projeler */}
        <FeaturedProjects />

        {/* Section 3 */}
        <section className="py-5 bg-light">
          <Container>
            <div className="text-center">
              <h2 className="text-primary mb-4" style={{ fontFamily: "Roboto Condensed, sans-serif", color: "#00baa3" }}>
                Section 3
              </h2>
              <p className="text-muted" style={{ fontFamily: "Open Sans, sans-serif" }}>
                Bu bölüm daha sonra oluşturulacak.
              </p>
            </div>
          </Container>
        </section>

        {/* Section 4 */}
        <section className="py-5 bg-white">
          <Container>
            <div className="text-center">
              <h2 className="text-primary mb-4" style={{ fontFamily: "Roboto Condensed, sans-serif", color: "#00baa3" }}>
                Section 4
              </h2>
              <p className="text-muted" style={{ fontFamily: "Open Sans, sans-serif" }}>
                Bu bölüm daha sonra oluşturulacak.
              </p>
            </div>
          </Container>
        </section>

        {/* Section 5 */}
        <section className="py-5 bg-light">
          <Container>
            <div className="text-center">
              <h2 className="text-primary mb-4" style={{ fontFamily: "Roboto Condensed, sans-serif", color: "#00baa3" }}>
                Section 5
              </h2>
              <p className="text-muted" style={{ fontFamily: "Open Sans, sans-serif" }}>
                Bu bölüm daha sonra oluşturulacak.
              </p>
            </div>
          </Container>
        </section>

        {/* Section 6 */}
        <section className="py-5 bg-white">
          <Container>
            <div className="text-center">
              <h2 className="text-primary mb-4" style={{ fontFamily: "Roboto Condensed, sans-serif", color: "#00baa3" }}>
                Section 6
              </h2>
              <p className="text-muted" style={{ fontFamily: "Open Sans, sans-serif" }}>
                Bu bölüm daha sonra oluşturulacak.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
