"use client";
import { Container, Row, Col } from "react-bootstrap";

export default function ServicesSection() {
  const services = [
    {
      icon: "👤",
      title: "UX Design",
      description:
        "Crafting seamless user experiences with elegant and intuitive design.",
      bgColor: "#28a745", // Green
    },
    {
      icon: "T",
      title: "Branding",
      description:
        "Crafting Identity, Inspiring Connection: Your Brand’s Unique Story.",
      bgColor: "#dc3545", // Red
    },
    {
      icon: "⚑",
      title: "3D Design",
      description:
        "Creating immersive worlds through intricate and innovative designs.",
      bgColor: "#007bff", // Blue
    },
    {
      icon: "T",
      title: "Illustration",
      description:
        "Capturing Moments: A Visual Journey Through Time and Emotion.",
      bgColor: "#6f42c1", // Purple
    },
  ];

  return (
    <section
      className="py-5 text-center"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3">Our Services</h2>
        <p className="text-muted mb-5">
          Tailored Solutions for Your Success, Elevate Your Experience with Our
          Exceptional and Comprehensive Services Today
        </p>

        <div className="row g-1">
          {services.map((service, idx) => (
            <div
              className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center"
              key={idx}
            >
              <div
                className="card h-100 border-0 shadow-sm p-4"
                style={{
                  maxWidth: "285px",
                  width: "100%",
                  minHeight: "250px",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.backgroundColor = "#f9f9f9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 .125rem .25rem rgba(0,0,0,.075)";
                  e.currentTarget.style.backgroundColor = "#fff";
                }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: service.bgColor,
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {service.icon}
                </div>
                <h5 className="fw-semibold">{service.title}</h5>
                <p className="mt-3 text-muted small">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end mt-3">
          <button className="btn custom-view-btn rounded-pill mt-2">
            View more
          </button>
        </div>
      </div>
    </section>
  );
}
