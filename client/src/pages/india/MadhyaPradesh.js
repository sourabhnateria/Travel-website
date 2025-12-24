import React, { useState } from "react";
import Navbar from '../../components/Navbar';
import aboutBanner from '../../assets/india/madhya-pradesh/mp_cover_photo.jpg';
//tour-1/id:1
import pench from '../../assets/india/madhya-pradesh/tour-1/pench.jpg';
import pench1 from '../../assets/india/madhya-pradesh/tour-1/pench1.jpg';
import kanha from '../../assets/india/madhya-pradesh/tour-1/kanha.jpg';
import bandhavgarh from '../../assets/india/madhya-pradesh/tour-1/bandhavgaarh.jpg';
import bhedaghat from '../../assets/india/madhya-pradesh/tour-1/bhedaghat.jpg';
//tour-2/id:2
import indoretour from '../../assets/india/madhya-pradesh/tour-2/cover.jpg';
import indore from '../../assets/india/madhya-pradesh/tour-2/indore.jpg';
import mandu from '../../assets/india/madhya-pradesh/tour-2/mandu.jpg';
import maheshwar from '../../assets/india/madhya-pradesh/tour-2/maheshwar.jpg';
import sailani from '../../assets/india/madhya-pradesh/tour-2/sailani.jpg';
//tour-3/id:3

import './MadhyaPradesh.css';

export default function MadhyaPradesh() {
  const [selectedTour, setSelectedTour] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openItineraryDay, setOpenItineraryDay] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const tourPackages = [
    {
      id: 1,
      name: "PENCH, KANHA, BANDHAVGARH, JABALPUR",
      duration: "5 Days / 4 Nights",
      price: "₹28,499 - ₹59,999",
      image: pench,
      images: [pench1, kanha, bandhavgarh, bhedaghat], // Add your actual images here
      about: "Experience the rich heritage of Bhopal, the city of lakes. Visit historic monuments, beautiful mosques, and explore the cultural heart of Madhya Pradesh.",
      highlights: [
        "Explore Pench National Park",
        "Visit Kanha National Park",
        "Explore Bandhavgarh Tiger Reserve",
        
        "Visit Bhedaghat Marble Rocks",
        "Tour of Bargi Dam",
        
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
          title: "Arrival at Nagpur",
          description: "Arrival at Nagpur via morning Train/Flight/Bus. Welcoming and Check-in for breakfast/refreshment at the hotel (if needed). Departure from Nagpur (6:30 AM) to Pench (110 Kms). Check-in at Hotel Kipling’s Court, Lunch, Evening park safari, followed by evening Tea, Dinner & Overnight stay."
        },
        {
          day: 2,
          title: "journey to Kanha",
          description: "Breakfast and journey to Kanha (250 Km). Check-in at Baghira Jungle Resort, Mocha & Lunch. Evening park safari, Wildlife film show in the evening, Tea, Dinner & Overnight stay."
        },
        {
          day: 3,
          title: "Departure for Bandhavgarh",
          description: "Early morning park safari, Breakfast, Departure for Bandhavgarh (240 Kms). Check-in at White Tiger Forest Lodge, Bandhavgarh. Evening Tea, Dinner & Overnight stay."
        },
        {
          day: 4,
          title: "Departure for Bhedaghat",
          description: "Early morning park safari, Breakfast, Departure for Bhedaghat (250 Kms). En-route lunch, Check-in at Motel Marble Rock, Bhedaghat. Evening Tea, Dinner & Overnight stay."
        },
        {
          day: 5,
          title: "Departure for Bargi",
          description: "Breakfast, Departure for Bargi (55 Kms) for a 45-minute Cruise Ride. Lunch, Departure for Nagpur (300 Kms)/Jabalpur. En-route Hi-Tea at Rookhad/Jabalpur MPT Hotels."
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
    {
      id: 2,
      name: "INDORE, MANDU, MAHESHWAR, SAILANI",
      duration: "6 Days / 5 Nights",
      price: "₹26,499-₹34,999",
      image: indoretour,
      images: [indore, mandu, maheshwar, sailani], // Add your actual images here
      about: "Experience the rich heritage of Bhopal, the city of lakes. Visit historic monuments, beautiful mosques, and explore the cultural heart of Madhya Pradesh.",
      
      highlights: [
        "Explore Choral Dam in Mhow",
        "Visit Janapav Kuti Peak",
        "Explore wonders of Mandu",
        "Visit Maheshwar town",
        "Adventure to Sailani Island",
        
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
          "Air or Train Fare"

      ],
      itinerary: [
        {
          day: 1,
          title: "Choral Dam - Vanchu Point - Jam Gate",
          description: "Begin your journey at Choral Dam in Mhow, a scenic destination renowned for its breathtaking beauty. The route itself offers captivating vistas, each turn unveiling a more enchanting landscape than the last."
        },
        {
          day: 2,
          title: "Janapav Hill",
          description: "Discover the picturesque Janapav Kuti Peak, the highest point on the Malwa Plateau, offering stunning panoramic views near Indore."
        },
        {
          day: 3,
          title: "Mandu Sightseeing",
          description: "A full day to explore the wonders of Mandu. Conclude the day with dinner and an overnight stay at Malwa Resort, Mandu."
        },
        {
          day: 4,
          title: "Maheshwar Exploration",
          description: "Immerse yourself in Maheshwar, a town nestled along the banks of the Narmada River. Once the capital of Malwa during the Maratha Holkar reign, it brims with historical charm."
        },
        {
          day: 5,
          title: "Sailani Island Adventure",
          description: "Embark on an adventure to Sailani Island, a tranquil haven away from the city's hustle and bustle. Delight in its natural splendor and partake in water activities amidst the serene surroundings."
        },
        {
          day: 6,
          title: "Indore Experience",
          description: "Engage in the Indore Heritage Walk starting at 7:00 AM, a captivating journey through the city's rich history. Relish a breakfast at Rajwada, an iconic destination for local street food aficionados."
        }
      ],
      faqs: [
        {
          question: "What is the best time to visit?",
          answer: "October to March is the best time to visit Mandu and Maheshwar with pleasant weather."
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
    // {
    //   id: 1,
    //   name: "Bhopal Heritage Tour",
    //   duration: "3 Days / 2 Nights",
    //   price: "₹8,999",
    //   image: aboutBanner,
    //   images: [aboutBanner, aboutBanner, aboutBanner], // Add your actual images here
    //   about: "Experience the rich heritage of Bhopal, the city of lakes. Visit historic monuments, beautiful mosques, and explore the cultural heart of Madhya Pradesh.",
    //   highlights: [
    //     "Visit Upper Lake and Lower Lake",
    //     "Explore Van Vihar National Park",
    //     "Tour of Taj-ul-Masajid",
    //     "Visit Bhojpur Temple",
    //     "Shopping at Chowk Bazaar"
    //   ],
    //   included: [
    //     "3-star hotel accommodation",
    //     "Daily breakfast",
    //     "All sightseeing by AC vehicle",
    //     "Professional tour guide",
    //     "All entry tickets"
    //   ],
    //   excluded: [
    //     "Airfare / Train tickets",
    //     "Lunch and dinner",
    //     "Personal expenses",
    //     "Camera charges at monuments",
    //     "Travel insurance"
    //   ],
    //   itinerary: [
    //     {
    //       day: 1,
    //       title: "Arrival & Upper Lake",
    //       description: "Arrive in Bhopal. Check-in to hotel. Evening visit to Upper Lake and Boat Club. Overnight stay."
    //     },
    //     {
    //       day: 2,
    //       title: "Bhopal Sightseeing",
    //       description: "Visit Taj-ul-Masajid, Moti Masjid, Van Vihar National Park, and State Museum. Evening free for shopping."
    //     },
    //     {
    //       day: 3,
    //       title: "Bhojpur & Departure",
    //       description: "Morning visit to Bhojpur Temple. Return to Bhopal for departure."
    //     }
    //   ],
    //   faqs: [
    //     {
    //       question: "What is the best time to visit?",
    //       answer: "October to March is the best time to visit Bhopal with pleasant weather."
    //     },
    //     {
    //       question: "Is this tour suitable for families?",
    //       answer: "Yes, this tour is family-friendly and suitable for all age groups."
    //     },
    //     {
    //       question: "Can I customize the itinerary?",
    //       answer: "Yes, we offer customization options. Contact us for details."
    //     }
    //   ]
    // },
    {
      id: 3,
      name: "BHOPAL, TAWA, MADHAI, PACHMARHI",
      duration: "6 Days / 5 Nights",
      price: "₹32,999-₹53,999",
      image: aboutBanner,
      images: [aboutBanner, aboutBanner, aboutBanner], // Add your actual images here
      about: "Experience the rich heritage of Bhopal, the city of lakes. Visit historic monuments, beautiful mosques, and explore the cultural heart of Madhya Pradesh.",
      highlights: [
        "Visit Upper Lake and Lower Lake",
        "Explore Van Vihar National Park",
        "Tour of Taj-ul-Masajid",
        "Visit Bhojpur Temple",
        "Shopping at Chowk Bazaar"
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
          "Air or Train Fare"

      ],
      itinerary: [
        {
          day: 1,
          title: "Bhopal - The City of Lakes",
          description: "Embark on an exciting road trip from the vibrant city of Bhopal, surrounded by picturesque landscapes. Explore the serene beauty of the lakes, with the Boat Club offering enchanting boat rides. Start your sightseeing early to make the most of the day."
        },
        {
          day: 2,
          title: "Bhimbetka - UNESCO Heritage Site",
          description: "Travel approximately 45 km from Bhopal to Bhimbetka, known for its UNESCO World Heritage caves. This historic site, steeped in legend from the Mahabharata, is a haven for adventure seekers, historians, and nature lovers."
        },
        {
          day: 3,
          title: "Amargarh Waterfalls - Ratapani Wildlife Sanctuary",
          description: "Head southeast about 60 km from Bhopal to reach the Amargarh Waterfalls within the Ratapani Wildlife Sanctuary. Embrace the lush surroundings and relish the tranquility of this picturesque destination, especially captivating during the monsoon."
        },
        {
          day: 4,
          title: "Tawa Dam - Serene Reservoir Amidst Greenery",
          description: "Travel approximately 80 km from Amargarh Waterfalls to reach Tawa Dam, nestled amidst lush greenery. Enjoy enchanting sunsets over the dam and embark on a serene lake cruise, offering breathtaking views of little islands and the Satpura hills."
        },
        {
          day: 5,
          title: "Madai - Gateway to Satpura's Exquisite Forests",
          description: "Madhai, located at the entrance of the enchanting Satpura forests, offers absolute tranquility and mystique. Delight in its rich wildlife, sprawling meadows, and spellbinding views, immersing yourself in nature's magic."
        },
        {
          day: 6,
          title: "Pachmarhi - The Queen of Satpura",
          description: "Conclude your road trip in Pachmarhi, a favoured destination in Madhya Pradesh. Marvel at scenic waterfalls and lush green valleys, making it an ideal picnic spot. Experience the captivating beauty of Pachmarhi, especially during the monsoon season. Pack your bags and set off on a memorable road trip across Madhya Pradesh, known as the Heart of Incredible India. This journey promises not just exploration but a treasure trove of cherished memories amidst nature's grandeur."
        }
      ],
      faqs: [
        {
          question: "What is the best time to visit?",
          answer: "October to March is the best time to visit Bhopal with pleasant weather."
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
        <h1 className="about-banner-heading">Madhya Pradesh</h1>
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
