"use client";
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaBinoculars,
  FaBoxOpen,
  FaShareAlt,
  FaTools,
  FaChartBar,
  FaMapMarkerAlt,
} from "react-icons/fa";
import serbg from "@/app/assets/serbg.png";

const services = [
  {
    icon: <FaBinoculars size={30} style={{ color: "#d2e4f5" }} />,
    title: "we find what you need",
    desc: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit.",
  },
  {
    icon: <FaBoxOpen size={30} style={{ color: "#d2e4f5" }} />,
    title: "we pack it for you",
    desc: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit.",
  },
  {
    icon: <FaShareAlt size={30} style={{ color: "#d2e4f5" }} />,
    title: "we share it for you",
    desc: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit.",
  },
  {
    icon: <FaTools size={30} style={{ color: "#d2e4f5" }} />,
    title: "we will keep it running",
    desc: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit.",
  },
  {
    icon: <FaChartBar size={30} style={{ color: "#d2e4f5" }} />,
    title: "we will grow it",
    desc: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit.",
  },
  {
    icon: <FaMapMarkerAlt size={30} style={{ color: "#d2e4f5" }} />,
    title: "we will grow it",
    desc: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit.",
  },
];

export default function servicess() {
  return (
    <>
     <section
        style={{
        //   backgroundImage: `url(${serbg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0",
        }}
      >
        <Container className="d-flex justify-content-center">
          <div
            className="shadow bg-white rounded-3 overflow-hidden"
            style={{ maxWidth: "900px", display: "flex", width: "100%" }}
          >
            <div style={{ width: "50%" }}>
              <Image
                src={serbg}
                alt="Worker"
                width={450}
                height={300}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ padding: "30px", width: "50%" }}>
              <h5 className="fw-bold mb-3" style={{ color: "#0d3c61" }}>
                if you <span style={{ color: "#003366" }}>choose us.</span>
              </h5>
              <p style={{ fontSize: "15px", color: "#444" }}>
                Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit,
                eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget
                malesuada. Curabitur aliquet quam id dui posuere blandit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </Container>
      </section>
    <section style={{ padding: "80px 0", backgroundColor: "#fff" }}>
      <Container className="text-center">
        <h1
          style={{
            fontSize: "5rem",
            fontWeight: "800",
            opacity: 0.08,
            textTransform: "uppercase",
          }}
        >
          Creation Drives
        </h1>
        <h3 className="fw-semibold text-dark" style={{ marginTop: "30px", marginBottom: "50px" }}>
          what we do.
        </h3>

        <Row className="gy-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <div
                className="p-4 text-center bg-white rounded shadow-sm"
                style={{
                  border: "2px solid #d2e4f5",
                  transition: "all 0.3s ease-in-out",
                  minHeight: "220px",
                }}
              >
                <div className="mb-3">{service.icon}</div>
                <h6 className="fw-bold mb-2 text-dark">{service.title}</h6>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  {service.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </>
  );
}
