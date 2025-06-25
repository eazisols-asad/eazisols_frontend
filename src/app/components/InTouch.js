import React from 'react'
import ContactForm from './ContactForm';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const InTouch = () => {
  return (
    <>
      <section className="contact-section bg-light py-5">
        <Container>
          <div className="contact-container">
            <div className="text-center mb-5">
              <p className="text-uppercase mb-1">CONTACT US</p>
              <h2 className="display-4 fw-bold mb-4" style={{color: '#418ED6'}}>Get in Touch</h2>
              <p className="lead text-muted">{`We'd love to hear from you. Let's build something amazing together!`}</p>
            </div>
            
            <Row className="align-items-center g-0">
              <Col lg={6} className="mb-5 mb-lg-0">
                <div className="pe-lg-5">
                  {/* <h3 className="h2 mb-4" style={{color: '#333'}}>Get in Touch</h3>
                  <p className="lead mb-4">
                  We'd love to hear from you. Let's build something amazing together!
                  </p> */}

                 

                  <div className="mb-4">
                    <h5 className="mb-3" style={{color: '#418ED6'}}>Why Choose Us:</h5>
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-center">
                        <span className="badge bg-primary rounded-circle me-2">✓</span>
                        Expert Development Team with Years of Experience
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <span className="badge bg-primary rounded-circle me-2">✓</span>
                        Cutting-edge Technologies & Modern Solutions
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <span className="badge bg-primary rounded-circle me-2">✓</span>
                        Agile Development Process for Faster Delivery
                      </li>
                      <li className="mb-3 d-flex align-items-center">
                        <span className="badge bg-primary rounded-circle me-2">✓</span>
                        24/7 Dedicated Support & Maintenance
                      </li>
                    </ul>
                  </div>
                  <div className="contact-info mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <FaPhone className="text-primary me-3" size={20} />
                      <div>
                        <h6 className="mb-1">Phone</h6>
                        <p className="mb-0">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <FaEnvelope className="text-primary me-3" size={20} />
                      <div>
                        <h6 className="mb-1">Email</h6>
                        <p className="mb-0">contact@example.com</p>
                      </div>
                    </div>
                   
                  </div>
                  
                  <div className="alert alert-info" role="alert">
                    <i className="bi bi-info-circle me-2"></i>
                  {`  Fill out the form and we'll get back to you within 24 hours.`}
                  </div>
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