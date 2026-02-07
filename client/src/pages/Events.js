import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import eventBanner from '../assets/events/event_cover.jpg'; // Use your actual filename!
import './Events.css';

export default function Event() {

    

 
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

      <section className="about-section-home2" id="about">
        <div className="about-home-container2">
          
          {/* Left Column - Auto-Changing Image Slider */}
          <div className="about-content1-column">
            <div className="about-content1">
              <div className="about-content-header">
                
                <h2 className="about-content-title">Birthday:</h2>
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
              

              {/* Description */}
              <div className="about-content-description">
                {/* <img src={eventBanner} alt="Events" className="event-banner-img" /> */}
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

      
      {/* Add more sections/content below */}
      
      {/* <Footer /> */}
    </>
  );
}
