"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Box, Container, Typography, Button } from "@mui/material";
import useApiAuth from "@/app/components/useApiAuth";   

export default function JobDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { getData } = useApiAuth();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    // Fetch single job (assumes endpoint …/careers/{id})
    getData(
      `/api/careers/${id}`,
      (data) => {
        /* If your API returns {data:{…job}} adapt accordingly */
        setJob(data?.data ?? data);
        setLoading(false);
      },
      (err) => {
        console.error("Failed to fetch job", err);
        setLoading(false);
      }
    );
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <span className="loader" />
      </Container>
    );
  }

  if (!job) {
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          Job not found
        </Typography>
        <Button onClick={() => router.back()}>Back</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Button variant="text" onClick={() => router.back()} sx={{ mb: 2 }}>
        ←  Back to jobs
      </Button>

      <Typography variant="h4" fontWeight={700} gutterBottom>
        {job.title}
      </Typography>

      {/* ----- Description ----- */}
      {job.description && (
        <Box mb={4}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Description
          </Typography>
          <Typography whiteSpace="pre-line">{job.description}</Typography>
        </Box>
      )}

      {/* ----- Responsibilities ----- */}
      {job.responsibilities && (
        <Box mb={4}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Responsibilities
          </Typography>
          <Typography whiteSpace="pre-line">{job.responsibilities}</Typography>
        </Box>
      )}

      {/* ----- Requirements ----- */}
      {job.requirements && (
        <Box mb={4}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Requirements
          </Typography>
          <Typography whiteSpace="pre-line">{job.requirements}</Typography>
        </Box>
      )}
    </Container>
  );
}
