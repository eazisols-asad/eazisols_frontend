"use client";
import React, { useState, useEffect } from "react";
import { TextField, MenuItem, Button, Box, Container } from "@mui/material";
import "../globals.css";
import useAPiAuth from "../components/useApiAuth";
import contact from "@/app/assets/contact.png";

export default function JobOpenings() {
  const [jobs, setJobs] = useState([]);
  const { getData } = useAPiAuth();
  const [filters, setFilters] = useState({
    keyword: "",
    workplace: "",
    location: "",
    department: "",
    workType: "",
  });
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    getData(
      "/api/careers",
      (data) => {
        console.log("Full API response:", data);
        // setFilteredJobs(Array.isArray(data?.data?.data) ? data.data.data : []);
        const list = Array.isArray(data?.data?.data) ? data.data.data : [];
        setJobs(list);
        setFilteredJobs(list);
      },
      (error) => {
        console.error("Failed to fetch jobs", error);
      }
    );
  }, []);

const norm = (s) => (s ?? "").toLowerCase().replace(/[\s-]/g, "");
const has = (field, value) =>
  norm(field).includes(norm(value));

const handleSearch = () => {
  const kw = norm(filters.keyword);

  const result = jobs.filter((job) => {
    const matchKw =
      !kw ||
      norm(job.title).includes(kw) ||
      norm(job.department).includes(kw);


    const matchWorkplace =
      !filters.workplace || has(job.schedule, filters.workplace);   
    const matchWorkType =
      !filters.workType || has(job.type, filters.workType);  

    const matchLocation =
      !filters.location || has(job.location, filters.location);  

    const matchDept =
      !filters.department || has(job.department, filters.department); 

    return (
      matchKw && matchWorkplace && matchLocation && matchDept && matchWorkType
    );
  });

  console.log("Filters →", filters);
  console.log("Found", result.length, "jobs");
  setFilteredJobs(result);
};



  return (
    <>
      <div
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
      </div>
      <section className=" py-5 px-3 bg-light">
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
          <h2 className="fw-bold text-center">Find Your Role at Eazisols</h2>
          <p className="text-muted text-center">
            We're always on the lookout for passionate people to join our
            growing team.
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
              value={filters.keyword}
              onChange={(e) =>
                setFilters({ ...filters, keyword: e.target.value })
              }
            />
          </Box>

          {/* Dropdown Filters */}
          <Box className="row g-3 ">
            <Box className="col-6 col-md-3">
              <TextField
                fullWidth
                select
                variant="outlined"
                defaultValue=""
                SelectProps={{ displayEmpty: true }}
                InputProps={{ sx: { height: 36 } }}
                value={filters.workplace}
                onChange={(e) =>
                  setFilters({ ...filters, workplace: e.target.value })
                }
              >
                <MenuItem disabled value="">
                  Workplace Type
                </MenuItem>
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
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
              >
                <MenuItem disabled value="">
                  Location
                </MenuItem>
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
                value={filters.department}
                onChange={(e) =>
                  setFilters({ ...filters, department: e.target.value })
                }
              >
                <MenuItem disabled value="">
                  Department
                </MenuItem>
                <MenuItem value="engineering">Developing</MenuItem>
                <MenuItem value="qa">Design</MenuItem>
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
                value={filters.workType}
                onChange={(e) =>
                  setFilters({ ...filters, workType: e.target.value })
                }
              >
                <MenuItem disabled value="">
                  Work Type
                </MenuItem>
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
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>

          {/* Jobs Display */}
          <div className="mt-4">
            {filteredJobs.length === 0 ? (
              <p className="text-muted text-center">
                <span className="loader"></span>
              </p>
            ) : (
              filteredJobs.map((job, idx) => (
                <div
                  key={idx}
                  className="py-3 border-bottom d-flex  flex-md-row justify-content-between align-items-start"
                  style={{ width: "100%" }}
                >
                  <div className="mb-2" style={{ width: "50%" }}>
                    <h5 className="fw-bold text-success mb-1">{job.title}</h5>
                    <small className="text-muted">Posted {job.posted}</small>
                  </div>
                  <div
                    className="d-flex justify-content-center text-muted gap-4 "
                    style={{ width: "50%" }}
                  >
                    <span className="fw-semibold " style={{ width: "15%" }}>
                      {job.type}
                    </span>
                    <span style={{ width: "15%" }}>{job.location}</span>
                    <span style={{ width: "30%" }}>
                      {job.department || "Development"}
                    </span>
                    <span style={{ width: "30%" }}>
                      {job.schedule || "Full Time"}
                    </span>
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
