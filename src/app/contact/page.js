"use client";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import intouch from "@/app/assets/intouch.png";
import useAPiAuth from "../components/useApiAuth";
import contact from "@/app/assets/contact.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUser, FaPhoneAlt, FaEnvelope, FaExclamationCircle, FaPencilAlt, FaPhone } from "react-icons/fa";

// export const metadata = {
//   title: "Contact Us | Eazisols",
//   description: "Get in touch with Eazisols for your next project or inquiry.",
// };

export default function ContactPage() {
  const { postData, getData } = useAPiAuth();
  const handleSubmit = async (formData) => {
    postData(
      "/contact-us",
      formData,
      (data) => {
        console.log("API Success:", data);

        // navigate("/");
      },
      (error) => {
        console.error("user error:", error);
      }
    );
    console.log(formData);
  };
  return (
    <>
      <div
        className="hero-background py-5"
        style={{
          backgroundImage: `url(${contact.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "200px",
          marginTop: "-80px", 
          position: "relative", 
          zIndex: 1,
        }}
      >
        <div
          className="container "
          style={{
            paddingTop: "45px", 
            color: "white",
          }}
        >
          <h1 className="main-heading text-white">Contact Us</h1>
          <p className="text-white">
            Laoreet sit amet cursus sit amet dictum sit amet justo.
          </p>
        </div>
      </div>
       <section style={{ backgroundColor: "#d2e4f5", padding: "60px 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE */}
          <Col lg={6} className="mb-5 mb-lg-0">
            <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem", color: "#000" }}>
              Get Your Instant Free<br />Quote Now
            </h1>
            <h5 className="fw-semibold mb-3">Qadipiscing elit, sed do eiusmod tempor.</h5>
            <p className="text-muted mb-4">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className="d-flex align-items-center gap-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "48px", height: "48px", backgroundColor: "#103e28" }}
              >
                <FaPhone className="text-white" />
              </div>
              <div className="fw-bold fs-5">0 800 555 44 33</div>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={6} className="d-flex justify-content-end">
           <ContactForm buttonText="Sending..." onSubmit={handleSubmit} />
            {/* <div
              className="p-4"
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <Form>
                <Form.Group className="mb-3 d-flex align-items-center border-bottom">
                  <FaUser className="me-2 text-muted" />
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="border-0 shadow-none"
                  />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center border-bottom">
                  <FaPhoneAlt className="me-2 text-muted" />
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    className="border-0 shadow-none"
                  />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center border-bottom">
                  <FaEnvelope className="me-2 text-muted" />
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    className="border-0 shadow-none"
                  />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center border-bottom">
                  <FaExclamationCircle className="me-2 text-muted" />
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    className="border-0 shadow-none"
                  />
                </Form.Group>

                <Form.Group className="mb-4 d-flex align-items-start border-bottom">
                  <FaPencilAlt className="me-2 text-muted mt-1" />
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="How can we help you? Feel free to get in touch!"
                    className="border-0 shadow-none"
                  />
                </Form.Group>

                <Button
                  variant="dark"
                  className="px-4 py-2 rounded-pill"
                  style={{ backgroundColor: "#418ED6", border: "none" }}
                >
                  Learn More
                </Button>
              </Form>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}
