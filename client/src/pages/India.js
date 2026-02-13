import React from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import aboutBanner from '../assets/india/india-banner.jpg';
import tajMahalImg from '../assets/india/content-image.png';
import madhyaImg from '../assets/india/madhya-pradesh.jpg';
import UttarPradeshImg from '../assets/india/uttar-pradesh.jpg';
import RajasthanImg from '../assets/rajasthan.png';
import GujaratImg from '../assets/india/gujarat.jpg';
import DamanImg from '../assets/india/daman.jpg';
import MaharashtraImg from '../assets/india/maharashtra.jpg';
import HimachalImg from '../assets/india/himachal-pradesh.jpg';
import JammuImg from '../assets/india/jammu-kashmir.jpg';
import LadakhImg from '../assets/india/ladakh.jpg';
import UttarakhandImg from '../assets/india/uttarakhand.jpg';
import GoaImg from '../assets/india/goa.jpg';
import KeralaImg from '../assets/india/kerala.jpg';
import KarnatakaImg from '../assets/india/karnataka.jpg';
import TamilImg from '../assets/india/tamil-nadu.jpg';
import AndhraImg from '../assets/india/andhra-pradesh.jpg';
import AndmanImg from '../assets/india/andman-nicobar.jpg';

import './India.css';

// List of states, you can expand with all 16 like in your screenshot.
const destinations = [
  { name: "Madhya Pradesh", img: madhyaImg, tours: "", slug: "madhya-pradesh" },
  { name: "Uttar Pradesh", img: UttarPradeshImg, tours: "", slug: "uttar-pradesh" },
  { name: "Rajasthan", img: RajasthanImg, tours: "", slug: "rajasthan" },
  { name: "Gujarat", img: GujaratImg, tours: "", slug: "gujarat" },
  { name: "Daman & Diu", img: DamanImg, tours: "", slug: "daman" },
  { name: "Maharashtra", img: MaharashtraImg, tours: "", slug: "maharashtra" },
  { name: "Himachal Pradesh", img: HimachalImg, tours: "", slug: "himachal-pradesh" },
  { name: "Jammu & Kashmir", img: JammuImg, tours: "", slug: "jammu-kashmir" },
  { name: "Ladakh", img: LadakhImg, tours: "", slug: "ladakh" },
  { name: "Uttarakhand", img: UttarakhandImg, tours: "", slug: "uttarakhand" },
  { name: "Goa", img: GoaImg, tours: "", slug: "goa" },
  { name: "Kerala", img: KeralaImg, tours: "", slug: "kerala" },
  { name: "Karnataka", img: KarnatakaImg, tours: "", slug: "karnataka" },
  { name: "Tamil Nadu", img: TamilImg, tours: "", slug: "tamil-nadu" },
  { name: "Andhra Pradesh", img: AndhraImg, tours: "", slug:"andhra-pradesh" },
  { name: "Andman & Nikobar", img: AndmanImg, tours: "", slug: "andman-nicobar" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "" },
  
];

export default function India() {
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
          <section className="about-banner-section">
            <img src={aboutBanner} alt="About Us" className="india-banner-img" loading="lazy" />
            <div className="about-banner-overlay"></div>
            <h1 className="about-banner-heading">India</h1>
          </section>

          <section className="india-feature-section">
      <div className="india-feature-container">
        <div className="india-feature-text">
          <h2>Discover India</h2>
          <p>
          Traveling across India is a journey through vibrant cultures, timeless traditions, and breathtaking landscapes. Each region offers a unique story, creating experiences that are both enriching and unforgettable.
          </p>
          <p>
          Begin your exploration with iconic landmarks like the Taj Mahal in Agra, a masterpiece of architecture and emotion. Walk through the historic streets of Delhi, where ancient monuments and modern life exist side by side. Experience the royal charm of Rajasthan in cities such as Jaipur and Udaipur, known for their grand palaces, colorful markets, and rich heritage. Head south to Kerala to relax amidst peaceful backwaters, or enjoy the lively coastal atmosphere and golden beaches of Goa. Discover spiritual depth in Varanasi, where age-old rituals unfold along the sacred banks of the Ganges.
          </p>
          <p>India’s magic extends beyond its destinations into its celebrations and daily life. Festivals like Diwali, Holi, and Eid reflect the country’s unity, joy, and cultural richness. From flavorful regional cuisine and bustling bazaars to classical music and traditional dance, every moment offers something new to experience.
          </p>
          <p>With its perfect balance of tradition and modern living, India welcomes travelers with warmth and authenticity. Explore its diversity, connect with its people, and create memories that stay with you long after the journey ends.</p>
        </div>
        <div className="india-feature-image">
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

    <section className="india-destinations-section">
      <div className="india-destinations-header">
        <div className="destination-subtitle-row">
          <span className="destination-line" style={{backgroundColor:"#0072ff"}}></span>
          <span className="destination-subtitle" style={{color:"#0072ff"}}>DESTINATIONS</span>
          <span className="destination-line" style={{backgroundColor:"#0072ff"}}></span>
        </div>
        <h2 className="india-destinations-title">EXPLORE INDIA</h2>
        <p className="india-destinations-text">
            Discover India's enchanting destinations, from the tranquil seas to majestic mountains. With N N Travel Hub
        </p>
      </div>
      <div className="india-destinations-grid">
        {destinations.map((dest, i) => (
          <div className="india-dest-card" onClick={() => window.open(`/india/${dest.slug}`, '_self')} key={i}>
            <img src={dest.img} alt={dest.name} />
            <div className="india-dest-overlay">
              <span className="india-dest-name">{dest.name}</span>
              {/* <button  className="india-dest-tours"> <a href={`/india/${dest.slug}`} target="_blank" rel="noopener noreferrer" >{dest.tours}</a></button> */}
            </div>
          </div>
        ))}
      </div>
    </section>

    
    </>
  )
  
}