'use client';

import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import '../globals.css'
export default function ContactForm({ onSubmit, buttonText = "Please wait..." }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message:'',
    company_name: '',
    subject: "General Inquiry",
  });

  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setLoading(true);
    
    if (onSubmit) {
      await onSubmit(formData);
    }
    
    setLoading(false);
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company_name: '',
      message: ''
    });
    setValidated(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white rounded-3  contact-form-box">
      <h3 className="mb-2">Drop us a Message</h3>
      <p className="text-muted">Drop your details, we will get in touch with you soon.</p>
      
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small-label">Name *</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small-label">Email *</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-1">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small-label">Phone Number *</Form.Label>
              <PhoneInput
                country={'us'}
                value={formData.phone}
                onChange={phone => setFormData(prev => ({ ...prev, phone }))}
                inputClass="form-control"
                containerClass="phone-input"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small-label">Company Name</Form.Label>
              <Form.Control
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder="Your Company Name"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label className="small-label">Product/Idea Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write..."
          />
        </Form.Group>

       

        <Button 
          type="submit" 
          variant="dark" 
          className="w-100 custom-submit-button"
          disabled={loading}

        >
          {loading ? buttonText : 'Submit'}
        </Button>
      </Form>
    </div>
  );
} 