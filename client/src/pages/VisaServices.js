import React, { useState } from "react";
import Navbar from '../components/Navbar';
import aboutBanner from '../assets/Visa.jpg';
// //tour-1/id:1
// import pench from '../assets/india/madhya-pradesh/tour-1/pench.jpg';
// import pench1 from '../assets/india/madhya-pradesh/tour-1/pench1.jpg';
// import kanha from '../assets/india/madhya-pradesh/tour-1/kanha.jpg';
// import bandhavgarh from '../assets/india/madhya-pradesh/tour-1/bandhavgaarh.jpg';
// import bhedaghat from '../assets/india/madhya-pradesh/tour-1/bhedaghat.jpg';
// //tour-2/id:2
// import indoretour from '../assets/india/madhya-pradesh/tour-2/cover.jpg';
// import indore from '../assets/india/madhya-pradesh/tour-2/indore.jpg';
// import mandu from '../assets/india/madhya-pradesh/tour-2/mandu.jpg';
// import maheshwar from '../assets/india/madhya-pradesh/tour-2/maheshwar.jpg';
// import sailani from '../assets/india/madhya-pradesh/tour-2/sailani.jpg';
//tour-3/id:3
import ukImage from '../assets/Visa.jpg';
import franceImage from '../assets/Visa.jpg';
import swissImage from '../assets/Visa.jpg';

import './India.css';
import './VisaServices.css';

export default function MadhyaPradesh() {
  const [selectedTour, setSelectedTour] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openItineraryDay, setOpenItineraryDay] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  

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
        location: selectedTour.name,  // ✅ Send tour name as location
        notes: formData.notes,
        tourName: selectedTour.name,
        tourPrice: selectedTour.price,
        tourDuration: selectedTour.duration
      }),
    });

    if (response.ok) {
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: selectedTour.name,
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



  // const handleBookNow = (tour) => {
  //   setSelectedTour(tour);
  //   setCurrentImageIndex(0);
  //   setOpenItineraryDay(null);
  //   setOpenFaqIndex(null);
  //   document.body.style.overflow = 'hidden'; // Prevent background scroll
  // };

  const closeModal = () => {
    setSelectedTour(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedTour) {
      setCurrentImageIndex((prev) => 
        prev === selectedTour.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedTour) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedTour.images.length - 1 : prev - 1
      );
    }
  };

  const [openVisaId, setOpenVisaId] = useState(null);

const toggleVisa = (id) => {
  setOpenVisaId(prev => (prev === id ? null : id));
};

  const visaCards = [
  {
    id: 1,
    country: "United Kingdom",
    flag: "",
    image: ukImage, // import this at top
    dates: null,
    note: "coming soon!",
  },
  {
    id: 2,
    country: "France",
    flag: "",
    image: franceImage,
    dates: null,
    note: "coming soon!",
  },
  {
    id: 3,
    country: "Switzerland",
    flag: "",
    image: swissImage,
    dates: null, // because it shows “coming soon!”
    note: "coming soon!",
  },
];



  return (
    <>
      <Navbar />
      <section className="about-banner-section">
        <img src={aboutBanner} alt="VISA" className="about-banner-img" />
        <div className="about-banner-overlay"></div>
        <h1 className="about-banner-heading">VISA</h1>
      </section>

      <section className="india-feature-section">
            <div className="india-feature-container">
              <div className="india-feature-text">
                <h2>Visa Biometric Services In Bhopal</h2>
                <p>
Welcome to N N Travel Hub your premier destination for UK visa services in Bhopal, Madhya Pradesh. We specialize in assisting individuals to secure permanent residency through top-notch immigration consultation services. Renowned as a leading tourist and business visa consultant, we cater to diverse travel needs. Our comprehensive services include facilitating UK tourist visas, along with visa assistance for France and Switzerland. With a commitment to excellence, we ensure travellers receive invaluable support throughout their visa application journey. Trust our expertise as the best visa agents in Bhopal for a seamless experience.               </p>
              </div>
              <div className="india-feature-image">
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
            <a href="tel:+919876543210">+91 98765 43210</a>
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
            </div>
          </section>

      <section className="tour-packages-section">
        <h2 className="packages-title">Upcoming Visa Appointment Date</h2>
        <div className="visa-card-grid">
  {visaCards.map(card => (
    <div key={card.id} className="visa-card">
      {/* Top image */}
      <div className="visa-image-wrapper">
        <img src={card.image} alt={card.country} className="visa-image" />
        <div className="visa-flag-badge">{card.flag}</div>
      </div>

      {/* Country title */}
      <h3 className="visa-country">{card.country}</h3>

      {/* Blue DATE bar */}
      <button
        className="visa-date-toggle"
        onClick={() => toggleVisa(card.id)}
      >
        <span className="plus-icon">+</span>
        <span>DATE</span>
        <span className={`chevron ${openVisaId === card.id ? 'open' : ''}`}>▾</span>
      </button>

      {/* Collapsible content */}
      <div
        className={`visa-details ${openVisaId === card.id ? 'open' : ''}`}
      >
        {card.dates ? (
          <>
            <div className="visa-table-header">
              <span>MONTH</span>
              <span>DATE</span>
            </div>
            <ul className="visa-date-list">
              {card.dates.map((d, idx) => (
                <li key={idx}>
                  <span>{d.month}</span>
                  <span>{d.date}</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="visa-note">{card.note}</p>
        )}
      </div>
    </div>
  ))}
</div>
      </section>

      {/* Tour Detail Modal */}
      {selectedTour && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>

            {/* Image Slider */}
            <div className="image-slider">
              <button className="slider-btn prev" onClick={prevImage}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <img src={selectedTour.images[currentImageIndex]} alt="Tour" />
              <button className="slider-btn next" onClick={nextImage}>
                <i className="fas fa-chevron-right"></i>
              </button>
              <div className="image-indicators">
                {selectedTour.images.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  ></span>
                ))}
              </div>
            </div>

            {/* Tour Details */}
            <div className="modal-body">
              <h2 className="modal-tour-title">{selectedTour.name}</h2>
              <p className="modal-tour-duration">{selectedTour.duration} • {selectedTour.price}</p>

              {/* About This Tour */}
              <section className="detail-section">
                <h3>About This Tour</h3>
                <p>{selectedTour.about}</p>
              </section>

              {/* Highlights */}
              <section className="detail-section">
                <h3>Tour Highlights</h3>
                <ul className="highlights-list">
                  {selectedTour.highlights.map((item, idx) => (
                    <li key={idx}>
                      <i className="fas fa-star"></i> {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Included/Excluded */}
              <section className="detail-section">
                <h3>What's Included & Excluded</h3>
                <div className="included-excluded-grid">
                  <div className="included-col">
                    <h4><i className="fas fa-check-circle"></i> Included</h4>
                    <ul>
                      {selectedTour.included.map((item, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check"></i> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="excluded-col">
                    <h4><i className="fas fa-times-circle"></i> Excluded</h4>
                    <ul>
                      {selectedTour.excluded.map((item, idx) => (
                        <li key={idx}>
                          <i className="fas fa-times"></i> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Itinerary */}
              <section className="detail-section">
                <h3>Day-by-Day Itinerary</h3>
                <div className="itinerary-list">
                  {selectedTour.itinerary.map((day, idx) => (
                    <div key={idx} className={`itinerary-item ${openItineraryDay === idx ? 'open' : ''}`}>
                      <div className="itinerary-header" onClick={() => setOpenItineraryDay(openItineraryDay === idx ? null : idx)}>
                        <div>
                          <span className="day-num">Day {day.day}</span>
                          <span className="day-title">{day.title}</span>
                        </div>
                        <i className={`fas fa-chevron-${openItineraryDay === idx ? 'up' : 'down'}`}></i>
                      </div>
                      {openItineraryDay === idx && (
                        <div className="itinerary-content">
                          <p>{day.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section className="detail-section">
                <h3>Frequently Asked Questions</h3>
                <div className="faq-list">
                  {selectedTour.faqs.map((faq, idx) => (
                    <div key={idx} className={`faq-item ${openFaqIndex === idx ? 'open' : ''}`}>
                      <div className="faq-question" onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}>
                        <span>{faq.question}</span>
                        <i className={`fas fa-chevron-${openFaqIndex === idx ? 'up' : 'down'}`}></i>
                      </div>
                      {openFaqIndex === idx && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
              {/* Enquiry Form */}{/* Enquiry & Contact Section */}
<section className="detail-section">
  <h3>Book This Tour</h3>
  <div className="enquiry-contact-grid">
    {/* Enquiry Form - Left Side */}
    <div className="enquiry-form-card">
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
            <label>Selected Tour</label>
            <input
              type="text"
              name="TourName"
              value={selectedTour.name}
              readOnly
              className="readonly-input"
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
            <a href="tel:+919876543210">+91 98765 43210</a>
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

            </div>
          </div>
        </div>
      )}
    </>
  );
}
