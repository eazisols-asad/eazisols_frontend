"use client";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import intouch from "@/app/assets/intouch.png";
import useAPiAuth from "../components/useApiAuth";


// export const metadata = {
//   title: "Contact Us | Eazisols",
//   description: "Get in touch with Eazisols for your next project or inquiry.",
// };

export default function ContactPage() {
   const { postData ,getData} = useAPiAuth();
  const handleSubmit = async (formData) => {
     postData(
     "/contact-us", 
      formData,
      (data)=>{
        console.log("API Success:", data);

        // navigate("/");
      },
      (error)=>{
        console.error("user error:", error);
      },

    );
    console.log(formData);
  };
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="main-heading mb-3">Contact Us</h1>
          <p className="body-text mb-4 text-muted">
            We would love to hear from you! Fill out the form and our team will
            get back to you as soon as possible.
          </p>

          <ContactForm buttonText="Sending..." onSubmit={handleSubmit} />
        </div>
        <div className="col-md-6 text-center">
          <Image
            src={intouch}
            alt="Contact Illustration"
            width={400}
            height={400}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
