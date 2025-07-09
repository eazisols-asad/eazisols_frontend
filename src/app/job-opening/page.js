"use client";
import React, { useState, useEffect } from "react";
import { TextField, MenuItem, Box, Container } from "@mui/material";
import "../globals.css";
import useAPiAuth from "../components/useApiAuth";
import contact from "@/app/assets/contact.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function JobOpenings() {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const { getData } = useAPiAuth();
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    keyword: "",
    workplace: "",
    location: "",
    department: "",
    workType: "",
  });

  useEffect(() => {
    setLoading(true);
    getData(
      "/api/careers",
      (data) => {
         console.log("Raw API response:", data);
        // const list = Array.isArray(data?.data?.data) ? data.data.data : [];
        const list = Array.isArray(data?.data) ? data.data : [];
        console.log("🚀 ~ useEffect ~ list:", list)
        setJobs(list);
        setLoading(false);
      },
      (error) => {
        console.error("Failed to fetch jobs", error);
        setLoading(false);
      }
    );
  }, []);

  return (
    <>
      <div
        className="hero-background py-5"
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
          className="container"
          style={{
            paddingTop: "80px",
            color: "white",
          }}
        >
          <h1 className="main-heading text-white">Start Growing With Us</h1>
        </div>
      </div>

      <section className="py-5 px-3 bg-light">
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
          <Box className="row g-3">
            <Box className="col-6 col-md-3">
              <TextField
                fullWidth
                select
                variant="outlined"
                SelectProps={{ displayEmpty: true }}
                InputProps={{ sx: { height: 36 } }}
                value={filters.workplace}
                onChange={(e) =>
                  setFilters({ ...filters, workplace: e.target.value })
                }
              >
                <MenuItem value="" style={{ color: "#808080" }}>
                  Workplace Type
                </MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="On Site">On Site</MenuItem>
                <MenuItem value="hybride">Hybrid</MenuItem>
              </TextField>
            </Box>

            <Box className="col-6 col-md-3">
              <TextField
                fullWidth
                select
                variant="outlined"
                SelectProps={{ displayEmpty: true }}
                InputProps={{ sx: { height: 36 } }}
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
              >
                <MenuItem value="" style={{ color: "#808080" }}>
                  Location
                </MenuItem>
                <MenuItem value="Lahore">Lahore</MenuItem>
                <MenuItem value="UAE">UAE</MenuItem>
              </TextField>
            </Box>

            <Box className="col-6 col-md-3">
              <TextField
                fullWidth
                select
                variant="outlined"
                SelectProps={{ displayEmpty: true }}
                InputProps={{ sx: { height: 36 } }}
                value={filters.department}
                onChange={(e) =>
                  setFilters({ ...filters, department: e.target.value })
                }
              >
                <MenuItem value="" style={{ color: "#808080" }}>
                  Department
                </MenuItem>
                <MenuItem value="Development">Software Development</MenuItem>
                <MenuItem value="QA">Quality Assurance QA</MenuItem>
                <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
                <MenuItem value="HR">Human Resource HR</MenuItem>
              </TextField>
            </Box>

            <Box className="col-6 col-md-3">
              <TextField
                fullWidth
                select
                variant="outlined"
                SelectProps={{ displayEmpty: true }}
                InputProps={{ sx: { height: 36 } }}
                value={filters.workType}
                onChange={(e) =>
                  setFilters({ ...filters, workType: e.target.value })
                }
              >
                <MenuItem value="" style={{ color: "#808080" }}>
                  Work Type
                </MenuItem>
                <MenuItem value="Full-time">Full Time</MenuItem>
                <MenuItem value="Part-time">Part Time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </TextField>
            </Box>
          </Box>
          <Box className="text-end mt-2" sx={{ cursor: "pointer" }}>
            <span
              style={{
                textDecoration: "underline",
                color: "#0d6efd",
                fontSize: "14px",
              }}
              onClick={() =>
                setFilters({
                  keyword: "",
                  workplace: "",
                  location: "",
                  department: "",
                  workType: "",
                })
              }
            >
              Clear
            </span>
          </Box>

          {/*  Jobs Display with single filtering block and console logging */}
          <div className="mt-4">
            {(() => {
              const keyword = filters.keyword.toLowerCase();
              const filtered = jobs.filter((job) => {
                const title = job.title?.toLowerCase() || "";
                const department = job.department?.toLowerCase() || "";
                const workplace = job.workplace_type?.toLowerCase() || "";
                const location = job.location?.toLowerCase() || "";
                const workType = job.work_type?.toLowerCase() || "";

                return (
                  (!filters.keyword ||
                    title.includes(keyword) ||
                    department.includes(keyword)) &&
                  (!filters.workplace ||
                    workplace === filters.workplace.toLowerCase()) &&
                  (!filters.location ||
                    location
                      .toLowerCase()
                      .includes(filters.location.toLowerCase())) &&
                  (!filters.department ||
                    department === filters.department.toLowerCase()) &&
                  (!filters.workType ||
                    workType === filters.workType.toLowerCase())
                );
              });

              if (loading) {
                return (
                  <div className="text-center py-5">
                    <span className="loader" />
                  </div>
                );
              }

              if (filtered.length === 0) {
                return (
                  <div className="text-center py-5 text-muted">
                    <h5>No job openings match your selected filters.</h5>
                    <p>Try adjusting your search or filter criteria.</p>
                  </div>
                );
              }

              return filtered.map((job, idx) => (
                <Link
                  key={job.id}
                  href={`/job-opening/${job.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    key={idx}
                    className="py-3 border-bottom d-flex flex-md-row justify-content-between align-items-start"
                    style={{ width: "100%" }}
                  >
                    <div className="mb-2" style={{ width: "50%" }}>
                      <h5 className="fw-bold text-success mb-1">{job.title}</h5>
                    </div>
                    <div
                      className="d-flex justify-content-center text-muted gap-4"
                      style={{ width: "50%" }}
                    >
                      <span className="fw-semibold" style={{ width: "15%" }}>
                        {job.workplace_type}
                      </span>
                      <span style={{ width: "15%" }}>
                        {job.location
                          ?.split(/[\s,]+/)
                          .filter(Boolean)
                          .pop() || ""}
                      </span>
                      <span style={{ width: "30%" }}>
                        {job.department || "Development"}
                      </span>
                      <span style={{ width: "30%" }}>
                        {job.work_type || "Full Time"}
                      </span>
                    </div>
                  </div>
                </Link>
              ));
            })()}
          </div>
        </Container>
      </section>
    </>
  );
}
