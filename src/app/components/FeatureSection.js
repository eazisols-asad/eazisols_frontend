"use client";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import data from "@/app/assets/data.png";
import custexp from "@/app/assets/custexp.png";
import solution from "@/app/assets/solution.png";

const features = [
  {
    titleBold: "Proven",
    titleColor: "expertise",
    description:
      "Eazisol has extensive experience transforming complex auto retail and finance processes. Our solutions are tailored to meet unique your requirements, ensuring a seamless partnership to achieve your goals.",
    image: data,
  },
  {
    titleBold: "Future-ready",
    titleColor: "solutions",
    description:
      "Eazisol innovative, API-driven and headless architecture ensures scalability and easy integration. Our products are designed to transform online and offline retail experiences, delivering best-in-class solutions backed by data-driven insights.",
    image: solution,
  },
  {
    titleBold: "Exceptional",
    titleColor: "customer experience",
    description:
      "Our intuitive UI/UX ensures a superior omnichannel retail customer experience. With modular and flexible controls, Eazisols enables effortless customization of workflows and interfaces, prioritizing customer satisfaction and operational efficiency.",
    image: custexp,
  },
];

export default function FeatureSection() {
  return (
    <Box sx={{ backgroundColor: "#e6f2ff", py: { xs: 6, md: 8 } }}>
      <Container>
        {/* Heading */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            mb: 6,
          }}
        >
          Your partner for <br />
          <Box component="span" sx={{ color: "#418ED6" }}>
            innovation and excellence
          </Box>
        </Typography>

      <Row className="justify-content-center" style={{ rowGap: 24 }}>
  {features.map((feature, index) => (
    <Col
      key={index}
      xs={12}
      md={6}
      lg={4}
      className="d-flex justify-content-center"
    >
      {/* ✨ Moved Card here inside Col */}
      <Card
        sx={{
          background: "#fff",
          border: "none",
          borderRadius: "22px",
          boxShadow: "0 4px 8px #0000001a",
          padding: "20px",
          textAlign: "left",
          width: "100%",
          maxWidth: "400px", // ✨ limit width inside column
        }}
      >
        {/* Image */}
        <Box sx={{ width: "100%", height: 200, position: "relative", mb: 2 }}>
          <Image
            src={feature.image}
            alt={feature.titleBold}
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }} // ✨ rounded image
          />
        </Box>

        {/* Content */}
        <CardContent sx={{ px: 0, py: 0 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            {feature.titleBold}{" "}
            <Box component="span" sx={{ color: "#418ED6", fontWeight: 600 }}>
              {feature.titleColor}
            </Box>
          </Typography>
          <Typography variant="body2" sx={{ color: "#222", lineHeight: 1.7 }}>
            {feature.description}
          </Typography>
        </CardContent>
      </Card>
    </Col>
  ))}
</Row>

      </Container>
    </Box>
  );
}
