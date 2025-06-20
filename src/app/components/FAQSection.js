import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function FAQSection({ faqs = [], title = 'Frequently Asked Questions', sectionIndex }) {
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
                <div className="accordion-item border-0 rounded-3 mb-2" key={idx}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed " // ❌ always collapsed initially
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${uniqueId}-item${idx}`}
style={{fontWeight:600}}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`${uniqueId}-item${idx}`}
                    className="accordion-collapse collapse" // ❌ no 'show'
                    data-bs-parent={`#${uniqueId}`}
                  >
                    <div className="accordion-body pt-2">
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
