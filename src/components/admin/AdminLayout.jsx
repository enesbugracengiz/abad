import React from "react";
import { Container } from "react-bootstrap";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Admin Header */}
      <header 
        className="bg-white shadow-sm border-bottom"
        style={{ borderBottom: "3px solid #2c5aa0" }}
      >
        <Container fluid className="py-3 px-4">
          <div className="d-flex align-items-center">
            <img
              src="/src/assets/harita/web-logo-yazili-512-x-512-piksel.png"
              alt="ABAD Logo"
              style={{ height: "60px", width: "auto" }}
              className="me-3"
            />
            <div>
              <h4 className="mb-0" style={{ color: "#2c5aa0" }}>
                ABAD Yönetici Paneli
              </h4>
              <small className="text-muted">
                Anadolu Bilgilerini Araştırma Derneği
              </small>
            </div>
          </div>
        </Container>
      </header>

      {/* Admin Content */}
      <main className="py-4">
        {children}
      </main>

      {/* Admin Footer */}
      <footer className="bg-white border-top mt-auto py-3">
        <Container fluid className="px-4">
          <div className="text-center text-muted">
            <small>
              © 2025 ABAD - Anadolu Bilgelerini Araştırma Derneği | Yönetici Paneli
            </small>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default AdminLayout;