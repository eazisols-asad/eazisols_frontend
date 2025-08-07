"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Box, Container, Typography, Button } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import useApiAuth from "@/app/components/useApiAuth";
import ReuseContact from "@/app/components/ReuseContact";
import clock from "@/app/assets/clock.png";
import map from "@/app/assets/map.png";
import review from "@/app/assets/review.png";
import team from "@/app/assets/team.png";
import Image from "next/image";

export default function caseStudiesDetail() {
  const { id } = useParams();
  const caseId = Array.isArray(id) ? id[0] : id;

  const router = useRouter();
  const { getData } = useApiAuth();
  const [cases, setcases] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!caseId) return;
    getData(
      `/api/case-studies/${caseId}`,
      (res) => {
        const casesObj = res?.data?.data || res?.data || res;
        setcases(casesObj);
        setLoading(false);
      },
      (err) => {
        console.log(" ~ useEffect ~ err:", err);
        setLoading(false);
      }
    );
  }, [caseId]);

  if (loading)
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <span className="loader" />
      </Container>
    );

  if (!cases)
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          case-studies not found
        </Typography>
        <Button onClick={() => router.back()}>Back</Button>
      </Container>
    );

  return (
    <>
      <Container className="mt-4" style={{ maxWidth: "1200px" }}>
        {cases.thumbnail && (
          <img
            src={`https://admin.eazisols.com/${cases.thumbnail}`}
            alt={cases.title}
            style={{
              maxWidth: "800px",
              // minHeight: "300px",
              // width: "100%",
              marginTop: "10px",
              marginLeft: "20px",
              marginRight: "20px",
              height: "500px",
              borderRadius: "6px",
              marginBottom: "20px",
              objectFit: "cover",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          />
        )}
        <Row className="gy-4">
          <Col lg={3}>
            {/* Project Demands */}
            <div className="mb-4">
              <Typography
                variant="subtitle2"
                className="fw-bold text-uppercase"
              >
                Project Demands:
              </Typography>
              <ul className="ps-3 mt-2 mb-3 text-muted">
                <li>Website Designing</li>
                <li>Development</li>
                <li>Set up demo</li>
              </ul>
            </div>

            {/* Tech Stacks */}
            <div className="mb-2">
              <Typography
                variant="subtitle2"
                className="fw-bold text-uppercase"
              >
                Tech Stacks
              </Typography>
            </div>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                fontSize: "14px",
                color: "#333",
              }}
            >
              {[
                "React JS",
                "Next JS",
                "Express JS",
                "MySQL",
                "AWS",
                "NodeJS",
                "MongoDB",
              ].map((tech, i) => (
                <div
                  key={i}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    backgroundColor: "#f9fafb",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  {tech}
                </div>
              ))}
            </Box>
          </Col>
          <Col lg={3}>
            {/* Clients */}
            <div className="mb-4">
              <Typography
                variant="subtitle2"
                className="fw-bold text-uppercase"
              >
                Clients:
              </Typography>
              <Typography variant="body2" className="text-muted">
                Susan Fitzgerald White
              </Typography>
            </div>

            {/* Category */}
            <div className="mb-4">
              <Typography
                variant="subtitle2"
                className="fw-bold text-uppercase"
              >
                Category:
              </Typography>
              <Typography variant="body2" className="text-muted">
                Illustration, Photography
              </Typography>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={6}>
            <Typography variant="h6" fontWeight={600} className="mb-3">
              Problem Statement
            </Typography>
            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
              Huddle Agency is an event management company working with multiple
              clients from all around the world helping them manage their events
              better and greener. Huddle Agency was calculating the carbon
              emissions of the events they organized, so that they could help
              companies host environmentally friendly events. They used a tool
              called Cvent, a really popular tool for event management, for
              managing their events. For calculating the carbon footprint they
              used two tools called Greenly and Trace. The biggest challenge
              with these two tools was that they were not integrated with Cvent,
              so whenever Huddle Agency added an event in Cvent they would have
              to go to these two tools and create those events again causing
              duplication of work. Other than that, the results produced by
              these two tools were not that accurate and their user interface
              was not that intuitive either.
            </Typography>
          </Col>
        </Row>
         <Row className="gy-4 justify-content-center mt-5">
        {/* Team Card */}
        <Col md={3}>
          <Box
            sx={{
              backgroundColor: "#418ED6",
              color: "white",
              borderRadius: 2,
              p: 3,
              height: "100%",
            }}
          >
            <Image src={team} alt="Team" style={{ height: 50, width: 65 }} />
            <Typography variant="subtitle1" className="fw-bold mt-2">
              Dedicated Team
            </Typography>
            <Typography variant="body2">4 Developer</Typography>
            <Typography variant="body2">1 Designer</Typography>
            <Typography variant="body2">1 Project Manager</Typography>
          </Box>
        </Col>

        {/* Location */}
        <Col md={3}>
          <Box
            sx={{
              backgroundColor: "#f7f9fb",
              borderRadius: 2,
              p: 3,
              height: "100%",
            }}
          >
            <Image src={map} alt="Location" style={{ height: 50, width: 50 }} />
            <Typography variant="subtitle2" className="text-muted mt-2">
              Client's Location
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              {cases.location || "USA"}
            </Typography>
          </Box>
        </Col>

        {/* Reviews */}
        <Col md={3}>
          <Box
            sx={{
              backgroundColor: "#f7f9fb",
              borderRadius: 2,
              p: 3,
              height: "100%",
            }}
          >
            <Image src={review} alt="Reviews" style={{ height: 50, width: 50 }} />
            <Typography variant="subtitle2" className="text-muted mt-2">
              Client Reviews
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              {cases.rating || "5 stars"}
            </Typography>
          </Box>
        </Col>

        {/* Timeline */}
        <Col md={3}>
          <Box
            sx={{
              backgroundColor: "#f7f9fb",
              borderRadius: 2,
              p: 3,
              height: "100%",
            }}
          >
            <Image src={clock} alt="Timeline" style={{ height: 50, width: 50 }} />
            <Typography variant="subtitle2" className="text-muted mt-2">
              Timeline of Project
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              {cases.timeline || "4 Months"}
            </Typography>
          </Box>
        </Col>
      </Row>

      {/* --- Solution We Provided Section --- */}
      <Row className="mt-5">
        <Col>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Solution We Provided
          </Typography>
          <Typography
            variant="body1"
            style={{ lineHeight: 1.8 }}
          >
            {cases.solution || "NA"}
          </Typography>
        </Col>
      </Row>
       <Row className="mt-5">
        <Col>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Result
          </Typography>
          <Typography
            variant="body1"
            style={{ lineHeight: 1.8 }}
          >
            {cases.solution || "NA"}
          </Typography>
        </Col>
      </Row>

        {/* {cases.description && (
          <Box mb={4} p={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Description
            </Typography>
            <div
              dangerouslySetInnerHTML={{ __html: cases.description }}
              style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
            />
          </Box>
        )} */}
      </Container>
      <ReuseContact />
    </>
  );
}
