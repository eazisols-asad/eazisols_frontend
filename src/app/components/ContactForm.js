'use client';

import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

export default function ContactForm({ onSubmit, buttonText = "Please wait..." }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    communicationMethod: 'Email',
    description: ''
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
      communicationMethod: 'Email',
      description: ''
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
    <div className="bg-white rounded-3 shadow-sm p-4 contact-form-box">
      <h3 className="mb-4">Drop us a Message</h3>
      <p className="text-muted mb-4">Drop your details, we will get in touch with you soon.</p>
      
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
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

        <Row className="mb-3">
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
              <Form.Label className="small-label">Preferred Medium of Communication</Form.Label>
              <Form.Select
                name="communicationMethod"
                value={formData.communicationMethod}
                onChange={handleChange}
              >
                <option value="Email">Email</option>
                <option value="Call">Call</option>
                <option value="WhatsApp">WhatsApp</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label className="small-label">Product/Idea Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write..."
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Text className="text-muted small">
            By submitting this form, you agree to be contacted by our team.
          </Form.Text>
        </Form.Group>

        <Button 
          type="submit" 
          variant="dark" 
          className="w-100 py-2"
          disabled={loading}
        >
          {loading ? buttonText : 'Submit'}
        </Button>
      </Form>
    </div>
  );
} 