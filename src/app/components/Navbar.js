"use client";

import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import Link from "next/link";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function NavigationBar() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-white py-3 shadow-sm fixed-top custom-navbar"
      >
        <Container>
          <Navbar.Brand
            as={Link}
            href="/"
            className="d-flex align-items-center"
          >
            <span className="fw-bold fst-italic fs-4 text-dark">Eazisols</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-2">
              <Nav.Link as={Link} href="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} href="/About">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} href="/Services">
                Services
              </Nav.Link>
              <NavDropdown title="Our Work" id="services-dropdown">
                <NavDropdown.Item as={Link} href="/services/marketing">
                  Case Studies
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services/development">
                  Blog
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} href="/Careers">
                Careers
              </Nav.Link>
              <Nav.Link as={Link} href="/contact">
                Contact Us
              </Nav.Link>

              <Nav.Link
                as={Link}
                href="/cost-calculator"
                className="position-relative fw-semibold text-dark"
              >
                Get a Quote
              </Nav.Link>

              {/* ✅ Buttons with icons */}
              <Nav.Link
                href="tel:+1234567890"
                className="icon-button text-dark"
                title="Call Us"
              >
                <FiPhone size={18} />
              </Nav.Link>
              <Nav.Link
                href="#"
                className="icon-button text-dark"
                title="Drop a Message"
              >
                <FiMail size={18} />
              </Nav.Link>
              <Nav.Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button text-success"
                title="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Keeps space below fixed navbar */}
      <div className="navbar-spacer" style={{ height: "76px" }}></div>
    </>
  );
}
