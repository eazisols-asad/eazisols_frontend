"use client";
import { Box, Typography, Container } from "@mui/material";
import nabout from "@/app/assets/nabout.png";

const stats = [
  {
    value: "50+",
    label: "Client trust us",
    color: "#4B5B77",
    position: {
      top: { xs: 0, md: 20 },
       left: { xs: "45%", md: 100 },
      transform: { xs: "translateX(-50%)", md: "none" },
    },
  },
  {
    value: "10+",
    label: "Years in business",
    color: "#8C3FFF",
    position: {
      top: { xs: 100, md: 40 },
      right: { xs: "50%", md: 0 },
      transform: { xs: "translateX(50%)", md: "none" },
    },
  },
  {
    value: "20+",
    label: "Industrie explored",
    color: "#FF9C07",
    position: {
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
];

export default function VisionSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundImage: `url(${nabout.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        borderRadius: 3,
        overflow: "hidden",
        mx: "auto",
        maxWidth: 1200,
        height: { xs: "auto", md: 400 },
      }}
    >
      <Container>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          gap={5}
        >
          {/* Left Side - Text */}
          <Box flex={1}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Our Vision
            </Typography>
            <Typography sx={{ mb: 5, color: "#f3f3f3" }}>
              Our vision is to bring about a powerful and positive
              transformation in the world and to build the best offshore
              development hub for the disruptive ideas by leveraging the power
              of technology.
            </Typography>

            <Typography variant="h4" fontWeight={700} gutterBottom>
              Our Mission
            </Typography>
            <Typography sx={{ color: "#f3f3f3" }}>
              Our mission is to make things easy and helpful for our clients.
            </Typography>
          </Box>

          {/* Right Side - Circular Stats */}
          <Box
            flex={1}
            sx={{
              position: "relative",
              minHeight: 320,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {stats.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "absolute",
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  bgcolor: item.color,
                  color: "white",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: 3,
                  ...item.position,
                }}
              >
                <Typography fontSize={24} fontWeight={700}>
                  {item.value}
                </Typography>
                <Typography fontSize={14}>{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
