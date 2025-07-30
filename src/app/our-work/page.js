"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CTASection from "../components/CTASection";
import salesforce from "@/app/assets/salesforce.jpg";
import "../globals.css";
import { FaUsers, FaPaperPlane, FaPhoneAlt, FaHandshake } from "react-icons/fa";
import useAPiAuth from "../components/useApiAuth";
import { useRouter } from "next/navigation";
// const joinSteps = [
//   {
//     icon: FaPaperPlane,
//     title: "Earthco",
//     description:
//       "Explore open roles that match your skills and ambitions — then send us your application.",
//   },
//   {
//     icon: FaPhoneAlt,
//     title: "IVest",
//     description:
//       "If there's a match, we'll connect through a quick call or task to understand your potential better.",
//   },
//   {
//     icon: FaUsers,
//     title: "Initio",
//     description:
//       "Join us for a conversation where we learn more about you — and you learn about life at Eazisols.",
//   },
//   {
//     icon: FaHandshake,
//     title: "MFG",
//     description:
//       "Once selected, we'll guide you through a smooth onboarding experience so you can hit the ground running.",
//   },
// ];

export default function about() {
   const router = useRouter();
  const [cases, setcases] = useState([]);
  const { getData } = useAPiAuth();

  useEffect(() => {
    getData(
      "/api/case-studies",
       (res) => {
      console.log(" Full API Response:", res); 
      console.log(" Data Array Only:", res?.data);

        const list = Array.isArray(res?.data) ? res.data : [];
        console.log(" extracted blog list:", list);
        setcases(list);
      },
      (error) => {
        console.error("Failed to fetch cases", error);
      }
    );
  }, []);
  return (
    <>
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${salesforce.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "300px",
          overflow: "visible",
          position: "relative",
        }}
      >
        <div
          className="about-overlay-box"
          style={{
            position: "absolute",
            top: "80px",
            left: "110px",
            width: "600px",
            height: "270px",
            background: "rgba(65, 142, 214, 0.85)",
            borderRadius: "10px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            zIndex: 2,
          }}
        >
          <h1 style={{ margin: 0, fontSize: "2.5rem", fontWeight: "bold" }}>
            Our Work in Action
          </h1>{" "}
          <br />
          <p
            className="lead text-white mt-2"
            style={{ fontSize: "1.2rem", fontWeight: "400", opacity: "0.9" }}
          >
            See how we've helped clients transform their vision into results
          </p>
        </div>
      </div>

      <section className="py-5 bg-light">
        <Container className="mt-5">
          <h2 className="fw-bold text-center mb-5">Case Study</h2>
          <Row className="g-4">
            {/* {joinSteps.map((step, idx) => (
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
                      color: "#418ED6",
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
            ))} */}
          </Row>
        </Container>
      </section>
      <CTASection
        description1="Let's build something impactful together"
        description2="Quote Generator"
      />
    </>
  );
}
