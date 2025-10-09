import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[\d\s\-+()]{10,}$/;
    return re.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - Send email
      setSending(true);
      setSendError('');

      // EmailJS configuration
      const serviceId = 'YOUR_SERVICE_ID'; // You'll need to replace this
      const templateId = 'YOUR_TEMPLATE_ID'; // You'll need to replace this
      const publicKey = 'YOUR_PUBLIC_KEY'; // You'll need to replace this

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'abelcaluseri@yahoo.com'
      };

      // Send email using EmailJS
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setSubmitted(true);
          setSending(false);
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          // Reset submitted message after 5 seconds
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          setSending(false);
          setSendError('Failed to send message. Please try again or email us directly at abelcaluseri@yahoo.com');
          setTimeout(() => {
            setSendError('');
          }, 7000);
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact fade-in">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="page-description">
          Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Address</h3>
                <p>123 Volleyball Avenue<br />Sports City, VB 12345</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>info@volleyballworld.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper card">
            <h2>Send us a Message</h2>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully to abelcaluseri@yahoo.com
              </div>
            )}
            {sendError && (
              <div className="error-message-box">
                ✗ {sendError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="John Doe"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="john.doe@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                  placeholder="What is this about?"
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  rows="5"
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-submit" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            <p className="email-note">
              <small>Email will be sent to: <strong>abelcaluseri@yahoo.com</strong></small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
