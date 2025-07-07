"use client";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import useAPiAuth from "../components/useApiAuth";
import contact from "@/app/assets/contact.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSnackbar } from "../components/Snakbar";

export default function ContactPage() {
  const { postData, getData } = useAPiAuth();
  const { handleSnackbarOpen } = useSnackbar();
  const handleSubmit = async (formData) => {
    postData(
      "/contact-us",
      formData,
      (data) => {
        console.log("API Success:", data);
        handleSnackbarOpen("Form sent successfully!", "success"); 
      },
      (error) => {
        console.error("user error:", error);
        handleSnackbarOpen("Something went wrong.", "error");
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
          height: "300px",
          marginTop: "-80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="container "
          style={{
            paddingTop: "80px",
            color: "white",
          }}
        >
          <h1 className="main-heading text-white"> Let's Talk</h1>
          <p className="text-white">
            Have a project in mind or a question about our services? We'd love
            to hear from you.
          </p>
        </div>
      </div>
      <section style={{ backgroundColor: "#d2e4f5", padding: "60px 20px" }}>
        <Container>
          <Row className="align-items-center">
            {/* LEFT SIDE */}
            <Col lg={6} className="mb-5 mb-lg-0">
              <h2
                className="fw-bold mb-3"
                style={{ fontSize: "2rem", color: "#000" }}
              >
                Reach Us Directly
              </h2>
              <p className="mb-2">
                <strong>Office:</strong> Lahore, Pakistan
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@eazisols.com">info@eazisols.com</a>
              </p>
              <p className="mb-2">
                <strong>Phone:</strong>+92 321 8881156
              </p>
              <p className="mb-4">
                <strong>Hours:</strong>Mon-Fri | 10:00 AM - 7:00 PM
              </p>

              {/* Social Icons */}
              <div className="d-flex gap-3 mb-4">
                <a
                  href="https://www.linkedin.com/company/YOUR_PAGE"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} style={{ color: "#0A66C2" }} />
                </a>
                <a
                  href="https://www.facebook.com/YOUR_PAGE"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} style={{ color: "#1877F2" }} />
                </a>
                <a
                  href="https://www.instagram.com/YOUR_PAGE"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} style={{ color: "#E1306C" }} />
                </a>
              </div>
            </Col>

            {/* RIGHT SIDE */}
            <Col lg={6} className="d-flex justify-content-end">
              <ContactForm buttonText="Sending..." onSubmit={handleSubmit} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
