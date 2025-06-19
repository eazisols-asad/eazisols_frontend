'use client';

import Image from 'next/image';

export default function LogoSlider() {
  const logos = [
    { src: '/logos/logo1.svg', alt: 'Wagers', width: 100 },
    { src: '/logos/logo2.svg', alt: 'Golden Ops', width: 120 },
    { src: '/logos/logo3.svg', alt: 'Grintary', width: 110 },
    { src: '/logos/logo4.svg', alt: 'TWLM', width: 90 },
    { src: '/logos/logo5.svg', alt: 'LiftBuddy', width: 100 },
    { src: '/logos/logo6.svg', alt: 'TheWalt', width: 110 },
    { src: '/logos/logo7.svg', alt: 'Company', width: 120 },
  ];

  return (
    <div className="logo-container">
      <div className="text-center mb-4">
        <p className="text-muted mb-0">Trusted by innovative companies</p>
      </div>
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