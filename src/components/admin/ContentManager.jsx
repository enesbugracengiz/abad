import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Form,
  Alert,
  Tabs,
  Tab,
  Modal,
  Accordion,
  ButtonGroup,
} from "react-bootstrap";
import { toast } from "react-toastify";
import ImageField from "./ImageField";
import CategoryManager from "./CategoryManager";

const ContentManager = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("header");
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/admin/content");
      if (response.ok) {
        const data = await response.json();
        setContent(data);
      } else {
        toast.error("İçerik yüklenirken hata oluştu!");
      }
    } catch (error) {
      console.error("Error loading content:", error);
      toast.error("İçerik yüklenirken hata oluştu!");
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async () => {
    setSaving(true);
    try {
      const response = await fetch("http://localhost:5001/api/admin/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        toast.success("İçerik başarıyla kaydedildi!");
      } else {
        toast.error("İçerik kaydedilirken hata oluştu!");
      }
    } catch (error) {
      console.error("Error saving content:", error);
      toast.error("İçerik kaydedilirken hata oluştu!");
    } finally {
      setSaving(false);
    }
  };

  const updateContent = (path, value) => {
    const keys = path.split(".");
    const updated = { ...content };
    let current = updated;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = value;
    setContent(updated);
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
        <p className="mt-3">İçerik yükleniyor...</p>
      </div>
    );
  }

  if (!content) {
    return (
      <Alert variant="danger">
        İçerik yüklenemedi. Lütfen sayfayı yenileyin.
      </Alert>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>İçerik Yönetimi</h4>
        <div className="d-flex gap-2">
          <Button
            variant="outline-secondary"
            onClick={() => setShowPreview(true)}
          >
            <i className="fas fa-eye me-2"></i>
            Önizleme
          </Button>
          <Button variant="primary" onClick={saveContent} disabled={saving}>
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

      <Tabs
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key)}
        className="mb-4"
      >
        {/* Header Tab */}
        <Tab eventKey="header" title="Header">
          <Accordion defaultActiveKey="0">
            {/* Header İçerik */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Header İçerik Ayarları</Accordion.Header>
              <Accordion.Body>
                <Row className="g-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Telefon Numarası</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.header?.phone || ""}
                        onChange={(e) =>
                          updateContent("header.phone", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <ImageField
                      label="Logo Görseli"
                      value={content.header?.logo?.src || ""}
                      onChange={(value) =>
                        updateContent("header.logo.src", value)
                      }
                      placeholder="Logo görsel yolu"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Logo Alt Metni</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.header?.logo?.alt || ""}
                        onChange={(e) =>
                          updateContent("header.logo.alt", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Logo Yüksekliği (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.header?.logo?.height || 180}
                        onChange={(e) =>
                          updateContent(
                            "header.logo.height",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mt-4 mb-3">Navigasyon Menüsü</h6>
                <Row className="g-4">
                  {content.header?.navigation &&
                    Object.entries(content.header.navigation).map(
                      ([key, nav]) => (
                        <Col md={6} key={key}>
                          <Card className="border">
                            <Card.Body>
                              <h6 className="text-capitalize">{key}</h6>
                              <Form.Group className="mb-2">
                                <Form.Label>Metin</Form.Label>
                                <Form.Control
                                  type="text"
                                  value={nav.text || ""}
                                  onChange={(e) =>
                                    updateContent(
                                      `header.navigation.${key}.text`,
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Yol</Form.Label>
                                <Form.Control
                                  type="text"
                                  value={nav.path || ""}
                                  onChange={(e) =>
                                    updateContent(
                                      `header.navigation.${key}.path`,
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Group>
                            </Card.Body>
                          </Card>
                        </Col>
                      )
                    )}
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* Header Stil Ayarları */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Header Stil Ayarları</Accordion.Header>
              <Accordion.Body>
                <h6 className="mb-3">Telefon Numarası Stili</h6>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Telefon Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.header?.styles?.phone?.fontFamily ||
                          "Open Sans, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "header.styles.phone.fontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Telefon Font Boyutu (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.header?.styles?.phone?.fontSize || 18}
                        onChange={(e) =>
                          updateContent(
                            "header.styles.phone.fontSize",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Telefon Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.header?.styles?.phone?.color || "#2c5aa0"
                        }
                        onChange={(e) =>
                          updateContent(
                            "header.styles.phone.color",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Navigasyon Stili</h6>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Nav Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.header?.styles?.navigation?.fontFamily ||
                          "Open Sans, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "header.styles.navigation.fontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Nav Font Boyutu (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={
                          content.header?.styles?.navigation?.fontSize || 20
                        }
                        onChange={(e) =>
                          updateContent(
                            "header.styles.navigation.fontSize",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Nav Metin Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.header?.styles?.navigation?.color || "#2c5aa0"
                        }
                        onChange={(e) =>
                          updateContent(
                            "header.styles.navigation.color",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Alt Çizgi Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.header?.styles?.navigation?.underlineColor ||
                          "#D4A574"
                        }
                        onChange={(e) =>
                          updateContent(
                            "header.styles.navigation.underlineColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Buton Stilleri</h6>
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Dükkan Buton Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.header?.styles?.buttons?.shop
                            ?.backgroundColor || "#2B5F7F"
                        }
                        onChange={(e) =>
                          updateContent(
                            "header.styles.buttons.shop.backgroundColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Bağış Buton Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.header?.styles?.buttons?.donate
                            ?.backgroundColor || "#2E8B57"
                        }
                        onChange={(e) =>
                          updateContent(
                            "header.styles.buttons.donate.backgroundColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Buton Font Boyutu (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.header?.styles?.buttons?.fontSize || 16}
                        onChange={(e) =>
                          updateContent(
                            "header.styles.buttons.fontSize",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        {/* Homepage Tab */}
        <Tab eventKey="homepage" title="Ana Sayfa">
          <Accordion defaultActiveKey="0">
            {/* Hero Section */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Hero Bölümü</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3">
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.homepage?.hero?.title || ""}
                        onChange={(e) =>
                          updateContent("homepage.hero.title", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Alt Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.homepage?.hero?.subtitle || ""}
                        onChange={(e) =>
                          updateContent(
                            "homepage.hero.subtitle",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Açıklama</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={content.homepage?.hero?.description || ""}
                        onChange={(e) =>
                          updateContent(
                            "homepage.hero.description",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* Featured Projects Section */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Öne Çıkan Projeler</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3 mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Bölüm Başlığı</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.homepage?.featured_projects?.title || ""}
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.title",
                            e.target.value
                          )
                        }
                        placeholder="Örn: ÖNE ÇIKAN PROJELER"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Alt Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={
                          content.homepage?.featured_projects?.subtitle || ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.subtitle",
                            e.target.value
                          )
                        }
                        placeholder="Bölüm açıklaması"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mt-4 mb-3">Arkaplan Görselleri</h6>
                <Row className="g-3 mb-4">
                  <Col md={6}>
                    <ImageField
                      label="Ana Desen Görseli"
                      value={
                        content.homepage?.featured_projects
                          ?.backgroundPattern || ""
                      }
                      onChange={(value) =>
                        updateContent(
                          "homepage.featured_projects.backgroundPattern",
                          value
                        )
                      }
                      placeholder="Ana arkaplan deseni"
                    />
                  </Col>
                  <Col md={6}>
                    <ImageField
                      label="Alt Desen Görseli"
                      value={
                        content.homepage?.featured_projects?.bottomPattern || ""
                      }
                      onChange={(value) =>
                        updateContent(
                          "homepage.featured_projects.bottomPattern",
                          value
                        )
                      }
                      placeholder="Alt kısım deseni"
                    />
                  </Col>
                  <Col md={12}>
                    <ImageField
                      label="Sol İkon Görseli"
                      value={
                        content.homepage?.featured_projects?.leftIcon || ""
                      }
                      onChange={(value) =>
                        updateContent(
                          "homepage.featured_projects.leftIcon",
                          value
                        )
                      }
                      placeholder="Sol üst köşe dekoratif ikonu"
                    />
                  </Col>
                </Row>

                <h6 className="mb-3">Ana Proje İçeriği</h6>
                <Row className="g-3">
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Proje Başlığı</Form.Label>
                      <Form.Control
                        type="text"
                        value={
                          content.homepage?.featured_projects?.mainProject
                            ?.title || ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.mainProject.title",
                            e.target.value
                          )
                        }
                        placeholder="Ana proje başlığı"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Görünen Başlık (2 satır)</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value={
                          content.homepage?.featured_projects?.mainProject
                            ?.subtitle || ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.mainProject.subtitle",
                            e.target.value
                          )
                        }
                        placeholder="İlk satır\nİkinci satır (Enter ile ayırın)"
                      />
                      <Form.Text className="text-muted">
                        İki satır halinde görünecek başlığı yazın. Satır arası
                        geçiş için Enter kullanın.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Proje Açıklaması</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        value={
                          content.homepage?.featured_projects?.mainProject
                            ?.description || ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.mainProject.description",
                            e.target.value
                          )
                        }
                        placeholder="Proje hakkında detaylı açıklama"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Buton Metni</Form.Label>
                      <Form.Control
                        type="text"
                        value={
                          content.homepage?.featured_projects?.mainProject
                            ?.buttonText || ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.mainProject.buttonText",
                            e.target.value
                          )
                        }
                        placeholder="Örn: DAHA FAZLASI"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Buton Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.homepage?.featured_projects?.mainProject
                            ?.buttonColor || "#5a6c57"
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.mainProject.buttonColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Buton Linki</Form.Label>
                      <Form.Control
                        type="text"
                        value={
                          content.homepage?.featured_projects?.mainProject
                            ?.link || ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.mainProject.link",
                            e.target.value
                          )
                        }
                        placeholder="/projects/fidan-dikimi veya https://example.com"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* Üst Kart Ayarları */}
            <Accordion.Item eventKey="topCard">
              <Accordion.Header>Üst Kart Ayarları</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3">
                  <Col md={8}>
                    <ImageField
                      label="Kart Görseli"
                      value={
                        content.homepage?.featured_projects?.topCard?.image ||
                        ""
                      }
                      onChange={(value) =>
                        updateContent(
                          "homepage.featured_projects.topCard.image",
                          value
                        )
                      }
                      placeholder="Üst kartta gösterilecek görsel"
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Alt Metin</Form.Label>
                      <Form.Control
                        type="text"
                        value={
                          content.homepage?.featured_projects?.topCard?.alt ||
                          ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.topCard.alt",
                            e.target.value
                          )
                        }
                        placeholder="Görsel alt metni"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* Featured Projects Stil Ayarları */}
            <Accordion.Item eventKey="featuredProjectsStyles">
              <Accordion.Header>
                Öne Çıkan Projeler Stil Ayarları
              </Accordion.Header>
              <Accordion.Body>
                <h6 className="mb-3">Bölüm Stilleri</h6>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Arkaplan Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.homepage?.featured_projects?.styles
                            ?.backgroundColor || "#f8f9fa"
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.styles.backgroundColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Padding Top (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={
                          content.homepage?.featured_projects?.styles
                            ?.paddingTop || 80
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.styles.paddingTop",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Padding Bottom (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={
                          content.homepage?.featured_projects?.styles
                            ?.paddingBottom || 120
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.styles.paddingBottom",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Başlık Stilleri</h6>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Ana Başlık Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.homepage?.featured_projects?.styles?.title
                            ?.fontFamily || "Open Sans, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.styles.title.fontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Ana Başlık Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.homepage?.featured_projects?.styles?.title
                            ?.color || "#5a6c57"
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.styles.title.color",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Proje Başlık Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.homepage?.featured_projects?.styles
                            ?.projectTitle?.fontFamily ||
                          "Open Sans, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.styles.projectTitle.fontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Proje Başlık Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.homepage?.featured_projects?.styles
                            ?.projectTitle?.color || "#2c5282"
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.styles.projectTitle.color",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Açıklama Metni Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.homepage?.featured_projects?.styles
                            ?.description?.color || "#6c757d"
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.styles.description.color",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Buton Stilleri</h6>
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Buton Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.homepage?.featured_projects?.styles?.button
                            ?.fontFamily || "Open Sans, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.styles.button.fontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Buton Font Boyutu (rem)</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.1"
                        value={
                          content.homepage?.featured_projects?.styles?.button
                            ?.fontSize || 1.0
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.styles.button.fontSize",
                            parseFloat(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Buton Yuvarlama (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={
                          content.homepage?.featured_projects?.styles?.button
                            ?.borderRadius || 0
                        }
                        onChange={(e) =>
                          updateContent(
                            "homepage.featured_projects.styles.button.borderRadius",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* Categories Section */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Kategoriler</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.homepage?.categories?.title || ""}
                        onChange={(e) =>
                          updateContent(
                            "homepage.categories.title",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Alt Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.homepage?.categories?.subtitle || ""}
                        onChange={(e) =>
                          updateContent(
                            "homepage.categories.subtitle",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* Certificate Section */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>E-Sertifika</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.homepage?.certificate?.title || ""}
                        onChange={(e) =>
                          updateContent(
                            "homepage.certificate.title",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Alt Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.homepage?.certificate?.subtitle || ""}
                        onChange={(e) =>
                          updateContent(
                            "homepage.certificate.subtitle",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* Gallery Section */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>Galeri</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.homepage?.gallery?.title || ""}
                        onChange={(e) =>
                          updateContent(
                            "homepage.gallery.title",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Alt Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.homepage?.gallery?.subtitle || ""}
                        onChange={(e) =>
                          updateContent(
                            "homepage.gallery.subtitle",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        {/* Categories Tab */}
        <Tab eventKey="categories" title="Kategoriler">
          <Accordion defaultActiveKey="0">
            {/* Kategoriler İçerik */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Kategoriler İçerik Ayarları</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3 mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Bölüm Başlığı</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.categories?.title || ""}
                        onChange={(e) =>
                          updateContent("categories.title", e.target.value)
                        }
                        placeholder="Örn: Faaliyet Alanlarımız"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Alt Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.categories?.subtitle || ""}
                        onChange={(e) =>
                          updateContent("categories.subtitle", e.target.value)
                        }
                        placeholder="Örn: Toplumsal değer yaratan projelerimiz"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <CategoryManager
                  categories={content.categories?.items || []}
                  onUpdate={(items) => updateContent("categories.items", items)}
                  backgroundImage={content.categories?.backgroundImage || ""}
                  onBackgroundUpdate={(value) =>
                    updateContent("categories.backgroundImage", value)
                  }
                />
              </Accordion.Body>
            </Accordion.Item>

            {/* Kategoriler Stil Ayarları */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Kategoriler Stil Ayarları</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Arkaplan Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.categories?.styles?.backgroundColor ||
                          "#f8f9fa"
                        }
                        onChange={(e) =>
                          updateContent(
                            "categories.styles.backgroundColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Padding Top (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.categories?.styles?.paddingTop || 60}
                        onChange={(e) =>
                          updateContent(
                            "categories.styles.paddingTop",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Padding Bottom (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.categories?.styles?.paddingBottom || 250}
                        onChange={(e) =>
                          updateContent(
                            "categories.styles.paddingBottom",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Kart Stilleri</h6>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Kart Başlık Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.categories?.styles?.card?.titleFontFamily ||
                          "Poppins, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "categories.styles.card.titleFontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Kart Başlık Font Boyutu (rem)</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.1"
                        value={
                          content.categories?.styles?.card?.titleFontSize || 1.3
                        }
                        onChange={(e) =>
                          updateContent(
                            "categories.styles.card.titleFontSize",
                            parseFloat(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Kart Başlık Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.categories?.styles?.card?.titleColor ||
                          "#5a6c57"
                        }
                        onChange={(e) =>
                          updateContent(
                            "categories.styles.card.titleColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Kart İçerik Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.categories?.styles?.card?.contentFontFamily ||
                          "Open Sans, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "categories.styles.card.contentFontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Kart İçerik Font Boyutu (rem)</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.1"
                        value={
                          content.categories?.styles?.card?.contentFontSize ||
                          0.95
                        }
                        onChange={(e) =>
                          updateContent(
                            "categories.styles.card.contentFontSize",
                            parseFloat(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Kart İçerik Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.categories?.styles?.card?.contentColor ||
                          "#666666"
                        }
                        onChange={(e) =>
                          updateContent(
                            "categories.styles.card.contentColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Kart Border Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.categories?.styles?.card?.borderColor ||
                          "#e8f5e8"
                        }
                        onChange={(e) =>
                          updateContent(
                            "categories.styles.card.borderColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Kart Hover Border Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.categories?.styles?.card?.hoverBorderColor ||
                          "#5a6c57"
                        }
                        onChange={(e) =>
                          updateContent(
                            "categories.styles.card.hoverBorderColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Kart Yuvarlama (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={
                          content.categories?.styles?.card?.borderRadius || 20
                        }
                        onChange={(e) =>
                          updateContent(
                            "categories.styles.card.borderRadius",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        {/* E-Certificate Tab */}
        <Tab eventKey="ecertificate" title="E-Sertifika">
          <Accordion defaultActiveKey="0">
            {/* E-Sertifika İçerik */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>E-Sertifika İçerik Ayarları</Accordion.Header>
              <Accordion.Body>
                <Row className="g-4">
                  <Col md={12}>
                    <ImageField
                      label="Arkaplan Görseli"
                      value={content.ecertificate?.backgroundImage || ""}
                      onChange={(value) =>
                        updateContent("ecertificate.backgroundImage", value)
                      }
                      placeholder="E-sertifika arkaplan görseli"
                    />
                  </Col>
                </Row>

                <h6 className="mt-4 mb-3">Sol Bölüm</h6>
                <Row className="g-3 mb-4">
                  <Col md={12}>
                    <ImageField
                      label="Sol Bölüm Görseli"
                      value={content.ecertificate?.leftSection?.image || ""}
                      onChange={(value) =>
                        updateContent("ecertificate.leftSection.image", value)
                      }
                      placeholder="Sol bölüm görseli (toprak görseli)"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Görsel Alt Metni</Form.Label>
                      <Form.Control
                        type="text"
                        value={
                          content.ecertificate?.leftSection?.imageAlt || ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.leftSection.imageAlt",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Alıntı Metni</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.ecertificate?.leftSection?.quote || ""}
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.leftSection.quote",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Alt Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={
                          content.ecertificate?.leftSection?.subtitle || ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.leftSection.subtitle",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Sağ Bölüm</h6>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.ecertificate?.rightSection?.title || ""}
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.rightSection.title",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Alt Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={
                          content.ecertificate?.rightSection?.subtitle || ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.rightSection.subtitle",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <ImageField
                      label="Sertifika Görseli"
                      value={
                        content.ecertificate?.rightSection?.certificateImage ||
                        ""
                      }
                      onChange={(value) =>
                        updateContent(
                          "ecertificate.rightSection.certificateImage",
                          value
                        )
                      }
                      placeholder="Sertifika örnek görseli"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Sertifika Alt Metni</Form.Label>
                      <Form.Control
                        type="text"
                        value={
                          content.ecertificate?.rightSection?.certificateAlt ||
                          ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.rightSection.certificateAlt",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* E-Sertifika Stil Ayarları */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>E-Sertifika Stil Ayarları</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Arkaplan Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.ecertificate?.styles?.backgroundColor ||
                          "#f8f9fa"
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.backgroundColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Padding Top (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.ecertificate?.styles?.paddingTop || 80}
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.paddingTop",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Padding Bottom (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={
                          content.ecertificate?.styles?.paddingBottom || 200
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.paddingBottom",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Sol Bölüm Stili</h6>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Alıntı Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.ecertificate?.styles?.leftSection
                            ?.quoteFontFamily || "Georgia, serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.leftSection.quoteFontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Alıntı Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.ecertificate?.styles?.leftSection
                            ?.quoteColor || "#5a6c57"
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.leftSection.quoteColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Görsel Border Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.ecertificate?.styles?.leftSection
                            ?.imageBorderColor || "#5a6c57"
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.leftSection.imageBorderColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Alt Başlık Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.ecertificate?.styles?.leftSection
                            ?.subtitleFontFamily || "Open Sans, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.leftSection.subtitleFontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Alt Başlık Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.ecertificate?.styles?.leftSection
                            ?.subtitleColor || "#5a6c57"
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.leftSection.subtitleColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Sağ Bölüm Stili</h6>
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Başlık Arkaplan Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.ecertificate?.styles?.rightSection
                            ?.titleBackgroundColor || "#5a6c57"
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.rightSection.titleBackgroundColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Başlık Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.ecertificate?.styles?.rightSection
                            ?.titleFontFamily || "Poppins, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.rightSection.titleFontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Alt Başlık Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.ecertificate?.styles?.rightSection
                            ?.subtitleFontFamily || "Open Sans, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.rightSection.subtitleFontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Alt Başlık Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.ecertificate?.styles?.rightSection
                            ?.subtitleColor || "#5a6c57"
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.rightSection.subtitleColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Sertifika Görsel Genişliği (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={
                          content.ecertificate?.styles?.rightSection
                            ?.certificateWidth || 350
                        }
                        onChange={(e) =>
                          updateContent(
                            "ecertificate.styles.rightSection.certificateWidth",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        {/* Project Gallery Tab */}
        <Tab eventKey="projectGallery" title="Proje Galerisi">
          <Card>
            <Card.Header>
              <h5 className="mb-0">Proje Galerisi Ayarları</h5>
            </Card.Header>
            <Card.Body>
              <Row className="g-3 mb-4">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Başlık</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.projectGallery?.title || ""}
                      onChange={(e) =>
                        updateContent("projectGallery.title", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Alt Başlık</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.projectGallery?.subtitle || ""}
                      onChange={(e) =>
                        updateContent("projectGallery.subtitle", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <ImageField
                    label="Arkaplan Görseli"
                    value={content.projectGallery?.backgroundImage || ""}
                    onChange={(value) =>
                      updateContent("projectGallery.backgroundImage", value)
                    }
                    placeholder="Proje galerisi arkaplan görseli"
                  />
                </Col>
              </Row>

              <h6>Haber Bölümü</h6>
              <Row className="g-3 mb-4">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Haber Başlığı</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.projectGallery?.newsSection?.title || ""}
                      onChange={(e) =>
                        updateContent(
                          "projectGallery.newsSection.title",
                          e.target.value
                        )
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>"Devamını Oku" Metni</Form.Label>
                    <Form.Control
                      type="text"
                      value={
                        content.projectGallery?.newsSection?.readMore || ""
                      }
                      onChange={(e) =>
                        updateContent(
                          "projectGallery.newsSection.readMore",
                          e.target.value
                        )
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Haber İçeriği</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={content.projectGallery?.newsSection?.content || ""}
                      onChange={(e) =>
                        updateContent(
                          "projectGallery.newsSection.content",
                          e.target.value
                        )
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <h6>Grid Düzeni</h6>
              <Row className="g-3 mb-3">
                <Col md={12}>
                  <h6 className="text-muted">Üst Satır</h6>
                  {content.projectGallery?.grid?.topRow?.map((item, index) => (
                    <Card key={index} className="mb-2">
                      <Card.Body>
                        <Row className="g-3 align-items-center">
                          <Col md={2}>
                            <Form.Select
                              value={item.type || "color"}
                              onChange={(e) => {
                                const newGrid = {
                                  ...content.projectGallery.grid,
                                };
                                newGrid.topRow[index] = {
                                  ...item,
                                  type: e.target.value,
                                };
                                updateContent("projectGallery.grid", newGrid);
                              }}
                            >
                              <option value="image">Görsel</option>
                              <option value="news">Haber</option>
                              <option value="color">Renk Alanı</option>
                            </Form.Select>
                          </Col>
                          {item.type === "image" && (
                            <>
                              <Col md={6}>
                                <ImageField
                                  label=""
                                  value={item.src || ""}
                                  onChange={(value) => {
                                    const newGrid = {
                                      ...content.projectGallery.grid,
                                    };
                                    newGrid.topRow[index] = {
                                      ...item,
                                      src: value,
                                    };
                                    updateContent(
                                      "projectGallery.grid",
                                      newGrid
                                    );
                                  }}
                                  placeholder="Görsel yolu"
                                />
                              </Col>
                              <Col md={4}>
                                <Form.Control
                                  type="text"
                                  value={item.alt || ""}
                                  onChange={(e) => {
                                    const newGrid = {
                                      ...content.projectGallery.grid,
                                    };
                                    newGrid.topRow[index] = {
                                      ...item,
                                      alt: e.target.value,
                                    };
                                    updateContent(
                                      "projectGallery.grid",
                                      newGrid
                                    );
                                  }}
                                  placeholder="Alt metin"
                                />
                              </Col>
                            </>
                          )}
                          {item.type === "color" && (
                            <Col md={4}>
                              <Form.Control
                                type="color"
                                value={item.backgroundColor || "#5a6c57"}
                                onChange={(e) => {
                                  const newGrid = {
                                    ...content.projectGallery.grid,
                                  };
                                  newGrid.topRow[index] = {
                                    ...item,
                                    backgroundColor: e.target.value,
                                  };
                                  updateContent("projectGallery.grid", newGrid);
                                }}
                              />
                            </Col>
                          )}
                        </Row>
                      </Card.Body>
                    </Card>
                  ))}
                </Col>
              </Row>

              <Row className="g-3 mb-4">
                <Col md={12}>
                  <h6 className="text-muted">Alt Satır</h6>
                  {content.projectGallery?.grid?.bottomRow?.map(
                    (item, index) => (
                      <Card key={index} className="mb-2">
                        <Card.Body>
                          <Row className="g-3 align-items-center">
                            <Col md={2}>
                              <Form.Select
                                value={item.type || "color"}
                                onChange={(e) => {
                                  const newGrid = {
                                    ...content.projectGallery.grid,
                                  };
                                  newGrid.bottomRow[index] = {
                                    ...item,
                                    type: e.target.value,
                                  };
                                  updateContent("projectGallery.grid", newGrid);
                                }}
                              >
                                <option value="image">Görsel</option>
                                <option value="content">Kısa İçerik</option>
                                <option value="longContent">Uzun İçerik</option>
                                <option value="color">Renk Alanı</option>
                              </Form.Select>
                            </Col>
                            {item.type === "image" && (
                              <>
                                <Col md={6}>
                                  <ImageField
                                    label=""
                                    value={item.src || ""}
                                    onChange={(value) => {
                                      const newGrid = {
                                        ...content.projectGallery.grid,
                                      };
                                      newGrid.bottomRow[index] = {
                                        ...item,
                                        src: value,
                                      };
                                      updateContent(
                                        "projectGallery.grid",
                                        newGrid
                                      );
                                    }}
                                    placeholder="Görsel yolu"
                                  />
                                </Col>
                                <Col md={4}>
                                  <Form.Control
                                    type="text"
                                    value={item.alt || ""}
                                    onChange={(e) => {
                                      const newGrid = {
                                        ...content.projectGallery.grid,
                                      };
                                      newGrid.bottomRow[index] = {
                                        ...item,
                                        alt: e.target.value,
                                      };
                                      updateContent(
                                        "projectGallery.grid",
                                        newGrid
                                      );
                                    }}
                                    placeholder="Alt metin"
                                  />
                                </Col>
                              </>
                            )}
                            {(item.type === "content" ||
                              item.type === "longContent") && (
                              <>
                                <Col md={6}>
                                  <Form.Control
                                    as="textarea"
                                    rows={2}
                                    value={item.content || ""}
                                    onChange={(e) => {
                                      const newGrid = {
                                        ...content.projectGallery.grid,
                                      };
                                      newGrid.bottomRow[index] = {
                                        ...item,
                                        content: e.target.value,
                                      };
                                      updateContent(
                                        "projectGallery.grid",
                                        newGrid
                                      );
                                    }}
                                    placeholder="İçerik metni"
                                  />
                                </Col>
                                <Col md={2}>
                                  <Form.Control
                                    type="text"
                                    value={item.readMore || ""}
                                    onChange={(e) => {
                                      const newGrid = {
                                        ...content.projectGallery.grid,
                                      };
                                      newGrid.bottomRow[index] = {
                                        ...item,
                                        readMore: e.target.value,
                                      };
                                      updateContent(
                                        "projectGallery.grid",
                                        newGrid
                                      );
                                    }}
                                    placeholder="Devamını oku"
                                  />
                                </Col>
                                <Col md={2}>
                                  <Form.Control
                                    type="color"
                                    value={item.backgroundColor || "#e8e8e8"}
                                    onChange={(e) => {
                                      const newGrid = {
                                        ...content.projectGallery.grid,
                                      };
                                      newGrid.bottomRow[index] = {
                                        ...item,
                                        backgroundColor: e.target.value,
                                      };
                                      updateContent(
                                        "projectGallery.grid",
                                        newGrid
                                      );
                                    }}
                                  />
                                </Col>
                              </>
                            )}
                            {item.type === "color" && (
                              <Col md={4}>
                                <Form.Control
                                  type="color"
                                  value={item.backgroundColor || "#5a6c57"}
                                  onChange={(e) => {
                                    const newGrid = {
                                      ...content.projectGallery.grid,
                                    };
                                    newGrid.bottomRow[index] = {
                                      ...item,
                                      backgroundColor: e.target.value,
                                    };
                                    updateContent(
                                      "projectGallery.grid",
                                      newGrid
                                    );
                                  }}
                                />
                              </Col>
                            )}
                          </Row>
                        </Card.Body>
                      </Card>
                    )
                  )}
                </Col>
              </Row>

              <Alert variant="info">
                <i className="fas fa-info-circle me-2"></i>
                Grid düzenini değiştirmek için yukarıdaki kontrolleri kullanın.
                Yeşil alanları görsel olarak değiştirmek için "Görsel"
                seçeneğini kullanın.
              </Alert>
            </Card.Body>
          </Card>
        </Tab>

        {/* Map Section Tab */}
        <Tab eventKey="mapSection" title="Harita Bölümü">
          <Accordion defaultActiveKey="0">
            {/* Harita İçerik */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Harita Bölümü İçerik Ayarları</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3 mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.mapSection?.title || ""}
                        onChange={(e) =>
                          updateContent("mapSection.title", e.target.value)
                        }
                        placeholder="Türkiye Haritası"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Alt Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.mapSection?.subtitle || ""}
                        onChange={(e) =>
                          updateContent("mapSection.subtitle", e.target.value)
                        }
                        placeholder="Faaliyet gösterdiğimiz şehirler"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-3 mb-4">
                  <Col md={12}>
                    <ImageField
                      label="Arkaplan Görseli"
                      value={content.mapSection?.backgroundImage || ""}
                      onChange={(value) =>
                        updateContent("mapSection.backgroundImage", value)
                      }
                      placeholder="Harita bölümü arkaplan görseli"
                    />
                  </Col>
                  <Col md={12}>
                    <ImageField
                      label="Harita Görseli"
                      value={content.mapSection?.mapImage || ""}
                      onChange={(value) =>
                        updateContent("mapSection.mapImage", value)
                      }
                      placeholder="Türkiye haritası görseli"
                    />
                  </Col>
                </Row>

                <h6 className="mb-3">İstatistik İkonları</h6>
                <Row className="g-3">
                  <Col md={6}>
                    <ImageField
                      label="Eğitim İkonu"
                      value={content.mapSection?.icons?.education || ""}
                      onChange={(value) =>
                        updateContent("mapSection.icons.education", value)
                      }
                      placeholder="Eğitim ve seminer ikonu"
                    />
                  </Col>
                  <Col md={6}>
                    <ImageField
                      label="Blog İkonu"
                      value={content.mapSection?.icons?.blog || ""}
                      onChange={(value) =>
                        updateContent("mapSection.icons.blog", value)
                      }
                      placeholder="Blog/kitap ikonu"
                    />
                  </Col>
                  <Col md={6}>
                    <ImageField
                      label="Projeler İkonu"
                      value={content.mapSection?.icons?.projects || ""}
                      onChange={(value) =>
                        updateContent("mapSection.icons.projects", value)
                      }
                      placeholder="Projeler ikonu"
                    />
                  </Col>
                  <Col md={6}>
                    <ImageField
                      label="Aktiviteler İkonu"
                      value={content.mapSection?.icons?.activities || ""}
                      onChange={(value) =>
                        updateContent("mapSection.icons.activities", value)
                      }
                      placeholder="Aktiviteler ikonu"
                    />
                  </Col>
                  <Col md={12}>
                    <ImageField
                      label="Destek İkonu"
                      value={content.mapSection?.icons?.support || ""}
                      onChange={(value) =>
                        updateContent("mapSection.icons.support", value)
                      }
                      placeholder="Destek/gönüllü ikonu"
                    />
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* Harita Stil Ayarları */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Harita Bölümü Stil Ayarları</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Bölüm Padding Top (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.mapSection?.styles?.paddingTop || 0}
                        onChange={(e) =>
                          updateContent(
                            "mapSection.styles.paddingTop",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Bölüm Margin Top (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.mapSection?.styles?.marginTop || -150}
                        onChange={(e) =>
                          updateContent(
                            "mapSection.styles.marginTop",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Bölüm Margin Bottom (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.mapSection?.styles?.marginBottom || -90}
                        onChange={(e) =>
                          updateContent(
                            "mapSection.styles.marginBottom",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Şehir İşaretleyici Stilleri</h6>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Aktif Şehir Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.mapSection?.styles?.activeCity?.color ||
                          "#28a745"
                        }
                        onChange={(e) =>
                          updateContent(
                            "mapSection.styles.activeCity.color",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Pasif Şehir Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.mapSection?.styles?.inactiveCity?.color ||
                          "#6c757d"
                        }
                        onChange={(e) =>
                          updateContent(
                            "mapSection.styles.inactiveCity.color",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>İşaretleyici Boyutu (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.mapSection?.styles?.marker?.size || 12}
                        onChange={(e) =>
                          updateContent(
                            "mapSection.styles.marker.size",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">İstatistik Buton Stilleri</h6>
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>İstatistik Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.mapSection?.styles?.stats?.fontFamily ||
                          "Open Sans, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "mapSection.styles.stats.fontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>İstatistik Buton Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.mapSection?.styles?.stats?.buttonColor ||
                          "#28a745"
                        }
                        onChange={(e) =>
                          updateContent(
                            "mapSection.styles.stats.buttonColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>İstatistik Metin Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.mapSection?.styles?.stats?.textColor ||
                          "#ffffff"
                        }
                        onChange={(e) =>
                          updateContent(
                            "mapSection.styles.stats.textColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        {/* News Tab */}
        <Tab eventKey="news" title="Bizden Haberler">
          <Accordion defaultActiveKey="0">
            {/* News İçerik */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Bizden Haberler İçerik Ayarları
              </Accordion.Header>
              <Accordion.Body>
                <Row className="g-3 mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.news?.title || ""}
                        onChange={(e) =>
                          updateContent("news.title", e.target.value)
                        }
                        placeholder="Bizden Haberler"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Buton Metni</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.news?.buttonText || ""}
                        onChange={(e) =>
                          updateContent("news.buttonText", e.target.value)
                        }
                        placeholder="DAHA FAZLA BİLGİ EDİNİN"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-3 mb-4">
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>İçerik Metni</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        value={content.news?.content || ""}
                        onChange={(e) =>
                          updateContent("news.content", e.target.value)
                        }
                        placeholder="Haber içeriği..."
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-3">
                  <Col md={6}>
                    <ImageField
                      label="Arkaplan Görseli"
                      value={content.news?.backgroundImage || ""}
                      onChange={(value) =>
                        updateContent("news.backgroundImage", value)
                      }
                      placeholder="Arkaplan görseli"
                    />
                  </Col>
                  <Col md={6}>
                    <ImageField
                      label="Portre Görseli"
                      value={content.news?.portraitImage || ""}
                      onChange={(value) =>
                        updateContent("news.portraitImage", value)
                      }
                      placeholder="Kişi portre görseli"
                    />
                  </Col>
                  <Col md={6}>
                    <ImageField
                      label="Logo Görseli"
                      value={content.news?.logoImage || ""}
                      onChange={(value) =>
                        updateContent("news.logoImage", value)
                      }
                      placeholder="ABAD logo görseli"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Buton Linki</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.news?.buttonLink || ""}
                        onChange={(e) =>
                          updateContent("news.buttonLink", e.target.value)
                        }
                        placeholder="/news veya https://example.com"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* News Stil Ayarları */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Bizden Haberler Stil Ayarları</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Arkaplan Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.news?.styles?.backgroundColor || "#f8f9fa"
                        }
                        onChange={(e) =>
                          updateContent(
                            "news.styles.backgroundColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Padding Top (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.news?.styles?.paddingTop || 80}
                        onChange={(e) =>
                          updateContent(
                            "news.styles.paddingTop",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Padding Bottom (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.news?.styles?.paddingBottom || 200}
                        onChange={(e) =>
                          updateContent(
                            "news.styles.paddingBottom",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Başlık Stilleri</h6>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Başlık Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.news?.styles?.title?.fontFamily ||
                          "Poppins, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "news.styles.title.fontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Başlık Font Boyutu (rem)</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.1"
                        value={content.news?.styles?.title?.fontSize || 3.2}
                        onChange={(e) =>
                          updateContent(
                            "news.styles.title.fontSize",
                            parseFloat(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Başlık Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={content.news?.styles?.title?.color || "#2c5f88"}
                        onChange={(e) =>
                          updateContent(
                            "news.styles.title.color",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">İçerik Stilleri</h6>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>İçerik Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.news?.styles?.content?.fontFamily ||
                          "Open Sans, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "news.styles.content.fontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>İçerik Font Boyutu (rem)</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.1"
                        value={content.news?.styles?.content?.fontSize || 1.1}
                        onChange={(e) =>
                          updateContent(
                            "news.styles.content.fontSize",
                            parseFloat(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>İçerik Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.news?.styles?.content?.color || "#333333"
                        }
                        onChange={(e) =>
                          updateContent(
                            "news.styles.content.color",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Portre Stilleri</h6>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Portre Boyutu (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.news?.styles?.portraitSize || 350}
                        onChange={(e) =>
                          updateContent(
                            "news.styles.portraitSize",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Portre Border Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.news?.styles?.portraitBorderColor || "#f5f5dc"
                        }
                        onChange={(e) =>
                          updateContent(
                            "news.styles.portraitBorderColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Portre Border Genişliği (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.news?.styles?.portraitBorderWidth || 8}
                        onChange={(e) =>
                          updateContent(
                            "news.styles.portraitBorderWidth",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Logo Stilleri</h6>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Logo Genişliği (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.news?.styles?.logoWidth || 300}
                        onChange={(e) =>
                          updateContent(
                            "news.styles.logoWidth",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Logo Opaklığı</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.1"
                        min="0"
                        max="1"
                        value={content.news?.styles?.logoOpacity || 0.1}
                        onChange={(e) =>
                          updateContent(
                            "news.styles.logoOpacity",
                            parseFloat(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Buton Stilleri</h6>
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Buton Arkaplan Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.news?.styles?.button?.backgroundColor ||
                          "#5a6c57"
                        }
                        onChange={(e) =>
                          updateContent(
                            "news.styles.button.backgroundColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Buton Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.news?.styles?.button?.fontFamily ||
                          "Open Sans, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "news.styles.button.fontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Buton Font Boyutu (rem)</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.1"
                        value={content.news?.styles?.button?.fontSize || 0.9}
                        onChange={(e) =>
                          updateContent(
                            "news.styles.button.fontSize",
                            parseFloat(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Buton Border Radius (px)</Form.Label>
                      <Form.Control
                        type="number"
                        value={content.news?.styles?.button?.borderRadius || 5}
                        onChange={(e) =>
                          updateContent(
                            "news.styles.button.borderRadius",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        {/* Payment Service Tab */}
        <Tab eventKey="paymentService" title="Ödeme Servisi">
          <Accordion defaultActiveKey="0">
            {/* Payment Service İçerik */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ödeme Servisi İçerik Ayarları</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3 mb-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.paymentService?.title || ""}
                        onChange={(e) =>
                          updateContent("paymentService.title", e.target.value)
                        }
                        placeholder="Ödeme Başlığı"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Alt Başlık</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.paymentService?.subtitle || ""}
                        onChange={(e) =>
                          updateContent(
                            "paymentService.subtitle",
                            e.target.value
                          )
                        }
                        placeholder="Ödeme açıklaması"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-3 mb-4">
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Açıklama Metni</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={content.paymentService?.description || ""}
                        onChange={(e) =>
                          updateContent(
                            "paymentService.description",
                            e.target.value
                          )
                        }
                        placeholder="Ödeme servisi hakkında detaylı bilgi"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Ödeme Seçenekleri</h6>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Kredi Kartı Başlığı</Form.Label>
                      <Form.Control
                        type="text"
                        value={
                          content.paymentService?.options?.creditCard?.title ||
                          ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "paymentService.options.creditCard.title",
                            e.target.value
                          )
                        }
                        placeholder="Kredi Kartı ile Ödeme"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Banka Havalesi Başlığı</Form.Label>
                      <Form.Control
                        type="text"
                        value={
                          content.paymentService?.options?.bankTransfer
                            ?.title || ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "paymentService.options.bankTransfer.title",
                            e.target.value
                          )
                        }
                        placeholder="Banka Havalesi"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Banka Bilgileri</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        value={
                          content.paymentService?.options?.bankTransfer
                            ?.details || ""
                        }
                        onChange={(e) =>
                          updateContent(
                            "paymentService.options.bankTransfer.details",
                            e.target.value
                          )
                        }
                        placeholder="Banka hesap bilgileri ve IBAN numarası"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* Payment Service Stil Ayarları */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Ödeme Servisi Stil Ayarları</Accordion.Header>
              <Accordion.Body>
                <Row className="g-3 mb-4">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Arkaplan Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.paymentService?.styles?.backgroundColor ||
                          "#ffffff"
                        }
                        onChange={(e) =>
                          updateContent(
                            "paymentService.styles.backgroundColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Başlık Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.paymentService?.styles?.titleColor ||
                          "#2c5aa0"
                        }
                        onChange={(e) =>
                          updateContent(
                            "paymentService.styles.titleColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Metin Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.paymentService?.styles?.textColor || "#6c757d"
                        }
                        onChange={(e) =>
                          updateContent(
                            "paymentService.styles.textColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h6 className="mb-3">Başlık Stilleri</h6>
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Başlık Font Ailesi</Form.Label>
                      <Form.Select
                        value={
                          content.paymentService?.styles?.title?.fontFamily ||
                          "Open Sans, sans-serif"
                        }
                        onChange={(e) =>
                          updateContent(
                            "paymentService.styles.title.fontFamily",
                            e.target.value
                          )
                        }
                      >
                        <option value="Open Sans, sans-serif">Open Sans</option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Helvetica, sans-serif">Helvetica</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="Times New Roman, serif">
                          Times New Roman
                        </option>
                        <option value="Roboto, sans-serif">Roboto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Başlık Font Boyutu (rem)</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.1"
                        value={
                          content.paymentService?.styles?.title?.fontSize || 2.0
                        }
                        onChange={(e) =>
                          updateContent(
                            "paymentService.styles.title.fontSize",
                            parseFloat(e.target.value)
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Buton Rengi</Form.Label>
                      <Form.Control
                        type="color"
                        value={
                          content.paymentService?.styles?.buttonColor ||
                          "#28a745"
                        }
                        onChange={(e) =>
                          updateContent(
                            "paymentService.styles.buttonColor",
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>
      </Tabs>

      {/* Preview Modal */}
      <Modal show={showPreview} onHide={() => setShowPreview(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>İçerik Önizlemesi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <pre
            className="bg-light p-3 rounded"
            style={{ fontSize: "12px", maxHeight: "400px", overflow: "auto" }}
          >
            {JSON.stringify(content, null, 2)}
          </pre>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPreview(false)}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContentManager;
