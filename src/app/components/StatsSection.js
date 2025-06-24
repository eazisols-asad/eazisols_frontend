'use client';

import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import clock from '@/app/assets/clock.svg';
import coding from '@/app/assets/coding.svg';
import people from '@/app/assets/people.svg';
import building from '@/app/assets/building.svg';

const stats = [
  {
    icon: clock,
    title: '40,000+ Hours',
    description: 'We coded and designed over 40,000 hours of development work'
  },
  {
    icon: people,
    title: '1M+ Users',
    description: 'Over 1 million people use the applications we created monthly'
  },
  {
    icon: coding,
    title: '50,000+ Lines',
    description: 'We wrote over 50,000 lines of high-quality, maintainable code'
  },
  {
    icon: building,
    title: '50+ Companies',
    description: 'We worked with over 50 different companies across industries'
  }
];

export default function StatsSection() {
  return (
    <section className="stats-section bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <p className="text-uppercase text-muted mb-2" style={{ letterSpacing: '0.05em', fontSize: '0.875rem' }}>
            WE WORKED WITH ALL OF THEM
          </p>
          <h2 className="display-5 fw-bold mb-4">We got you covered</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
            Leading global tech services firm, delivering innovative solutions, exceptional results, and fostering lasting client relationships.
          </p>
        </div>

        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4 hover-scale">
                <div className="d-flex align-items-center mb-3">
                  <Image 
                    src={stat.icon}
                    alt={stat.title}
                    width={25}
                    height={25}
                    className="me-3"
                  />
                  <h4 className="h5 mb-0">{stat.title}</h4>
                </div>
                <p className="text-muted mb-0">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}