import React, { useState, useEffect } from "react";
import {
  Modal,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
  Tabs,
  Tab,
} from "react-bootstrap";
import { toast } from "react-toastify";

const ImageSelector = ({ show, onHide, onSelect, currentImage }) => {
  const [activeTab, setActiveTab] = useState("browse");
  const [images, setImages] = useState({
    homepage: [],
    map: [],
    general: [],
    activities: [],
  });
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const imageCategories = {
    homepage: { name: "Anasayfa Görselleri", path: "/src/assets/images/" },
    map: { name: "Harita Görselleri", path: "/src/assets/harita/" },
    general: { name: "Genel Görseller", path: "/src/assets/genel/" },
    activities: { name: "Faaliyet Görselleri", path: "/src/assets/images/" },
  };

  useEffect(() => {
    if (show) {
      loadImages();
    }
  }, [show]);

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

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

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
        setSelectedFiles([]);
        
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
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

  const handleImageSelect = (imagePath) => {
    onSelect(imagePath);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>Görsel Seç</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
        <Tabs
          activeKey={activeTab}
          onSelect={(key) => setActiveTab(key)}
          className="mb-4"
        >
          <Tab eventKey="browse" title="Mevcut Görseller">
            <Tabs
              activeKey={selectedCategory}
              onSelect={(key) => setSelectedCategory(key)}
              className="mb-3"
            >
              {Object.entries(imageCategories).map(([key, category]) => (
                <Tab key={key} eventKey={key} title={category.name}>
                  <Row className="g-3">
                    {images[key]?.length === 0 ? (
                      <Col xs={12}>
                        <Alert variant="info" className="text-center">
                          Bu kategoride henüz görsel yok. "Yeni Yükle" sekmesinden görsel ekleyebilirsiniz.
                        </Alert>
                      </Col>
                    ) : (
                      images[key]?.map((image) => (
                        <Col key={image.id} md={3} sm={4} xs={6}>
                          <Card 
                            className={`h-100 ${currentImage === image.path ? 'border-primary' : ''}`}
                            style={{ cursor: 'pointer' }}
                          >
                            <div
                              style={{
                                height: "150px",
                                backgroundImage: `url('${image.path}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundColor: "#f8f9fa"
                              }}
                            />
                            <Card.Body className="p-2">
                              <Card.Title className="small text-truncate mb-1">
                                {image.name}
                              </Card.Title>
                              <Card.Text className="small text-muted mb-2">
                                {image.size}
                              </Card.Text>
                              <div className="d-flex gap-1">
                                <Button
                                  variant={currentImage === image.path ? "primary" : "outline-primary"}
                                  size="sm"
                                  className="flex-grow-1"
                                  onClick={() => handleImageSelect(image.path)}
                                >
                                  {currentImage === image.path ? "Seçili" : "Seç"}
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
                      ))
                    )}
                  </Row>
                </Tab>
              ))}
            </Tabs>
          </Tab>

          <Tab eventKey="upload" title="Yeni Yükle">
            <Card>
              <Card.Header>
                <h6 className="mb-0">
                  Yeni Görsel Yükle - {imageCategories[selectedCategory]?.name}
                </h6>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Kategori</Form.Label>
                  <Form.Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {Object.entries(imageCategories).map(([key, category]) => (
                      <option key={key} value={key}>
                        {category.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Görsel Dosyaları</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                  />
                  <Form.Text className="text-muted">
                    JPG, PNG, GIF formatları desteklenmektedir. Çoklu seçim yapabilirsiniz.
                  </Form.Text>
                </Form.Group>

                {selectedFiles.length > 0 && (
                  <div className="mb-3">
                    <h6>Seçilen Dosyalar:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {selectedFiles.map((file, index) => (
                        <span key={index} className="badge bg-primary">
                          {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="d-grid">
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
                        Yükle ({selectedFiles.length} dosya)
                      </>
                    )}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          İptal
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageSelector;