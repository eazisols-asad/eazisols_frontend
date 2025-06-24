import React from 'react'
import ContactForm from './ContactForm';
import { Container, Row, Col } from 'react-bootstrap';

const InTouch = () => {
  return (
    <>
      <section className="contact-section bg-light py-5">
        <Container>
          <div className="contact-container">
            <div className="text-center mb-5">
              <p className="text-uppercase text-muted mb-1">CONTACT US</p>
              <h2 className="display-4 fw-bold mb-4">Get in Touch</h2>
            </div>
            <Row className="align-items-center g-0">
              <Col lg={6} className="mb-5 mb-lg-0">
                <div className="pe-lg-5">
                  <h3 className="h2 mb-4">Let's Start a Conversation</h3>
                  <p className="lead mb-4">
                    Ready to transform your ideas into reality? We're here to help you build innovative software solutions that drive your business forward.
                  </p>
                  <div className="mb-4">
                    <h5 className="mb-3">Why Choose Us:</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">✓ Expert Development Team</li>
                      <li className="mb-2">✓ Cutting-edge Technologies</li>
                      <li className="mb-2">✓ Agile Development Process</li>
                      <li className="mb-2">✓ Dedicated Support</li>
                    </ul>
                  </div>
                  <p className="text-muted">
                    Fill out the form and we'll get back to you within 24 hours.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <ContactForm
                  onSubmit={async (formData) => {
                    console.log(formData);
                  }}
                  buttonText="Send Message"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}

export default InTouch