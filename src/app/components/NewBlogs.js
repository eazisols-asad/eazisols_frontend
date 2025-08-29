"use client";

import { Container } from "react-bootstrap";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Link as MuiLink,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import blognet from "@/app/assets/blognet.webp";
import colorpatern from "@/app/assets/colorpatern.webp";
import waterpat from "@/app/assets/waterpat.webp";

const cardData = [
  {
    title: "3 ways to elevate cloud content management",
    description:
      "Real-life examples of big gains and bigger results across industries and use cases.",
    linkText: "Read the success stories",
    type: "Success stories",
    variant: "noImage",
  },
  {
    title: "The state of identity threat detection and response",
    description:
      "Explore the findings of a Dark Reading survey commissioned by OpenText...",
    linkText: "Watch the webinar",
    type: "Webinar",
    variant: "noImage",
  },
  {
    title: "5 reasons to move to cloud today",
    description:
      "Whether it's private cloud, public cloud, or a hybrid model...",
    linkText: "Time to migrate",
    type: "Blog",
    variant: "noImage",
  },
];

export default function NewBlogs() {
  return (
    <>
    <Container style={{ padding: "3rem 0", }} >
      <Box sx={{ px: { xs: 4, md: 12,  }, mb: 4 , pl: { lg: "46px" }, 
    pr: { lg: 7 },  }}>
        <Typography variant="subtitle2" color="text.secondary">
          News and Events
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Gain insights to fuel{" "}
          <span style={{ color: "#418ED6" }}>transformation</span>
        </Typography>
      </Box>
      
        <Box
          // className="paddingsection"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            justifyContent: "center",
            // border: "1px solid #e0e0e0",
            // alignItems: "stretch",
            // mr: { xs: 3, md: 0 },
            px: { xs: 2, md: 4 ,}, py: 4 ,
          }}
        >
       
          {/* Card 1 */}
          
            <Box
              className="custom-card-shadow"
              sx={{
                position: "relative",
                 width: { xs: "100%", sm: "100%", md: 360, lg: 380 }, 
                 maxWidth: "24rem",
                height: 400,
                borderRadius: "16px",
                overflow: "hidden",
                flexShrink: 0,
                cursor: "pointer",
              }}
            >
              <Image src={blognet} alt="Card 1" layout="fill" objectFit="cover" />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  p: 3,
                  mt: 2,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.7rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.25px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  What's keeping CIOs up at night? Owning the AI agenda.
                </Typography>
                <Typography
                className="link-hover-effect"
                  sx={{
                    color: "#418ED6",
                    fontWeight: 600,
                    fontSize: "14px",
                    mt: 2,
                  }}>
                  Read the blog →
                </Typography>
              </Box>
            </Box>
          

          {/* Card 2 */}
          <Link href="#" passHref>
            <Box
              className="custom-card-shadow"
              sx={{
                // width: {lg: "359px"},
                maxWidth : "24rem !important",
                height: 400,
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 12px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ position: "relative", height: 180 }}>
                <Image
                  src={colorpatern}
                  alt="Card 2"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{ p: 3, display: "flex", flexDirection: "column", flex: 1 }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.7rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.5px",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  OpenText makes multi-cloud work with zero-copy data
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#6c757d", mt: 1 }}>
                  Welcome to the future of cloud computing.
                </Typography>
                <Typography
                  className="link-hover-effect"
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#418ED6",
                    mt: "auto",
                  }}
                >
                  Read the blog →
                </Typography>
              </Box>
            </Box>
          </Link>

          {/* Card 3 */}
          <Link href="#" passHref>
            <Box
              className="custom-card-shadow"
              sx={{
                // width: {lg: "359px"},
                maxWidth : "24rem !important",
                height: 400,
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 12px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ position: "relative", height: 180 }}>
                <Image
                  src={waterpat}
                  alt="Card 3"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{ p: 3, display: "flex", flexDirection: "column", flex: 1 }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "1.7rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.5px",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Reimagine work with OpenText Aviator
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#6c757d", mt: 1 }}>
                  See new episodes in our AI webinar series or catch what you
                  missed on-demand.
                </Typography>
                <Typography
                  className="link-hover-effect"
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#418ED6",
                    mt: "auto",
                  }}
                >
                  Check out the series →
                </Typography>
              </Box>
            </Box>
          </Link>

        </Box>
      
      {/* Second Row of Cards */}
      {/* <Box sx={{ px: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {cardData.map((card, idx) => (
            <Box
              className="custom-card-shadow"
              key={idx}
              sx={{
                maxWidth : "24rem !important",
                // width: {lg: "359px"},
                height: 280,
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 12px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                p: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#6c757d",
                  mb: 1,
                  fontWeight: 500,
                }}
              >
                {card.type}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.7rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.5px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#6c757d",
                  mt: 1,
                  flexGrow: 1,
                }}
              >
                {card.description}
              </Typography>
              <Typography
                className="link-hover-effect"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#418ED6",
                  mt: 2,
                }}
              >
                {card.linkText} →
              </Typography>
            </Box>
          ))}
        </Box>
      </Box> */}
     
    </Container>
    </>
  );
}
