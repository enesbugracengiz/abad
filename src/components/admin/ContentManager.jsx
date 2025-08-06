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
          <Card>
            <Card.Header>
              <h5 className="mb-0">Header Ayarları</h5>
            </Card.Header>
            <Card.Body>
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
                    onChange={(value) => updateContent("header.logo.src", value)}
                    placeholder="Logo görsel yolu"
                  />
                </Col>
                <Col md={12}>
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
              </Row>

              <h6 className="mt-4 mb-3">Navigasyon Menüsü</h6>
              <Row className="g-4">
                {content.header?.navigation &&
                  Object.entries(content.header.navigation).map(([key, nav]) => (
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
                  ))}
              </Row>
            </Card.Body>
          </Card>
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
                          updateContent("homepage.hero.subtitle", e.target.value)
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
                        value={content.homepage?.featured_projects?.subtitle || ""}
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
                      value={content.homepage?.featured_projects?.backgroundPattern || ""}
                      onChange={(value) => updateContent("homepage.featured_projects.backgroundPattern", value)}
                      placeholder="Ana arkaplan deseni"
                    />
                  </Col>
                  <Col md={6}>
                    <ImageField
                      label="Alt Desen Görseli"
                      value={content.homepage?.featured_projects?.bottomPattern || ""}
                      onChange={(value) => updateContent("homepage.featured_projects.bottomPattern", value)}
                      placeholder="Alt kısım deseni"
                    />
                  </Col>
                  <Col md={12}>
                    <ImageField
                      label="Sol İkon Görseli"
                      value={content.homepage?.featured_projects?.leftIcon || ""}
                      onChange={(value) => updateContent("homepage.featured_projects.leftIcon", value)}
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
                        value={content.homepage?.featured_projects?.mainProject?.title || ""}
                        onChange={(e) =>
                          updateContent("homepage.featured_projects.mainProject.title", e.target.value)
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
                        value={content.homepage?.featured_projects?.mainProject?.subtitle || ""}
                        onChange={(e) =>
                          updateContent("homepage.featured_projects.mainProject.subtitle", e.target.value)
                        }
                        placeholder="İlk satır\nİkinci satır (Enter ile ayırın)"
                      />
                      <Form.Text className="text-muted">
                        İki satır halinde görünecek başlığı yazın. Satır arası geçiş için Enter kullanın.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Proje Açıklaması</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        value={content.homepage?.featured_projects?.mainProject?.description || ""}
                        onChange={(e) =>
                          updateContent("homepage.featured_projects.mainProject.description", e.target.value)
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
                        value={content.homepage?.featured_projects?.mainProject?.buttonText || ""}
                        onChange={(e) =>
                          updateContent("homepage.featured_projects.mainProject.buttonText", e.target.value)
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
                        value={content.homepage?.featured_projects?.mainProject?.buttonColor || "#5a6c57"}
                        onChange={(e) =>
                          updateContent("homepage.featured_projects.mainProject.buttonColor", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Buton Linki</Form.Label>
                      <Form.Control
                        type="text"
                        value={content.homepage?.featured_projects?.mainProject?.link || ""}
                        onChange={(e) =>
                          updateContent("homepage.featured_projects.mainProject.link", e.target.value)
                        }
                        placeholder="/projects/fidan-dikimi veya https://example.com"
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
                          updateContent("homepage.gallery.title", e.target.value)
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
          <Card>
            <Card.Header>
              <h5 className="mb-0">Faaliyet Kategorileri</h5>
            </Card.Header>
            <Card.Body>
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
                onBackgroundUpdate={(value) => updateContent("categories.backgroundImage", value)}
              />
            </Card.Body>
          </Card>
        </Tab>

        {/* E-Certificate Tab */}
        <Tab eventKey="ecertificate" title="E-Sertifika">
          <Card>
            <Card.Header>
              <h5 className="mb-0">E-Sertifika Bölümü</h5>
            </Card.Header>
            <Card.Body>
              <Row className="g-4">
                <Col md={12}>
                  <ImageField
                    label="Arkaplan Görseli"
                    value={content.ecertificate?.backgroundImage || ""}
                    onChange={(value) => updateContent("ecertificate.backgroundImage", value)}
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
                    onChange={(value) => updateContent("ecertificate.leftSection.image", value)}
                    placeholder="Sol bölüm görseli (toprak görseli)"
                  />
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Görsel Alt Metni</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.ecertificate?.leftSection?.imageAlt || ""}
                      onChange={(e) =>
                        updateContent("ecertificate.leftSection.imageAlt", e.target.value)
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
                        updateContent("ecertificate.leftSection.quote", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Alt Başlık</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.ecertificate?.leftSection?.subtitle || ""}
                      onChange={(e) =>
                        updateContent("ecertificate.leftSection.subtitle", e.target.value)
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
                        updateContent("ecertificate.rightSection.title", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Alt Başlık</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.ecertificate?.rightSection?.subtitle || ""}
                      onChange={(e) =>
                        updateContent("ecertificate.rightSection.subtitle", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <ImageField
                    label="Sertifika Görseli"
                    value={content.ecertificate?.rightSection?.certificateImage || ""}
                    onChange={(value) => updateContent("ecertificate.rightSection.certificateImage", value)}
                    placeholder="Sertifika örnek görseli"
                  />
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Sertifika Alt Metni</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.ecertificate?.rightSection?.certificateAlt || ""}
                      onChange={(e) =>
                        updateContent("ecertificate.rightSection.certificateAlt", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
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
                    onChange={(value) => updateContent("projectGallery.backgroundImage", value)}
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
                        updateContent("projectGallery.newsSection.title", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>"Devamını Oku" Metni</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.projectGallery?.newsSection?.readMore || ""}
                      onChange={(e) =>
                        updateContent("projectGallery.newsSection.readMore", e.target.value)
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
                        updateContent("projectGallery.newsSection.content", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Alert variant="info">
                <i className="fas fa-info-circle me-2"></i>
                Galeri grid düzeni karmaşık bir yapıya sahiptir. Gelişmiş düzenleme için JSON önizleme kullanın.
              </Alert>
            </Card.Body>
          </Card>
        </Tab>

        {/* Activities Tab - Simplified since we have dedicated categories tab */}
        <Tab eventKey="activities" title="Faaliyet Sayfası">
          <Alert variant="info">
            <i className="fas fa-info-circle me-2"></i>
            Faaliyet kategorileri "Kategoriler" sekmesinde yönetilmektedir. Bu sekme gelecekteki özellikler için ayrılmıştır.
          </Alert>
        </Tab>

        {/* Footer Tab */}
        <Tab eventKey="footer" title="Footer">
          <Card>
            <Card.Header>
              <h5 className="mb-0">Footer İçeriği</h5>
            </Card.Header>
            <Card.Body>
              <Row className="g-4">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Adres</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.footer?.address || ""}
                      onChange={(e) =>
                        updateContent("footer.address", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Şehir</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.footer?.city || ""}
                      onChange={(e) =>
                        updateContent("footer.city", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Telefon</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.footer?.phone || ""}
                      onChange={(e) =>
                        updateContent("footer.phone", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>E-posta</Form.Label>
                    <Form.Control
                      type="email"
                      value={content.footer?.email || ""}
                      onChange={(e) =>
                        updateContent("footer.email", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Telif Hakkı Metni</Form.Label>
                    <Form.Control
                      type="text"
                      value={content.footer?.copyright || ""}
                      onChange={(e) =>
                        updateContent("footer.copyright", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <h6 className="mt-4 mb-3">Sosyal Medya</h6>
              <Row className="g-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Facebook</Form.Label>
                    <Form.Control
                      type="url"
                      value={content.footer?.social?.facebook || ""}
                      onChange={(e) =>
                        updateContent("footer.social.facebook", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Twitter</Form.Label>
                    <Form.Control
                      type="url"
                      value={content.footer?.social?.twitter || ""}
                      onChange={(e) =>
                        updateContent("footer.social.twitter", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Instagram</Form.Label>
                    <Form.Control
                      type="url"
                      value={content.footer?.social?.instagram || ""}
                      onChange={(e) =>
                        updateContent("footer.social.instagram", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>

      {/* Preview Modal */}
      <Modal
        show={showPreview}
        onHide={() => setShowPreview(false)}
        size="lg"
      >
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