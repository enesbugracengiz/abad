import { useState } from "react";
import { Button, Modal, Form, Alert, Spinner } from "react-bootstrap";

const PaymentService = ({
  donationAmount,
  donorInfo,
  onPaymentSuccess,
  onPaymentError,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    try {
      // İyzico ödeme işlemi simülasyonu
      // Gerçek projede backend API'ye istek atılacak
      const paymentData = {
        amount: donationAmount,
        donorInfo: donorInfo,
        timestamp: new Date().toISOString(),
      };

      // Log payment data for debugging
      console.log("Payment data:", paymentData);

      // Simülasyon - 2 saniye bekle
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Rastgele başarı/hata durumu (demo için)
      const isSuccess = Math.random() > 0.1; // %90 başarı oranı

      if (isSuccess) {
        onPaymentSuccess({
          transactionId: "TXN-" + Date.now(),
          amount: donationAmount,
          status: "success",
        });
        setShowModal(false);
      } else {
        throw new Error("Ödeme işlemi başarısız oldu. Lütfen tekrar deneyin.");
      }
    } catch (err) {
      setError(err.message);
      onPaymentError(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Button
        variant="success"
        size="lg"
        className="px-5 py-3"
        onClick={() => setShowModal(true)}
      >
        Ödemeyi Tamamla
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Güvenli Ödeme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && (
            <Alert variant="danger" className="mb-3">
              {error}
            </Alert>
          )}

          <div className="payment-summary mb-4">
            <h5>Ödeme Özeti</h5>
            <div className="d-flex justify-content-between">
              <span>Bağış Tutarı:</span>
              <strong>{donationAmount}₺</strong>
            </div>
            <div className="d-flex justify-content-between">
              <span>Bağışçı:</span>
              <span>
                {donorInfo?.name} {donorInfo?.surname}
              </span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <strong>Toplam:</strong>
              <strong>{donationAmount}₺</strong>
            </div>
          </div>

          <Form onSubmit={handlePayment}>
            <Form.Group className="mb-3">
              <Form.Label>Kart Numarası</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234 5678 9012 3456"
                required
                disabled={isProcessing}
              />
            </Form.Group>

            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Son Kullanma Tarihi</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    required
                    disabled={isProcessing}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="123"
                    required
                    disabled={isProcessing}
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Kart Üzerindeki İsim</Form.Label>
              <Form.Control
                type="text"
                placeholder="KART SAHİBİ ADI"
                required
                disabled={isProcessing}
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button
                variant="secondary"
                onClick={() => setShowModal(false)}
                disabled={isProcessing}
              >
                İptal
              </Button>
              <Button variant="success" type="submit" disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    İşlem Yapılıyor...
                  </>
                ) : (
                  "Ödemeyi Tamamla"
                )}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PaymentService;
