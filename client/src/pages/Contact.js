// import React from 'react';
import React, { useState } from "react";
// import Navbar from '../../components/Navbar';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,  // ✅ Send tour name as location
          notes: formData.notes,
          // tourName: selectedTour.name,
          // tourPrice: selectedTour.price,
          // tourDuration: selectedTour.duration
        }),
      });
  
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          notes: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit enquiry. Please try again.');
    }
  };
  
  return (
    <>

    <section className="about-banner-section">
            <iframe
                              width="100%"
                              height="400"
                              style={{ border: 0 }}
                              title="bhopal Location Map"
                              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&q=bhopal,madhyapradesh&zoom=12`}
                              allowFullScreen
                              className="about-banner-img"
                            />
            <div className="about-banner-overlay"></div>
            {/* <h1 className="about-banner-heading"></h1> */}
          </section>
    <section className="detail-section">
  {/* <h3>Book This Tour</h3> */}
  <div className="enquiry-contact-grid">
    {/* Enquiry Form - Left Side */}
    <div className="enquiry-form-card" style={{width:`auto`}}>
      <h4>Send Enquiry</h4>
      {formSubmitted ? (
        <div className="success-message">
          <i className="fas fa-check-circle"></i>
          <h5>Thank You!</h5>
          <p>We have received your enquiry. Our team will get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="enquiry-form">
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Your full name"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              placeholder="+91 XXXXX XXXXX"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleFormChange}
              placeholder="Location you are interested in"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Additional Requirements</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleFormChange}
              placeholder="Tell us about any special requirements, preferences, or questions..."
              rows="4"
            ></textarea>
          </div>
          
          <button type="submit" className="submit-enquiry-btn">
            <i className="fas fa-paper-plane"></i> Send Enquiry
          </button>
        </form>
      )}
    </div>

    {/* Contact Information - Right Side */}
    <div className="contact-info-card">
      <h4>Contact Information</h4>
      <div className="contact-details">
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span className="contact-label">Email</span>
            <a href="mailto:info@nntravelhub.com">info@nntravelhub.com</a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div className="contact-text">
            <span className="contact-label">Phone</span>
            <a href="tel:+919876543210">+91 7354251333</a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span className="contact-label">Website</span>
            <a href="https://nntravelhub.com" target="_blank" rel="noopener noreferrer">
              www.nntravelhub.com
            </a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="contact-text">
            <span className="contact-label">Address</span>
            <p>N N Travel Hub, Bhopal<br/>Madhya Pradesh, India</p>
          </div>
        </div>
      </div>
      
      <div className="contact-hours">
        <h5><i className="fas fa-clock"></i> Business Hours</h5>
        <p>Monday - Saturday: 9:00 AM - 7:00 PM<br/>Sunday: 10:00 AM - 5:00 PM</p>
      </div>
      
      <div className="social-links">
        <h5>Follow Us</h5>
        <div className="social-icons">
          <a href="facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
          {/* <a href="#" target="_blank"><i className="fab fa-whatsapp"></i></a> */}
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}