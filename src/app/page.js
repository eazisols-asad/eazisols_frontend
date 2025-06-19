'use client';

import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Image from 'next/image';
import ContactForm from './components/ContactForm';
import LogoSlider from './components/LogoSlider';
import ProcessTimeline from './components/ProcessTimeline';
import ComparisonSection from './components/ComparisonSection';
import ChallengesSection from './components/ChallengesSection';
import StatsSection from './components/StatsSection';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 min-vh-100 d-flex flex-column bg-white position-relative">
        <Container className="flex-grow-1 d-flex flex-column">
          <Row className="align-items-center flex-grow-1">
            <Col lg={7}>
              <div className="pe-lg-5">
                <h1 className="display-3 fw-bold mb-4">
                  <span className="text-secondary">Transform your</span><br />
                  <span className="text-secondary">idea into </span>
                  <span className="text-dark">a startup</span>
                </h1>
                <div className="mt-5">
                  <ContactForm 
                    onSubmit={async (formData) => {
                      // Handle form submission
                      console.log(formData);
                    }}
                    buttonText="Submit"
                  />
                  <div className="mt-4 text-center">
                    <p className="text-muted mb-3">OR</p>
                    <Button 
                      variant="dark" 
                      size="lg" 
                      className="rounded-pill px-4"
                      href="/book-appointment"
                    >
                      Book an appointment →
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} className="mt-5 mt-lg-0">
              <div className="globe-container position-relative">
        <Image
                  src="/globe-map.svg"
                  alt="Globe Map"
                  width={600}
                  height={600}
                  className="globe-image"
          priority
        />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-5">
        <Container>
          <LogoSlider />
        </Container>
      </section>

      {/* Process Section */}
      <section className="process-section py-5">
        <Container>
          <div className="text-center mb-5">
            <p className="text-uppercase text-muted mb-1">OUR PROCESS</p>
            <h2 className="display-4 fw-bold">100-Day Launch</h2>
          </div>
          <ProcessTimeline />
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <Container>
          <div className="contact-container">
            <Row className="align-items-center">
              <Col lg={6} className="mb-5 mb-lg-0">
                <div className="pe-lg-5">
                  <p className="text-uppercase text-muted mb-1">CONTACT US</p>
                  <h2 className="display-4 fw-bold mb-4">Get in Touch</h2>
                  <p className="lead text-muted mb-5">Drop your details, we will get in touch with you soon.</p>
            <Image
                    src="/contact-illustration.svg"
                    alt="Contact Illustration"
                    width={500}
                    height={400}
                    className="contact-illustration"
                  />
        </div>
              </Col>
              <Col lg={6}>
                <div className="contact-form-box">
                  <ContactForm 
                    onSubmit={async (formData) => {
                      console.log(formData);
                    }}
                    buttonText="Send Message"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Challenges Section */}
      <ChallengesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Statistics Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold">We worked with all of them</h2>
              <h3 className="h4 text-muted">We got you covered</h3>
              <p className="lead">
                Leading global tech services firm, delivering innovative solutions, exceptional results, and fostering lasting client relationships.
              </p>
            </Col>
          </Row>

          <Row className="g-4 text-center">
            <Col md={6} lg={3}>
              <div className="p-4">
                <h4 className="fw-bold text-primary mb-2">We coded and designed over</h4>
                <div className="display-4 fw-bold text-primary mb-2">40,000</div>
                <p className="text-muted">Hours</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="p-4">
                <h4 className="fw-bold text-primary mb-2">We wrote over</h4>
                <div className="display-4 fw-bold text-primary mb-2">50,000+</div>
                <p className="text-muted">lines of code</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="p-4">
                <h4 className="fw-bold text-primary mb-2">1,000,000+</h4>
                <div className="display-4 fw-bold text-primary mb-2">people</div>
                <p className="text-muted">use the apps monthly that we created</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="p-4">
                <h4 className="fw-bold text-primary mb-2">We worked with over</h4>
                <div className="display-4 fw-bold text-primary mb-2">50+</div>
                <p className="text-muted">Different companies</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold">Frequently Asked Questions</h2>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={6}>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      What are the services provided by your software development firm?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Our firm specializes in delivering a broad spectrum of professional services in the field of software development. Our core competencies encompass custom software development, mobile app development, web application development, software consulting, and software maintenance.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      What is the level of expertise that your team possesses?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Our team excels in the field of software development, with a strong focus on creating cutting-edge web and mobile applications. We have a wealth of experience in crafting solutions using the latest technologies and frameworks.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Can you explain the software development process at your company?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Our software development process adheres to industry best practices, encompassing requirements analysis, design, development, testing, deployment, and continuous support. Emphasizing transparent communication, client engagement, and agile methodologies.
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="accordion" id="faqAccordion2">
                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      What technologies do you specialize in for software development?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion2">
                    <div className="accordion-body">
                      Our proficiency spans a diverse array of technologies, encompassing, but not restricted to, Ruby on Rails, AWS, Webflow, UI/UX design, JavaScript (Node.js and React.js), mobile development (Flutter, React Native), database technologies, and cloud platforms.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                      What measures do you implement to guarantee the security of the software?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                    <div className="accordion-body">
                      At the forefront of our software development process is a steadfast commitment to security. We prioritize this aspect by adhering to industry-standard security practices, conducting thorough code reviews, implementing encryption protocols, and performing regular security audits.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                      What is the usual timeframe for completing a software development project?
                    </button>
                  </h2>
                  <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                    <div className="accordion-body">
                      The duration of a software development project varies, contingent upon its complexity, scope, and specific requirements. During the initial project planning phase, we collaborate closely with our clients to establish realistic timelines.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="text-center mt-5">
            <Col>
              <p className="lead">Still have more questions?</p>
              <Button variant="primary" size="lg">
                Contact us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="display-5 fw-bold mb-4">Let's Get To Work!</h2>
              <p className="lead mb-4">
                We're ready to get started on your next creative project. All you need to do is hit the button below
              </p>
              <Button variant="light" size="lg">
                Book an appointment
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
