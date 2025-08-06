import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Form,
  Alert,
  Modal,
  Badge,
} from "react-bootstrap";
import { toast } from "react-toastify";

const StatisticsManager = () => {
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStatKey, setNewStatKey] = useState("");
  const [newStatValue, setNewStatValue] = useState("");

  useEffect(() => {
    loadStatistics();
  }, []);

  const loadStatistics = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/admin/statistics");
      if (response.ok) {
        const data = await response.json();
        setStatistics(data);
      } else {
        toast.error("İstatistikler yüklenirken hata oluştu!");
      }
    } catch (error) {
      console.error("Error loading statistics:", error);
      toast.error("İstatistikler yüklenirken hata oluştu!");
    } finally {
      setLoading(false);
    }
  };

  const saveStatistics = async () => {
    setSaving(true);
    try {
      const updatedStats = {
        ...statistics,
        meta: {
          ...statistics.meta,
          generatedAt: new Date().toISOString(),
        },
      };

      const response = await fetch(
        "http://localhost:5001/api/admin/statistics",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedStats),
        }
      );

      if (response.ok) {
        toast.success("İstatistikler başarıyla kaydedildi!");
        setStatistics(updatedStats);
      } else {
        toast.error("İstatistikler kaydedilirken hata oluştu!");
      }
    } catch (error) {
      console.error("Error saving statistics:", error);
      toast.error("İstatistikler kaydedilirken hata oluştu!");
    } finally {
      setSaving(false);
    }
  };

  const updateGeneralStat = (key, value) => {
    setStatistics((prev) => ({
      ...prev,
      genel: {
        ...prev.genel,
        [key]: parseInt(value) || 0,
      },
    }));
  };

  const addNewStat = () => {
    if (!newStatKey.trim()) {
      toast.error("İstatistik adı boş olamaz!");
      return;
    }

    setStatistics((prev) => ({
      ...prev,
      genel: {
        ...prev.genel,
        [newStatKey]: parseInt(newStatValue) || 0,
      },
    }));

    setNewStatKey("");
    setNewStatValue("");
    setShowAddModal(false);
    toast.success("Yeni istatistik eklendi!");
  };

  const removeStat = (key) => {
    if (window.confirm(`"${key}" istatistiğini silmek istediğinizden emin misiniz?`)) {
      setStatistics((prev) => {
        const newGenel = { ...prev.genel };
        delete newGenel[key];
        return {
          ...prev,
          genel: newGenel,
        };
      });
      toast.success("İstatistik silindi!");
    }
  };

  const calculateTotal = () => {
    if (!statistics?.genel) return 0;
    
    const excludeKeys = ['toplamSehir', 'aktifSehirSayisi'];
    return Object.entries(statistics.genel)
      .filter(([key]) => !excludeKeys.includes(key))
      .reduce((sum, [, value]) => sum + (parseInt(value) || 0), 0);
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
        <p className="mt-3">İstatistikler yükleniyor...</p>
      </div>
    );
  }

  if (!statistics) {
    return (
      <Alert variant="danger">
        İstatistikler yüklenemedi. Lütfen sayfayı yenileyin.
      </Alert>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>İstatistik Yönetimi</h4>
        <div className="d-flex gap-2">
          <Button
            variant="outline-primary"
            onClick={() => setShowAddModal(true)}
          >
            <i className="fas fa-plus me-2"></i>
            Yeni İstatistik
          </Button>
          <Button variant="primary" onClick={saveStatistics} disabled={saving}>
            {saving ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Kaydediliyor...
              </>
            ) : (
              <>
                <i className="fas fa-save me-2"></i>
                Kaydet
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="border-primary">
            <Card.Body className="text-center">
              <i className="fas fa-chart-line fa-2x text-primary mb-2"></i>
              <h4 className="text-primary mb-1">{calculateTotal().toLocaleString()}</h4>
              <p className="text-muted mb-0">Toplam Bağış</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-success">
            <Card.Body className="text-center">
              <i className="fas fa-map-marked-alt fa-2x text-success mb-2"></i>
              <h4 className="text-success mb-1">
                {statistics?.genel?.aktifSehirSayisi || 0}
              </h4>
              <p className="text-muted mb-0">Aktif Şehir</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-info">
            <Card.Body className="text-center">
              <i className="fas fa-city fa-2x text-info mb-2"></i>
              <h4 className="text-info mb-1">
                {statistics?.genel?.toplamSehir || 0}
              </h4>
              <p className="text-muted mb-0">Toplam Şehir</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-warning">
            <Card.Body className="text-center">
              <i className="fas fa-clock fa-2x text-warning mb-2"></i>
              <h6 className="text-warning mb-1">
                {statistics?.meta?.generatedAt ? 
                  new Date(statistics.meta.generatedAt).toLocaleDateString('tr-TR') : 
                  'Bilinmiyor'
                }
              </h6>
              <p className="text-muted mb-0">Son Güncelleme</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* General Statistics */}
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Genel İstatistikler</h5>
            <Badge bg="secondary">
              {Object.keys(statistics?.genel || {}).length} İstatistik
            </Badge>
          </div>
        </Card.Header>
        <Card.Body>
          <Row className="g-4">
            {statistics?.genel &&
              Object.entries(statistics.genel).map(([key, value]) => (
                <Col md={6} lg={4} key={key}>
                  <Card className="h-100 border">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="text-capitalize mb-0">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </h6>
                        {!['toplamSehir', 'aktifSehirSayisi'].includes(key) && (
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => removeStat(key)}
                            title="Sil"
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        )}
                      </div>
                      <Form.Control
                        type="number"
                        value={value || 0}
                        onChange={(e) => updateGeneralStat(key, e.target.value)}
                        min="0"
                      />
                      <div className="mt-2">
                        <small className="text-muted">
                          Mevcut Değer: <strong>{(value || 0).toLocaleString()}</strong>
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>

          {Object.keys(statistics?.genel || {}).length === 0 && (
            <div className="text-center py-5">
              <i className="fas fa-chart-bar fa-3x text-muted mb-3"></i>
              <h6 className="text-muted">Henüz istatistik bulunmuyor</h6>
              <Button
                variant="outline-primary"
                onClick={() => setShowAddModal(true)}
              >
                İlk istatistiği ekle
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Add New Statistic Modal */}
      <Modal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Yeni İstatistik Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>İstatistik Adı</Form.Label>
              <Form.Control
                type="text"
                value={newStatKey}
                onChange={(e) => setNewStatKey(e.target.value)}
                placeholder="Örn: toplamKitap, fidanSayisi"
              />
              <Form.Text className="text-muted">
                Türkçe karakter kullanmayın, boşluk yerine camelCase kullanın.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Başlangıç Değeri</Form.Label>
              <Form.Control
                type="number"
                value={newStatValue}
                onChange={(e) => setNewStatValue(e.target.value)}
                placeholder="0"
                min="0"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            İptal
          </Button>
          <Button
            variant="primary"
            onClick={addNewStat}
            disabled={!newStatKey.trim()}
          >
            <i className="fas fa-plus me-2"></i>
            Ekle
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StatisticsManager;