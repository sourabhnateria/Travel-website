import React from 'react';
import { useState } from 'react';
import worldBanner from '../assets/world/world-banner.jpg'
import tajMahalImg from '../assets/world/content-image.png';
import madhyaImg from '../assets/world/dubai.jpg';
import RajasthanImg from '../assets/world/singapore.jpg';
import IndonesiaImg from '../assets/world/indonesia.jpg';
import ThailandImg from '../assets/world/thailand.jpg';
import MalaysiaImg from '../assets/world/malaysia.jpg';
import SrilankaImg from '../assets/world/srilanka.jpg';
import './World.css';



const destinations = [
  
  { name: "Dubai", img: madhyaImg, tours: "",slug: "dubai" },
  { name: "Singapore", img: RajasthanImg, tours: "",slug: "singapore" },
  { name: "Indonesia", img: IndonesiaImg, tours: "",slug: "indonesia" },
  { name: "Thailand", img: ThailandImg, tours: "",slug: "thailand" },
  { name: "Malaysia", img: MalaysiaImg, tours: "",slug: "malaysia" },
  { name: "Srilanka", img: SrilankaImg, tours: "",slug: "srilanka" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  
];



export default function World() {
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
  return(
      <>
            <section className="world-banner-section">
              <img src={worldBanner} alt="About Us" className="world-banner-img" />
              <div className="world-banner-overlay"></div>
              <h1 className="world-banner-heading">World</h1>
            </section>

            <section className="world-feature-section">
                  <div className="world-feature-container">
                    <div className="world-feature-text">
                      <h2>International Travel Experiences</h2>
                      <p>
                      Step beyond borders and explore the world with N N Travel Hub. We design international travel experiences that combine comfort, convenience, and unforgettable moments—so you can focus on enjoying your journey while we handle the details.
                      </p>
                      <p>
                      Our international tour offerings include complete travel support, from hotel arrangements and local transportation to flight bookings and visa assistance. Whether you are planning a relaxing getaway or a culturally rich adventure, we create well-balanced itineraries tailored to your preferences.
                      </p>
                      <p>
                        Discover the modern charm and vibrant lifestyle of destinations like Dubai, relax on the tropical beaches of Thailand, or explore the cultural heritage and natural beauty of Indonesia and Vietnam. Experience the perfect blend of tradition and innovation in Malaysia, admire the scenic landscapes and alpine villages of Switzerland, or enjoy the coastal beauty and historical wonders of Sri Lanka.
                      </p>
                      <p>For those seeking a modern urban escape, Singapore offers a unique mix of futuristic architecture, green spaces, and diverse cultures—all seamlessly connected.</p>
                      <p>No matter where you choose to travel, N N Travel Hub ensures smooth planning, reliable services, and thoughtfully crafted journeys. Travel the world with confidence and create lasting memories through experiences designed just for you.</p>
                    </div>
                    <div className="world-feature-image">
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
                      {/* <img src={tajMahalImg} alt="Taj Mahal" /> */}
                    </div>
                  </div>
                </section>
            
                <section className="world-destinations-section">
                  <div className="world-destinations-header">
                    <div className="destination-subtitle-row">
                      <span className="destination-line"></span>
                      <span className="destination-subtitle">INTERNATIONAL</span>
                      <span className="destination-line"></span>
                    </div>
                    <h2 className="world-destinations-title">EXPLORE WORLD</h2>
                    <p className="world-destinations-text">
                        Explore stunning international destinations, from peaceful coastlines to breathtaking mountain landscapes, with N N Travel Hub.
                    </p>
                  </div>
                  <div className="world-destinations-grid">
                    {destinations.map((dest, i) => (
                      <div className="world-dest-card" onClick={() => window.open(`/international/${dest.slug}`, '_self')} key={i}>
                        <img src={dest.img} alt={dest.name} loading="lazy" />
                        <div className="world-dest-overlay">
                          <span className="world-dest-name">{dest.name}</span>
                          <button className="world-dest-tours"><a href={`/international/${dest.slug}`} rel="noopener noreferrer" >{dest.tours}</a></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
      </>
    )
}