'use client';
import { Box, Container, Typography, Grid } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'; 

export default function Hsection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,     
  });

  const counters = [
    { value: 50, suffix: '+', label: 'Clients trust Us' },
    { value: 5, suffix: '+', label: 'Cool Number' },
    { value: 20, suffix: '+', label: 'Industries Explored' },
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, #418ED6 0%, #2165B1 40%, #003B8B 100%)',
        py: { xs: 6, md: 10 },
        px: {xs: 6, md:10, },
        color: '#fff',
        marginTop: "50px",
      }}
      ref={ref} 
    >
      <div  >
        <Grid container spacing={4} alignItems="center"
        sx={{
          marginLeft: "20px",
        }}
        >
          {/* Left Section */}
          <Grid item xs={12} md={6} >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                mb: 2,
              }}
            >
              5+ Years Of Custom Development <br /> Dominancy
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#f0f0f0',
              }}
            >
              We make technology happen! Our team of first class developers and
              consultants will provide you next gen{' '}
              <Box component="span" fontWeight={700}>
                Software Development Services
              </Box><br />
              , leaving you to only focus on running your business, unperturbed.
            </Typography>
          </Grid>

          
          <Grid
            item
            xs={12}
            md={6}
            container
            spacing={3}
            justifyContent="center"
          >
            {counters.map((item, i) => (
              <Grid
                item
                xs={4}
                key={i}
                sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    width: 140,
                    height: 140,
                    border: '3px solid white',
                    borderRadius: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '2rem' }}>
                    {inView ? (
                      <CountUp start={1} end={item.value} duration={1.5} suffix={item.suffix} />
                    ) : (
                      `0${item.suffix}`
                    )}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
