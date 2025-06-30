"use client";
import React from "react";
import Image from "next/image";
import blue from "@/app/assets/blue.jpg";
import hcareer from "@/app/assets/hcareer.png";
import { Box, Button, Typography } from "@mui/material";
import "../globals.css";
import CTASection from "../components/CTASection";
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
} from "react-icons/fa";

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

export default function Careers() {
  return (
    <>
      <div
        className="hero-background py-5"
        style={{
          backgroundImage: `url(${blue.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          marginTop: "-80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Left: Text */}
              <div className="col-md-6 text-white">
                <h1 className="display-3 fw-bold mb-4">
                  <span className="herotext text-white">Build Your Future</span>
                  <br />
                  <span className="text-white">with</span>
                  <span
                    style={{
                      color: "#418ED6",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                    }}
                  >
                    {" "}
                    Eazisols
                  </span>
                  <p
                    className="lead text-white mt-3"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "400",
                      opacity: "0.9",
                    }}
                  >
                    Join a team that's redefining digital experiences
                    <br />
                    <span className="text-white">
                      We're not just building software — we're building careers
                    </span>
                  </p>
                </h1>
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
                >
                  See Open Positions
                </Button>
              </div>

              {/* Right: Image */}
              <div className="col-md-6 text-center">
                <img
                  src={hcareer.src}
                  alt="Career Illustration"
                  className="img-fluid"
                  style={{ maxHeight: "350px" }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Container className="pt-5 mt-5">
        {" "}
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
      

      <CTASection />
    </>
  );
}
