"use client"; 

import Image from "next/image";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import about from "@/app/assets/about.png";
import ReuseButton from "./ReuseButton";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();
  return (
  <>
      <Container className="px-3" style={{ maxWidth: "1200px" }}>
        <Row className="align-items-center bg-white rounded-3 p-4 pt-5 pb-5">
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
           
            <h2
              className="display-5 fw-bold mb-3"
              style={{ color: "#23223a", lineHeight: 1.2 }}
            >
              About Us{" "}
            </h2>
            <p className="lead text-muted mb-4" style={{ maxWidth: 500 }}>
              Helping businesses succeed through the power of software
              Software is the future of business in this digital-focused world.
              We use technology to change the way companies connect and
              communicate. We help organizations of all sizes humanize their
              communications and personalize their customer experience.
            </p>
           
            <ReuseButton 
              description1="Learn More"
               onClick={() => router.push("/about-us")}
            />
          </Col>
        </Row>
      </Container>
      </>
  );
}
