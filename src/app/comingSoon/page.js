
  'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import eazistransbg from "@/app/assets/eazistransbg.png";
import comingbg from '@/app/assets/comingbg.png';
import Image from "next/image";


export default function ComingSoon() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#d2e4f5', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} className="text-center text-lg-start mb-1 mb-lg-0">
            {/* <img
              src={eazistransbg.src}
              alt="Logo"
              style={{ width: 140, mb:0 }}
            /> */}

            {/* <Typography
              variant="h4"
              sx={{
                fontWeight: 500,
                color: '#000',
                mb: 1,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              OUR WEBSITE IS
            </Typography> */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: '#000',
                mb: 1,
                mt:10,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              COMING SOON
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: '#333',
                mb: 1,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Meanwhile feel free to interact with our social networks
            </Typography>

            <div className="d-flex justify-content-center gap-4 ">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter color="#1DA1F2" size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF color="#1877F2" size={24} />
              </a>
              <a href="https://www.instagram.com/eazisols/" target="_blank" rel="noopener noreferrer">
                <FaInstagram color="#E4405F" size={24} />
              </a>
              <a href="https://www.linkedin.com/company/eazisols/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn color="#0077B5" size={24} />
              </a>
            </div>
          </Col>
           <Col lg={6} className="text-center">
            <Image
              src={comingbg.src}
              alt="Coming Soon Illustration"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </Box>
  );
}

 
