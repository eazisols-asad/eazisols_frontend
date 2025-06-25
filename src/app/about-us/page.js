"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaClock,
  FaChartBar,
  FaBolt,
  FaBook,
  FaLightbulb,
  FaLeaf,
} from "react-icons/fa";

const awards = [
  {
    icon: <FaClock />,
    title: "Outstanding Early Childhood Education Award",
    description:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of our commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    icon: <FaChartBar />,
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for pioneering efforts in introducing STEAM programs that ignite creativity and critical thinking.",
  },
  {
    icon: <FaBolt />,
    title: "Environmental Stewardship Award",
    description:
      "Received from the Green Earth Society for dedication to environmental education, sustainable practices, and love for nature.",
  },
  {
    icon: <FaBook />,
    title: "Curriculum Innovation Award",
    description:
      "Recognizing our unique and progressive curriculum design, tailored to enhance student engagement and educational success.",
  },
  {
    icon: <FaLightbulb />,
    title: "Creative Learning Space Recognition",
    description:
      "Awarded for designing creative and inclusive learning spaces that inspire students and support holistic growth.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability in Education Award",
    description:
      "Honored for embedding sustainability principles throughout our teaching approach and community projects.",
  },
];

export default function about() {
  return (
    <section style={{ backgroundColor: "#d2e4f5", padding: "80px 0" }}>
      <Container>
        <div className="text-center mb-5">
          <div
            className="py-1 px-3 rounded-pill border d-inline-block mb-2"
            style={{ fontSize: 14, fontWeight: 500 }}
          >
            Our Achievements
          </div>
          <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
            Our Awards and Recognitions
          </h2>
          <p className="text-muted" style={{ maxWidth: 800, margin: "0 auto" }}>
            Little Learners Academy takes pride in our commitment to delivering
            high-quality education and outstanding student experiences. These
            accolades reflect our team's relentless efforts in creating an
            exceptional learning environment for our students.
          </p>
        </div>

        <Row className="gy-4">
          {awards.map((award, idx) => (
            <Col key={idx} md={6} lg={4} className="d-flex">
              <div
                className="p-4 bg-white rounded-4 position-relative w-100"
                style={{
                  border: "2px solid #000",
                  boxShadow: "6px 6px 0 #000",
                  minHeight: "250px", 
                  display: "flex", 
                  flexDirection: "column",
                  marginTop:"20px",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 translate-middle-y"
                  style={{
                 marginRight:"10px",
                    backgroundColor: "#d2e4f5",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    fontSize: "18px",
                    border: "2px solid #000",
                  }}
                >
                  {award.icon}
                </div>
                <h5 className="fw-bold mb-2 mt-4">{award.title}</h5>
                <p className="text-muted mb-0" style={{ fontSize: "15px" }}>
                  {award.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
