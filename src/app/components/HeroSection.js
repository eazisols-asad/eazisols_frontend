'use client';

import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ContactForm from './ContactForm';
import Image from 'next/image';
import '../globals.css'

const HeroSection = () => {
  return (
   <>
        <section className=" min-vh-100 d-flex flex-column bg-light position-relative"
      >
        <Container className="flex-grow-1 d-flex flex-column heroSection">
          <Row className="align-items-center flex-grow-1 gx-4">
            <Col lg={7}>
              <div className="pe-lg-5">
                <h1 className="display-3 fw-bold mb-2">
                  <span className=" herotext text-secondary">Transform your</span><br />
                  <span className="text-secondary">idea into </span>
                  <span className="text-dark">a startup</span>
                </h1>
                <div className="mt-5">
                  <ContactForm 
                    onSubmit={async (formData) => {
                      // Handle form submission
                      console.log(formData);
                    }}
                    buttonText="Submit"
                  />
                  <div className=" text-right ">
                    <p className="text-muted mb-3  or-hero">OR</p>
                    <Button 
                      variant="dark" 
                      size="lg" 
                      className="rounded-pill px-4 "
                      href="/book-appointment"
                    >
                      Book an appointment →
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} className="mt-5 mt-lg-0">
              <div className="globe-container position-relative">
        <Image
                  src="/globe-map.svg"
                  alt="Globe Map"
                  width={600}
                  height={600}
                  className="globe-image"
          priority
        />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
   </>
  )
}

export default HeroSection