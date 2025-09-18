"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react"; 

export default function NewCTA() {

    useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark", 
        styles: { branding: { brandColor: "#000000" } },
      });
    })();
  }, []);

  return (
    <section style={{ backgroundColor: "#f8f8f8", padding: "60px 0" }}>
      <Container>
        {/* Top Small Text with Contact Link */}
       

        {/* Main Heading & Description */}
        <Row className="text-center">
          <Col>
            <h2 style={{ fontWeight: 700, fontSize: "2.5rem", marginBottom: "12px" }}>
              Let's Get To Work!
            </h2>
            <p style={{ color: "#666", fontSize: "1.1rem", marginBottom: "30px" }}>
              We're ready to get started on your next creative project. <br />
              All you need to do is hit the button below.
            </p>

            <Button
                variant="dark"
                className="rounded-pill d-inline-flex align-items-center mt-4 px-4 py-2"
                data-cal-link="rida-ayesha-hm81ov/secret" 
                data-cal-config='{"layout":"month_view"}'
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  backgroundColor: "#000",
                  border: "none",
                }}
              >
                Book an appointment
                <span style={{ marginLeft: "8px", fontSize: "1.2rem" }}>➔</span>
              </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
