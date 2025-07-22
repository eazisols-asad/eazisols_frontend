"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import td from "@/app/assets/td.png";


export default function TDHeroSection() {
  return (
     <Box
      sx={{
        display: "flex",
        justifyContent: "center", 
        py: 2,
      }}
      className="paddingsection" >
    <Box
      sx={{
        backgroundImage: `url(${td.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
        padding: { xs: "40px 20px", md: "60px 40px" },
        color: "#fff",
        minHeight: "350px",
        display: "flex",
        alignItems: "center",
        maxWidth:"1300px",
      }}
    >
      <Container>
        <Row>
          <Col md={8} lg={6}>
            <Box sx={{ textAlign: "left" }}>
              {/* Heading */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "28px", md: "34px" },
                  mb: 2,
                }}
              >
                Cloud-based technical documentation software
              </Typography>

              {/* Green underline */}
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "360px",
                  height: "3px",
                  backgroundColor: "#fff", 
                  mb: 3,
                }}
              />

              {/* Subheading */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  color: "#fff",
                  mb: 4,
                }}
              >
                Discover how to optimize your company&apos;s technical documentation with our
                innovative cloud-based solution. Easy, comprehensive, and designed to enhance your
                brand image.
              </Typography>

              {/* Button */}
              <Button
                style={{
                  backgroundColor: "#ffff",
                  border: "none",
                  color: "#333",
                  padding: "10px 20px",
                  fontWeight: 500,
                  borderRadius: "4px",
                }}
              >
                Discover TD Suite
              </Button>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
    </Box>
  );
}
