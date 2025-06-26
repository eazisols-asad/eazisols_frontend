"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import whitebg from "@/app/assets/whitebg.jpg";
import "../globals.css";
import aboutus from "@/app/assets/aboutus.png";

export default function Capabilities() {
  return (
    <>
      <div
        className="hero-background py-5"
        style={{
          backgroundImage: `url(${aboutus.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "250px",
          marginTop: "-80px",
          position: "relative",
          zIndex: 1,
        }}
      ></div>
      <section className="py-5 bg-white">
        <Container>
          <h5
            className="fw-bold mb-5 ms-0"
            style={{
              fontSize: "3.7rem",
              // letterSpacing: "-0.5px",
              color: "#000",
            }}
          >
            Capabilities
          </h5>
          <Row>
            <Col md={6}>
              <div className="mb-5">
                <h5
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "1.25rem",
                    letterSpacing: "-0.2px",
                    fontWeight: "900",
                  }}
                >
                  Software Development
                </h5>
                <p className="mb-2 clickable-text">Web App Development</p><br />
                <p className="mb-2 clickable-text">Mobile App Development</p><br />
                <p className="mb-2 clickable-text">
                  Custom Software Development
                </p><br />
                <p className="mb-2 clickable-text">Product Development</p><br />
                <p className="mb-2 clickable-text">SaaS Development</p><br />
                <p className="mb-2 clickable-text">E-commerce Solutions</p><br />
                <p className="mb-0 clickable-text">Maintenance & Support</p><br />
              </div>
              <div className="mb-5">
                <h5
                  className="fw-bold mb-3"
                  style={{ fontSize: "1.25rem", letterSpacing: "-0.2px" }}
                >
                  Emerging Tech & Innovation
                </h5>
                <p className="mb-2 clickable-text">AR/VR/XR</p><br />
                <p className="mb-2 clickable-text">Metaverse Experiences</p><br />
                <p className="mb-2 clickable-text">Blockchain & Cryptography</p><br />
                <p className="mb-2 clickable-text">Web3 Solutions</p><br />
                <p className="mb-2 clickable-text">IoT Development</p><br />
                <p className="mb-0 clickable-text">Gen AI & Machine Learning</p><br />
              </div>
            </Col>

            <Col md={6}>
              <div className="mb-5">
                <h5
                  className="fw-bold mb-3"
                  style={{ fontSize: "1.25rem", letterSpacing: "-0.2px" }}
                >
                  Quality Assurance
                </h5>
                <p className="mb-2 clickable-text">
                  Software Quality Assurance
                </p><br />
                <p className="mb-0 clickable-text">Cybersecurity Solutions</p><br />
              </div>
              <div className="mb-5">
                <h5
                  className="fw-bold mb-3"
                  style={{ fontSize: "1.25rem", letterSpacing: "-0.2px" }}
                >
                  Cloud Application Development
                </h5>
                <p className="mb-2 clickable-text">CloudOps & Migration</p><br />
                <p className="mb-2 clickable-text">
                  Cloud Integration & Maintenance
                </p><br />
                <p className="mb-0 clickable-text">Automation & Apps</p>
              </div>
              <div>
                <h5
                  className="fw-bold mb-3"
                  style={{ fontSize: "1.25rem", letterSpacing: "-0.2px" }}
                >
                  UI/UX & Digital Design
                </h5>
                <p className="mb-2 clickable-text">UI/UX Design</p><br />
                <p className="mb-0 clickable-text">Web & Mobile App Design</p><br />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
