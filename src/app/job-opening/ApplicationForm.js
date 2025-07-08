"use client";
import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

export default function JobApplicationForm() {
  
  const Section = ({ title, children }) => (
    <Box mb={4}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography fontWeight={600}>{title}</Typography>
        <IconButton size="small" sx={{ opacity: 0.6 }}>
          <ClearIcon fontSize="small" />
          <Typography ml={0.5} variant="caption">
            Clear
          </Typography>
        </IconButton>
      </Box>
      {children}
    </Box>
  );

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", bgcolor: "#fff", p: 3 }}>
      {/* Personal information */}
      <Section title="Personal information">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth size="small" label="First name" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth size="small" label="Last name" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth size="small" label="Email" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth size="small" label="Headline" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Phone"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TextField
                      select
                      defaultValue="+92"
                      variant="standard"
                      sx={{ width: 60, mr: 1, "& .MuiInput-input": { fontSize: 13 } }}
                    >
                      <MenuItem value="+92">+92</MenuItem>
                      <MenuItem value="+1">+1</MenuItem>
                      <MenuItem value="+971">+971</MenuItem>
                    </TextField>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Address"
              placeholder="Lahore, Pakistan"
            />
          </Grid>
        </Grid>
      </Section>

      <Divider />

      {/* Profile */}
      <Section title="Profile">
        <Box display="flex" gap={2} mb={2}>
          <Button size="small" variant="outlined">
            + Add Education
          </Button>
          <Button size="small" variant="outlined">
            + Add Experience
          </Button>
        </Box>
        <TextField label="Summary" multiline minRows={4} fullWidth sx={{ mb: 3 }} />
        <Box
          sx={{
            border: "2px dashed #cbd5e1",
            borderRadius: 2,
            p: 4,
            textAlign: "center",
            color: "#64748b",
          }}
        >
          <CloudUploadOutlinedIcon sx={{ fontSize: 32, mb: 1 }} />
          <Typography fontSize={14} fontWeight={500}>
            Upload a file or drag and drop here
          </Typography>
        </Box>
      </Section>

      <Divider />

      {/* Details */}
      <Section title="Details">
        <TextField label="Cover letter" multiline minRows={4} fullWidth />
      </Section>

      <Button
        fullWidth
        variant="contained"
        sx={{ bgcolor: "#0f766e", fontWeight: 600, "&:hover": { bgcolor: "#0d665f" } }}
      >
        Submit application
      </Button>
    </Box>
  );
}
