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

  // New state variables for card details
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState(""); // For MM/YY input
  const [cvc, setCvc] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    try {
      const [mm, yy] = expiryDate.split("/");
      const expireMonth = mm;
      const expireYear = "20" + yy; // Assuming 20XX format

      // Prepare payment data for the backend
      const paymentData = {
        price: donationAmount,
        paymentCard: {
          cardHolderName: cardHolderName,
          cardNumber: cardNumber.replace(/\s/g, ""), // Remove spaces
          expireMonth: expireMonth,
          expireYear: expireYear,
          cvc: cvc,
        },
        buyer: {
          id: donorInfo?.id || "BY" + Date.now(), // Use donorInfo.id if available, otherwise generate
          name: donorInfo?.name || "Anonim",
          surname: donorInfo?.surname || "Bağışçı",
          gsmNumber: donorInfo?.gsmNumber || "+905551234567", // Placeholder
          email: donorInfo?.email || "anonim@example.com", // Placeholder
          identityNumber: donorInfo?.identityNumber || "11111111111", // Placeholder
          lastLoginDate: new Date().toISOString().slice(0, 19).replace('T', ' '), // Current date/time
          registrationDate: new Date().toISOString().slice(0, 19).replace('T', ' '), // Current date/time
          registrationAddress: donorInfo?.address || "Placeholder Adres", // Placeholder
          ip: "127.0.0.1", // Placeholder, should be client IP in real app
          city: donorInfo?.city || "Istanbul", // Placeholder
          country: donorInfo?.country || "Turkey", // Placeholder
          zipCode: donorInfo?.zipCode || "34000", // Placeholder
        },
        shippingAddress: {
          contactName: `${donorInfo?.name || "Anonim"} ${donorInfo?.surname || "Bağışçı"}`,
          city: donorInfo?.city || "Istanbul", // Placeholder
          country: donorInfo?.country || "Turkey", // Placeholder
          address: donorInfo?.address || "Placeholder Adres", // Placeholder
          zipCode: donorInfo?.zipCode || "34000", // Placeholder
        },
        billingAddress: {
          contactName: `${donorInfo?.name || "Anonim"} ${donorInfo?.surname || "Bağışçı"}`,
          city: donorInfo?.city || "Istanbul", // Placeholder
          country: donorInfo?.country || "Turkey", // Placeholder
          address: donorInfo?.address || "Placeholder Adres", // Placeholder
          zipCode: donorInfo?.zipCode || "34000", // Placeholder
        },
        basketItems: [
          {
            id: "BI" + Date.now(),
            name: "Bağış",
            category1: "Bağış",
            itemType: "VIRTUAL", // Assuming donation is a virtual item
            price: donationAmount,
          },
        ],
      };

      const response = await fetch("http://localhost:5000/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();

      if (data.success) {
        onPaymentSuccess({
          transactionId: data.result.paymentId,
          amount: donationAmount,
          status: "success",
          rawResult: data.result, // Pass raw result for debugging/further use
        });
        setShowModal(false);
      } else {
        throw new Error(data.error || "Ödeme işlemi başarısız oldu.");
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
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
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
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
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
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
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
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
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