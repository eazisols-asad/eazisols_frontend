"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import webbg from "@/app/assets/webbg.png";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "../globals.css";

const HeroSection = () => {
  return (
    <>
      <section
        className="min-vh-100 d-flex flex-column bg-light position-relative hero-background"
        style={{
          backgroundImage: `url(${webbg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container className="flex-grow-1 d-flex flex-column justify-content-center heroSection">
          <Row className="align-items-center justify-content-center gx-4">
            <Col lg={7} >
              <div className="px-lg-5">
                <h1
                  className="display-3 fw-bold mb-4"
                >
                  <span className="herotext text-white">Transform Your </span>
                  <br />
                  <span className="text-white">Idea</span>
                  <span style={{ color: "#418ED6", textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}> Into Reality</span>
                  <p className="lead text-white mt-3" style={{fontSize: "1.2rem", fontWeight: "400", opacity: "0.9"}}>
                    Eazisols helps you design, develop, and scale digital solutions 
                    <br />
                  <span className="text-white"> from idea to execution</span>
                  </p>
                </h1>

                <div className="contact-info mt-3">
                  <Row >
                    <Col md={4}>
                      <p className="text-white mb-1">
                        <FaPhone className="me-2" style={{color: "#418ED6"}}/>+92 321 8881156
                      </p>
                      <p className="text-white mb-1">
                        <FaEnvelope className="me-2" style={{color: "#418ED6"}}/>info@eazisols.com
                      </p>
                    </Col>
                    <Col md={4}>
                      <p className="text-white mb-1">
                        <FaWhatsapp className="me-2" style={{color: "#25D366"}}/> +1 (555) 987-6543
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col lg={5} className="mt-4 mt-lg-0">
              <div className="d-flex justify-content-center">
                <ContactForm
                  onSubmit={async (formData) => {
                    console.log(formData);
                  }}
                  buttonText="Get Started"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
