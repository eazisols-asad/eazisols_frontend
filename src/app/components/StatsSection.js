'use client';

import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import statss from '@/app/assets/statss.png';
import building from '@/app/assets/building.svg';
import clock from '@/app/assets/clock.svg';
import coding from '@/app/assets/coding.svg';
import people from '@/app/assets/people.svg';

const stats = [
  {
    prefix: 'We coded and designed over',
    number: 40000,
    suffix: 'Hours',
    icon: clock
  },
  {
    number: 1000000,
    suffix: '+',
    description: 'people use the apps monthly that we created',
    icon: people
  },
  {
    prefix: 'We wrote over',
    number: 50000,
    suffix: '+',
    description: 'lines of code',
    icon: coding
  },
  {
    prefix: 'We worked with over',
    number: 50,
    suffix: '+',
    description: 'Different companies',
    icon: building
  }
];

function AnimatedNumber({ value, duration = 2000 }) {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startValue = 0;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentValue = Math.floor(startValue + (value - startValue) * progress);
      setCurrent(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, isVisible]);

  return <span ref={ref}>{current.toLocaleString()}</span>;
}

export default function StatsSection() {
  return (
    <section className="stats-section bg-light">
      <Container>
        <div className="text-center mb-5">
          <p className="text-uppercase text-muted mb-2" style={{ letterSpacing: '0.05em', fontSize: '0.875rem' }}>
            WE WORKED WITH ALL OF THEM
          </p>
          <h2 className="display-5 fw-bold mb-3">We got you covered</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
            Leading global tech services firm, delivering innovative solutions, exceptional results, and fostering lasting client relationships.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stats-illustration">
            <Image
              src={statss}
              alt="Stats Illustration"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          <div className="stats-content">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <Image src={stat.icon} alt="Stat Icon" width={48} height={48} />
                </div>
                <div className="stat-info">
                  {stat.prefix && <div className="stat-prefix">{stat.prefix}</div>}
                  <div className="stat-number">
                    <AnimatedNumber value={stat.number} />
                    {stat.suffix}
                  </div>
                  {stat.description && <div className="stat-description">{stat.description}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
} 