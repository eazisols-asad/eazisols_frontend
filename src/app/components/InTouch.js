import React from 'react'
import ContactForm from './ContactForm';
import { Container, Row, Col, Button, Card, Form, InputGroup } from 'react-bootstrap';
import Image from 'next/image';
import intouch from '@/app/assets/intouch.png';

const InTouch = () => {
  return (
   <>
       <section className="contact-section">
        <Container>
          <div className="contact-container">
          <div className='"d-flex flex-column justify-content-center align-items-center text-center'>
           <p className="text-uppercase text-muted mb-1">CONTACT US</p>
                  <h2 className="display-4 fw-bold mb-4">Get in Touch</h2>
                  </div>
            <Row className="align-items-center">
              <Col lg={6} className="mb-5 mb-lg-0">
                <div className="pe-lg-5">
            <Image
                    src={intouch}
                    alt="Contact Illustration"
                    width={500}
                    height={400}
                    className="contact-illustration"
                  />
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