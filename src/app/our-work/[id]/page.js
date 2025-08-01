"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Box, Container, Typography, Button } from "@mui/material";
import {  Col, Row } from "react-bootstrap";
import useApiAuth from "@/app/components/useApiAuth";
import ReuseContact from "@/app/components/ReuseContact";

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
      <Container className="mt-4">
        {cases.thumbnail && (
          <img
            src={`https://admin.eazisols.com/${cases.thumbnail}`}
            alt={cases.title}
            style={{
              //   maxWidth: "300px",
              //   minHeight: "300px",
              width: "100%",
              marginTop: "10px",
              height: "500px",
              borderRadius: "6px",
              marginBottom: "20px",
              objectFit: "cover",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          />
        )}
         <Row className="gy-4">
         <Col lg={4}>
          {/* Project Demands */}
          <div className="mb-4">
            <Typography variant="subtitle2" className="fw-bold text-uppercase">
              Project Demands:
            </Typography>
            <ul className="ps-3 mt-2 mb-3 text-muted">
              <li>Website Designing</li>
              <li>Development</li>
              <li>Set up demo</li>
            </ul>
          </div>

          {/* Clients */}
          <div className="mb-4">
            <Typography variant="subtitle2" className="fw-bold text-uppercase">
              Clients:
            </Typography>
            <Typography variant="body2" className="text-muted">
              Susan Fitzgerald White
            </Typography>
          </div>

          {/* Category */}
          <div className="mb-4">
            <Typography variant="subtitle2" className="fw-bold text-uppercase">
              Category:
            </Typography>
            <Typography variant="body2" className="text-muted">
              Illustration, Photography
            </Typography>
          </div>

          {/* Tech Stacks */}
          <div className="mb-2">
            <Typography variant="subtitle2" className="fw-bold text-uppercase">
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

        {/* RIGHT SIDE */}
        <Col lg={8}>
          <Typography variant="h6" fontWeight={600} className="mb-3">
            Problem Statement
          </Typography>
          <Typography variant="body2" style={{ lineHeight: 1.8 }}>
            Huddle Agency is an event management company working with multiple clients
            from all around the world helping them manage their events better and greener.
            Huddle Agency was calculating the carbon emissions of the events they organized,
            so that they could help companies host environmentally friendly events. They used
            a tool called Cvent, a really popular tool for event management, for managing their
            events. For calculating the carbon footprint they used two tools called Greenly and
            Trace. The biggest challenge with these two tools was that they were not integrated
            with Cvent, so whenever Huddle Agency added an event in Cvent they would have to go
            to these two tools and create those events again causing duplication of work. Other
            than that, the results produced by these two tools were not that accurate and their
            user interface was not that intuitive either.
          </Typography>
        </Col>
          </Row>
        {cases.description && (
          <Box mb={4} p={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Description
            </Typography>
            <div
              dangerouslySetInnerHTML={{ __html: cases.description }}
              style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
            />
          </Box>
        )}
      </Container>
      <ReuseContact />
    </>
  );
}
