'use client';

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function FAQSection({ faqs = [], title = 'Frequently Asked Questions', sectionIndex }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const uniqueId = "faqAccordion";

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold">{title}</h2>
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={{ span: 10, offset: 1 }}>
            <div className="accordion" id={uniqueId}>
              {faqs.map((faq, idx) => (
                <div 
                  className="accordion-item border-0 rounded-3 mb-3 shadow-sm hover-scale" 
                  key={idx}
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeIndex !== idx ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${uniqueId}-item${idx}`}
                      style={{
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        padding: '1.25rem',
                        backgroundColor: activeIndex === idx ? '#f8f9fa' : 'white'
                      }}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`${uniqueId}-item${idx}`}
                    className={`accordion-collapse collapse ${activeIndex === idx ? 'show' : ''}`}
                    data-bs-parent={`#${uniqueId}`}
                  >
                    <div className="accordion-body pt-3 pb-4 px-4">
                      <p className="mb-0 text-muted">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
