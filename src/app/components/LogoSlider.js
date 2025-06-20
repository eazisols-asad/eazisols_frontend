'use client';

import Image from 'next/image';

import logo1 from '@/app/assets/logo1.svg';
import logo2 from '@/app/assets/logo2.svg';
import logo3 from '@/app/assets/logo3.svg';
import logo4 from '@/app/assets/logo4.svg';
import logo5 from '@/app/assets/logo5.svg';
import logo6 from '@/app/assets/logo6.svg';
import logo7 from '@/app/assets/logo7.svg';


export default function LogoSlider() {
  const logos = [
    { src: logo1, alt: 'Logo 1', width: 100 },
    { src: logo2, alt: 'Logo 2', width: 120 },
    { src: logo3, alt: 'Logo 3', width: 110 },
    { src: logo4, alt: 'Logo 4', width: 90 },
    { src: logo5, alt: 'Logo 5', width: 100 },
    { src: logo6, alt: 'Logo 6', width: 110 },
    { src: logo7, alt: 'Logo 7', width: 120 },
  ];

  return (
    <div className="row logosli-container bg-light">
    
      <div className="logos-grid">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={40}
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'grayscale(100%)',
                opacity: 0.7,
              }}
              priority={index < 3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
