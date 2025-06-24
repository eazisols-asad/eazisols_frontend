"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import webbg from "@/app/assets/webbg.png";
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
                  className="display-3 fw-bold mb-2"
                  style={{ textAlign: "left" }}
                >
                  <span className="herotext text-white">Transform your</span>
                  <br />
                  <span className="text-white">idea into </span>
                  <span style={{ color: "#00C2E5" }}>a startup</span>
                </h1>
              </div>
            </Col>

            <Col lg={5} className="mt-5 mt-lg-0">
              <div className="mt-5">
                <ContactForm
                  onSubmit={async (formData) => {
                    console.log(formData);
                  }}
                  buttonText="Submit"
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
