import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MapSection.css";

// Data imports
import haritaConfig from "../data/harita-config.json";
import istatistiklerData from "../data/istatistikler.json";
import sehirlerData from "../data/sehirler.json";

const MapSection = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // İstatistik kategorileri
  const statCategories = [
    {
      id: "volunteer",
      label: "Gönüllü/Bağış",
      icon: "/src/assets/harita/arayuzver2-11.png",
      alt: "Gönüllü",
      getValue: () =>
        (istatistiklerData.genel.toplamGiyecek || 0) +
        (istatistiklerData.genel.toplamOyuncak || 0),
    },
    {
      id: "nature",
      label: "Doğa Faaliyetleri",
      icon: "/src/assets/harita/arayuzver2-10.png",
      alt: "Doğa Faaliyetleri",
      getValue: () => istatistiklerData.genel.toplamFidan || 0,
    },
    {
      id: "education",
      label: "Eğitim ve Seminer",
      icon: "/src/assets/harita/arayuzver2-08.png",
      alt: "Eğitim ve Seminer",
      getValue: () =>
        sehirlerData.data.reduce((total, city) => {
          const egitimSayisi =
            (city.faaliyetler?.anadoluSeminerleri ? 1 : 0) +
            (city.faaliyetler?.seyyahSeyahatleri ? 1 : 0);
          return total + egitimSayisi;
        }, 0),
    },
    {
      id: "blog",
      label: "Blog/Kitap",
      icon: "/src/assets/harita/arayuzver2-09.png",
      alt: "Blog",
      getValue: () => istatistiklerData.genel.toplamKitap || 0,
    },
  ];

  useEffect(() => {
    try {
      setLoading(false);
    } catch {
      setError("Veri yüklenirken hata oluştu");
      setLoading(false);
    }
  }, []);

  const handleCityClick = (cityName) => {
    const cityData = sehirlerData.data.find((city) => city.ad === cityName);
    setSelectedCity(cityData || null);
  };

  if (loading) {
    return (
      <section className="map-section text-center">
        <Container style={{ maxWidth: "1200px" }}>
          <div className="loading-spinner"></div>
          <p className="mt-3">Harita yükleniyor...</p>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="map-section text-center">
        <Container style={{ maxWidth: "1200px" }}>
          <div className="error-message">{error}</div>
        </Container>
      </section>
    );
  }

  return (
    <section className="map-section text-center" style={{ paddingTop: "0px" }}>
      <Container style={{ maxWidth: "1200px" }}>
        {/* Türkiye Haritası */}
        <Row className="justify-content-center mb-3">
          <Col xs={12} lg={10} xl={8}>
            <div className="map-container fade-in">
              <img
                src="/src/assets/harita/turkey-map.png"
                alt="Türkiye Haritası"
                className="turkey-map"
              />

              {/* Şehir İşaretçileri */}
              {Object.entries(haritaConfig.koordinatlar).map(
                ([cityName, coords]) => {
                  const cityData = sehirlerData.data.find(
                    (city) => city.ad === cityName
                  );
                  const hasData =
                    cityData &&
                    (cityData.kitapSayisi > 0 ||
                      (cityData.yardimlar?.oyuncak || 0) > 0 ||
                      (cityData.yardimlar?.giyecek || 0) > 0 ||
                      Object.keys(cityData.fidanlar || {}).length > 0 ||
                      cityData.faaliyetler?.anadoluSeminerleri ||
                      cityData.faaliyetler?.seyyahSeyahatleri);

                  return (
                    <div
                      key={cityName}
                      className={`city-marker ${!hasData ? "inactive" : ""} ${
                        selectedCity?.ad === cityName ? "pulse" : ""
                      }`}
                      style={{
                        top: coords.top,
                        left: coords.left,
                        backgroundColor: hasData
                          ? haritaConfig.renkler.aktifSehir
                          : haritaConfig.renkler.pasifSehir,
                      }}
                      onClick={() => handleCityClick(cityName)}
                    >
                      <div className="city-tooltip">
                        <div>
                          <strong>{cityName}</strong>
                        </div>
                        {cityData && (
                          <>
                            <div>
                              Bağış:{" "}
                              {(cityData.yardimlar?.oyuncak || 0) +
                                (cityData.yardimlar?.giyecek || 0)}
                            </div>
                            <div>
                              Doğa:{" "}
                              {Object.keys(cityData.fidanlar || {}).length}
                            </div>
                            <div>
                              Eğitim:{" "}
                              {(cityData.faaliyetler?.anadoluSeminerleri
                                ? 1
                                : 0) +
                                (cityData.faaliyetler?.seyyahSeyahatleri
                                  ? 1
                                  : 0)}
                            </div>
                            <div>Kitap: {cityData.kitapSayisi}</div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </Col>
        </Row>

        {/* Seçili Şehir Bilgisi */}
        {selectedCity && (
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={8} lg={6}>
              <div className="alert alert-info fade-in">
                <h5 className="mb-2">{selectedCity.ad}</h5>
                <div className="row text-center">
                  <div className="col-3">
                    <strong>
                      {(selectedCity.yardimlar?.oyuncak || 0) +
                        (selectedCity.yardimlar?.giyecek || 0)}
                    </strong>
                    <br />
                    <small>Bağış</small>
                  </div>
                  <div className="col-3">
                    <strong>
                      {Object.keys(selectedCity.fidanlar || {}).length}
                    </strong>
                    <br />
                    <small>Doğa</small>
                  </div>
                  <div className="col-3">
                    <strong>
                      {(selectedCity.faaliyetler?.anadoluSeminerleri ? 1 : 0) +
                        (selectedCity.faaliyetler?.seyyahSeyahatleri ? 1 : 0)}
                    </strong>
                    <br />
                    <small>Eğitim</small>
                  </div>
                  <div className="col-3">
                    <strong>{selectedCity.kitapSayisi}</strong>
                    <br />
                    <small>Kitap</small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        )}

        {/* İstatistik İkonları ve Butonları */}
        <Row className="justify-content-center align-items-center g-4 stats-container">
          {statCategories.map((category) => (
            <Col xs={6} md={3} key={category.id} className="stat-item">
              <div className="stat-icon-container">
                <img
                  src={category.icon}
                  alt={category.alt}
                  className="stat-icon"
                />
              </div>
              <button
                className="btn stat-button"
                onClick={() => {
                  console.log(`${category.label} kategorisi seçildi`);
                }}
              >
                {category.getValue().toLocaleString("tr-TR")}
              </button>
            </Col>
          ))}
        </Row>

        {/* Genel İstatistikler */}
        {/* <Row className="justify-content-center mt-5">
          <Col xs={12} md={8}>
            <div className="card border-0 shadow-sm fade-in">
              <div className="card-body">
                <h5 className="card-title mb-4">Genel İstatistikler</h5>
                <div className="row text-center">
                  <div className="col-6 col-md-3 mb-3">
                    <div className="h4 text-danger mb-1">
                      {((istatistiklerData.genel.toplamGiyecek || 0) + (istatistiklerData.genel.toplamOyuncak || 0)).toLocaleString("tr-TR")}
                    </div>
                    <small className="text-muted">Toplam Bağış</small>
                  </div>
                  <div className="col-6 col-md-3 mb-3">
                    <div className="h4 text-success mb-1">
                      {istatistiklerData.genel.toplamFidan.toLocaleString(
                        "tr-TR"
                      )}
                    </div>
                    <small className="text-muted">Toplam Doğa</small>
                  </div>
                  <div className="col-6 col-md-3 mb-3">
                    <div className="h4 text-primary mb-1">
                      {sehirlerData.data.reduce((total, city) => {
                        const egitimSayisi = (city.faaliyetler?.anadoluSeminerleri ? 1 : 0) + 
                                            (city.faaliyetler?.seyyahSeyahatleri ? 1 : 0);
                        return total + egitimSayisi;
                      }, 0).toLocaleString("tr-TR")}
                    </div>
                    <small className="text-muted">Toplam Eğitim</small>
                  </div>
                  <div className="col-6 col-md-3 mb-3">
                    <div className="h4 text-info mb-1">
                      {istatistiklerData.genel.toplamKitap.toLocaleString(
                        "tr-TR"
                      )}
                    </div>
                    <small className="text-muted">Toplam Kitap</small>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default MapSection;
