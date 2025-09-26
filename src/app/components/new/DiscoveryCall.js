"use client";

import Cal from "@calcom/embed-react";
import { Container } from "react-bootstrap";

export default function DiscoveryCall() {

  return (
    <section
      style={{
        backgroundColor: "#f8f8f8",
        // paddingTop: "30px",
        // paddingBottom: "30px",
      }}
    >
    <Container style={{backgroundColor: "#ffffffff",maxWidth: "1312px", borderRadius: "20px",marginTop: "70px",}}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "0.9rem",
            color: "#777",
            paddingTop: "25px",
          }}
        >
          DISCOVERY CALL
        </p>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          Let's work on your MVP together
        </h2>
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#555",
            fontSize: "1.1rem",
          }}
        >
          We only take a very limited number of clients at a time. This is because
          we are a small team and we want to give each client the best possible
          experience and keep the quality of our work the best.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            minHeight: "650px",
            borderRadius: "12px",
            overflow: "hidden",
            // boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Cal
            calLink="rida-ayesha-hm81ov/30min" 
            style={{
              width: "100%",
              height: "650px",
            }}
            config={{
              layout: "month_view",
              theme: "dark",
            }}
          />
        </div>
      </div>
      </Container>
    </section>
  );
}
