import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function CTASection() {
  return (
    <section className="py-5 bg-primary text-white cta-section">
      <Container>
        <Row className="align-items-center text-center">
          <Col lg={8} className="mx-auto">
            <h2 className="display-5 fw-bold mb-3">Get Your Free Quote Today</h2>
            <p className="lead mb-4">
              Ready to start your next project? Let us provide you with a detailed quote tailored to your needs.
            </p>
            <Button 
              variant="light" 
              size="lg" 
              style={{ color: '#00C2E5', fontWeight: 700, borderRadius: 8 }}
            >
              Request a Quote
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}