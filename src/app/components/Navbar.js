"use client";

import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import Link from "next/link";
import eazistransbg from "@/app/assets/eazistransbg.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        style={{height: "90px"}}
         className={`shadow-sm fixed-top custom-navbar ${scrolled ? "navbar-scrolled" : isHome ? "navbar-home-top" : ""}`}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            href="/"
            className="d-flex align-items-center"
          >
            <img
              src={eazistransbg.src}
              alt="Eazisols Logo"
              style={{
                height: "100px", 
                width: "auto", 
                display: "block", 
                maxHeight: "80px",
              }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-4">
              <Nav.Link
                as={Link}
                href="/"
                className={pathname === "/" ? "active-link" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/about-us"
                className={pathname === "/about-us" ? "active-link" : ""}
              >
                About Us
              </Nav.Link>
              <Nav.Link as={Link} href="/services">
                Services
              </Nav.Link>
              <NavDropdown
                title="Our Work"
                id="services-dropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item as={Link} href="/services/marketing">
                  Case Studies
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services/development">
                  Blog
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                href="/careers"
                className={pathname === "/careers" ? "active-link" : ""}
              >
                Careers
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/contact"
                className={pathname === "/contact" ? "active-link" : ""}
              >
                Contact Us
              </Nav.Link>
              <div className="d-flex align-items-center ">
                <Link href="/cost-calculator" passHref>
                  <Button className="quote-button">Quote Generator</Button>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Keeps space below fixed navbar */}
      <div className="navbar-spacer" style={{ height: "76px" }}></div>
    </>
  );
}
