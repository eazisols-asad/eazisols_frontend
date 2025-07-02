"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, LinearProgress } from "@mui/material";
import {
  FaGlobe,
  FaMobileAlt,
  FaCode,
  FaRobot,
  FaShoppingCart,
  FaPaintBrush,
  FaShieldAlt,
  FaQuestionCircle,
  FaHeartbeat,
  FaGraduationCap,
  FaTruck,
  FaUniversity,
  FaBriefcase,
  FaLightbulb,
  FaDraftingCompass,
  FaGlobeAmericas,
  FaChartLine,
  FaBolt,
  FaClock,
  FaCalendarAlt,
  FaRegEdit,
  FaMoneyBillWave,
  FaMoneyCheck,
  FaWallet,
  FaPiggyBank,
} from "react-icons/fa";
import contact from "@/app/assets/contact.png";

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    
    services: [],
    industry: [],
    otherIndustry: "",
    stage: "",
    timeline: "",
    budget: "",
    description: "",
    fullName: "",
    email: "",
    company: "",
    phone: "",
    file: null,
  });
  console.log(formData);

  const servicesList = [
    { id:1 ,label: "Website", icon: <FaGlobe size={32} /> },
    { id:2 ,label: "Mobile App", icon: <FaMobileAlt size={32} /> },
    { id:3 ,label: "Custom Software", icon: <FaCode size={32} /> },
    { id:4 ,label: "Automation", icon: <FaRobot size={32} /> },
    { id:5 ,label: "E-commerce", icon: <FaShoppingCart size={32} /> },
    { id:6 ,label: "Design (UI/UX)", icon: <FaPaintBrush size={32} /> },
    { id:7 ,label: "QA / DevOps", icon: <FaShieldAlt size={32} /> },
    { id:8 ,label: "Not Sure Yet", icon: <FaQuestionCircle size={32} /> },
  ];
  const industryList = [
    { id:1 , label: "Healthcare", icon: <FaHeartbeat size={32} /> },
    { id:2 ,label: "E-commerce", icon: <FaShoppingCart size={32} /> },
    { id:3 ,label: "Fintech", icon: <FaUniversity size={32} /> },
    { id:4 ,label: "Education", icon: <FaGraduationCap size={32} /> },
    { id:5 ,label: "Logistics", icon: <FaTruck size={32} /> },
    { id:6 ,label: "SaaS", icon: <FaBriefcase size={32} /> },
    { id:7 ,label: "Other", icon: <FaRegEdit size={32} /> },
  ];
  const toggleService = (label) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(label)
        ? prev.services.filter((s) => s !== label)
        : [...prev.services, label],
    }));
  };

  const handleNext = () => {
    if (step === 0 && formData.services.length === 0) {
      alert("Please select at least one service.");
      return;
    }
    if (step === 1 && formData.industry === "") {
      alert("Please select your industry.");
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };
  return (
    <>
      <div
        className="hero-background py-5"
        style={{
          backgroundImage: `url(${contact.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "250px",
          marginTop: "-80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="container "
          style={{
            paddingTop: "80px",
            color: "white",
          }}
        >
          <h1 className="main-heading text-white">Get a Quick Estimate</h1>
        </div>
      </div>
      <Container className="py-5">
        {/* MUI Progress Bar */}
        <LinearProgress
          variant="determinate"
          value={(step / 7) * 100}
          sx={{ height: 10, borderRadius: 5, mb: 4 }}
        />

        {step === 0 && (
          <>
            <h2 className="text-center fw-bold mb-4">
              What can we help you build?
            </h2>
            <p className="text-center text-muted mb-4">
              Select one or more services
            </p>

            <Row className="g-4 justify-content-center">
              {servicesList.map((item, idx) => {
                const isSelected = formData.services.includes(item.label);
                return (
                  <Col key={idx} xs={6} sm={4} md={3} lg={2}>
                    {/* <Col key={idx} xs={6} sm={6} md={3} lg={3}> */}
                    <div
                      className={` bg-white rounded-4 d-flex align-items-center justify-content-center flex-column p-3 h-100 shadow-sm ${
                        isSelected ? "border border-primary bg-light" : "border"
                      }`}
                      style={{
                        minHeight: "120px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onClick={() => toggleService(item.label)}
                    >
                      <div className="mb-2 text-primary">{item.icon}</div>
                      <small className="fw-medium text-muted text-center">
                        {item.label}
                      </small>
                    </div>
                  </Col>
                );
              })}
            </Row>

            <div className="text-end mt-5">
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Next
              </Button>
            </div>
          </>
        )}
        {/* step 2 */}
        {step === 1 && (
          <>
            {/* ✅ New Step 2 Added */}
            <h2 className="text-center fw-bold mb-4">
              What industry are you in?
            </h2>
            <p className="text-center text-muted mb-4">Choose your industry</p>

            <Row className="g-4 justify-content-center">
              {industryList.map((item, idx) => {
                const isSelected = formData.industry === item.label;
                return (
                  <Col key={idx} xs={6} sm={4} md={3} lg={2}>
                    <div
                      className={` bg-white rounded-4 d-flex align-items-center justify-content-center flex-column p-3 h-100 shadow-sm ${
                        isSelected ? "border border-primary bg-light" : "border"
                      }`}
                      style={{
                        minHeight: "120px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          industry: item.label,
                          otherIndustry: "",
                        }))
                      }
                    >
                      <div className="mb-2 text-primary">{item.icon}</div>
                      <small className="fw-medium text-muted text-center">
                        {item.label}
                      </small>
                    </div>
                  </Col>
                );
              })}
            </Row>

            {/* Show text box if "Other" is selected */}
            {formData.industry === "Other" && (
              <div className="mt-4 text-center">
                <input
                  type="text"
                  placeholder="Please specify your industry"
                  value={formData.otherIndustry}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      otherIndustry: e.target.value,
                    }))
                  }
                  className="form-control mx-auto"
                  style={{ maxWidth: 400 }}
                />
              </div>
            )}

            <div className="d-flex justify-content-between mt-5">
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Next
              </Button>
            </div>
          </>
        )}
        {/* 3rd step */}
        {step === 2 && (
          <>
            <h2 className="text-center fw-bold mb-4">What stage are you at?</h2>
            <p className="text-center text-muted mb-4">
              Choose the current state of your project
            </p>

            <Row className="g-4 justify-content-center">
              {[
                { label: "I have an idea", icon: <FaLightbulb size={32} /> },
                {
                  label: "I have wireframes / mockups",
                  icon: <FaDraftingCompass size={32} />,
                },
                {
                  label: "I have a live app / website",
                  icon: <FaGlobeAmericas size={32} />,
                },
                {
                  label: "I want to scale / improve an existing product",
                  icon: <FaChartLine size={32} />,
                },
              ].map((item, idx) => {
                const isSelected = formData.stage === item.label;
                return (
                  <Col key={idx} xs={6} sm={6} md={3} lg={3}>
                    <div
                      className={` bg-white rounded-4 d-flex align-items-center justify-content-center flex-column p-3 h-100 shadow-sm ${
                        isSelected ? "border border-primary bg-light" : "border"
                      }`}
                      style={{
                        minHeight: "120px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          stage: item.label,
                        }))
                      }
                    >
                      <div className="mb-2 text-primary">{item.icon}</div>
                      <small className="fw-medium text-muted text-center">
                        {item.label}
                      </small>
                    </div>
                  </Col>
                );
              })}
            </Row>

            <div className="d-flex justify-content-between mt-5">
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Next
              </Button>
            </div>
          </>
        )}
        {/* 4th step */}
        {step === 3 && (
          <>
            <h2 className="text-center fw-bold mb-4">
              What's your ideal timeline?
            </h2>
            <p className="text-center text-muted mb-4">
              Select an estimated project timeline
            </p>

            <Row className="g-4 justify-content-center">
              {[
                { label: "ASAP", icon: <FaBolt size={32} /> },
                { label: "1–2 months", icon: <FaClock size={32} /> },
                { label: "3–6 months", icon: <FaCalendarAlt size={32} /> },
                {
                  label: "Flexible / Not sure",
                  icon: <FaQuestionCircle size={32} />,
                },
              ].map((item, idx) => {
                const isSelected = formData.timeline === item.label;
                return (
                  <Col key={idx} xs={6} sm={6} md={3} lg={3}>
                    <div
                      className={` bg-white rounded-4 d-flex align-items-center justify-content-center flex-column p-3 h-100 shadow-sm ${
                        isSelected ? "border border-primary bg-light" : "border"
                      }`}
                      style={{
                        minHeight: "120px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          timeline: item.label,
                        }))
                      }
                    >
                      <div className="mb-2 text-primary">{item.icon}</div>
                      <small className="fw-medium text-muted text-center">
                        {item.label}
                      </small>
                    </div>
                  </Col>
                );
              })}
            </Row>

            <div className="d-flex justify-content-between mt-5">
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Next
              </Button>
            </div>
          </>
        )}
        {/* 5th step */}
        {step === 4 && (
          <>
            <h2 className="text-center fw-bold mb-4">
              What's your estimated budget?
            </h2>
            <p className="text-center text-muted mb-4">
              Select your approximate project budget
            </p>

            <Row className="g-4 justify-content-center">
              {[
                { label: "<$5K", icon: <FaMoneyBillWave size={32} /> },
                { label: "$5K-15K", icon: <FaMoneyCheck size={32} /> },
                { label: "$15K-30K", icon: <FaWallet size={32} /> },
                { label: "$30K+", icon: <FaPiggyBank size={32} /> },
                {
                  label: "I'm not sure yet",
                  icon: <FaQuestionCircle size={32} />,
                },
              ].map((item, idx) => {
                const isSelected = formData.budget === item.label;
                return (
                  <Col key={idx} xs={6} sm={6} md={3} lg={3}>
                    <div
                      className={` bg-white rounded-4 d-flex align-items-center justify-content-center flex-column p-3 h-100 shadow-sm ${
                        isSelected ? "border border-primary bg-light" : "border"
                      }`}
                      style={{
                        minHeight: "120px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          budget: item.label,
                        }))
                      }
                    >
                      <div className="mb-2 text-primary">{item.icon}</div>
                      <small className="fw-medium text-muted text-center">
                        {item.label}
                      </small>
                    </div>
                  </Col>
                );
              })}
            </Row>

            <div className="d-flex justify-content-between mt-5">
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Next
              </Button>
            </div>
          </>
        )}
        {/* step 6 */}
        {step === 5 && (
          <>
            <h2 className="text-center fw-bold mb-4">
              Tell us about your project
            </h2>
            <p className="text-center text-muted mb-4">
              A brief description of your idea, challenge, or goal.
            </p>

            <div className="d-flex justify-content-center">
              <textarea
                className="form-control"
                rows={6}
                placeholder="Share any relevant details about your project..."
                value={formData.description || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                style={{ maxWidth: 600 }}
              />
            </div>

            <div className="d-flex justify-content-between mt-5">
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Next
              </Button>
            </div>
          </>
        )}
        {/* Step 7 */}
        {step === 6 && (
          <>
            <h2 className="text-center fw-bold mb-4">Your contact details</h2>

            <div className="mx-auto" style={{ maxWidth: 600 }}>
              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label fw-medium">Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.fullName || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-medium">Email *</label>
                <input
                  type="email"
                  className="form-control"
                  value={formData.email || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              {/* Company Name */}
              <div className="mb-3">
                <label className="form-label fw-medium">
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.company || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className="form-label fw-medium">Phone (optional)</label>
                <input
                  type="tel"
                  className="form-control"
                  value={formData.phone || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                />
              </div>

              {/* Upload File */}
              <div className="mb-3">
                <label className="form-label fw-medium">
                  Upload project brief / file (optional)
                </label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      file: e.target.files[0],
                    }))
                  }
                />
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  if (!formData.fullName || !formData.email) {
                    alert("Full Name and Email are required.");
                    return;
                  }
                  handleNext();
                }}
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Next
              </Button>
            </div>
          </>
        )}
        {/* Step 8 */}
        {step === 7 && (
          <div className="text-center py-5">
            <h2 className="fw-bold mb-3">Thanks!</h2>
            <p className="text-muted mb-4">
              We'll get back to you within 1 business day with a response
              tailored to your project.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button
                variant="outlined"
                href="/"
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Back to Home
              </Button>
              <Button
                variant="contained"
                href="/career"
                sx={{ paddingX: 4, paddingY: 1.5 }}
              >
                Explore Our Work
              </Button>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
