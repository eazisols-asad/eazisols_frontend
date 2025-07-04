'use client';

import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5 className="mb-3">Transforming Startups.</h5>
            <div className="d-flex gap-3 mb-3">
              <Link href="#" className="text-white">
                <i className="bi bi-facebook fs-5"></i>
              </Link>
              <Link href="#" className="text-white">
                <i className="bi bi-twitter fs-5"></i>
              </Link>
              <Link href="#" className="text-white">
                <i className="bi bi-linkedin fs-5"></i>
              </Link>
              <Link href="#" className="text-white">
                <i className="bi bi-instagram fs-5"></i>
              </Link>
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li className="mb-2">
                <Link href="/quote" >Cost Calculator</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/services/ui-ux" className=" text-decoration-none">UI UX Design</Link>
              </li>
              <li className="mb-2">
                <Link href="/services/development" className=" text-decoration-none">Mobile and Web Development</Link>
              </li>
              <li className="mb-2">
                <Link href="/services/business" className=" text-decoration-none">Business Website</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="mb-2">
            <h5 className="mb-3">Contact</h5>
            <p className="mb-2">65-J1 Wapda Town Lahore, Pakistan.</p>
            <p className="mb-2">info@eazisols.com</p>
            <div className="contact-numbers">
              <p className="mb-1">HR: +92 321 8881156</p>
              <p className="mb-1">BDM: +92 313 8484 008</p>
              <p className="mb-1">UAE: +971 54 424 4629</p>
            </div>
          </Col>
        </Row>
        <hr className="my-2" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">Copyright © {new Date().getFullYear()} Eazisols</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
} 