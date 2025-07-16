"use client";
import Image from "next/image";
import ReuseButton from "./ReuseButton";
import { useRouter } from "next/navigation";

export default function Hsection() {
  const router = useRouter();

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Text */}
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <p style={{ color: "#2563eb", fontWeight: 500, marginBottom: 10 }}>
              Custom Software Development
            </p>
            <h1 style={{ fontWeight: 800, fontSize: "2.5rem", lineHeight: 1.2 }}>
              Leading Custom Software <br />
              Development & Consulting <br />
              Company
            </h1>
            <p
              style={{
                marginTop: 20,
                color: "#6b7280",
                fontSize: 16,
                lineHeight: 1.6,
              }}
            >
              Let's transform your business for the better with top-tier Custom
              Software Development. Partner with Solutionsloft's full stack
              developers to achieve diabolically faster code efficiency and
              product performance!
            </p>

            <div className="mt-4">
              <ReuseButton
                description1="Let's Talk"
                onClick={() => router.push("/contact")}
              />
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div
              style={{
                width: 320,
                height: 320,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/images/showcase-image.png" 
                alt="Showcase"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
