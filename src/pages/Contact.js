import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'booking', label: 'Booking Support' },
    { value: 'destination', label: 'Destination Information' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'feedback', label: 'Feedback & Suggestions' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Call us Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['info@tourismexplorer.com', 'support@tourismexplorer.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: '📍',
      title: 'Address',
      details: ['123 Travel Street', 'Adventure City, AC 12345'],
      description: 'Visit our office Mon-Fri, 9AM-5PM'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: ['Available on our website'],
      description: 'Instant support Mon-Sun, 8AM-10PM'
    }
  ];

  const faqs = [
    {
      question: 'How do I book a destination?',
      answer: 'You can add destinations to your visit list and contact us for booking assistance. We\'ll help you create a customized itinerary.'
    },
    {
      question: 'What is included in your travel packages?',
      answer: 'Our packages typically include accommodation, guided tours, transportation, and selected meals. Specific inclusions vary by destination.'
    },
    {
      question: 'Can I modify my travel dates?',
      answer: 'Yes, we offer flexible booking options. Modifications are subject to availability and may incur additional fees depending on the timing.'
    },
    {
      question: 'Do you offer travel insurance?',
      answer: 'We partner with leading insurance providers to offer comprehensive travel insurance options for your peace of mind.'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="section-title">Get in Touch</h1>
          <p className="hero-subtitle">
            Have questions about your next adventure? We're here to help make your travel dreams come true.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="card form-container">
                <h2>Send us a Message</h2>
                {submitted ? (
                  <div className="success-message">
                    <div className="success-icon">✅</div>
                    <h3>Thank you for contacting us!</h3>
                    <p>We've received your message and will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="inquiryType">Inquiry Type</label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                      >
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="6"
                        required
                        placeholder="Tell us about your travel plans, questions, or how we can help you..."
                      />
                    </div>

                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card contact-method">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="contact-detail">{detail}</p>
                      ))}
                      <p className="contact-description">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="card office-hours">
                <h3>Office Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="card faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for travel tips, destination highlights, and exclusive offers.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
