"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import bg5 from "@/app/assets/bg5.jpg";

export default function CTASection() {
  return (
    <Box
      sx={{
        marginTop:"40px",
        position: "relative",
        width: "100%",
        height: "160px",
       backgroundImage: `url(${bg5.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", 
          maxWidth: "1200px", 
          width: "100%", 
          px: 4,
          px: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{
            fontFamily: `'Segoe UI', 'Helvetica Neue', Arial, sans-serif`,
            fontWeight: 800,
            fontSize: "36px",
            color: "white",
            whiteSpace: "nowrap",
            lineHeight: "1",
          }}
        >
          YOU WANT TO SHOWCASE YOUR WEBSITE
        </Typography>
       <Button
              variant="primary"
              size="lg"
              style={{
                backgroundColor: "#418ED6",
                border: "none",
                borderRadius: 8,
                fontWeight: 600,
                color:" #fff",
                padding: "12px 32px",
              }}
            >
              Learn More
            </Button>
      </Box>
    </Box>
  );
};

