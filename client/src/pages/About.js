import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import aboutBanner from '../assets/about/about-banner.png'; // Use your actual filename!
import './About.css';

export default function About() {

    const services = [
    {
      id: 1,
      title: "India Tour",
      icon: "fas fa-map-marked-alt",
      bgColor: "#a7f3d0", // Light green
      iconColor: "#065f46"
    },
    {
      id: 2,
      title: "International Tour",
      icon: "fas fa-globe-americas",
      bgColor: "#bfdbfe", // Light blue
      iconColor: "#1e40af"
    },
    {
      id: 3,
      title: "Air Ticket",
      icon: "fas fa-plane",
      bgColor: "#93c5fd", // Medium blue
      iconColor: "#1e40af"
    },
    {
      id: 4,
      title: "Visa Services",
      icon: "fas fa-passport",
      bgColor: "#7dd3fc", // Sky blue
      iconColor: "#0c4a6e"
    },
    {
      id: 5,
      title: "Honeymoon Package",
      icon: "fas fa-heart",
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
                    Welcome to N N Travel Hub, your new gateway to the world. While our company is new, our foundation is built on over 10 years of deep, hands-on experience in the travel industry.<br />
                    Our founder, Harish Nateriya, has dedicated his career to crafting exceptional travel. Before launching N N Travel Hub, Harish was an integral part of several leading travel agencies, where he successfully planned and delivered countless unforgettable journeys for clients.
                    This decade of experience is the cornerstone of our business. It means we have the established knowledge, industry connections, and proven expertise to manage every detail of your trip.<br />
                    At N N Travel Hub, you get the best of both worlds: the fresh energy and personal attention of a new company, combined with the wisdom and reliability of a seasoned travel veteran. We are here to build lasting relationships with our clients by providing seamless, personalized, and unforgettable travel experiences.
                </p>
              </div>

              <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Our Services</h2>
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
                
                <h2 className="about-content-title">Tour Packages:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  Our meticulously designed tour packages cater to a wide spectrum of preferences and interests. From the bustling streets of Delhi to the tranquil backwaters of Kerala, we, the Best Travel Agents In Bhopal, offer a diverse array of experiences that capture the essence of India's myriad landscapes, cultures, and traditions.
                </p>
              </div>
              
              
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-content2-column">
            <div className="about-content2">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Hotel Booking:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  We, the Best Travel Agents In Bhopal, understand the importance of comfortable accommodation while traveling. Through our extensive network of partner hotels, we ensure that our clients have access to a range of options, from budget-friendly stays to luxurious resorts.
                </p>
              </div>
              

            </div>
          </div>

          <div className="about-content3-column">
            <div className="about-content3">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Transport Services:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  Seamless transportation is the backbone of any successful travel experience. We are best Travel Agency In Bhopal, N N Travel Hub provides a range of transport options, including private cars, buses, and trains, ensuring that our clients can explore India at their own pace and convenience.</p>
              </div>
              

            </div>
          </div>

          <div className="about-content4-column">
            <div className="about-content4">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Flight Booking:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  With access to a vast database of airlines and flight routes, we, as the Best Travel Agents In Bhopal, facilitate hassle-free flight bookings, ensuring that our clients can reach their desired destinations with ease.</p>
              </div>
              

            </div>
          </div>
          <div className="about-content5-column">
            <div className="about-content5">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Visa Assistance:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  Navigating the complexities of visa applications can be a daunting task. Our dedicated team of experts, recognized as the Best Visa Agents In Bhopal, provides comprehensive assistance in securing visas for both domestic and international travel, simplifying the process for our clients.</p>
              </div>
              

            </div>
          </div>
          <div className="about-content6-column">
            <div className="about-content6">
              
              {/* Section Header */}
              <div className="about-content-header">
                
                <h2 className="about-content-title">Tour India and International:</h2>
              </div>

              {/* Description */}
              <div className="about-content-description">
                <p>
                  Whether it's the vibrant streets of New York or the serene landscapes of Bali, N N Travel Hub extends its expertise in curating international travel experiences. Our itineraries are designed to offer a perfect blend of exploration, relaxation, and cultural immersion.
                  </p>
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
