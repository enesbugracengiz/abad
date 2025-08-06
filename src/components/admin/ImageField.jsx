import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import ImageSelector from "./ImageSelector";

const ImageField = ({ label, value, onChange, placeholder }) => {
  const [showSelector, setShowSelector] = useState(false);

  const handleImageSelect = (imagePath) => {
    onChange(imagePath);
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <div className="d-flex gap-2">
          <Form.Control
            type="text"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || "Görsel yolu girin veya seç butonunu kullanın"}
          />
          <Button
            variant="outline-secondary"
            onClick={() => setShowSelector(true)}
            style={{ minWidth: "100px" }}
          >
            <i className="fas fa-images me-1"></i>
            Seç
          </Button>
        </div>
        
        {value && (
          <Card className="mt-2" style={{ maxWidth: "200px" }}>
            <div
              style={{
                height: "120px",
                backgroundImage: `url('${value}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#f8f9fa",
                borderRadius: "0.375rem 0.375rem 0 0"
              }}
            />
            <Card.Body className="p-2">
              <Card.Text className="small text-muted mb-1">
                Mevcut görsel
              </Card.Text>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => onChange("")}
                className="w-100"
              >
                <i className="fas fa-trash me-1"></i>
                Kaldır
              </Button>
            </Card.Body>
          </Card>
        )}
      </Form.Group>

      <ImageSelector
        show={showSelector}
        onHide={() => setShowSelector(false)}
        onSelect={handleImageSelect}
        currentImage={value}
      />
    </>
  );
};

export default ImageField;