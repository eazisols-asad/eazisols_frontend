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
        <Container className="flex-grow-1 d-flex flex-column heroSection">
          <Row className="align-items-start flex-grow-1 gx-4">
            <Col lg={7}>
              <div className="mt-5 pe-lg-5 text-start">
                <h1
                  className="display-3 fw-bold mb-4"
                  style={{ textAlign: "left" }}
                >
                  <span className="herotext text-white">Bring your vision</span>
                  <br />
                  <span className="text-white">to life with </span>
                  <span style={{ color: "#00C2E5", textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>innovative solutions</span>
                  <p className="lead text-white mt-3" style={{fontSize: "1.2rem", fontWeight: "400", opacity: "0.9"}}>
                    We transform ideas into successful digital products through expert development and strategic guidance
                  </p>
                </h1>

                <div className="contact-info mt-3">
                  <Row>
                    <Col md={4}>
                      <p className="text-white mb-1">
                        <FaPhone className="me-2" style={{color: "#00C2E5"}}/> +1 (555) 123-4567
                      </p>
                      <p className="text-white mb-1">
                        <FaEnvelope className="me-2" style={{color: "#00C2E5"}}/> contact@example.com
                      </p>
                    </Col>
                    <Col md={4}>
                      <p className="text-white mb-1">
                        <FaWhatsapp className="me-2" style={{color: "#00C2E5"}}/> +1 (555) 987-6543
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col lg={5} className="mt-lg-0">
              <div className="mt-4">
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
