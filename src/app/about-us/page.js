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
import aboutus from "@/app/assets/aboutus.png";
import CTASection from "../components/CTASection";
import "../globals.css";
import { HiOutlineDocumentText ,HiOutlineGlobeAlt,HiOutlineCloud  } from "react-icons/hi";
import { HiOutlineWindow } from "react-icons/hi2";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { HiOutlineChartBar } from "react-icons/hi2";

const awards = [
  {
    icon: HiOutlineDocumentText,
    title: "Outstanding Early Childhood Education Award",
    description:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of our commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for pioneering efforts in introducing STEAM programs that ignite creativity and critical thinking.",
  },
  {
    icon: HiOutlineCloud,
    title: "Environmental Stewardship Award",
    description:
      "Received from the Green Earth Society for dedication to environmental education, sustainable practices, and love for nature.",
  },
  {
    icon: HiOutlineWindow,
    title: "Curriculum Innovation Award",
    description:
      "Recognizing our unique and progressive curriculum design, tailored to enhance student engagement and educational success.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Creative Learning Space Recognition",
    description:
      "Awarded for designing creative and inclusive learning spaces that inspire students and support holistic growth.",
  },
  {
    icon: HiOutlineColorSwatch,
    title: "Sustainability in Education Award",
    description:
      "Honored for embedding sustainability principles throughout our teaching approach and community projects.",
  },
];

export default function about() {
  return (
    <>
      <div
        className="hero-background py-5"
        style={{
          backgroundImage: `url(${aboutus.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          marginTop: "-80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="container "
          style={{
            paddingTop: "150px",
            color: "white",
          }}
        >
          <h1 className="main-heading text-white">About Us</h1>
          
          <p
            className="lead text-white mt-3"
            style={{ fontSize: "1.2rem", fontWeight: "400", opacity: "0.9" }}
          >
            Eazisols is a digital software house helping businesses build
            <br />
            <span className="text-white">
              scalable, efficient, and user-first products
            </span>
            <br />
            <span className="text-white">
              We combine modern tech with human creativity
            </span>
            <br />
            <span className="text-white">
              to deliver solutions that drive real results
            </span>
          </p>
        </div>
      </div>
      <section style={{ padding: "80px 0" }}>
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
            <p
              className="text-muted"
              style={{ maxWidth: 800, margin: "0 auto" }}
            >
              Little Learners Academy takes pride in our commitment to
              delivering high-quality education and outstanding student
              experiences. These accolades reflect our teams relentless efforts
              in creating an exceptional learning environment for our students.
            </p>
          </div>

          <Row className="gy-4">
            {awards.map((service, idx) => (
              <Col key={idx} md={3} lg={4} >
                 {/* <div
                className="bg-white border rounded-4 shadow-sm p-4 w-100 h-100 d-flex flex-column align-items-start"
                style={{ 
                  minHeight: 220, 
                  borderColor: "#f0f0f0", 
                  boxShadow: "0 2px 12px 0 rgba(16,30,54,.04)",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 28px 0 rgba(16,30,54,.15)";
                  e.currentTarget.style.borderColor = "#2563eb";
                  const icon = e.currentTarget.querySelector('.service-icon');
                  if (icon) {
                    icon.style.transform = "scale(1.1) rotate(5deg)";
                    icon.style.color = "#1d4ed8";
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px 0 rgba(16,30,54,.04)";
                  e.currentTarget.style.borderColor = "#f0f0f0";
                  const icon = e.currentTarget.querySelector('.service-icon');
                  if (icon) {
                    icon.style.transform = "scale(1) rotate(0)";
                    icon.style.color = "#2563eb";
                  }
                }}
              >
                  <div
                    className="position-absolute top-0 start-0 translate-middle-y"
                    style={{
                      marginRight: "10px",
                      marginLeft: "20px",
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
                </div> */}
                 
              <div
                className="bg-white border rounded-4 shadow-sm p-4 w-100 h-100 d-flex flex-column align-items-start"
                style={{ 
                  minHeight: 220, 
                  borderColor: "#f0f0f0", 
                  boxShadow: "0 2px 12px 0 rgba(16,30,54,.04)",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 28px 0 rgba(16,30,54,.15)";
                  e.currentTarget.style.borderColor = "#2563eb";
                  const icon = e.currentTarget.querySelector('.service-icon');
                  if (icon) {
                    icon.style.transform = "scale(1.1) rotate(5deg)";
                    icon.style.color = "#1d4ed8";
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 12px 0 rgba(16,30,54,.04)";
                  e.currentTarget.style.borderColor = "#f0f0f0";
                  const icon = e.currentTarget.querySelector('.service-icon');
                  if (icon) {
                    icon.style.transform = "scale(1) rotate(0)";
                    icon.style.color = "#2563eb";
                  }
                }}
              >
                <div className="mb-3 service-icon" style={{ transition: "all 0.3s ease-in-out" }}>
                  <service.icon size={44} color="#2563eb" />
                </div>
                <div>
                  <div className="fw-bold mb-2" 
                    style={{ 
                      fontSize: 22, 
                      color: "#23223a",
                      // background: "linear-gradient(120deg, transparent 0%, transparent 50%, rgba(37,99,235,0.1) 50%)",
                      // backgroundSize: "200% 100%",
                      transition: "background-position 0.3s ease-in-out",
                      padding: "4px 8px",
                      margin: "-4px -8px"
                    }}
                  >
                    {service.title}
                  </div>
                  <div className="text-muted" style={{ 
                    fontSize: 16,
                    lineHeight: 1.6,
                    marginTop: "8px"
                  }}>
                    {service.description}
                  </div>
                </div>
              </div>
         
              </Col>
              
            ))}
          </Row>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
