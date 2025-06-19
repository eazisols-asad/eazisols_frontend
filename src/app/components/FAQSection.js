import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function FAQSection({ faqs = [], title = 'Frequently Asked Questions' }) {
  const accordionId = `faqAccordion-${Math.random().toString(36).substr(2, 9)}`;
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
            <div className="accordion" id={accordionId}>
              {faqs.map((faq, idx) => (
                <div className="accordion-item  rounded-3 mb-3" key={idx}>
                  <h2 className="accordion-header">
                    <button className={`accordion-button${idx !== 0 ? ' collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${accordionId}-item${idx}`}> 
                      {faq.question}
                    </button>
                  </h2>
                  <div id={`${accordionId}-item${idx}`} className={`accordion-collapse collapse${idx === 0 ? ' show' : ''}`} data-bs-parent={`#${accordionId}`}>
                    <div className="accordion-body">
                      {faq.answer}
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