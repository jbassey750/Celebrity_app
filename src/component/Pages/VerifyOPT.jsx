import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ShieldCheck, CheckCircle2 } from 'lucide-react'; // Icons
import { useNavigate } from 'react-router-dom';
import api from "../../api/axios";

const OtpVerificationPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef([]); // Refs for automatic focus shifting
  const navigate = useNavigate();

  // Handle individual OTP input changes
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Ensure only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input field on number entry
    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Trigger Modal (Blurred background logic)
  const handleVerify = async () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      setError("Please enter a complete 6-digit OTP");
      return;
    }

    setError("");
    setIsVerifying(true);

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const email = user?.email;

      if (!email) {
        throw new Error("Email not found. Please register first.");
      }

      await api.post("/auth/verify-email", { email, otp: otpCode });

      setShowModal(true);
      // Auto navigate after showing success modal briefly
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data?.error || err.message || "Verification failed");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div style={{
      backgroundColor: "#f7f8fc",
      minHeight: "100vh",
      padding: "100px 0",
      position: 'relative'
    }}>
      {/* 🌟 BLUR OVERLAY (Visible only when modal is active) */}
      {showModal && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backdropFilter: 'blur(10px)', // The blur effect
          backgroundColor: 'rgba(0,0,0,0.4)', // Dark overlay
          zIndex: 9,
          transition: 'backdrop-filter 0.3s ease'
        }}></div>
      )}

      <Container className="d-flex align-items-center justify-content-center" style={{ position: 'relative', zIndex: 10 }}>
        <Row>
          <Col>
            <Card className="shadow-sm border-0 text-center" style={{
              borderRadius: "25px",
              padding: "60px 50px",
              maxWidth: '550px',
              backgroundColor: 'white'
            }}>
              <Card.Body className="p-0">
                {/* Shield Icon */}
                <div className="d-flex align-items-center justify-content-center mx-auto mb-4" style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#f1efff' // Very faint purple
                }}>
                  <ShieldCheck size={40} style={{ color: "#a55eea" }} /> {/* Modern Purple */}
                </div>

                <h3 className="fw-bold text-dark mb-2">Verify OTP</h3>
                <p className="text-muted small mb-4 px-4" style={{ lineHeight: '1.6' }}>
                  We've sent a verification code to <span className="fw-bold">your email</span>.
                </p>

                {/* Error */}
                {error && (
                  <div className="alert alert-danger py-2 text-center mb-3">
                    {error}
                  </div>
                )}

                {/* 🌟 SIX OTP INPUT FIELDS */}
                <div className="d-flex gap-2 justify-content-center mb-5">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="text-center fw-bold text-dark fs-4"
                      value={digit}
                      ref={(el) => inputRefs.current[index] = el}
                      onChange={(e) => handleChange(e, index)}
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        backgroundColor: "#fafbfd", // Very light grey
                        border: "2px solid #e9ecef",
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        // Conditional border color for active state
                        borderColor: digit.length > 0 ? '#a55eea' : '#e9ecef' 
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#a55eea'}
                      onBlur={(e) => e.target.style.borderColor = digit.length > 0 ? '#a55eea' : '#e9ecef'}
                    />
                  ))}
                </div>

                <Button
                  className="w-100 py-3 rounded-pill fw-bold border-0 shadow-sm mb-4"
                  style={{
                    backgroundColor: "#6a727c", // Grey matching image_5
                    color: "white"
                  }}
                  onClick={handleVerify}
                  disabled={isVerifying}
                >
                  {isVerifying ? "Verifying..." : "Verify OTP"}
                </Button>

                <p className="small text-muted mb-0">
                  Didn't receive the code? <span className="fw-bold" style={{ color: "#a55eea", cursor: 'pointer' }}>Resend</span>
                </p>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* 🌟 THE SUCCESS MODAL (Replica of image_6.png) */}
      {showModal && (
        <div className="fixed-top w-100 h-100 d-flex align-items-center justify-content-center" style={{ zIndex: 1050 }}>
          <Card className="shadow-lg border-0 text-center animate__animated animate__zoomIn" style={{
            borderRadius: "20px",
            padding: "50px 40px",
            maxWidth: '380px',
            backgroundColor: 'white',
            transform: 'scale(1)'
          }}>
            <Card.Body className="p-0">
              {/* Green Verified Circle */}
              <div className="d-flex align-items-center justify-content-center mx-auto mb-4" style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: '#e7fff2' // Faint green
              }}>
                <CheckCircle2 size={35} style={{ color: "#00b894" }} /> {/* Modern Green */}
              </div>

              <h3 className="fw-bold text-dark mb-2">Verified!</h3>
              <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>
                Your account has been successfully verified.
              </p>
              
              <p className="small text-muted mb-0" style={{ fontSize: '12px' }}>
                Redirecting to home...
              </p>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default OtpVerificationPage;