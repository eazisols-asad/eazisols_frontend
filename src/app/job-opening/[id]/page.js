"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Box, Container, Typography, Button } from "@mui/material";
import useApiAuth from "@/app/components/useApiAuth";
import contact from "@/app/assets/contact.png";
import axios from "axios";

export default function JobDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { getData } = useApiAuth();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getData(
      `/api/careers/${id}`,
      (res) => {
        const jobObj = res?.data?.data || res?.data || res;
        setJob(jobObj);
        setLoading(false);
      },
      (err) => {
        console.log("🚀 ~ useEffect ~ err:", err);
      }
    );
  }, [id]);

  if (loading)
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <span className="loader" />
      </Container>
    );

  if (!job)
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          Job not found
        </Typography>
        <Button onClick={() => router.back()}>Back</Button>
      </Container>
    );

  return (
    <>
      {/* <div
        className="hero-background py-5 "
        style={{
          backgroundImage: `url(${contact.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "250px",
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
          <h1 className="main-heading text-white">Start Growing With Us</h1>
        </div>
      </div> */}
      <Container maxWidth="md" sx={{ py: 3, height: "100%" }}>
        
        <Box sx={{ display: "flex", justifyContent: "center",  mb: 3 }}>
          <Box sx={{ display: "flex", borderBottom: "none" }}>
            <Button
              variant="text"
              sx={{
                color: "#418ED6",
                fontWeight: 600,
                fontSize: "16px",
                textTransform: "none",
                borderBottom: "2px solid #418ED6",
                borderRadius: 0,
              }}
              disableRipple
            >
              Overview
            </Button>
            <Button
              variant="text"
              sx={{
                color: "#000000",
                fontWeight: 600,
                fontSize: "16px",
                textTransform: "none",
                borderBottom: "2px solid transparent",
                borderRadius: 0,
                ml: 3,
                "&:hover": { color: "#323232" },
              }}
              onClick={() => router.push(`/job-apply?jobId=${id}`)}
            >
              Application
            </Button>
          </Box>
        </Box>
        <Button variant="text" onClick={() => router.back()} sx={{ mb: 2 }}>
          ← Back to jobs
        </Button>

        <Typography variant="h4" fontWeight={700} gutterBottom 
        sx={{ textAlign: "center", mb: 4 }} >
          {job.title}
        </Typography>

        {/* ----- Description ----- */}
        {job.description && (
          <Box mb={4}  p={3} sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Description
            </Typography>
            <Typography whiteSpace="pre-line">{job.description}</Typography>
          </Box>
        )}

        {/* ----- Responsibilities ----- */}
        {job.responsibilities && (
          <Box mb={4} p={3} sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Responsibilities
            </Typography>
            <Typography whiteSpace="pre-line">
              {job.responsibilities}
            </Typography>
          </Box>
        )}

        {/* ----- Requirements ----- */}
        {job.requirements && (
          <Box mb={4} p={3} sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Requirements
            </Typography>
            <Typography whiteSpace="pre-line">{job.requirements}</Typography>
          </Box>
        )}
        <Box display="flex" justifyContent="center" mt={4}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#4d8fcd",
            fontWeight: 600,
            width: " 200px",
            "&:hover": { bgcolor: "#4d8fcd" },
          }}
          onClick={() => router.push(`/job-apply?jobId=${id}`)}
        >
          Apply for this job
        </Button>
        </Box>
      </Container>
    </>
  );
}
