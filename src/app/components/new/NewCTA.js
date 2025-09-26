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
    <section
      className="d-flex justify-content-center mb-4 mt-5"
      style={{
        // background: 'linear-gradient(90deg, #418ED6 50%, #2165B1 100%, #003B8B 100%)',
        background: 'linear-gradient(90deg, #418ED6 50%, #2165B1 100%)',
        padding: "60px 0",
        maxWidth: "600px",
        margin: "0 auto",
        borderRadius: "30px", 
      }}
    >
      <Container>
        <Row className="text-center">
          <Col>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "2.5rem",
                marginBottom: "12px",
                 color: "#ffffffff !important",
              }}
            >
              Let's Get To Work!
            </h2>
            <p
              style={{
                color: "#ffffffff !important",
                fontSize: "1.1rem",
                marginBottom: "30px",
              }}
            >
              We're ready to get started on your next creative project. <br />
              All you need to do is hit the button below.
            </p>

            <Button
              variant="dark"
              className="rounded-pill d-inline-flex align-items-center mt-2 px-4 py-2"
              data-cal-link="rida-ayesha-hm81ov/secret"
              data-cal-config='{"layout":"month_view"}'
              style={{
                fontWeight: "500",
                fontSize: "1rem",
                backgroundColor: "#fff",
                border: "none",
                color :"#418ED6",
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
