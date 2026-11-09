import React, { useState, useRef } from 'react';
import { Modal, Form, Button, InputGroup, Row, Col } from 'react-bootstrap';

const PaymentModal = ({ type, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  if (!type) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imgUrl = URL.createObjectURL(e.target.files[0]);
      setSelectedFile({
        name: e.target.files[0].name,
        previewUrl: imgUrl
      });
    }
  };

  const handleClose = () => {
    setSelectedFile(null);
    onClose();
  };

  const config = {
    crypto: {
      title: "Cryptocurrency Payment",
      sub: "Send cryptocurrency to the address below to complete your payment",
      icon: "₿",
      color: "#f7931a",
      content: (
        <>
          <div className="p-3 mb-3 border-0 rounded-4" style={{ backgroundColor: '#fff9f0', border: '1px solid #ffe8cc !important' }}>
            <div className="d-flex justify-content-between mb-1">
              <span className="fw-bold small">Bitcoin (BTC)</span>
              <span className="badge bg-warning text-dark" style={{ fontSize: '9px' }}>Network: Bitcoin</span>
            </div>
            <InputGroup size="sm" className="mb-2">
              <Form.Control className="bg-white border-secondary-subtle" value="bc1qxy2kgdygjrs..." readOnly />
            </InputGroup>
            <Button variant="outline-dark" size="sm" className="w-100 py-1 fw-bold" style={{ fontSize: '11px' }}>Copy Address</Button>
          </div>
          <div className="p-3 mb-3 border-0 rounded-4" style={{ backgroundColor: '#f0f7ff', border: '1px solid #d0e7ff !important' }}>
            <div className="d-flex justify-content-between mb-1">
              <span className="fw-bold small text-primary">Ethereum (ETH)</span>
              <span className="badge bg-primary" style={{ fontSize: '9px' }}>Network: ERC-20</span>
            </div>
            <InputGroup size="sm" className="mb-2">
              <Form.Control className="bg-white border-secondary-subtle" value="0x742d35Cc66..." readOnly />
            </InputGroup>
            <Button variant="outline-dark" size="sm" className="w-100 py-1 fw-bold" style={{ fontSize: '11px' }}>Copy Address</Button>
          </div>
        </>
      )
    },
    card: {
      title: "Credit/Debit Card Payment",
      sub: "Enter your card details to complete the payment",
      icon: "💳",
      color: "#4b49ff",
      content: (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">Card Number</Form.Label>
            <Form.Control style={{ backgroundColor: '#f8f9fa' }} placeholder="1234 5678 9012 3456" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">Cardholder Name</Form.Label>
            <Form.Control style={{ backgroundColor: '#f8f9fa' }} placeholder="John Doe" />
          </Form.Group>
          <Row className="mb-3">
            <Col>
              <Form.Label className="small fw-bold">Expiry Date</Form.Label>
              <Form.Control style={{ backgroundColor: '#f8f9fa' }} placeholder="MM/YY" />
            </Col>
            <Col>
              <Form.Label className="small fw-bold">CVV</Form.Label>
              <Form.Control style={{ backgroundColor: '#f8f9fa' }} placeholder="123" />
            </Col>
          </Row>
        </Form>
      )
    },
    giftcard: {
      title: "Gift Card Redemption",
      sub: "Enter your gift card code to apply it to your account",
      icon: "🎁",
      color: "#ff3366",
      content: (
        <>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">Gift Card Code</Form.Label>
            <Form.Control style={{ backgroundColor: '#f8f9fa' }} placeholder="XXXX-XXXX-XXXX-XXXX" />
          </Form.Group>

          <Form.Group className="mb-3 text-start">
            <Form.Label className="small fw-bold">Upload Gift Card Image</Form.Label>
            <div
              onClick={() => fileInputRef.current.click()}
              style={{
                backgroundColor: '#f8f9fa',
                border: '2px dashed #ddd',
                borderRadius: '15px',
                cursor: 'pointer',
                padding: '20px'
              }}
              className="text-center"
            >
              {selectedFile ? (
                <div>
                  <img src={selectedFile.previewUrl} alt="preview" style={{ maxHeight: '80px', borderRadius: '8px' }} />
                  <p className="mb-0 mt-1 small text-muted">{selectedFile.name}</p>
                </div>
              ) : (
                <div>
                  <span style={{ fontSize: '24px' }}>📷</span>
                  <p className="mb-0 small fw-bold">Click to Upload</p>
                </div>
              )}
            </div>
            <input type="file" ref={fileInputRef} hidden accept="image/*" onChange={handleFileChange} />
          </Form.Group>

          <div className="p-3 mb-3 rounded-4" style={{ backgroundColor: '#fff5f7', border: '1px solid #ffd1dc' }}>
            <p className="fw-bold small mb-1">How to redeem:</p>
            <ul className="text-muted mb-0" style={{ fontSize: '11px', paddingLeft: '15px' }}>
              <li>Scratch off the protective coating on your card</li>
              <li>Enter the code exactly as shown</li>
            </ul>
          </div>
          <div className="p-3 text-center rounded-4 mb-3" style={{ backgroundColor: '#f8f9fa' }}>
            <small className="text-muted d-block">Current Gift Card Balance</small>
            <h2 className="fw-bold mb-0">$0.00</h2>
          </div>
        </>
      )
    }
  };

  const active = config[type];

  return (
    <Modal show={true} onHide={handleClose} centered border="0">
      <Modal.Body className="p-4" style={{ borderRadius: '20px' }}>
        <div className="d-flex align-items-center mb-4">
          <div
            className="d-flex align-items-center justify-content-center me-3"
            style={{ width: '50px', height: '50px', borderRadius: '15px', backgroundColor: active.color, color: 'white', fontSize: '24px' }}
          >
            {active.icon}
          </div>
          <div>
            <h5 className="fw-bold mb-0">{active.title}</h5>
            <p className="text-muted small mb-0">{active.sub}</p>
          </div>
          <button onClick={handleClose} className="btn-close ms-auto align-self-start"></button>
        </div>

        {active.content}

        <div className="d-flex justify-content-between align-items-center p-3 rounded-4 mb-4" style={{ backgroundColor: '#f8f9fa' }}>
          <span className="small text-muted fw-bold">Amount to Pay:</span>
          <span className="fw-bold fs-4">$99.99</span>
        </div>

        <Button
          className="w-100 py-3 rounded-pill fw-bold border-0"
          style={{ backgroundColor: active.color, color: 'white' }}
          onClick={handleClose}
        >
          {type === 'giftcard' ? 'Redeem Gift Card' : type === 'card' ? 'Pay $99.99' : 'Done'}
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentModal;