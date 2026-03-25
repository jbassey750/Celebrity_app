import React, { useState, useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext";
import { FaCheckCircle, FaLock, FaArrowLeft } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
  const { theme } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const isDark = theme === "dark";

  // Styles to match the provided UI screenshots
  const cardStyle = {
    backgroundColor: isDark ? "#16162d" : "#ffffff",
    borderRadius: "16px",
    border: isDark ? "1px solid #222" : "1px solid #eef0f2",
    color: isDark ? "#fff" : "#000"
  };

  const inputStyle = {
    backgroundColor: isDark ? "#0a0a1a" : "#f3f4f6",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    color: isDark ? "#fff" : "#000"
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="container py-5" style={{ minHeight: '100vh' }}>
      {/* Back Button */}
      <button className="btn btn-link text-decoration-none text-muted mb-3 p-0 small">
        <FaArrowLeft className="me-2" /> <Link to="/browse" className="text-decoration-none text-muted">Back</Link>
      </button>

      <div className="mb-4">
        <h2 className="fw-bold">Complete Your Purchase</h2>
        <p className="text-muted">Secure checkout powered by industry-leading encryption</p>
      </div>

      <div className="row g-4">
        {/* Left Column: Forms */}
        <div className="col-lg-8">
          <form onSubmit={handlePayment}>
            {/* Payment Information */}
            <div className="card p-4 mb-4 shadow-sm" style={cardStyle}>
              <h5 className="fw-bold mb-3 d-flex align-items-center">
                <span className="me-2">💳</span> Payment Information
              </h5>
              <p className="text-muted small mb-4">Enter your card details to complete the purchase</p>
              
              <div className="mb-3">
                <label className="form-label small fw-bold">Card Number</label>
                <input type="text" className="form-control" placeholder="1234 5678 9012 3456" style={inputStyle} required />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold">Cardholder Name</label>
                <input type="text" className="form-control" placeholder="John Doe" style={inputStyle} required />
              </div>
              <div className="row">
                <div className="col-md-8 mb-3">
                  <label className="form-label small fw-bold">Expiry Date</label>
                  <input type="text" className="form-control" placeholder="MM/YY" style={inputStyle} required />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label small fw-bold">CVV</label>
                  <input type="text" className="form-control" placeholder="123" style={inputStyle} required />
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="card p-4 shadow-sm" style={cardStyle}>
              <h5 className="fw-bold mb-3">Billing Address</h5>
              <p className="text-muted small mb-4">Where should we send the receipt?</p>
              <div className="mb-3">
                <label className="form-label small fw-bold">Country</label>
                <select className="form-select border-0" style={inputStyle}>
                  <option>Select country</option>
                  <option>United States</option>
                  <option>Nigeria</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold">ZIP / Postal Code</label>
                <input type="text" className="form-control" placeholder="12345" style={inputStyle} required />
              </div>
            </div>

            <div className="text-muted small mt-3 d-flex align-items-center">
              <FaLock className="me-2" /> Your payment information is encrypted and secure
            </div>
            
            <button type="submit" className="btn w-100 py-3 fw-bold mt-4 text-white border-0" 
              style={{ background: "linear-gradient(90deg, #9d00ff, #ff00ea)", borderRadius: "10px" }}>
              Pay $65.99
            </button>
          </form>
        </div>

        {/* Right Column: Summary */}
        <div className="col-lg-4">
          <div className="card p-4 shadow-sm h-100" style={cardStyle}>
            <h5 className="fw-bold mb-4">Order Summary</h5>
            <div className="d-flex align-items-center mb-4">
              <img src="https://via.placeholder.com/60" className="rounded me-3" alt="Celebrity" />
              <div>
                <h6 className="mb-0 fw-bold">Marcus Johnson</h6>
                <p className="text-muted small mb-0">Professional Athlete</p>
                <small className="text-warning">⭐ 4.8 <span className="text-muted">(289)</span></small>
              </div>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Session ticket</span>
              <span className="fw-bold">$59.99</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span className="text-muted">Service fee (10%)</span>
              <span className="fw-bold">$6.00</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-4">
              <h4 className="fw-bold">Total</h4>
              <h4 className="fw-bold" style={{ color: "#9d00ff" }}>$65.99</h4>
            </div>

            <h6 className="fw-bold mb-3">What's Included:</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><FaCheckCircle className="text-success me-2" /> One-on-one live chat session</li>
              <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Choose your preferred time slot</li>
              <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Secure Telegram integration</li>
              <li className="mb-2"><FaCheckCircle className="text-success me-2" /> Instant booking confirmation</li>
            </ul>

            <div className="mt-auto p-3 rounded" style={{ backgroundColor: "#f8f0ff", border: "1px solid #e0caff" }}>
              <p className="small mb-0 text-dark" style={{ fontSize: '11px' }}>
                <strong>Note:</strong> After payment, you'll be able to select your preferred time slot from the booking calendar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 p-4 text-center" style={cardStyle}>
              <div className="modal-body">
                <FaCheckCircle size={70} className="text-success mb-3" />
                <h2 className="fw-bold mb-2">Payment Successful!</h2>
                <p className="text-muted">Your session with Marcus Johnson has been confirmed. You can now proceed to select your time slot.</p>
                <button className="btn w-100 py-2 fw-bold text-white mt-3 border-0" 
                  onClick={() => setShowModal(false)}
                  style={{ backgroundColor: "#9d00ff", borderRadius: "8px" }}>
                  Select Time Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}