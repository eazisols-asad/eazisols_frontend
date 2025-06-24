import React from 'react';

const processSteps = [
  { title: 'Requirements', color: '#cfc3cf', rightText: 'Product requirements document' },
  { title: 'Design', color: '#cfd6db', rightText: 'Software architecture' },
  { title: 'Implementation', color: '#bfc5be', rightText: 'Software' },
  { title: 'Verification', color: '#d7c8b6', rightText: '' },
  { title: 'Maintenance', color: '#c8b6a6', rightText: '' },
];

export default function WaterfallProcess() {
  return (
    <div className="waterfall-container">
      <h2 className="text-center mb-5" style={{ fontWeight: 700, color: '#3a2e5c' }}>OUR PROCESS</h2>
      <div className="waterfall-steps">
        {processSteps.map((step, idx) => (
          <div key={idx} className={`waterfall-step waterfall-step-${idx}`}
            style={{ background: step.color }}>
            <span className="waterfall-step-title">{step.title}</span>
            {/* L-shaped connector to next step with image arrow */}
            {idx < processSteps.length - 1 && (
              <div className={`waterfall-elbow-connector waterfall-elbow-${idx}`}>
                <img src="/waterfallarrow.png" alt="arrow" className="waterfall-elbow-arrow-img" />
              </div>
            )}
            {/* Horizontal arrow with text */}
            {step.rightText && (
              <div className="waterfall-horizontal">
                <span className="waterfall-horizontal-arrow" />
                <span className="waterfall-horizontal-text">{step.rightText}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 