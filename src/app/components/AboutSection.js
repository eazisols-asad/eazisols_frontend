import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function AboutSection() {
  return (
    <section className="">
      <Container>
        <Row className="align-items-center bg-white rounded-5 p-4 pt-5 pb-5">
        <Col lg={6} className="text-center">
            {/* You can replace this SVG with your own image if you want */}
            <svg
              viewBox="0 0 400 300"
              className="img-fluid rounded shadow"
             
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00C2E5" />
                  <stop offset="100%" stopColor="#3a2e5c" />
                </linearGradient>
              </defs>
              <rect x="50" y="50" width="300" height="200" fill="url(#grad1)" rx="20" />
              <circle cx="150" cy="120" r="30" fill="white" opacity="0.8" />
              <circle cx="250" cy="180" r="40" fill="white" opacity="0.6" />
              <path d="M120 100 Q200 50 280 150" stroke="white" strokeWidth="4" fill="none" />
              <path d="M100 200 Q200 150 300 220" stroke="white" strokeWidth="4" fill="none" />
              <circle cx="120" cy="100" r="5" fill="white" />
              <circle cx="280" cy="150" r="5" fill="white" />
              <circle cx="200" cy="180" r="5" fill="white" />
            </svg>
          </Col>
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-label mb-2 text-uppercase" style={{ letterSpacing: 2, fontSize: 13, color: '#888' }}>
              About Us
            </div>
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#23223a', lineHeight: 1.2 }}>
              Helping businesses <span className="about-highlight">succeed</span> through the <span className="about-highlight">power of software</span>.
            </h2>
            <p className="lead text-muted mb-4" style={{ maxWidth: 500 }}>
              Software is the future of business in this digital-focused world. We use technology to change the way companies connect and communicate. We help organizations of all sizes humanize their communications and personalize their customer experience.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              style={{ backgroundColor: '#00C2E5', border: 'none', borderRadius: 8, fontWeight: 600 }}
            >
              Learn More
            </Button>
          </Col>
      
        </Row>
      </Container>
    </section>
  );
}