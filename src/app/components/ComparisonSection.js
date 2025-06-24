"use client";

import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

const tabs = ["Time", "Pricing", "Scalability"];

const timeData = [
  { name: "Our Team", value: "1.8x", color: "#0ea5e9", baseWidth: "60%" },
  { name: "No Code Agency", value: "1x", color: "#333333", baseWidth: "20%" },
  {
    name: "Traditional Agency", 
    value: "3x",
    color: "#333333",
    baseWidth: "70%",
  },
  { name: "In-House Team", value: "4x", color: "#333333", baseWidth: "90%" },
];

const scalabilityData = [
  {
    name: "Our Team",
    value: "200k Users",
    color: "#0ea5e9", 
    baseWidth: "60%",
  },
  {
    name: "No Code Agency",
    value: "25k Users",
    color: "#333333",
    baseWidth: "20%",
  },
  {
    name: "Traditional Agency",
    value: "75k Users",
    color: "#333333",
    baseWidth: "40%",
  },
  {
    name: "In-House Team",
    value: "100k Users",
    color: "#333333",
    baseWidth: "60%",
  },
];

const pricingData = [
  { name: "Our Team", value: "$45k", color: "#0ea5e9", baseWidth: "40%" },
  { name: "No Code Agency", value: "$25k", color: "#333333", baseWidth: "20%" },
  {
    name: "Traditional Agency",
    value: "$75k", 
    color: "#333333",
    baseWidth: "60%",
  },
  { name: "In-House Team", value: "$100k", color: "#333333", baseWidth: "90%" },
];

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState("Time");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  }, [activeTab]);

  const renderComparison = (data) => (
    <div className="time-comparison">
      {data.map((item, index) => (
        <div key={index} className="comparison-row">
          <div className="comparison-label">{item.name}</div>
          <div className="comparison-bar-container">
            <div
              className="comparison-bar"
              style={{
                width: isVisible ? item.baseWidth : "0%",
                backgroundColor: item.color,
                transition: "width 0.8s ease-out",
              }}
            />
            <span className="comparison-value">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="comparison-section py-5 bg-light" ref={sectionRef}>
      <Container>
        <div className="text-center mb-4">
          <p className="text-uppercase text-muted mb-1">COMPARE & CHOOSE</p>
          <h2 className="display-5 fw-bold mb-3">
            Find Your Ideal Tech Partner
          </h2>
          <p className="lead text-muted mb-4">
            Compare options to make the best choice for your business success
          </p>
        </div>

        <div className="tabs-container text-center mb-4">
          <div className="tab-buttons">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="comparison-content">
          {activeTab === "Time" && renderComparison(timeData)}
          {activeTab === "Pricing" && renderComparison(pricingData)}
          {activeTab === "Scalability" && renderComparison(scalabilityData)}
        </div>
      </Container>
    </section>
  );
}
