import React from 'react';

const processSteps = [
  { title: 'Requirements', color: '#00C2E5', rightText: 'Product requirements document' },
  { title: 'Design', color: '#00B2D5', rightText: 'Software architecture' },
  { title: 'Implementation', color: '#00A2C5', rightText: 'Software' },
  { title: 'Verification', color: '#0092B5', rightText: '' },
  { title: 'Maintenance', color: '#0082A5', rightText: '' },
];

const processText = {
  Requirements: "We gather and analyze your requirements to create a detailed product specification document.",
  Design: "Our team creates the software architecture and design specifications.",
  Implementation: "We develop the software according to the requirements and design.",
  Verification: "Thorough testing and quality assurance is performed.",
  Maintenance: "We provide ongoing support and maintenance after launch."
};

export default function WaterfallProcess() {
  return (
    <div className="waterfall-container">
      <h2 className="text-center mb-5" style={{ fontWeight: 700, color: '#3a2e5c' }}>OUR PROCESS</h2>
      <div className="row">
        <div className="col-md-7">
          <div className="waterfall-steps">
            {processSteps.map((step, idx) => (
              <div key={idx} className={`waterfall-step waterfall-step-${idx}`}
                style={{ 
                  background: step.color,
                  marginLeft: `${idx * 40}px`, // Add increasing left margin for each step
                  color: '#ffffff'
                }}>
                <span className="waterfall-step-title">{step.title}</span>
                <div className="step-to-text-arrow">
                  <svg width="50" height="20" viewBox="0 0 50 20">
                    <path 
                      d="M0 10 L40 10 L45 5 L50 10 L45 15 L40 10" 
                      fill={step.color}
                      stroke="#666"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-5">
          <div className="process-description">
            {processSteps.map((step, idx) => (
              <div key={idx} className="mb-4">
                <h4 style={{color: '#000000'}}>{step.title}</h4>
                <p>{processText[step.title]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .step-to-text-arrow {
          position: absolute;
          right: -50px;
          top: 50%;
          transform: translateY(-50%);
        }
        .waterfall-step {
          position: relative;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 5px;
          width: 60%;
        }
        .waterfall-steps {
          padding-top: 20px; // Add padding to align with text
        }
      `}</style>
    </div>
  );
}