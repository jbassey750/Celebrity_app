import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const MembershipLevels = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const plans = [
    {
      name: "Basic",
      price: "9.99",
      description: "Perfect for casual fans who want to connect",
      icon: "☆",
      color: "#00a8ff",
      features: [
        "Access to 2 chat sessions per month",
        "View celebrity posts and updates",
        "Basic profile customization",
        "Email support",
        "Standard response time"
      ]
    },
    {
      name: "Premium",
      price: "29.99",
      description: "Most popular choice for dedicated fans",
      icon: "✨",
      color: "#a55eea",
      isPopular: true,
      features: [
        "Access to 10 chat sessions per month",
        "Priority booking for time slots",
        "Exclusive content and behind the scenes",
        "Advanced profile features",
        "Priority email & chat support",
        "Early access to new features",
        "Special badges and recognition"
      ]
    },
    {
      name: "Elite",
      price: "99.99",
      description: "Ultimate VIP experience for superfans",
      icon: "👑",
      color: "#f39c12",
      features: [
        "Unlimited chat sessions",
        "VIP booking - guaranteed slots",
        "Exclusive virtual meet & greet events",
        "Direct messaging with celebrities",
        "Premium profile with custom themes",
        "24/7 priority support",
        "Elite member badge",
        "Special perks and merchandise",
        "Access to exclusive community"
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "80px 0" }}>
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">Choose Your <span style={{ color: '#a55eea' }}>Membership Level</span></h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Select the perfect plan to connect with your favorite celebrities. Upgrade or downgrade anytime.
          </p>
        </div>

        <Row className="g-4 justify-content-center align-items-center">
          {plans.map((plan, index) => (
            <Col key={index} lg={4} md={6}>
              <Card 
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="border-0 shadow-sm"
                style={{
                  borderRadius: '24px',
                  transition: 'all 0.3s ease',
                  transform: hoveredIndex === index ? 'translateY(-10px)' : 'none',
                  border: plan.isPopular ? '2px solid #a55eea' : 'none',
                  position: 'relative',
                  overflow: 'visible'
                }}
              >
                {/* Popular Tag */}
                {plan.isPopular && (
                  <div style={{
                    position: 'absolute', top: '-12px', right: '20px',
                    backgroundColor: '#a55eea', color: 'white',
                    padding: '2px 12px', borderRadius: '6px',
                    fontSize: '11px', fontWeight: 'bold'
                  }}>
                    Most Popular
                  </div>
                )}

                <Card.Body className="p-4 text-center">
                  {/* Icon Circle */}
                  <div className="d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: '50px', height: '50px', borderRadius: '50%',
                      backgroundColor: plan.color, color: 'white', fontSize: '24px'
                    }}>
                    {plan.icon}
                  </div>

                  <h3 className="fw-bold mb-1">{plan.name}</h3>
                  <p className="text-muted small mb-4" style={{ minHeight: '40px' }}>{plan.description}</p>
                  
                  <h2 className="fw-bold mb-4">
                    ${plan.price}<span className="fs-6 fw-normal text-muted">/month</span>
                  </h2>

                  {/* Features List */}
                  <ul className="list-unstyled text-start mb-4" style={{ minHeight: '280px' }}>
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="mb-2 d-flex align-items-start">
                        <span className="me-2 fw-bold" style={{ color: plan.color }}>✓</span>
                        <span className="small text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <Button 
                    className="w-100 py-2 rounded-pill fw-bold border-0"
                    style={{
                      background: plan.isPopular 
                        ? 'linear-gradient(90deg, #a55eea 0%, #ff4d4d 100%)' 
                        : plan.color,
                      color: 'white'
                    }}
                  >
                    {plan.isPopular ? 'Upgrade to Premium' : index === 2 ? 'Join Elite' : 'Get Started'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Footer Features Row */}
        <div className="mt-5 p-4 bg-white shadow-sm border-0 mx-auto" 
             style={{ maxWidth: '850px', borderRadius: '20px' }}>
          <p className="text-center fw-bold text-dark mb-4">All Plans Include</p>
          <Row className="text-center g-3">
            {[
              { icon: "🛡️", title: "Secure Platform", desc: "Industry-leading encryption" },
              { icon: "🔄", title: "Cancel Anytime", desc: "No long-term commitment" },
              { icon: "💰", title: "Money-back Guarantee", desc: "30-day refund policy" }
            ].map((item, i) => (
              <Col md={4} key={i}>
                <div className="mx-auto mb-2 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#f3e8ff', color: '#a55eea' }}>
                  {item.icon}
                </div>
                <h6 className="fw-bold mb-0" style={{ fontSize: '14px' }}>{item.title}</h6>
                <p className="text-muted mb-0" style={{ fontSize: '11px' }}>{item.desc}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default MembershipLevels;