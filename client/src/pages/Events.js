import React from 'react';
import { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import eventBanner from '../assets/events/event_cover.jpg'; // Use your actual filename!
import birthday from '../assets/events/birthday.jpg'; // Use your actual filename!
import gettogether from '../assets/events/gettogether.jpg'; // Use your actual filename!
import corporate from '../assets/events/corporate.jpg';
import wedding from '../assets/events/wedding.jpg';
import './Events.css';

export default function Event() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        event: '',
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
              event: formData.event,  // ✅ Send tour name as event
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
              event: '',
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
      {/* <Navbar /> */}

      <section className="event-banner-section">
        <img src={eventBanner} alt="Events" className="event-banner-img" />
        <div className="event-banner-overlay"></div>
        <h1 className="event-banner-heading">Events</h1>
      </section>

      <section className="event-section-home" id="event">
        <div className="event-home-container">
         
          {/* Right Column - Content */}
          <div className="event-content-column">
            <div className="event-content">
              
              {/* Section Header */}
              <div className="event-header">
                
                <h2 className="event-title">N N Travel Hub: Event Management Services in Bhopal</h2>
              </div>

              {/* Description */}
              <div className="event-description" style={{textAlign:"center"}}   >
                <p>
                   N N Travel Hub offers reliable and well-planned event management services in Bhopal, Madhya Pradesh, helping individuals and organizations bring their events to life with ease and professionalism. We assist in planning and coordinating a wide range of events, ensuring every detail is handled smoothly.
                </p>
                <p>
From corporate meetings and conferences to private celebrations, group tours, destination events, and special occasions, our team works closely with clients to understand their requirements and deliver tailored solutions. We support venue coordination, travel arrangements, accommodation planning, transportation, and on-ground logistics to ensure a seamless experience for guests.
</p>
                <p>
With a strong focus on organization, timely execution, and personalized service, N N Travel Hub aims to make every event stress-free and memorable. Whether it’s a small gathering or a large-scale event, we provide dependable support to help your event run successfully from start to finish.
</p>
                
              </div>

              

            </div>
          </div>

        </div>
      </section>

      <section className="event-section-home" id="event">
        <div className="event-section-container" >
          <h2 className="event-title">Birthday Party in Bhopal</h2>
          <div className="birthday">
            <p>Celebrate in style with N N Travel Hub, a trusted birthday event planner in Bhopal, Madhya Pradesh, known for delivering elegant and well-curated celebrations for both children and adults. We specialize in luxury birthday event management, offering customized themes, premium décor styling, venue selection, entertainment coordination, and complete event execution. From intimate home gatherings to grand celebrations at banquet halls, lawns, or poolside venues, our team ensures flawless planning and sophisticated presentation. <br/> With attention to detail, high-quality setups, and seamless coordination, N N Travel Hub transforms birthdays into memorable, stress-free experiences. If you are looking for the best birthday event management company in Bhopal, we are here to create a celebration that truly reflects your style and vision.</p>
            
            <img src={birthday} alt="Birthday Event" className="event-birthday-image" />
          </div>
        {/* </div> */}
        {/* <div style={{background:'#dada' , margin:`0 40px 0 40px`, borderRadius:`20px`}}> */}
          <h2 className="event-title">Get together Event Party in Bhopal</h2>
          <div className="gettogether" >
            <p>Host stylish and stress-free celebrations with N N Travel Hub, a trusted get-together event planner in Bhopal, Madhya Pradesh. Whether it’s a friends’ reunion, family gathering, or private party, we specialize in planning and executing elegant events with seamless coordination. From venue selection and theme décor to catering, DJ setups, live entertainment, and invitation support, we manage every detail with precision. Our team also assists with customized menus and transportation arrangements to ensure complete guest comfort.<br/> If you are searching for a professional party planner in Bhopal to create memorable and well-organized get-together events, N N Travel Hub delivers premium experiences tailored to your style and budget.</p>
            <img src={gettogether} alt="Birthday Event" className="event-birthday-image" />
          </div>
        {/* </div>
        <div style={{background:'#dada' , margin:`0 40px 0 40px`, borderRadius:`20px`}}> */}
          <h2 className="event-title">Leading Corporate Event Management Company in Bhopal</h2>
          <div className="corporateevent">
            <p>N N Travel Hub is a trusted name for corporate event management in Bhopal, Madhya Pradesh, delivering professionally curated business events designed to inspire, engage, and strengthen teams. We specialize in organizing conferences, seminars, product launches, corporate dinners, board meetings, trade shows, team-building activities, and incentive programs with precision and sophistication.<br/> From strategic planning and venue sourcing to branding, décor, audio-visual setup, guest coordination, and hospitality management, our team ensures seamless execution at every stage. We focus on aligning each event with your company’s objectives, brand identity, and budget while maintaining the highest standards of professionalism.<br/> Whether you are hosting a high-level executive meeting or a large-scale corporate conference, N N Travel Hub provides structured planning, creative concepts, and flawless coordination. If you are searching for the best corporate event planner in Bhopal, we deliver impactful business events that leave a lasting impression.</p>
            <img src={corporate} alt="Birthday Event" className="event-birthday-image" />
          </div>
        {/* </div>
        <div style={{background:'#dada' , margin:`0 40px 0 40px`, borderRadius:`20px`}}> */}
          <h2 className="event-title">Luxury Wedding & Destination Wedding Planner in Bhopal</h2>
          <div className="wedding">
            <p>Celebrate your special day with elegance through N N Travel Hub, a trusted wedding planner in Bhopal, Madhya Pradesh. We specialize in traditional and destination weddings, offering complete wedding event management from venue selection and décor styling to catering, entertainment, guest hospitality, and logistics.<br/> Our team focuses on personalized themes, seamless coordination, and premium execution to ensure a stress-free and memorable celebration. If you are looking for a professional destination wedding planner in Bhopal, N N Travel Hub is here to turn your dream wedding into reality.</p>
            <img src={wedding} alt="Birthday Event" className="event-birthday-image" />
          </div>
        </div>
      </section>
      <section className='contact-info'>
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
                    <label>Event *</label>
                    <input
                      type="text"
                      name="event"
                      value={formData.event}
                      onChange={handleFormChange}
                      placeholder="Event you are interested in"
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
