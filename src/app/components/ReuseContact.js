"use client";

import Image from "next/image";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import ContactForm from "./ContactForm";

export default function ReuseContact() {
  const router = useRouter();
  return (
    <>
      <Container className=" py-4 map-query" style={{ maxWidth: "1342px" , paddingLeft: "36px" ,
    paddingRight: "48px" }}>
        <Row className="align-items-center bg-white border rounded-3  p-md-4 gx-5">
          {/* left side*/}
          <Col
            lg={6}
            md={12}
            className=" text-center mb-4 mb-lg-0 map-side"
            // style={{ paddingRight: "0px", paddingLeft: "55px" }}
          >
            <div
              style={{
                width: "100%",
                height: "450px",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
              //  className="map-container"
               >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27229.205000159178!2d74.25915024115519!3d31.444066100920094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ef9caa5e87%3A0x8b062e0e49dbd0ff!2sWapda%20Town%20Phase%201%20J1%20Block%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1720963128973!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          {/*  right side*/}
          <Col
            lg={6}
            md={12}
            className=" mb-4 mb-lg-0 form-side ms-4 ms-lg-0"
            style={{
              
              // paddingRight: "0px",
              
            }}
          >
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}
