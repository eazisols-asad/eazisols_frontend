"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import contact from "@/app/assets/contact.png";

/* restore this helper block */
const Section = ({ title, children }) => (
  <Box mb={4}>
    {title && (
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography fontWeight={600}>{title}</Typography>
        <Typography
          variant="caption"
          sx={{
            cursor: "pointer",
            opacity: 0.6,
            userSelect: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={() => {
            /* clear logic later */
          }}
        >
          Clear
        </Typography>
      </Box>
    )}
    {children}
  </Box>
);

export default function JobApplicationForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        headline: "",
        email: "",
        file: null,
      });
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
    <Box sx={{ maxWidth: 500, mx: "auto", bgcolor: "#fff", p: 3 }}>
    
      <Section title="Personal information">
        <Box display="flex" gap={2} mb={2}>
          <TextField fullWidth size="small" label="First name" required />
          <TextField fullWidth size="small" label="Last name" required />
        </Box>

        <Box mb={2}>
          <TextField fullWidth size="small" label="Email" required />
        </Box>

        <Box mb={2}>
          <TextField fullWidth size="small" label="Headline (Optional)" />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            size="small"
            label="Phone"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ minWidth: 64 }}>
                  +92
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box>
          <TextField
            fullWidth
            size="small"
            label="Address"
            placeholder="Lahore, Pakistan"
            required
          />
        </Box>
      </Section>

      <Divider />
      <Section>
        <Box mb={1} display="flex" alignItems="center" gap={0.5}>
          <Typography component="label" fontSize={14} fontWeight={600}>
            <Box component="span" color="error.main" mr={0.5}>
              *
            </Box>
            Resume
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px dashed #94a3b8",
            borderRadius: 2,
            p: 4,
            textAlign: "center",
            color: "#64748b",
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: "#d2e4f5",
              mx: "auto",
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              color: "#4d8fcd",
            }}
          >
            ⬆
          </Box>

          <Typography
            component="span"
            fontSize={14}
            fontWeight={600}
            sx={{ color: "#4d8fcd" }}
          >
            Upload a file
          </Typography>
          <Typography component="span" fontSize={14} color="text.secondary">
            {" "}
            or drag and drop here
          </Typography>
        </Box>
      </Section>

      <Divider />

      <Button
        fullWidth
        variant="contained"
        sx={{
          bgcolor: "#4d8fcd",
          fontWeight: 600,
          "&:hover": { bgcolor: "#4d8fcd" },
        }}
      >
        Submit application
      </Button>
    </Box>
    </>
  );
}
