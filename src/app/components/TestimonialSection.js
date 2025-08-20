'use client';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React, { useRef } from 'react';
import Slider from 'react-slick';

// Slick CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TestimonialSection() {
  const sliderRef = useRef(null);

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        background: '#d2e4f5',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4,
        position: 'relative',
        px: { xs: 4, sm: 6, md: 12,  },
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      {/* Left Side */}
      <Box sx={{ maxWidth: 500, paddingLeft: "4px", }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            fontSize: '16px',
            color: '#6b6b6b',
            mb: 1,
          }}
        >
          TESTMONIAL
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '32px', sm: '40px', md: '48px' },
            lineHeight: 1.2,
            color: '#0d022d',
            fontFamily: 'Anton, sans-serif',
            textShadow:
              '0.5px 0 black, -0.5px 0 black, 0 0.5px black, 0 -0.5px black',
            mb: 2,
          }}
        >
          WHAT OUR <br />
          CLIENTS SAY'S
        </Typography>
        <Typography sx={{ fontSize: '16px', lineHeight: 1.7, color: '#6b6b6b' }}>
          Nunc vel ligula ut erat scelerisque vehicula sit amet porttitor magna.
          Donec malesuada quis diam quis pellentesque.
        </Typography>
      </Box>

      {/* Right Side - Slider */}
      <Box sx={{ maxWidth: 550, width: '100%', }}>
        <Slider {...settings} ref={sliderRef}>
          {[1, 2].map((_, i) => (
            <Box
              key={i}
              sx={{
                background: '#fff',
                p: { xs: 3, sm: 4 },
                borderRadius: 2,
                boxShadow: '0px 20px 40px rgba(0,0,0,0.05)',
              }}
            >
              <Typography
                sx={{
                  fontStyle: 'italic',
                  color: '#444',
                  fontSize: '18px',
                  mb: 4,
                }}
              >
                Cras porttitor orci vel ex convallis congue. Aliquam et pharetra
                urna. Quisque auctor purus in nunc posuere, vitae condimentum
                odio mattis. Nulla hendrerit tellus tellus, sed pharetra dui
                vulputate sed.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'nowrap', // 👈 prevent vertical shift
                  gap: 2,
                }}
              >
                <FaQuoteLeft style={{ fontSize: 48, color: '#418ED6' }} />

                {/* 👇 Keep name block right-aligned */}
                <Box sx={{ textAlign: 'right' }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '20px',
                      color: '#000',
                    }}
                  >
                    Eity Akhter
                  </Typography>
                  <Typography sx={{ color: '#418ED6', fontSize: '14px' }}>
                    CEO & Founder
                  </Typography>
                </Box>

                <Avatar
                  src="/testimonial-user.jpg"
                  alt="Eity Akhter"
                  sx={{
                    width: 56,
                    height: 56,
                    border: '2px solid #418ED6',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Arrows - back to right side */}
      <Box
       className="custom-arrow-box"
        sx={{
          position: 'absolute',
          bottom: { xs: 20, md: 30 },
          right: { xs: 24, md: 100 }, 
          left: '1100px',
          display: 'flex',
          gap: 2,
        }}
      >
        <IconButton sx={{ background: '#fff', boxShadow: 2 }} onClick={previous}>
          <FaArrowLeft style={{ color: '#418ED6' }} />
        </IconButton>
        <IconButton sx={{ background: '#fff', boxShadow: 2 }} onClick={next}>
          <FaArrowRight style={{ color: '#418ED6' }} />
        </IconButton>
      </Box>
    </Box>
  );
}
