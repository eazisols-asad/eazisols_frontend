"use client";
import Image from "next/image";
import {
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlineCloud,
} from "react-icons/hi";
import { HiOutlineWindow } from "react-icons/hi2";
import ReuseButton from "./ReuseButton";
import { useRouter } from "next/navigation";
import techtol from "@/app/assets/techtol.png";

const services = [
  {
    icon: HiOutlineDocumentText,
    title: "Software Development",
    description: "Scalable, custom-built digital solutions",
  },
  {
    icon: HiOutlineWindow,
    title: "UI/UX Design",
    description: "Intuitive and engaging digital experiences",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Emerging Tech & Innovation",
    description: "AR/VR, blockchain, and other modern technologies",
  },
  {
    icon: HiOutlineCloud,
    title: "Cloud & DevOps",
    description: "Robust cloud infrastructure and operations",
  },
];

export default function ServicesSection() {
  const router = useRouter();
  return (
    <section
      style={{
        padding: "56px 0 32px 0",
        // backgroundImage: `url(${techtol.src})`, 
        // backgroundSize: "cover", 
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{ fontWeight: 700, color: "#3a2e5c" }}
        >
          Services overview
        </h2>
        <div className="row g-4 mb-4">
          {services.map((service, idx) => (
            <div className="col-12 col-sm-6 col-lg-3 d-flex" key={idx}>
              <div
                className="bg-white border rounded-4 shadow-sm p-4 w-100 h-100 d-flex flex-column align-items-start"
                style={{
                  minHeight: 220,
                  borderColor: "#f0f0f0",
                  boxShadow: "0 2px 12px 0 rgba(16,30,54,.04)",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px 0 rgba(16,30,54,.15)";
                  e.currentTarget.style.borderColor = "#2563eb";
                  const icon = e.currentTarget.querySelector(".service-icon");
                  if (icon) {
                    icon.style.transform = "scale(1.1) rotate(5deg)";
                    icon.style.color = "#1d4ed8";
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 12px 0 rgba(16,30,54,.04)";
                  e.currentTarget.style.borderColor = "#f0f0f0";
                  const icon = e.currentTarget.querySelector(".service-icon");
                  if (icon) {
                    icon.style.transform = "scale(1) rotate(0)";
                    icon.style.color = "#2563eb";
                  }
                }}
              >
                <div
                  className="mb-3 service-icon"
                  style={{ transition: "all 0.3s ease-in-out" }}
                >
                  <service.icon size={44} color="#2563eb" />
                </div>
                <div>
                  <div
                    className="fw-bold mb-2"
                    style={{
                      fontSize: 22,
                      color: "#23223a",
                      transition: "background-position 0.3s ease-in-out",
                      padding: "4px 8px",
                      margin: "-4px -8px",
                    }}
                  >
                    {service.title}
                  </div>
                  <div
                    className="text-muted"
                    style={{
                      fontSize: 16,
                      lineHeight: 1.6,
                      marginTop: "8px",
                    }}
                  >
                    {service.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end">
          <ReuseButton
            onClick={() => router.push("/services")}
            description1="Explore Services"
          />
        </div>
      </div>
    </section>
  );
}
