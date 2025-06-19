import React from 'react';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white border rounded-4 p-4 h-100 text-center d-flex flex-column align-items-center justify-content-center feature-card" style={{borderColor: '#e0e0e0'}}>
      <div className="mb-3" style={{fontSize: '2.5rem'}}>{icon}</div>
      <h5 className="fw-bold mb-2">{title}</h5>
      <p className="text-muted mb-0">{description}</p>
    </div>
  );
} 