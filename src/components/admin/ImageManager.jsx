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

  const loadImages = async () => {
    try {
      const categories = ['homepage', 'map', 'general', 'activities'];
      const imageData = {};

      for (const category of categories) {
        try {
          const response = await fetch(`http://localhost:5001/api/admin/images/${category}`);
          if (response.ok) {
            imageData[category] = await response.json();
          } else {
            imageData[category] = [];
          }
        } catch (error) {
          console.error(`Error loading ${category} images:`, error);
          imageData[category] = [];
        }
      }

      setImages(imageData);
    } catch (error) {
      console.error("Error loading images:", error);
      toast.error("Görseller yüklenirken hata oluştu!");
    }
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
      const formData = new FormData();
      selectedFiles.forEach(file => {
        formData.append('images', file);
      });

      const response = await fetch(
        `http://localhost:5001/api/admin/images/${selectedCategory}/upload`,
        {
          method: 'POST',
          body: formData
        }
      );

      if (response.ok) {
        const result = await response.json();
        
        setImages((prev) => ({
          ...prev,
          [selectedCategory]: [...prev[selectedCategory], ...result.files],
        }));

        toast.success(result.message);
        setShowUploadModal(false);
        setSelectedFiles([]);
      } else {
        const error = await response.json();
        toast.error(error.error || "Yükleme sırasında hata oluştu!");
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      toast.error("Yükleme sırasında hata oluştu!");
    } finally {
      setUploading(false);
    }
  };

  // Görsel silme
  const handleDeleteImage = async (categoryKey, imageId, imageName) => {
    if (window.confirm("Bu görseli silmek istediğinizden emin misiniz?")) {
      try {
        const response = await fetch(
          `http://localhost:5001/api/admin/images/${categoryKey}/${imageName}`,
          { method: "DELETE" }
        );

        if (response.ok) {
          setImages((prev) => ({
            ...prev,
            [categoryKey]: prev[categoryKey].filter((img) => img.id !== imageId),
          }));
          toast.success("Görsel başarıyla silindi!");
        } else {
          toast.error("Görsel silinirken hata oluştu!");
        }
      } catch (error) {
        console.error("Error deleting image:", error);
        toast.error("Görsel silinirken hata oluştu!");
      }
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
                                onClick={() => handleDeleteImage(key, image.id, image.name)}
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