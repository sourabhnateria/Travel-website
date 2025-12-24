import React, { useState } from "react";
import Navbar from '../../components/Navbar';
import aboutBanner from '../../assets/india/Uttar-Pradesh/up_cover_photo.jpg';
//tour-1/id:1
import pench from '../../assets/india/madhya-pradesh/tour-1/pench.jpg';
import pench1 from '../../assets/india/madhya-pradesh/tour-1/pench1.jpg';
import kanha from '../../assets/india/madhya-pradesh/tour-1/kanha.jpg';
import bandhavgarh from '../../assets/india/madhya-pradesh/tour-1/bandhavgaarh.jpg';
import bhedaghat from '../../assets/india/madhya-pradesh/tour-1/bhedaghat.jpg';


import './MadhyaPradesh.css';

export default function UttarPradesh() {
  const [selectedTour, setSelectedTour] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openItineraryDay, setOpenItineraryDay] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const tourPackages = [
    {
      id: 1,
      name: "Ayodhya, Varanasi, Chandouli, Varanasi",
      duration: "5 Days / 4 Nights",
      price: "0",
      image: pench,
      images: [pench1, kanha, bandhavgarh, bhedaghat], // Add your actual images here
      about: "",
      highlights: [
        "Visit Shri Ram Janmabhoomi and Hanumangarhi",
        "visit to Sarnath",
        "Ganga Aarti at the ghats",
        
        "Meet Banarasi weavers ",
        "taste Kachori-Sabzi, Jalebi, tea, sweets, and Banarasi Paan",
        
      ],
      included: [
                	"The costing is based on per person basis.",
	      "Meal plan as per hotel tariff",
      "AC Sedan will be provided for 2 Pax and Innova Crysta will be given for 4 and above pax for all transfers – pickup from Nagpur to Drop at Bhopal.",

      ],
      excluded: [
        	"Anything not mentioned in Inclusions",
	"Safari charges are not included",
"Entry Fee for any sightseeing, Monuments etc",
	"Air or Train Fare",

      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Ayodhya (Morning or Afternoon)",
          description: [
            "Check in at a local hotel or homestay",
            "Visit Shri Ram Janmabhoomi and Hanumangarhi",
            "Explore Kanak Bhavan and Ramkatha Museum",
            "Evening at Ramkatha Park for cultural programs",
            "Witness millions of diyas lighting up Guptar Ghat during the Green Deepotsav",
            "Enjoy drone show, green fireworks, and cultural performances",
            "Explore Ayodhya’s food stalls and handicraft markets at night",
            "Overnight stay in Ayodhya"
          ]
        },
        {
          day: 2,
          title: "Arrival in Varanasi (Morning)",
          description: [
            "Check in at a hotel or homestay",
"Afternoon visit to Sarnath – the site of Buddha’s first sermon",
"Visit Gharial and Turtle Breeding Centre",
"Enjoy dolphin sighting in the Ganges at Saidpur, Ghazipur",
"Visit the Namami Gange Museum (based on Ganga theme)",
"Overnight stay in Varanasi",
          ]  
        },
        {
          day: 3,
          title: "Exploring the Spiritual Side of Varanasi",
          description: [
            "Morning yoga and meditation by the Ganges",
"Visit Kashi Vishwanath Temple and Kal Bhairav Temple",
"Afternoon visit to Ramnagar Fort and Ganga River Trail",
"Evening Ganga Aarti at the ghats",
"Overnight stay in Varanasi"
          ]
        },
        {
          day: 4,
          title: "Nature and Craft Experience",
          description: [
            "Day trip to Rajdari and Devdari waterfalls",
"Meet Banarasi weavers and witness traditional handloom artistry",
"Overnight stay in Varanasi",
          ]
        },
        {
          day: 5,
          title: "Culinary Farewell and Departure",
          description: [
            "Morning food walk – taste Kachori-Sabzi, Jalebi, tea, sweets, and Banarasi Paan",
"Depart for onward destination"
]
        }
      ],
      faqs: [
        {
          question: "What is the best time to visit?",
          answer: "October to March is the best time to visit with pleasant weather."
        },
        {
          question: "Is this tour suitable for families?",
          answer: "Yes, this tour is family-friendly and suitable for all age groups."
        },
        {
          question: "Can I customize the itinerary?",
          answer: "Yes, we offer customization options. Contact us for details."
        }
      ]
    },
    
    // Add more tour packages here...
  ];

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



  const handleBookNow = (tour) => {
    setSelectedTour(tour);
    setCurrentImageIndex(0);
    setOpenItineraryDay(null);
    setOpenFaqIndex(null);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

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

  return (
    <>
      <Navbar />
      <section className="about-banner-section">
        <img src={aboutBanner} alt="Madhya Pradesh" className="about-banner-img" />
        <div className="about-banner-overlay"></div>
        <h1 className="about-banner-heading">Uttar Pradesh</h1>
      </section>

      <section className="tour-packages-section">
        <h2 className="packages-title">Available Tour Packages</h2>
        <div className="packages-grid">
          {tourPackages.map((tour) => (
            <div key={tour.id} className="tour-box">
              <div className="tour-image">
                <img src={tour.image} alt={tour.name} />
              </div>
              <div className="tour-info">
                <h3>{tour.name}</h3>
                <p className="tour-duration">{tour.duration}</p>
                <div className="tour-bottom">
                  <span className="tour-price">{tour.price}</span>
                  <button className="book-btn" onClick={() => handleBookNow(tour)}>
                    Book Now
                  </button>
                </div>
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
                        {Array.isArray(day.description) ? (
            <ul className="itinerary-points">
              {day.description.map((point, index) => (
                <li key={index}>
                  <i className="fas "></i> {point}
                </li>
              ))}
            </ul>
          ) : (
                        <p>{day.description}</p>
                        )}
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
