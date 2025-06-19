'use client';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
// import styles from './Navbar.module.css';

export default function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-white py-3 shadow-sm fixed-top">
        <Container>
          <Navbar.Brand as={Link} href="/">
            {/* <Image src="/vercel.svg" alt="Eazisols Logo" width={120} height={30} priority /> */}
            <span className="fw-bold fst-italic">Eazisols</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} href="/">Home</Nav.Link>
              <Nav.Link as={Link} href="/contact">Contact Us</Nav.Link>
              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item as={Link} href="/services/marketing">Marketing</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services/development">Development</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services/ui-ux">UI UX Design</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services/business-website">Business Website</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link as={Link} href="/portfolio">Portfolio</Nav.Link> */}
              <Nav.Link as={Link} href="/cost-calculator" className="position-relative">
                Cost Calculator
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  NEW
                </span>
              </Nav.Link>
              {/* <Nav.Link as={Link} href="/blog">Blog</Nav.Link> */}
              <Button variant="danger" className="ms-2" href="tel:+1234567890">
                Call us
              </Button>
              <Button variant="dark" className="ms-2">
                Drop a Message
              </Button>
              <Button variant="success" className="ms-2" href="https://wa.me/1234567890">
                WhatsApp
              </Button>
            </Nav>
            {/* <Dropdown align="end" className="ms-auto">
              <Dropdown.Toggle variant="link" className="p-0 border-0 bg-transparent">
                <img src="https://flagcdn.com/us.svg" alt="English" width={28} className="rounded-circle border" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#"><img src="https://flagcdn.com/us.svg" alt="English" width={20} className="me-2 rounded-circle" /> English</Dropdown.Item>
                <Dropdown.Item href="#"><img src="https://flagcdn.com/pk.svg" alt="Urdu" width={20} className="me-2 rounded-circle" /> Urdu</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Add a spacer div to prevent content from hiding under fixed navbar */}
      <div className="navbar-spacer"></div>
    </>
  );
} 