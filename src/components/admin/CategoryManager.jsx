import React, { useState } from "react";
import { Card, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import ImageField from "./ImageField";

const CategoryManager = ({ categories, onUpdate, backgroundImage, onBackgroundUpdate }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategory, setNewCategory] = useState({
    title: "",
    description: "",
    image: ""
  });

  const addNewCategory = () => {
    if (!newCategory.title.trim()) {
      toast.error("Kategori başlığı boş olamaz!");
      return;
    }

    const newCategoryWithId = {
      ...newCategory,
      id: Date.now()
    };

    onUpdate([...categories, newCategoryWithId]);
    setNewCategory({ title: "", description: "", image: "" });
    setShowAddModal(false);
    toast.success("Yeni kategori eklendi!");
  };

  const updateCategory = (index, field, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index][field] = value;
    onUpdate(updatedCategories);
  };

  const removeCategory = (index) => {
    if (window.confirm("Bu kategoriyi silmek istediğinizden emin misiniz?")) {
      const updatedCategories = categories.filter((_, i) => i !== index);
      onUpdate(updatedCategories);
      toast.success("Kategori silindi!");
    }
  };

  const moveCategory = (index, direction) => {
    const newCategories = [...categories];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (newIndex >= 0 && newIndex < categories.length) {
      [newCategories[index], newCategories[newIndex]] = [newCategories[newIndex], newCategories[index]];
      onUpdate(newCategories);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h6 className="mb-0">Kategori Öğeleri</h6>
        <Button
          variant="primary"
          size="sm"
          onClick={() => setShowAddModal(true)}
        >
          <i className="fas fa-plus me-2"></i>
          Yeni Kategori
        </Button>
      </div>

      <div className="mb-4">
        <ImageField
          label="Kategoriler Arkaplan Görseli"
          value={backgroundImage || ""}
          onChange={onBackgroundUpdate}
          placeholder="Kategoriler bölümü arkaplan görseli"
        />
      </div>

      {categories?.length === 0 ? (
        <Card className="text-center p-4">
          <Card.Body>
            <i className="fas fa-folder-open fa-3x text-muted mb-3"></i>
            <h6 className="text-muted">Henüz kategori eklenmemiş</h6>
            <p className="text-muted small">İlk kategorinizi eklemek için "Yeni Kategori" butonunu kullanın.</p>
          </Card.Body>
        </Card>
      ) : (
        categories.map((item, index) => (
          <Card key={item.id || index} className="mb-3 border">
            <Card.Header className="d-flex justify-content-between align-items-center py-2">
              <h6 className="mb-0">Kategori #{index + 1}</h6>
              <div className="d-flex gap-1">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => moveCategory(index, 'up')}
                  disabled={index === 0}
                  title="Yukarı taşı"
                >
                  <i className="fas fa-arrow-up"></i>
                </Button>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => moveCategory(index, 'down')}
                  disabled={index === categories.length - 1}
                  title="Aşağı taşı"
                >
                  <i className="fas fa-arrow-down"></i>
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => removeCategory(index)}
                  title="Sil"
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Kategori Başlığı</Form.Label>
                    <Form.Control
                      type="text"
                      value={item.title || ""}
                      onChange={(e) =>
                        updateCategory(index, "title", e.target.value)
                      }
                      placeholder="Kategori başlığını girin"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <ImageField
                    label="Kategori Görseli"
                    value={item.image || ""}
                    onChange={(value) => updateCategory(index, "image", value)}
                    placeholder="Kategori görseli seçin"
                  />
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Açıklama</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={item.description || ""}
                      onChange={(e) =>
                        updateCategory(index, "description", e.target.value)
                      }
                      placeholder="Kategori açıklamasını girin"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))
      )}

      {/* Add Category Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Yeni Kategori Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Kategori Başlığı</Form.Label>
              <Form.Control
                type="text"
                value={newCategory.title}
                onChange={(e) => setNewCategory(prev => ({...prev, title: e.target.value}))}
                placeholder="Örn: Doğa Faaliyetleri"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Açıklama</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newCategory.description}
                onChange={(e) => setNewCategory(prev => ({...prev, description: e.target.value}))}
                placeholder="Kategori hakkında kısa açıklama"
              />
            </Form.Group>

            <ImageField
              label="Kategori Görseli"
              value={newCategory.image}
              onChange={(value) => setNewCategory(prev => ({...prev, image: value}))}
              placeholder="Kategori görseli seçin"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            İptal
          </Button>
          <Button
            variant="primary"
            onClick={addNewCategory}
            disabled={!newCategory.title.trim()}
          >
            <i className="fas fa-plus me-2"></i>
            Ekle
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CategoryManager;