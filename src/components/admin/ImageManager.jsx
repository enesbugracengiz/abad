import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Alert,
  Badge,
  Tabs,
  Tab,
} from "react-bootstrap";
import { toast } from "react-toastify";

const ImageManager = () => {
  const [activeTab, setActiveTab] = useState("homepage");
  const [images, setImages] = useState({
    homepage: [],
    map: [],
    general: [],
    activities: [],
  });
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("homepage");
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Mevcut görsel kategorileri
  const imageCategories = {
    homepage: { name: "Anasayfa Görselleri", path: "/src/assets/images/" },
    map: { name: "Harita Görselleri", path: "/src/assets/harita/" },
    general: { name: "Genel Görseller", path: "/src/assets/genel/" },
    activities: { name: "Faaliyet Görselleri", path: "/src/assets/images/" },
  };

  // Görselleri yükle
  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    // Bu kısımda normalde backend'den görseller çekilir
    // Şimdilik örnek veriler kullanıyoruz
    const exampleImages = {
      homepage: [
        {
          id: 1,
          name: "parallax-1.jpg",
          path: "/src/assets/images/parallax-1.jpg",
          size: "2.3 MB",
          uploadDate: "2025-01-15",
          usedIn: ["Anasayfa Hero Bölümü"],
        },
        {
          id: 2,
          name: "blog-1.jpg",
          path: "/src/assets/images/blog-1.jpg",
          size: "1.8 MB",
          uploadDate: "2025-01-10",
          usedIn: ["Blog Kartları"],
        },
        {
          id: 3,
          name: "cause-1.jpg",
          path: "/src/assets/images/cause-1.jpg",
          size: "2.1 MB",
          uploadDate: "2025-01-08",
          usedIn: ["Projeler Bölümü"],
        },
      ],
      map: [
        {
          id: 4,
          name: "turkey-map.png",
          path: "/src/assets/harita/turkey-map.png",
          size: "850 KB",
          uploadDate: "2025-01-05",
          usedIn: ["Harita Bileşeni"],
        },
        {
          id: 5,
          name: "arayuzver2-08.png",
          path: "/src/assets/harita/arayuzver2-08.png",
          size: "145 KB",
          uploadDate: "2025-01-05",
          usedIn: ["Eğitim İkonu"],
        },
        {
          id: 6,
          name: "arayuzver2-09.png",
          path: "/src/assets/harita/arayuzver2-09.png",
          size: "138 KB",
          uploadDate: "2025-01-05",
          usedIn: ["Blog İkonu"],
        },
      ],
      general: [
        {
          id: 7,
          name: "abad-logo-seffaf1.png",
          path: "/src/assets/genel/abad-logo-seffaf1.png",
          size: "256 KB",
          uploadDate: "2025-01-01",
          usedIn: ["Header Logo"],
        },
        {
          id: 8,
          name: "arayuzver2-17.png",
          path: "/src/assets/genel/arayuzver2-17.png",
          size: "142 KB",
          uploadDate: "2025-01-01",
          usedIn: ["Bağış İkonu"],
        },
      ],
      activities: [
        {
          id: 9,
          name: "doga-faaliyetleri.jpg",
          path: "/src/assets/images/doga-faaliyetleri.jpg",
          size: "1.9 MB",
          uploadDate: "2025-01-12",
          usedIn: ["Faaliyet Sayfası"],
        },
        {
          id: 10,
          name: "eğitim-ve-seminer.jpg",
          path: "/src/assets/images/eğitim-ve-seminer.jpg",
          size: "2.2 MB",
          uploadDate: "2025-01-12",
          usedIn: ["Faaliyet Sayfası"],
        },
      ],
    };

    setImages(exampleImages);
  };

  // Dosya seçimi
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  // Görsel yükleme
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      toast.error("Lütfen yüklemek için dosya seçin!");
      return;
    }

    setUploading(true);

    try {
      // Simulated upload
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const newImages = selectedFiles.map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        path: `${imageCategories[selectedCategory].path}${file.name}`,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        uploadDate: new Date().toISOString().split("T")[0],
        usedIn: [],
      }));

      setImages((prev) => ({
        ...prev,
        [selectedCategory]: [...prev[selectedCategory], ...newImages],
      }));

      toast.success(`${selectedFiles.length} görsel başarıyla yüklendi!`);
      setShowUploadModal(false);
      setSelectedFiles([]);
    } catch (error) {
      toast.error("Yükleme sırasında hata oluştu!");
    } finally {
      setUploading(false);
    }
  };

  // Görsel silme
  const handleDeleteImage = (categoryKey, imageId) => {
    if (window.confirm("Bu görseli silmek istediğinizden emin misiniz?")) {
      setImages((prev) => ({
        ...prev,
        [categoryKey]: prev[categoryKey].filter((img) => img.id !== imageId),
      }));
      toast.success("Görsel başarıyla silindi!");
    }
  };

  // Görseli kopyala
  const handleCopyPath = (path) => {
    navigator.clipboard.writeText(path);
    toast.info("Görsel yolu kopyalandı!");
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Görsel Yönetimi</h4>
        <Button
          variant="primary"
          onClick={() => {
            setSelectedCategory(activeTab);
            setShowUploadModal(true);
          }}
        >
          <i className="fas fa-upload me-2"></i>
          Yeni Görsel Yükle
        </Button>
      </div>

      <Tabs
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key)}
        className="mb-4"
      >
        {Object.entries(imageCategories).map(([key, category]) => (
          <Tab
            key={key}
            eventKey={key}
            title={
              <span>
                {category.name}{" "}
                <Badge bg="secondary">{images[key]?.length || 0}</Badge>
              </span>
            }
          >
            <Card>
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">{category.name}</h6>
                  <small className="text-muted">Klasör: {category.path}</small>
                </div>
              </Card.Header>
              <Card.Body>
                {images[key]?.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="fas fa-images fa-3x text-muted mb-3"></i>
                    <h6 className="text-muted">Bu kategoride henüz görsel yok</h6>
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        setSelectedCategory(key);
                        setShowUploadModal(true);
                      }}
                    >
                      İlk görseli yükle
                    </Button>
                  </div>
                ) : (
                  <Row className="g-4">
                    {images[key]?.map((image) => (
                      <Col key={image.id} lg={4} md={6}>
                        <Card className="h-100">
                          <div
                            className="card-img-top d-flex align-items-center justify-content-center"
                            style={{
                              height: "200px",
                              backgroundColor: "#f8f9fa",
                              background: `url('${image.path}') center/cover no-repeat`,
                            }}
                          >
                            {!image.path.includes(".jpg") &&
                              !image.path.includes(".png") && (
                                <i className="fas fa-file-image fa-3x text-muted"></i>
                              )}
                          </div>
                          <Card.Body>
                            <h6 className="card-title text-truncate">
                              {image.name}
                            </h6>
                            <div className="d-flex justify-content-between mb-2">
                              <small className="text-muted">
                                Boyut: {image.size}
                              </small>
                              <small className="text-muted">
                                {image.uploadDate}
                              </small>
                            </div>
                            {image.usedIn && image.usedIn.length > 0 && (
                              <div className="mb-2">
                                <small className="text-success">
                                  <i className="fas fa-check-circle me-1"></i>
                                  {image.usedIn.join(", ")}
                                </small>
                              </div>
                            )}
                            <div className="d-flex gap-2">
                              <Button
                                variant="outline-info"
                                size="sm"
                                onClick={() => handleCopyPath(image.path)}
                                title="Yolu Kopyala"
                              >
                                <i className="fas fa-copy"></i>
                              </Button>
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => handleDeleteImage(key, image.id)}
                                title="Sil"
                              >
                                <i className="fas fa-trash"></i>
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </Card.Body>
            </Card>
          </Tab>
        ))}
      </Tabs>

      {/* Görsel Yükleme Modalı */}
      <Modal
        show={showUploadModal}
        onHide={() => setShowUploadModal(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Görsel Yükle - {imageCategories[selectedCategory]?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="info">
            <i className="fas fa-info-circle me-2"></i>
            Görseller <strong>{imageCategories[selectedCategory]?.path}</strong>{" "}
            klasörüne yüklenecek.
          </Alert>

          <Form>
            <Form.Group className="mb-4">
              <Form.Label>Görsel Dosyaları Seçin</Form.Label>
              <Form.Control
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
              />
              <Form.Text className="text-muted">
                JPG, PNG, GIF formatları desteklenmektedir. Çoklu seçim
                yapabilirsiniz.
              </Form.Text>
            </Form.Group>

            {selectedFiles.length > 0 && (
              <div>
                <h6>Seçilen Dosyalar:</h6>
                <ul className="list-unstyled">
                  {selectedFiles.map((file, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      <i className="fas fa-file-image text-primary me-2"></i>
                      <span className="flex-grow-1">{file.name}</span>
                      <Badge bg="secondary">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowUploadModal(false)}
            disabled={uploading}
          >
            İptal
          </Button>
          <Button
            variant="primary"
            onClick={handleUpload}
            disabled={uploading || selectedFiles.length === 0}
          >
            {uploading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Yükleniyor...
              </>
            ) : (
              <>
                <i className="fas fa-upload me-2"></i>
                Yükle
              </>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImageManager;