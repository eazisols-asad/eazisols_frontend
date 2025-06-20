import { Container, Row, Col, Button, Card, Form, InputGroup, Badge } from 'react-bootstrap';
import Image from 'next/image';
import FeatureCard from '../components/FeatureCard';
import FAQSection from '../components/FAQSection';

const faqs = [
  {
    question: 'What are the services provided by your software development firm?',
    answer: 'Our firm specializes in delivering a broad spectrum of professional services in the field of software development. Our core competencies encompass custom software development, mobile app development, web application development, software consulting, and software maintenance. We extend our services to diverse industries, catering to businesses of all sizes with a commitment to excellence.'
  },
  {
    question: 'What is the level of expertise that your team possesses in the field of software development?',
    answer: 'Our team excels in the field of software development, with a strong focus on creating cutting-edge web and mobile applications. We have a wealth of experience in crafting solutions using the latest technologies and frameworks. Our expertise spans various aspects of development, ensuring that we can deliver robust and scalable applications tailored to your specific requirements. We are committed to staying abreast of industry trends and consistently strive for excellence in delivering high-quality software solutions.'
  },
  {
    question: 'Can you explain the software development process at your company?',
    answer: 'Our software development process adheres to industry best practices, encompassing requirements analysis, design, development, testing, deployment, and continuous support. Emphasizing transparent communication, client engagement, and agile methodologies, we deliver resilient and scalable software solutions.'
  },
  {
    question: 'What technologies do you specialize in for software development?',
    answer: 'Our proficiency spans a diverse array of technologies, encompassing, but not restricted to, Ruby on Rails, AWS, Webflow, UI/UX design, JavaScript (Node.js and React.js), mobile development (Flutter, React Native), database technologies, and cloud platforms. Our team remains up-to-date with the latest industry trends to deliver cutting-edge solutions.'
  },
  {
    question: 'What measures do you implement to guarantee the security of the software developed by your team?',
    answer: 'At the forefront of our software development process is a steadfast commitment to security. We prioritize this aspect by adhering to industry-standard security practices, conducting thorough code reviews, implementing encryption protocols, and performing regular security audits. This meticulous approach enables us to identify and address vulnerabilities, ensuring the confidentiality and integrity of your software.'
  },
  {
    question: 'What is the usual timeframe for completing a software development project?',
    answer: 'The duration of a software development project varies, contingent upon its complexity, scope, and specific requirements. During the initial project planning phase, we collaborate closely with our clients to establish realistic timelines. Throughout the development cycle, we maintain transparency by providing regular updates, ensuring alignment with deadlines.'
  },
  {
    question: 'How do you manage alterations to project requirements throughout the development phase?',
    answer: 'We acknowledge the possibility of project requirements evolving during development. Embracing agile methodologies, we prioritize flexibility to seamlessly adapt to changes. Our team fosters open communication channels to facilitate efficient coordination and timely adjustments, all while minimizing any impact on the project timeline and budget.'
  },
  {
    question: 'What kind of support and maintenance do you provide post-launch?',
    answer: 'We provide thorough post-launch support and maintenance services, encompassing bug fixes, security patches, and continuous monitoring. Our objective is to guarantee the sustained success and optimal performance of your software solution.'
  },
  {
    question: 'How do I get started with a software development project with your company?',
    answer: 'To initiate the process, you can contact us through our contact form, email, or phone. Our team will quickly arrange a meeting to discuss your project requirements, goals, and address any specific questions you might have. Following this, we will devise a customized plan and furnish you with a detailed proposal for your software development project.'
  }
];

export default function CostCalculatorPage() {
  return (
    <div className="bg-white min-vh-100 pt-5">
      {/* Hero Section */}
      <section className="text-center py-5">
        <Container>
          <div className="mb-3">
            <Badge bg="secondary" className="rounded-pill px-3 mb-2" style={{animation: 'auto ease 0s 1 normal none running none', padding: '14px', backgroundColor: '#EEEEEE !important', color: '#000000',fontWeight: 500}}>Cost Calculator</Badge>
            <h1 className="display-4 fw-bold mb-3" style={{textAlign: 'center', marginTop: 0, marginBottom: 0, paddingBottom: 0, fontSize: '60px', lineHeight: '72px',color: '#000000'}}>Idea <span >&rarr;</span> Estimation<br />in seconds</h1>
            <p className="lead text-muted mb-4" style={{maxWidth: 600, margin: '0 auto', textAlign: 'center', marginBottom: 0, fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '30px',fontWeight: 400}}>Use industry data to estimate and understand development costs. No hidden fees. Just transparent insights.</p>
            <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
              <Button variant="dark" size="lg" className="rounded-pill px-4">Start Calculating</Button>
              <Button variant="outline-dark" size="lg" className="rounded-pill px-4">Contact us</Button>
            </div>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {/* Placeholder icons */}
              <span className="fs-3">⚡</span>
              <span className="fs-3">🛠️</span>
              <span className="fs-3">🌐</span>
              <span className="fs-3">🔒</span>
              <span className="fs-3">📈</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Magic In Action Section */}
      <section className="py-5 bg-light px-3 px-md-5" style={{paddingLeft: '60px', paddingRight: '60px'}}>
        <Container  className="px-5">
          <div className="text-center mb-5">
            <Button variant="outline-danger" size="sm" className="rounded-pill px-3 mb-2">How it works</Button>
            <h2 className="fw-bold mb-4">See The Magic In Action</h2>
          </div>
          {/* Step 1 */}
          <Row className="align-items-center mb-5 flex-row">
            <Col xs={12} md={6} className="order-1 order-md-1 mb-4 mb-md-0">
              <h5 className="fw-bold">Choose the Platform</h5>
              <p className="text-muted">Choose your platform and app types to match your needs.</p>
            </Col>
            <Col xs={12} md={6} className="order-2 order-md-2 text-center">
              <Card className="shadow-sm mx-auto" style={{maxWidth: 300, background: '#fff'}}>
                <div className="card-body">
                  <div style={{height: 120, background: '#f8f9fa', borderRadius: 12}} className="d-flex align-items-center justify-content-center">
                    <span className="fs-1">🖥️</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <div className="text-center mb-5">
            <img src="/arrow1.png" alt="Curved Arrow" style={{maxWidth: '220px', width: '100%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />
          </div>
          {/* Step 2 */}
          <Row className="align-items-center mb-5 flex-row">
            <Col xs={12} md={6} className="order-1 order-md-1 mb-4 mb-md-0">
              <h5 className="fw-bold">Let's Dive into Your Project Details</h5>
              <p className="text-muted">Enter your project goals, requirements, and features for a quick estimate.</p>
            </Col>
            <Col xs={12} md={6} className="order-2 order-md-2 text-center">
              <Card className="shadow-sm mx-auto" style={{maxWidth: 300, background: '#fff'}}>
                <div className="card-body">
                  <div style={{height: 120, background: '#f8f9fa', borderRadius: 12}} className="d-flex align-items-center justify-content-center">
                    <span className="fs-1">📝</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <div className="text-center mb-5">
            <img src="/arrow2.png" alt="Curved Arrow" style={{maxWidth: '220px', width: '100%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />
          </div>
          {/* Step 3 */}
          <Row className="align-items-center flex-row">
            <Col xs={12} md={6} className="order-1 order-md-1 mb-4 mb-md-0">
              <h5 className="fw-bold">Submit to Get Your Estimate</h5>
              <p className="text-muted">Discover details, insights, and get your transparent estimate instantly.</p>
            </Col>
            <Col xs={12} md={6} className="order-2 order-md-2 text-center">
              <Card className="shadow-sm mx-auto" style={{maxWidth: 300, background: '#fff'}}>
                <div className="card-body">
                  <div style={{height: 120, background: '#f8f9fa', borderRadius: 12}} className="d-flex align-items-center justify-content-center">
                    <span className="fs-1">📊</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-4">
            <span className=" bg-light text-dark px-4 py-2 mb-3" style={{fontWeight: 500, fontSize: '1rem'}}>Features</span>
            <h2 className="fw-bold mb-5" style={{fontSize: '2.5rem'}}>Smarter Financial Decisions</h2>
          </div>
          <Row className="g-4 justify-content-center">
            <Col xs={12} md={6} lg={3}>
              <FeatureCard
                icon={<i className="bi bi-clock-history"></i>}
                title="Save Time"
                description="Get a fast, accurate cost breakdown. Make smarter decisions with our Cost Calculator."
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <FeatureCard
                icon={<i className="bi bi-graph-up-arrow"></i>}
                title="Optimize Usage"
                description="Unlock personalized plans to maximize savings and achieve your financial goals. Start saving today!"
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <FeatureCard
                icon={<i className="bi bi-piggy-bank"></i>}
                title="Save Money"
                description="Cut costs without sacrificing quality. Use our Cost Calculator to find the best solutions for your budget!"
              />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <FeatureCard
                icon={<i className="bi bi-shield-lock"></i>}
                title="Secure & Private"
                description="Your data is safe with us. We prioritize privacy with every calculation, so you can calculate without concerns."
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title="Frequently Asked Questions" />

      {/* Free Trial CTA Section */}
      <section style={{ background: '#0d6efd', padding: '64px 0 96px 0' }}>
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
                  <span className="input-group-text bg-white border-0 rounded-start-pill" style={{paddingRight: 0, paddingLeft: 18}}>
                    <i className="bi bi-envelope-fill text-primary"></i>
                  </span>
                  <Form.Control
                    type="email"
                    placeholder="JhonDoe@gmail.com"
                    className="border-0 rounded-end-pill ps-2"
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
      {/* <div style={{background: '#fff', height: 48}}></div> */}
    </div>
  );
} 