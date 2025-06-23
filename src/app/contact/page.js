import ContactForm from '../components/ContactForm';
import Image from 'next/image';
import contactIllustration from '../../../public/contact-illustration.svg';

export const metadata = {
  title: 'Contact Us | Eazisols',
  description: 'Get in touch with Eazisols for your next project or inquiry.',
};

export default function ContactPage() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="mb-3">Contact Us</h1>
          <p className="mb-4 text-muted">We would love to hear from you! Fill out the form and our team will get back to you as soon as possible.</p>
          <ContactForm buttonText="Sending..." />
        </div>
        <div className="col-md-6 text-center">
          <Image src={contactIllustration} alt="Contact Illustration" width={400} height={400} style={{maxWidth: '100%', height: 'auto'}} />
        </div>
      </div>
    </section>
  );
} 