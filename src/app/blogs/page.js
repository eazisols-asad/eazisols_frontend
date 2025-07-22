"use client";
import React from "react";
import Image from "next/image";
import "../globals.css";
import CTASection from "../components/CTASection";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FiMapPin } from "react-icons/fi";
const BLOGS = [
  {
    id: 1,
    img: aboutus,
    day: "15",
    month: "DEC",
    location: "Phonics, Newyork",
    title: "Twice Profit Than Before You Ever Got In Business.",
    excerpt:
      "Residences can be classified by and how they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type.",
  },
  {
    id: 2,
    img: aboutus,
    day: "12",
    month: "SEPT",
    location: "Cambridge, England",
    title: "Residences Can Be Classified How They Are Connected.",
    excerpt:
      "Residences can be classified by and how they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type.",
  },
  {
    id: 3,
    img: aboutus,
    day: "14",
    month: "AUG",
    location: "Barcelona, London",
    title: "Different Type Of Housing Can Used Same Physical Type.",
    excerpt:
      "Decoration is the furnishing of a space with decorative elements, sometimes complemented by advice, sometimes complemented and practical assistance.",
  },
];

export default function Careers() {
  return (
    <>
      <div
        className="hero-background py-5"
        style={{
          // backgroundImage: `url(${aboutus.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
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
        <h1 className="main-heading text-white">Our Blog</h1>
          
          <p
            className="lead text-white mt-3"
            style={{ fontSize: "1.2rem", fontWeight: "400", opacity: "0.9" }}
          >
           Ideas, innovation, and insights from the Eazisols team.
          </p>
        </div>
      </div>
      <section className="py-5 px-5 latest-blog">
      <Container>
        {/* Heading */}
        <Typography
          component="h2"
          variant="h4"
          align="center"
          className="fw-bold mb-1"
        >
          <span className="text-dark">Latest </span>
          <span className="text-secondary">Blog</span>
        </Typography>

        <Typography
          component="p"
          variant="body1"
          align="center"
          className="lead text-muted mb-5"
        >
          Elegant retreat in Coral Gables setting. This home provides
          entertaining spaces with kitchen opening
        </Typography>

        {/* Cards  */}
        <Row className="g-4 justify-content-center">
          {BLOGS.map((b) => (
            <Col key={b.id} xs={12} sm={10} md={6} lg={4}>
              <Card className="latest-blog-card h-100 border-0 shadow-sm">
               
                  {/* image */}
                  <div className="position-relative">
                    <CardMedia>
                      <Image
                        src={b.img}
                        alt={b.title}
                        width={500}
                        height={300}
                        className="w-100 rounded-top"
                        style={{ objectFit: "cover" }}
                      />
                    </CardMedia>

                    {/* date badge */}
                    <div className="latest-blog-date">
                      <span className="day">{b.day}</span>
                      <span className="month">{b.month}</span>
                    </div>
                  </div>

                  {/* body */}
                  <CardContent>
                    <Typography
                      variant="caption"
                      className="d-flex align-items-center gap-1 text-muted mb-1"
                    >
                      <FiMapPin size={14} /> {b.location}
                    </Typography>

                    <Typography variant="h6" className="fw-bold mb-2">
                      {b.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-4"
                    >
                      {b.excerpt}
                    </Typography>

                    <Typography
                      variant="body2"
                      className="read-more fw-medium text-primary"
                    >
                      Read More
                    </Typography>
                  </CardContent>
              
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
      
      <CTASection
      description1="Want updates from us? Let's stay in touch."
      description2="Quote Generator" 
       />
    </>
  );
}
