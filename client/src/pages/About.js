import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import aboutBanner from '../assets/about/about-banner.png'; // Use your actual filename!
import './About.css';

export default function About() {

    const services = [
    {
      id: 1,
      title: "Domestic Packages",
      icon: "fas fa-map-marked-alt",
      bgColor: "#a7f3d0", // Light green
      iconColor: "#065f46"
    },
    {
      id: 2,
      title: "International Packages",
      icon: "fas fa-globe-americas",
      bgColor: "#bfdbfe", // Light blue
      iconColor: "#1e40af"
    },
    {
      id: 3,
      title: "Flight Bookings",
      icon: "fas fa-plane",
      bgColor: "#93c5fd", // Medium blue
      iconColor: "#1e40af"
    },
    {
      id: 4,
      title: "Visa",
      icon: "fas fa-passport",
      bgColor: "#7dd3fc", // Sky blue
      iconColor: "#0c4a6e"
    },
    {
      id: 5,
      title: "Adventure and Activities",
      icon: "fas fa-heart",
      bgColor: "#ddd6fe", // Light purple
      iconColor: "#6b21a8"
    },
    {
      id: 5,
      title: "hotel and transport",
      icon: "fas fa-bus",
      bgColor: "#ddd6fe", // Light purple
      iconColor: "#6b21a8"
    }
  ];

 
  return (
    <>
      {/* <Navbar /> */}

      <section className="about-banner-section">
        <img src={aboutBanner} alt="About Us" className="about-banner-img" />
        <div className="about-banner-overlay"></div>
        <h1 className="about-banner-heading">About Us</h1>
      </section>

      <section className="about-section-home" id="about">
        <div className="about-home-container">
         
          {/* Right Column - Content */}
          <div className="about-content-column">
            <div className="about-content">
              
              {/* Section Header */}
              <div className="about-header">
                
                <h2 className="about-title">N N Travel Hub: A New Name, A Decade of Expertise</h2>
              </div>

              {/* Description */}
              <div className="about-description" textAlign="center">
                <p>
                   N N Travel Hub is a travel company built on experience, trust, and a genuine passion for helping people explore the world. While our brand is newly established, our expertise comes from over 10 years of hands-on experience in the travel industry.
                </p>
                <p>
Our founder has spent a decade working with well-known travel agencies, planning and managing a wide range of domestic and international trips. From customized itineraries to smooth trip execution, this experience has shaped a deep understanding of what travelers truly need—comfort, reliability, and personalized service.
</p>
                <p>
At N N Travel Hub, we bring together the fresh approach of a modern travel company and the practical knowledge of a seasoned travel professional. Every trip we design is carefully planned, keeping your preferences, budget, and comfort in mind.
</p>
                <p>
We are committed to delivering seamless, personalized, and memorable travel experiences. Whether you are planning a leisure holiday, a family trip, or a special getaway, our goal is to make your journey stress-free and truly enjoyable.
</p>
                <p>
With a strong focus on customer satisfaction and long-term relationships, N N Travel Hub is here to turn your travel plans into unforgettable experiences.
                </p>
              </div>

              <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">What We Offer</h2>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="service-card"
                style={{ backgroundColor: service.bgColor }}
              >
                <div 
                  className="service-icon"
                  style={{ color: service.iconColor }}
                >
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>

            </div>
          </div>

        </div>
      </section>

      <section className="about-section-home2" id="about">
        <div className="about-home-container2">
          
          {/* Left Column - Auto-Changing Image Slider */}
          <div className="about-content1-column">
            <div className="about-content1">
              <div className="about-content-header">
                
                <h2 className="about-content-title">Customized Tour Experiences:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  We create thoughtfully planned tour experiences to suit different travel styles and interests. From lively cities to peaceful natural destinations across India, our packages are designed to showcase the country’s rich culture, landscapes, and traditions. Each itinerary is carefully curated to ensure comfort, enjoyment, and memorable moments throughout your journey.
                </p>
              </div>
              
              
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-content2-column">
            <div className="about-content2">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Comfortable Stay Arrangements:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  A good trip starts with the right place to stay. We help you choose accommodations that match your preferences and budget, whether you are looking for economical hotels or premium resorts. Our partnerships with trusted properties allow us to offer reliable and comfortable lodging options for every traveler.
                </p>
              </div>
              

            </div>
          </div>

          <div className="about-content3-column">
            <div className="about-content3">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Travel & Local Transportation:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  Reliable transportation plays a key role in a smooth travel experience. We arrange convenient travel options including private vehicles, buses, and train bookings, allowing you to move freely and comfortably during your trip. Our goal is to make your travel stress-free from start to finish.</p>
              </div>
              

            </div>
          </div>

          <div className="about-content4-column">
            <div className="about-content4">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Domestic & International Flight Bookings:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  We assist with quick and easy flight reservations by comparing multiple airlines and routes. From short domestic flights to international journeys, we ensure efficient booking options that suit your schedule and travel needs.</p>
              </div>
              

            </div>
          </div>
          <div className="about-content5-column">
            <div className="about-content5">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Visa Support Services:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  Applying for a visa can often feel confusing and time-consuming. Our team offers step-by-step guidance to help you with visa applications for both domestic and international destinations. We aim to make the process simple, clear, and hassle-free.</p>
              </div>
              

            </div>
          </div>
          <div className="about-content6-column">
            <div className="about-content6">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Global Travel Planning:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  Beyond India, we also specialize in international travel planning. Whether you are dreaming of a city adventure or a relaxing island escape, we design international itineraries that balance sightseeing, relaxation, and cultural experiences—tailored to your travel goals.
                  </p>
              </div>
              

            </div>
          </div>
          </div>
      </section>
      <div className="services-header">
            <h2 className="services-title">Why Choose N N Travel Hub?</h2>
          </div>
      <section className="about-section-home2" id="about">
        <div className="about-home-container2">
          
          {/* Left Column - Auto-Changing Image Slider */}
          <div className="about-content1-column">
            <div className="about-content1">
              <div className="about-content-header">
                
                <h2 className="about-content-title">Experienced Travel Guidance:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  While N N Travel Hub is a growing brand, it is backed by over 10 years of hands-on experience in the travel industry. Our deep understanding of travel planning helps us anticipate challenges and deliver smooth, well-organized trips.
                </p>
              </div>
              
              
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-content2-column">
            <div className="about-content2">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Personalized Travel Planning:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  We believe every traveler is different. That’s why we focus on understanding your preferences, budget, and travel goals before designing your itinerary. Your trip is planned around your needs—not a fixed template.
                </p>
              </div>
              

            </div>
          </div>

          <div className="about-content3-column">
            <div className="about-content3">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Transparent & Honest Service:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  From planning and bookings to on-trip assistance, we stay connected with you throughout your journey. Our team is always available to support you before, during, and after your trip.</p>
              </div>
              

            </div>
          </div>

          <div className="about-content4-column">
            <div className="about-content4">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Reliable Partners & Services:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  We work with trusted hotels, transport providers, and service partners to ensure safety, comfort, and quality at every step of your travel experience.</p>
              </div>
              

            </div>
          </div>
          <div className="about-content5-column">
            <div className="about-content5">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Customer Satisfaction First:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  Your satisfaction is our priority. We aim to build long-term relationships by delivering dependable service, attention to detail, and travel experiences you’ll want to relive and recommend.</p>
              </div>
              

            </div>
          </div>
          
          </div>
      </section>

      {/* Add more sections/content below */}
      
      {/* <Footer /> */}
    </>
  );
}
