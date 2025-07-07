"use client";
import React from "react";
import Image from "next/image";
import { Button,  } from "@mui/material";
import "../globals.css";
import { useRouter } from "next/navigation";
import CTASection from "../components/CTASection";
import aboutus from "@/app/assets/aboutus.png";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaNotesMedical,
  FaUmbrellaBeach,
  FaPlane,
  FaUtensils,
  FaHome,
  FaDumbbell,
  FaGamepad,
  FaTableTennis,
  FaUsers,
  FaGift,
  FaChartLine,
  FaPaperPlane,
  FaPhoneAlt,
  FaHandshake,
} from "react-icons/fa";
import ReuseButton from "../components/ReuseButton";

const techStack = [
  { name: "OPD & IPD Medical Coverage", logo: FaNotesMedical },
  { name: "Paid Leaves", logo: FaUmbrellaBeach },
  { name: "Yearly Company Tours", logo: FaPlane },
  { name: "Daily Office Lunch", logo: FaUtensils },
  { name: "Work From Home Options", logo: FaHome },
  { name: "On-site Gym Access", logo: FaDumbbell },
  { name: "Video Games Lounge", logo: FaGamepad },
  { name: "Table Tennis", logo: FaTableTennis },
  { name: "Diverse & Inclusive Work Culture", logo: FaUsers },
  { name: "Performance Bonuses", logo: FaGift },
  { name: "Fast-Paced Growth Opportunities", logo: FaChartLine },
];
const joinSteps = [
  {
    icon: FaPaperPlane,
    title: "Apply with Intent",
    description:
      "Explore open roles that match your skills and ambitions — then send us your application.",
  },
  {
    icon: FaPhoneAlt,
    title: "Let's Get to Know You",
    description:
      "If there's a match, we'll connect through a quick call or task to understand your potential better.",
  },
  {
    icon: FaUsers,
    title: "Meet the Team",
    description:
      "Join us for a conversation where we learn more about you — and you learn about life at Eazisols.",
  },
  {
    icon: FaHandshake,
    title: "Welcome Aboard",
    description:
      "Once selected, we'll guide you through a smooth onboarding experience so you can hit the ground running.",
  },
];

export default function Careers() {
  const router = useRouter();
  return (
    <>
      <div
              className="hero-background py-5"
              style={{
                backgroundImage: `url(${aboutus.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "450px",
                marginTop: "-80px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                className="container "
                style={{
                  paddingTop: "80px",
                  color: "white",
                }}
              >
                <h1 className="main-heading text-white">Build Your Future with Eazisols</h1>
                <p
                  className="lead text-white mt-1"
                  style={{ fontSize: "1.2rem", fontWeight: "400", opacity: "0.9" }}
                >
                  Join a team that's redefining digital experiences
                  <br />
                  <span className="text-white">
                   We're not just building software — we're building careers
                  </span>
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  style={{
                    backgroundColor: "#418ED6",
                    border: "none",
                    borderRadius: 8,
                    fontWeight: 600,
                    color: " #fff",
                    padding: "12px 32px",
                  }}
                  onClick={() => router.push("/job-opening")}
                >
                  See Open Positions
                </Button>
              </div> 
            </div>
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-5">How You Join Eazisols</h2>
          <Row className="g-4">
            {joinSteps.map((step, idx) => (
              <Col key={idx} xs={12} sm={6} lg={3}>
                <div
                  className="tech-card bg-white rounded-4 shadow-sm p-4 h-100"
                  style={{
                    border: "1px solid #eee",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      color: "#2563eb",
                      marginBottom: "16px",
                    }}
                  >
                    <step.icon />
                  </div>
                  <h5 className="fw-bold mb-2">{step.title}</h5>
                  <p className="text-muted" style={{ fontSize: "0.95rem" }}>
                    {step.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Container className="pt-5 mt-5">
        <Col className="text-center">
          <h1 className="fw-bold mb-3">Why Join Us</h1>
          <p
            className="text-muted mb-5"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Why You'll Love Working at Eazisols
          </p>
        </Col>
        <Row className="g-4 justify-content-center">
          {techStack.map((item, idx) => (
            <Col key={idx} xs={6} sm={4} md={3} lg={2}>
              <div
                className="tech-card bg-white shadow-sm rounded-4 d-flex align-items-center justify-content-center flex-column p-3 h-100"
                style={{
                  minHeight: "100px",
                  border: "1px solid #eee",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="mb-2"
                  style={{ fontSize: "1.5rem", color: "#2563eb" }}
                >
                  <item.logo />
                </div>
                <small className="fw-medium text-muted text-center">
                  {item.name}
                </small>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <section className="py-5">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={8} className="text-center text-md-start mb-4 mb-md-0">
              <h2 className="fw-bold mb-3" style={{ fontSize: "2.2rem" }}>
                We'd Love to Have You Onboard
              </h2>
              <p
                className="text-muted"
                style={{ fontSize: "1.05rem", maxWidth: "700px" }}
              >
                We're always looking for passionate people to join us. Whether
                you're a coder, designer, or strategist — there's a place here
                for you.
              </p>
            </Col>
            <Col md={4} className="text-center text-md-end">
              <Button
                variant="primary"
                size="lg"
                style={{
                  backgroundColor: "#418ED6",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 600,
                  padding: "12px 32px",
                  color: "#fff",
                }}
              >
                Apply Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <CTASection
      description1="Your journey begins here — let's grow together"
      description2="Quote Generator" 
       />
    </>
  );
}
