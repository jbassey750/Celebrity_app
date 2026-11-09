
import React, { useState } from "react";
import {
  CreditCard,
  Lock,
  CheckCircle2,
  ShieldCheck,
  CalendarDays,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
    country: "",
    zipCode: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demo only. Do not log or store card details.
    setSubmitted(true);
  };

  const includedItems = [
    "One-on-one live chat session",
    "Choose your preferred time slot",
    "Instant booking confirmation",
  ];

  return (
    <div className="container payment-page py-5">
      <style>{`
        .payment-page {
          max-width: 1100px;
          color: #29243a;
        }

        .payment-heading {
          margin-bottom: 30px;
        }

        .payment-heading h2 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .payment-heading p {
          color: #898397;
          font-size: 0.95rem;
          margin-bottom: 0;
        }

        .payment-back {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #7952d8;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .payment-back:hover {
          color: #6034b0;
        }

        .payment-card {
          background: #fff;
          border: 1px solid #f0edf5;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 5px 20px rgba(35, 20, 65, 0.045);
        }

        .payment-card-title {
          font-size: 1.08rem;
          font-weight: 800;
          margin-bottom: 5px;
          color: #29243a;
        }

        .payment-card-subtitle {
          color: #898397;
          font-size: 0.85rem;
          margin-bottom: 23px;
        }

        .payment-label {
          display: block;
          color: #625d70;
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .payment-input {
          width: 100%;
          border: 1px solid #eeeaf5;
          background: #faf9fc;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 0.9rem;
          color: #29243a;
          outline: none;
          transition: 0.2s ease;
        }

        .payment-input:focus {
          background: #fff;
          border-color: #a78bdf;
          box-shadow: 0 0 0 3px rgba(121, 82, 216, 0.09);
        }

        .payment-input::placeholder {
          color: #aaa5b5;
        }

        .payment-divider {
          border-color: #eeeaf5;
          opacity: 1;
          margin: 22px 0;
        }

        .payment-submit {
          width: 100%;
          border: none;
          border-radius: 11px;
          padding: 14px;
          background: linear-gradient(120deg, #7041c5, #b14fae);
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
          transition: 0.25s ease;
        }

        .payment-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(112, 65, 197, 0.2);
        }

        .payment-summary {
          position: sticky;
          top: 25px;
        }

        .payment-celebrity {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .payment-celebrity img {
          width: 65px;
          height: 65px;
          object-fit: cover;
          border-radius: 13px;
        }

        .payment-total {
          color: #7952d8;
          font-size: 1.65rem;
          font-weight: 800;
        }

        .payment-included {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .payment-included li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin-bottom: 12px;
          color: #625d70;
          font-size: 0.85rem;
        }

        .payment-note {
          background: #f7f2ff;
          border: 1px solid #e9ddff;
          color: #7041a5;
          border-radius: 11px;
          padding: 14px;
          font-size: 0.82rem;
          line-height: 1.6;
        }

        .payment-demo-notice {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 13px;
          border-radius: 11px;
          background: #fff8e9;
          border: 1px solid #f5e5bd;
          color: #87621c;
          font-size: 0.82rem;
          line-height: 1.5;
        }

        .payment-success {
          background: #fff;
          border: 1px solid #e8f3ed;
          border-radius: 20px;
          padding: 45px 25px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(35, 20, 65, 0.045);
        }

        .payment-success-icon {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background: #e5f8ee;
          color: #20a779;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
        }

        .payment-success h3 {
          font-weight: 800;
          margin-bottom: 10px;
        }

        .payment-success p {
          color: #898397;
          max-width: 430px;
          margin: 0 auto 22px;
          font-size: 0.9rem;
        }

        @media (max-width: 767px) {
          .payment-page {
            padding-top: 25px !important;
          }

          .payment-heading h2 {
            font-size: 1.5rem;
          }

          .payment-card {
            padding: 19px;
          }

          .payment-summary {
            position: static;
          }
        }
      `}</style>

      <Link to="/app/browse" className="payment-back">
        <ArrowLeft size={16} />
        Back to celebrities
      </Link>

      <div className="payment-heading">
        <h2>Complete Your Booking</h2>
        <p>
          Review your session details and complete the checkout process.
        </p>
      </div>

      {submitted ? (
        <div className="payment-success">
          <div className="payment-success-icon">
            <CheckCircle2 size={32} />
          </div>

          <h3>Demo Checkout Submitted!</h3>

          <p>
            Your form submission was successful. This is a frontend
            demonstration only; no payment was processed and no booking
            has been created.
          </p>

          <Link to="/app/browse" className="payment-submit d-inline-block text-decoration-none" style={{ maxWidth: "230px" }}>
            Explore Celebrities
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            {/* Payment Form */}
            <div className="col-lg-7">
              <div className="payment-card mb-4">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CreditCard size={21} color="#7952d8" />
                  <h5 className="payment-card-title mb-0">
                    Payment Details
                  </h5>
                </div>

                <p className="payment-card-subtitle">
                  Enter your payment information below.
                </p>

                <div className="mb-3">
                  <label className="payment-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="payment-input"
                    placeholder="1234 5678 9012 3456"
                    autoComplete="cc-number"
                    inputMode="numeric"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="payment-label">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    name="cardholderName"
                    value={formData.cardholderName}
                    onChange={handleChange}
                    className="payment-input"
                    placeholder="Name on card"
                    autoComplete="cc-name"
                    required
                  />
                </div>

                <div className="row g-3">
                  <div className="col-6">
                    <label className="payment-label">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className="payment-input"
                      placeholder="MM/YY"
                      autoComplete="cc-exp"
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label className="payment-label">
                      CVV
                    </label>
                    <input
                      type="password"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      className="payment-input"
                      placeholder="123"
                      autoComplete="cc-csc"
                      inputMode="numeric"
                      required
                    />
                  </div>
                </div>

                <hr className="payment-divider" />

                <h6 className="payment-card-title mb-1">
                  Billing Address
                </h6>

                <p className="payment-card-subtitle">
                  Enter your billing location.
                </p>

                <div className="mb-3">
                  <label className="payment-label">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="payment-input"
                    required
                  >
                    <option value="">Select country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="NG">Nigeria</option>
                  </select>
                </div>

                <div>
                  <label className="payment-label">
                    ZIP / Postal Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="payment-input"
                    placeholder="Enter postal code"
                    autoComplete="postal-code"
                    required
                  />
                </div>
              </div>

              <div className="payment-demo-notice mb-3">
                <Lock size={17} className="flex-shrink-0 mt-1" />
                <span>
                  <strong> Checkout:</strong> This page
                  process payments. Do not enter card details
                </span>
              </div>

              <button type="submit" className="payment-submit">
                Continue — $54.99
              </button>
            </div>

            {/* Order Summary */}
            <div className="col-lg-5">
              <div className="payment-card payment-summary">
                <h5 className="payment-card-title mb-4">
                  Order Summary
                </h5>

                <div className="payment-celebrity mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                    alt="Alex Rivers"
                  />

                  <div>
                    <h6 className="fw-bold mb-1">
                      Alex Rivers
                    </h6>
                    <p className="text-muted small mb-1">
                      Music Artist
                    </p>
                    <div className="small">
                      <span className="text-warning me-1">★</span>
                      <strong>4.9</strong>
                      <span className="text-muted ms-1">(342 reviews)</span>
                    </div>
                  </div>
                </div>

                <hr className="payment-divider" />

                <div className="d-flex justify-content-between mb-3 small">
                  <span className="text-muted">Session ticket</span>
                  <strong>$49.99</strong>
                </div>

                <div className="d-flex justify-content-between mb-3 small">
                  <span className="text-muted">Service fee (10%)</span>
                  <strong>$5.00</strong>
                </div>

                <hr className="payment-divider" />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="fw-bold">Total</span>
                  <span className="payment-total">$54.99</span>
                </div>

                <h6 className="fw-bold mb-3">
                  What's Included
                </h6>

                <ul className="payment-included mb-4">
                  {includedItems.map((item, index) => (
                    <li key={index}>
                      <CheckCircle2
                        size={16}
                        color="#20a779"
                        className="flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="payment-note mb-3">
                  <div className="d-flex gap-2">
                    <CalendarDays size={17} className="flex-shrink-0 mt-1" />
                    <div>
                      <strong>What's next?</strong>
                      <div className="mt-1">
                        After a real payment integration is added,
                        customers can proceed to choose their preferred
                        session time.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-center gap-2 text-muted small">
                  <ShieldCheck size={16} />
                  <span>Demo checkout preview</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default PaymentPage;
