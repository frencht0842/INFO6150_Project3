import React, { useState, useEffect } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    membershipLevel: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!email.trim()) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    if (email.length > 254) {
      return 'Email address is too long';
    }
    if (email.split('@')[0].length > 64) {
      return 'Local part of email is too long';
    }
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    const emailError = validateEmail(formData.email);
    if (emailError) {
      newErrors.email = emailError;
    }

    if (!formData.membershipLevel) {
      newErrors.membershipLevel = 'Please select a membership level';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Real-time validation for email field
    if (name === 'email' && touched.email) {
      const emailError = validateEmail(value);
      setErrors(prev => ({
        ...prev,
        email: emailError
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate on blur
    if (name === 'email') {
      const emailError = validateEmail(formData.email);
      setErrors(prev => ({
        ...prev,
        email: emailError
      }));
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="card">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-input ${errors.name && touched.name ? 'form-input-error' : ''}`}
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your full name"
          />
          {errors.name && touched.name && <div className="form-error">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-input ${errors.email && touched.email ? 'form-input-error' : ''}`}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="email-hint"
            placeholder="your.email@example.com"
          />
          {errors.email && touched.email && <div className="form-error">{errors.email}</div>}
          <div id="email-hint" className="form-hint">
            Please enter a valid email address (e.g., example@domain.com)
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="membershipLevel" className="form-label">Membership Level:</label>
          <select
            id="membershipLevel"
            name="membershipLevel"
            className={`form-input ${errors.membershipLevel && touched.membershipLevel ? 'form-input-error' : ''}`}
            value={formData.membershipLevel}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Please select a level</option>
            <option value="platinum">Platinum</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
          </select>
          {errors.membershipLevel && touched.membershipLevel && <div className="form-error">{errors.membershipLevel}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            className={`form-input ${errors.message && touched.message ? 'form-input-error' : ''}`}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="4"
            placeholder="Type your message here..."
          />
          {errors.message && touched.message && <div className="form-error">{errors.message}</div>}
        </div>
        <button type="submit" className="button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;