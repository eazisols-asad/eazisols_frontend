'use client';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import ctta from "@/app/assets/ctta.png";

export default function Hsection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, #f89c1c 0%, #fbc22f 100%)',
        py: { xs: 6, md: 10 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          {/* LEFT SIDE */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: '#1b1b1b', mb: 2 }}
            >
              ENJOY YOUR VACATION WITH US
            </Typography>
            <Typography variant="body1" sx={{ color: '#333', mb: 3 }}>
              Travel to the any corner of the world, without going around in circles.
              Travel to the any corner of the world, without going around in circles
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#1b1b1b',
                color: '#fff',
                px: 3,
                py: 1,
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#000',
                },
              }}
            >
              BOOK YOUR SEAT NOW
            </Button>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Box
              sx={{
                width: '100%',
                maxWidth: 480,
                height: 'auto',
                mt: { xs: 4, md: 0 },
              }}
            >
              <Image
                src={ctta}
                alt="Vacation Image"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
