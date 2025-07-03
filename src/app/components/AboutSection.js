import Image from "next/image";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import about from "@/app/assets/about.png";
import ReuseButton from "./ReuseButton";

export default function AboutSection() {
  return (
    <section className="">
      <Container >
        <Row className="align-items-center bg-white rounded-5 p-4 pt-5 pb-5">
          <Col lg={6} className="text-center">
            <Image
              src={about}
              alt="About Section Image"
              width={500}
              height={500}
              className="me-3 img-fluid"
            />
          </Col>
          <Col lg={6} className="mb-4 mb-lg-0">
            {/* <div
              className="about-label mb-2 text-uppercase"
              style={{ letterSpacing: 2, fontSize: 13, color: "#888" }}
            >
              About Us
            </div> */}
            <h2
              className="display-5 fw-bold mb-3"
              style={{ color: "#23223a", lineHeight: 1.2 }}
            >
              About Us{" "}
              {/* <span className="about-highlight">succeed</span> through the{" "}
              <span className="about-highlight">power of software</span>. */}
            </h2>
            <p className="lead text-muted mb-4" style={{ maxWidth: 500 }}>
              Helping businesses succeed through the power of software
              Software is the future of business in this digital-focused world.
              We use technology to change the way companies connect and
              communicate. We help organizations of all sizes humanize their
              communications and personalize their customer experience.
            </p>
             {/* <Button
              variant="primary"
              size="lg"
              style={{
                backgroundColor: "#418ED6",
                border: "none",
                borderRadius: 8,
                fontWeight: 600,
                color:" #fff",
                padding: "12px 32px",
              }}
            >
              Learn More
            </Button> */}
            <ReuseButton 
              description1="Learn More"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
