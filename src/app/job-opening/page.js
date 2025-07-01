"use client";
import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Box,
  Container,
} from "@mui/material";
import "../globals.css";
import useAPiAuth from "../components/useApiAuth";

export default function JobOpenings() {
  const [jobs, setJobs] = useState([]);
    const { postData, getData } = useAPiAuth();

 useEffect(() => {
  getData(
    "/api/careers",
    (data) => {
      console.log("API response:", data);
      setJobs(Array.isArray(data) ? data : data?.jobs || []); 
    },
    (error) => {
      console.error("Failed to fetch jobs", error);
    }
  );
}, []);


  return (
    <>
    <section className=" py-5 px-3 bg-light">
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <h2 className="fw-bold text-center">Find Your Role at Eazisols</h2>
        <p className="text-muted text-center">
          We're always on the lookout for passionate people to join our growing team.
        </p>

        {/* Search Input */}
        <Box className="mb-3">
          <TextField
            fullWidth
            placeholder="Search by title, team, or keyword..."
            variant="outlined"
            InputProps={{
              sx: { height: 40 }, 
            }}
          />
        </Box>

        {/* Dropdown Filters */}
        <Box className="row g-3">
          <Box className="col-6 col-md-3">
            <TextField
              fullWidth
              select
              variant="outlined"
              defaultValue=""
              SelectProps={{ displayEmpty: true }}
              InputProps={{ sx: { height: 36 } }}
            >
              <MenuItem disabled value="">Workplace Type</MenuItem>
              <MenuItem value="remote">Remote</MenuItem>
              <MenuItem value="onsite">On Site</MenuItem>
              <MenuItem value="hybrid">Hybrid</MenuItem>
            </TextField>
          </Box>
          <Box className="col-6 col-md-3">
            <TextField
              fullWidth
              select
              variant="outlined"
              defaultValue=""
              SelectProps={{ displayEmpty: true }}
              InputProps={{ sx: { height: 36 } }}
            >
              <MenuItem disabled value="">Location</MenuItem>
              <MenuItem value="lahore">Lahore</MenuItem>
              <MenuItem value="uae">UAE</MenuItem>
            </TextField>
          </Box>
          <Box className="col-6 col-md-3">
            <TextField
              fullWidth
              select
              variant="outlined"
              defaultValue=""
              SelectProps={{ displayEmpty: true }}
              InputProps={{ sx: { height: 36 } }}
            >
              <MenuItem disabled value="">Department</MenuItem>
              <MenuItem value="engineering">Engineering</MenuItem>
              <MenuItem value="design">Design</MenuItem>
              <MenuItem value="qa">QA</MenuItem>
            </TextField>
          </Box>
          <Box className="col-6 col-md-3">
            <TextField
              fullWidth
              select
              variant="outlined"
              defaultValue=""
              SelectProps={{ displayEmpty: true }}
              InputProps={{ sx: { height: 36 } }}
            >
              <MenuItem disabled value="">Work Type</MenuItem>
              <MenuItem value="contract">Contract</MenuItem>
              <MenuItem value="fulltime">Full Time</MenuItem>
              <MenuItem value="internship">Internship</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
          </Box>
        </Box>

        {/* Search Button Below */}
        <Box mt={3} className="text-end">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#418ED6",
              color: "#fff",
              fontWeight: 600,
              height: 36, 
              padding: "6px 24px",
            }}
          >
            Search
          </Button>
        </Box>

        {/* Jobs Display */}
        <div className="mt-4">
          {jobs.length === 0 ? (
            <p className="text-muted text-center">No job openings available.</p>
          ) : (
            jobs.map((job, idx) => (
              <div
                key={idx}
                className="py-3 border-bottom d-flex flex-column flex-md-row justify-content-between align-items-start"
              >
                <div className="mb-2">
                  <h5 className="fw-bold text-success mb-1">{job.title}</h5>
                  <small className="text-muted">Posted {job.posted}</small>
                </div>
                <div className="d-flex flex-wrap text-muted gap-4">
                  <span className="fw-semibold">{job.type}</span>
                  <span>{job.location}</span>
                  <span>{job.department}</span>
                  <span>{job.schedule}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </section>
    </>
  );
}
