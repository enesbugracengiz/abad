import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab, Alert } from "react-bootstrap";
import AdminLayout from "../components/admin/AdminLayout";
import MapDataManager from "../components/admin/MapDataManager";
import ImageManager from "../components/admin/ImageManager";
import AdminAuth from "../components/admin/AdminAuth";
import ContentManager from "../components/admin/ContentManager";
import StatisticsManager from "../components/admin/StatisticsManager";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AdminAuth onAuthenticate={setIsAuthenticated} />;
  }

  return (
    <AdminLayout>
      <Container fluid className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-dark">ABAD Yönetici Paneli</h2>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setIsAuthenticated(false)}
          >
            Çıkış Yap
          </button>
        </div>

        <Tab.Container defaultActiveKey="map-data">
          <Row>
            <Col md={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="map-data" className="text-start mb-2">
                    <i className="fas fa-map-marked-alt me-2"></i>
                    Harita Verileri
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="images" className="text-start mb-2">
                    <i className="fas fa-images me-2"></i>
                    Görsel Yönetimi
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="content" className="text-start mb-2">
                    <i className="fas fa-edit me-2"></i>
                    İçerik Yönetimi
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="statistics" className="text-start mb-2">
                    <i className="fas fa-chart-bar me-2"></i>
                    İstatistikler
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            
            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="map-data">
                  <MapDataManager />
                </Tab.Pane>
                
                <Tab.Pane eventKey="images">
                  <ImageManager />
                </Tab.Pane>
                
                <Tab.Pane eventKey="content">
                  <ContentManager />
                </Tab.Pane>
                
                <Tab.Pane eventKey="statistics">
                  <StatisticsManager />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </AdminLayout>
  );
};

export default AdminPage;