import React, { useState, useEffect } from "react";
import {
  Card,
  Form,
  Button,
  Table,
  Modal,
  Alert,
  Row,
  Col,
  Badge,
  Tabs,
  Tab,
} from "react-bootstrap";
import { toast } from "react-toastify";

// Data imports
import haritaConfigData from "../../data/harita-config.json";
import sehirlerData from "../../data/sehirler.json";
import istatistiklerData from "../../data/istatistikler.json";

const MapDataManager = () => {
  const [activeTab, setActiveTab] = useState("cities");
  const [cities, setCities] = useState(sehirlerData.data || []);
  const [mapConfig, setMapConfig] = useState(haritaConfigData);
  const [statistics, setStatistics] = useState(istatistiklerData);
  
  const [selectedCity, setSelectedCity] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddCityModal, setShowAddCityModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [newCity, setNewCity] = useState({
    ad: "",
    kitapSayisi: 0,
    fidanlar: {},
    yardimlar: {
      oyuncak: 0,
      giyecek: 0,
      esya: "",
      temizlikMalzemesi: 0,
    },
    faaliyetler: {
      anadoluSeminerleri: "",
      seyyahSeyahatleri: "",
    },
    koordinat: {
      top: "50%",
      left: "50%",
      bolge: "",
    },
  });

  // Şehir düzenleme modalını aç
  const handleEditCity = (city) => {
    setSelectedCity({ ...city });
    setShowEditModal(true);
  };

  // Şehir verilerini güncelle
  const handleUpdateCity = () => {
    setLoading(true);
    
    setTimeout(() => {
      const updatedCities = cities.map((city) =>
        city.id === selectedCity.id ? selectedCity : city
      );
      
      setCities(updatedCities);
      setShowEditModal(false);
      toast.success(`${selectedCity.ad} şehri başarıyla güncellendi!`);
      setLoading(false);
    }, 500);
  };

  // Yeni şehir ekle
  const handleAddCity = () => {
    setLoading(true);
    
    setTimeout(() => {
      const newCityData = {
        ...newCity,
        id: Math.max(...cities.map(c => c.id)) + 1,
      };
      
      setCities([...cities, newCityData]);
      
      // Harita koordinatlarına da ekle
      const updatedMapConfig = {
        ...mapConfig,
        koordinatlar: {
          ...mapConfig.koordinatlar,
          [newCity.ad]: {
            top: newCity.koordinat.top,
            left: newCity.koordinat.left,
            bolge: newCity.koordinat.bolge,
          },
        },
      };
      
      setMapConfig(updatedMapConfig);
      setShowAddCityModal(false);
      setNewCity({
        ad: "",
        kitapSayisi: 0,
        fidanlar: {},
        yardimlar: { oyuncak: 0, giyecek: 0, esya: "", temizlikMalzemesi: 0 },
        faaliyetler: { anadoluSeminerleri: "", seyyahSeyahatleri: "" },
        koordinat: { top: "50%", left: "50%", bolge: "" },
      });
      
      toast.success(`${newCityData.ad} şehri başarıyla eklendi!`);
      setLoading(false);
    }, 500);
  };

  // Şehir sil
  const handleDeleteCity = (cityId) => {
    if (window.confirm("Bu şehri silmek istediğinizden emin misiniz?")) {
      const cityToDelete = cities.find(c => c.id === cityId);
      const updatedCities = cities.filter((city) => city.id !== cityId);
      setCities(updatedCities);
      
      // Harita koordinatlarından da sil
      const updatedCoordinates = { ...mapConfig.koordinatlar };
      delete updatedCoordinates[cityToDelete.ad];
      
      setMapConfig({
        ...mapConfig,
        koordinatlar: updatedCoordinates,
      });
      
      toast.success(`${cityToDelete.ad} şehri başarıyla silindi!`);
    }
  };

  // Verileri JSON formatında kaydet
  const handleSaveData = () => {
    setLoading(true);
    
    setTimeout(() => {
      const updatedData = {
        meta: {
          totalCount: cities.length,
          lastUpdated: new Date().toISOString(),
        },
        data: cities,
      };
      
      // Gerçek uygulamada bu veriler backend'e gönderilir
      console.log("Kaydedilen şehir verileri:", updatedData);
      console.log("Kaydedilen harita konfigürasyonu:", mapConfig);
      console.log("Kaydedilen istatistikler:", statistics);
      
      toast.success("Tüm veriler başarıyla kaydedildi!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Harita Veri Yönetimi</h4>
        <div className="d-flex gap-2">
          <Button
            variant="primary"
            onClick={() => setShowAddCityModal(true)}
            className="me-2"
          >
            <i className="fas fa-plus me-2"></i>
            Yeni Şehir Ekle
          </Button>
          <Button
            variant="success"
            onClick={handleSaveData}
            disabled={loading}
          >
            <i className="fas fa-save me-2"></i>
            Değişiklikleri Kaydet
          </Button>
        </div>
      </div>

      <Tabs
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key)}
        className="mb-4"
      >
        <Tab eventKey="cities" title="Şehir Verileri">
          <Card>
            <Card.Header>
              <h6 className="mb-0">
                Şehir Listesi ({cities.length} şehir)
              </h6>
            </Card.Header>
            <Card.Body className="p-0">
              <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                <Table striped hover className="mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th>Şehir</th>
                      <th>Bölge</th>
                      <th>Kitap</th>
                      <th>Bağışlar</th>
                      <th>Fidan</th>
                      <th>Faaliyetler</th>
                      <th>İşlemler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cities.map((city) => {
                      const coordinate = mapConfig.koordinatlar[city.ad];
                      const totalDonations = (city.yardimlar?.oyuncak || 0) + (city.yardimlar?.giyecek || 0);
                      const fidanCount = Object.keys(city.fidanlar || {}).length;
                      const faaliyetCount = (city.faaliyetler?.anadoluSeminerleri ? 1 : 0) + 
                                          (city.faaliyetler?.seyyahSeyahatleri ? 1 : 0);
                      
                      return (
                        <tr key={city.id}>
                          <td>
                            <strong>{city.ad}</strong>
                          </td>
                          <td>
                            <Badge bg="info">
                              {coordinate?.bolge || "Belirtilmemiş"}
                            </Badge>
                          </td>
                          <td>{city.kitapSayisi}</td>
                          <td>{totalDonations}</td>
                          <td>{fidanCount}</td>
                          <td>{faaliyetCount}</td>
                          <td>
                            <Button
                              variant="outline-primary"
                              size="sm"
                              className="me-2"
                              onClick={() => handleEditCity(city)}
                            >
                              <i className="fas fa-edit"></i>
                            </Button>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => handleDeleteCity(city.id)}
                            >
                              <i className="fas fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="config" title="Harita Konfigürasyonu">
          <Card>
            <Card.Header>
              <h6 className="mb-0">Harita Ayarları</h6>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h6>Renk Ayarları</h6>
                  <Form.Group className="mb-3">
                    <Form.Label>Aktif Şehir Rengi</Form.Label>
                    <Form.Control
                      type="color"
                      value={mapConfig.renkler.aktifSehir}
                      onChange={(e) =>
                        setMapConfig({
                          ...mapConfig,
                          renkler: {
                            ...mapConfig.renkler,
                            aktifSehir: e.target.value,
                          },
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Pasif Şehir Rengi</Form.Label>
                    <Form.Control
                      type="color"
                      value={mapConfig.renkler.pasifSehir}
                      onChange={(e) =>
                        setMapConfig({
                          ...mapConfig,
                          renkler: {
                            ...mapConfig.renkler,
                            pasifSehir: e.target.value,
                          },
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <h6>Boyut Ayarları</h6>
                  <Form.Group className="mb-3">
                    <Form.Label>Nokta Boyutu</Form.Label>
                    <Form.Control
                      type="number"
                      value={mapConfig.boyutlar.noktaBoyutu}
                      onChange={(e) =>
                        setMapConfig({
                          ...mapConfig,
                          boyutlar: {
                            ...mapConfig.boyutlar,
                            noktaBoyutu: parseInt(e.target.value),
                          },
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Hover Boyutu</Form.Label>
                    <Form.Control
                      type="number"
                      value={mapConfig.boyutlar.hoverBoyutu}
                      onChange={(e) =>
                        setMapConfig({
                          ...mapConfig,
                          boyutlar: {
                            ...mapConfig.boyutlar,
                            hoverBoyutu: parseInt(e.target.value),
                          },
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>

      {/* Şehir Düzenleme Modalı */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCity?.ad} - Veri Düzenleme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCity && (
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Kitap Sayısı</Form.Label>
                    <Form.Control
                      type="number"
                      value={selectedCity.kitapSayisi}
                      onChange={(e) =>
                        setSelectedCity({
                          ...selectedCity,
                          kitapSayisi: parseInt(e.target.value) || 0,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Oyuncak Bağışı</Form.Label>
                    <Form.Control
                      type="number"
                      value={selectedCity.yardimlar?.oyuncak || 0}
                      onChange={(e) =>
                        setSelectedCity({
                          ...selectedCity,
                          yardimlar: {
                            ...selectedCity.yardimlar,
                            oyuncak: parseInt(e.target.value) || 0,
                          },
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Giyecek Bağışı</Form.Label>
                    <Form.Control
                      type="number"
                      value={selectedCity.yardimlar?.giyecek || 0}
                      onChange={(e) =>
                        setSelectedCity({
                          ...selectedCity,
                          yardimlar: {
                            ...selectedCity.yardimlar,
                            giyecek: parseInt(e.target.value) || 0,
                          },
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Diğer Eşyalar</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedCity.yardimlar?.esya || ""}
                      onChange={(e) =>
                        setSelectedCity({
                          ...selectedCity,
                          yardimlar: {
                            ...selectedCity.yardimlar,
                            esya: e.target.value,
                          },
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Anadolu Seminerleri</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedCity.faaliyetler?.anadoluSeminerleri || ""}
                      onChange={(e) =>
                        setSelectedCity({
                          ...selectedCity,
                          faaliyetler: {
                            ...selectedCity.faaliyetler,
                            anadoluSeminerleri: e.target.value,
                          },
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Seyyah Seyahatleri</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedCity.faaliyetler?.seyyahSeyahatleri || ""}
                      onChange={(e) =>
                        setSelectedCity({
                          ...selectedCity,
                          faaliyetler: {
                            ...selectedCity.faaliyetler,
                            seyyahSeyahatleri: e.target.value,
                          },
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            İptal
          </Button>
          <Button
            variant="primary"
            onClick={handleUpdateCity}
            disabled={loading}
          >
            {loading ? "Güncelleniyor..." : "Güncelle"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Yeni Şehir Ekleme Modalı */}
      <Modal show={showAddCityModal} onHide={() => setShowAddCityModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Yeni Şehir Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Şehir Adı</Form.Label>
                  <Form.Control
                    type="text"
                    value={newCity.ad}
                    onChange={(e) => setNewCity({ ...newCity, ad: e.target.value })}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Bölge</Form.Label>
                  <Form.Select
                    value={newCity.koordinat.bolge}
                    onChange={(e) =>
                      setNewCity({
                        ...newCity,
                        koordinat: { ...newCity.koordinat, bolge: e.target.value },
                      })
                    }
                  >
                    <option value="">Bölge Seçin</option>
                    <option value="Marmara">Marmara</option>
                    <option value="Ege">Ege</option>
                    <option value="Akdeniz">Akdeniz</option>
                    <option value="İç Anadolu">İç Anadolu</option>
                    <option value="Karadeniz">Karadeniz</option>
                    <option value="Doğu Anadolu">Doğu Anadolu</option>
                    <option value="Güneydoğu Anadolu">Güneydoğu Anadolu</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Harita Pozisyonu - Top (%)</Form.Label>
                  <Form.Control
                    type="text"
                    value={newCity.koordinat.top}
                    onChange={(e) =>
                      setNewCity({
                        ...newCity,
                        koordinat: { ...newCity.koordinat, top: e.target.value },
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Harita Pozisyonu - Left (%)</Form.Label>
                  <Form.Control
                    type="text"
                    value={newCity.koordinat.left}
                    onChange={(e) =>
                      setNewCity({
                        ...newCity,
                        koordinat: { ...newCity.koordinat, left: e.target.value },
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Kitap Sayısı</Form.Label>
              <Form.Control
                type="number"
                value={newCity.kitapSayisi}
                onChange={(e) =>
                  setNewCity({ ...newCity, kitapSayisi: parseInt(e.target.value) || 0 })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddCityModal(false)}>
            İptal
          </Button>
          <Button
            variant="primary"
            onClick={handleAddCity}
            disabled={loading || !newCity.ad}
          >
            {loading ? "Ekleniyor..." : "Ekle"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MapDataManager;