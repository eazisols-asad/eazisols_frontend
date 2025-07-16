"use client";
import Image from "next/image";
import { Box, Typography, Container, Link } from "@mui/material";
import culture from "@/app/assets/culture.jpg";
import { useRouter } from "next/navigation";

export default function CultureSection() {
  const router = useRouter();
  return (
    <Box component="section" py={10}>
      <Container>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="flex-start"
          gap={5}
        >
          {/* Left Section - Text Content */}
          <Box flex={1}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              A Diverse Culture & Teams
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Appnovation is a place where innovators come to learn, discover
              and grow. We are made up of bold and creative thinkers that come
              from every walk of life. Our open culture drives success for our
              clients and our focus on company wide inclusion creates a great
              opportunity for our teams.
            </Typography>

            <Link
              href="/careers"
              underline="none"
              sx={{
                fontWeight: 500,
                fontSize: 16,

                display: "inline-block",
              }}
              onClick={() => router.push("/careers")}
            >
              Learn more about our careers with us →
            </Link>
          </Box>

          {/* Right Section - Image */}
          <Box
            flex={1}
            sx={{
              width: "100%",
              maxWidth: 700,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src={culture.src}
              alt="Team Culture"
              width={700}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
