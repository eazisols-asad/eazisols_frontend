'use client';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React, { useRef } from "react";
import Slider from "react-slick";

export default function TestimonialSection() {  
     let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear"
//   };
  return (
    <Box
      sx={{
        background: '#d2e4f5',
        // py: { xs: 6, md: 10 },
        // px: { xs: 3, md: 12 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4,
        position: 'relative',
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "118px",
        paddingRight: "132px",
      }}
    >
      {/* Left Side */}
      <Box sx={{ maxWidth: 450, ml:6 }}>
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
            fontSize: '48px',
            lineHeight: 1.2,
            color: '#0d022d',
            fontFamily: 'Anton, sans-serif',
            textShadow: '0.5px 0 black, -0.5px 0 black, 0 0.5px black, 0 -0.5px black',
            mb: 2,
          }}
        >
          WHAT OUR <br />
          CLIENTS SAY'S
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: '#6b6b6b',
          }}
        >
          Nunc vel ligula ut erat scelerisque vehicula sit amet porttitor magna.
          Donec malesuada quis diam quis pellentesque.
        </Typography>
      </Box>

      {/* Right Side */}
      {/* <div className="slider-container"> */}
      <Box
        sx={{
          background: '#fff',
          p: 4,
          borderRadius: 2,
          boxShadow: '0px 20px 40px rgba(0,0,0,0.05)',
          maxWidth: 550,
          flex: 1,
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
          Cras porttitor orci vel ex convallis congue. Aliquam et pharetra urna.
          Quisque auctor purus in nunc posuere, vitae condimentum odio mattis.
          Nulla hendrerit tellus tellus, sed pharetra dui vulputate sed.
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <FaQuoteLeft style={{ fontSize: 48, color: '#418ED6' }} />

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
            <Typography
              sx={{
                color: '#418ED6',
                fontSize: '14px',
              }}
            >
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
              ml: 2,
            }}
          />
        </Box>
      </Box>
      {/* </div> */}

      {/* Arrows */}
      {/* <div className='slider-container'> */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20, md: 30 },
          left: '73%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 2,
        }}
      >
        <IconButton sx={{ background: '#fff', boxShadow: 2 }}>
          <FaArrowLeft style={{ color: '#418ED6' }} onClick={previous} />
        </IconButton>
        <IconButton sx={{ background: '#fff', boxShadow: 2 }}>
          <FaArrowRight style={{ color: '#418ED6' }} onClick={next} />
        </IconButton>
      </Box>
      {/* </div> */}
    </Box>
  );
};

