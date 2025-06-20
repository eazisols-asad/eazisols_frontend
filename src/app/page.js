'use client';

import { Container, Row, Col, Button, Card, Form, InputGroup } from 'react-bootstrap';
import ContactForm from './components/ContactForm';
import LogoSlider from './components/LogoSlider';
import ProcessTimeline from './components/ProcessTimeline';
import ComparisonSection from './components/ComparisonSection';
import ChallengesSection from './components/ChallengesSection';
import StatsSection from './components/StatsSection';
import FAQSection from './components/FAQSection';
import HeroSection from './components/HeroSection';
import InTouch from './components/InTouch';

const faqs = [
  {
    question: "What are the services provided by your software development firm?",
    answer: "Our firm specializes in delivering a broad spectrum of professional services in the field of software development. Our core competencies encompass custom software development, mobile app development, web application development, software consulting, and software maintenance. We extend our services to diverse industries, catering to businesses of all sizes with a commitment to excellence."
  },
  {
    question: "What is the level of expertise that your team possesses in the field of software development?",
    answer: "Our team excels in the field of software development, with a strong focus on creating cutting-edge web and mobile applications. We have a wealth of experience in crafting solutions using the latest technologies and frameworks. Our expertise spans various aspects of development, ensuring that we can deliver robust and scalable applications tailored to your specific requirements. We are committed to staying abreast of industry trends and consistently strive for excellence in delivering high-quality software solutions."
  },
  {
    question: "Can you explain the software development process at your company?",
    answer: "Our software development process adheres to industry best practices, encompassing requirements analysis, design, development, testing, deployment, and continuous support. Emphasizing transparent communication, client engagement, and agile methodologies, we deliver resilient and scalable software solutions."
  },
  {
    question: "What technologies do you specialize in for software development?",
    answer: "Our proficiency spans a diverse array of technologies, encompassing, but not restricted to, Ruby on Rails, AWS, Webflow, UI/UX design, JavaScript (Node.js and React.js), mobile development (Flutter, React Native), database technologies, and cloud platforms. Our team remains up-to-date with the latest industry trends to deliver cutting-edge solutions."
  },
  {
    question: "What measures do you implement to guarantee the security of the software developed by your team?",
    answer: "At the forefront of our software development process is a steadfast commitment to security. We prioritize this aspect by adhering to industry-standard security practices, conducting thorough code reviews, implementing encryption protocols, and performing regular security audits. This meticulous approach enables us to identify and address vulnerabilities, ensuring the confidentiality and integrity of your software."
  },
  {
    question: "What is the usual timeframe for completing a software development project?",
    answer: "The duration of a software development project varies, contingent upon its complexity, scope, and specific requirements. During the initial project planning phase, we collaborate closely with our clients to establish realistic timelines. Throughout the development cycle, we maintain transparency by providing regular updates, ensuring alignment with deadlines."
  },
  {
    question: "How do you manage alterations to project requirements throughout the development phase?",
    answer: "We acknowledge the possibility of project requirements evolving during development. Embracing agile methodologies, we prioritize flexibility to seamlessly adapt to changes. Our team fosters open communication channels to facilitate efficient coordination and timely adjustments, all while minimizing any impact on the project timeline and budget."
  },
  {
    question: "What kind of support and maintenance do you provide post-launch?",
    answer: "We provide thorough post-launch support and maintenance services, encompassing bug fixes, security patches, and continuous monitoring. Our objective is to guarantee the sustained success and optimal performance of your software solution."
  },
  {
    question: "How do I get started with a software development project with your company?",
    answer: "To initiate the process, you can contact us through our contact form, email, or phone. Our team will quickly arrange a meeting to discuss your project requirements, goals, and address any specific questions you might have. Following this, we will devise a customized plan and furnish you with a detailed proposal for your software development project."
  }
];

export default function Home() {
  return (
    <div>
      <HeroSection />     
          <LogoSlider />

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
      <InTouch />
      <ComparisonSection />

      <ChallengesSection />

      <StatsSection />

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
      <FAQSection faqs={faqs} title="Frequently Asked Questions" />

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

      {/* Start Your Free Trial Section */}
      <section style={{ background: '#f51437', padding: '64px 0' }}>
        <Container>
          <Row className="justify-content-center text-center mb-4">
            <Col lg={8}>
              <h2 className="fw-bold text-white mb-3" style={{fontSize: '2rem'}}>Start Your Free Trial</h2>
              <p className="text-white-50 mb-4" style={{fontWeight: 500}}>Experience the Benefits, No Commitment Required!</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={7}>
              <Form className="d-flex flex-column flex-md-row align-items-center gap-3 justify-content-center">
                <InputGroup className="flex-grow-1" style={{maxWidth: 500}}>
                  <span className="input-group-text bg-white border-0 rounded-pill ps-4" style={{paddingRight: 0}}>
                    <i className="bi bi-envelope-fill text-dark"></i>
                  </span>
                  <Form.Control
                    type="email"
                    placeholder="JhonDoe@gmail.com"
                    className="border-0 rounded-pill ps-2"
                    style={{height: 52, background: '#fff'}}
                  />
                </InputGroup>
                <Button
                  type="submit"
                  className="rounded-pill px-4 fw-bold"
                  style={{height: 52, background: '#000', border: 'none', color: '#fff', whiteSpace: 'nowrap'}}
                >
                  Get Started Now
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
