import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import aboutBanner from '../assets/faq.jpg'; // Use your actual filename!
import './About.css';

export default function Faq() {

 
  return (
    <>
      {/* <Navbar /> */}

      <section className="about-banner-section">
        <img src={aboutBanner} alt="About Us" className="about-banner-img" />
        <div className="about-banner-overlay"></div>
        <h1 className="about-banner-heading">Frequently asked questions</h1>
      </section>

      <section className="about-section-home" id="about">
        <div className="about-home-container">
         
          {/* Right Column - Content */}
          <div className="about-content-column">
            <div className="about-content">
              
              {/* Section Header */}
              <div className="about-header">
                
                <h2 className="about-title">Frequently Asked Questions (FAQs)</h2>
              </div>

              {/* Description */}
              <div className="about-description" textAlign="center">
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >What services does N N Travel Hub provide?</h3> <br/>
                    N N Travel Hub offers complete travel solutions including domestic and international tour packages, customized itineraries, hotel reservations, local transportation, sightseeing arrangements, and assistance with flight and train bookings.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>How can I book a tour with N N Travel Hub?</h3> <br/>
                    You can explore our tour options through our website or contact us directly via email at <strong>nntravelhub@gmail.com</strong>. Our team will guide you through the booking process and assist you at every step.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >Do you offer customized travel packages?</h3> <br/>
                    Yes. We specialize in designing personalized travel plans based on your interests, budget, and travel preferences. Simply share your requirements, and we’ll create an itinerary tailored just for you.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>Which destinations do you cover?</h3> <br/>
                    We offer travel experiences across India and international destinations such as Dubai, Singapore, Thailand, Sri Lanka, Malaysia, and other popular locations. Destination availability may vary based on season and travel requirements.
                </p>

                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >Are hotel bookings included in your packages?</h3> <br/>
                    Yes, accommodation options are available as part of our tour packages. We offer hotels across different budget ranges and help you choose stays that best suit your travel needs.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>Do you help with visas and travel documentation?</h3> <br/>
                    We provide guidance and support for visa applications for select destinations. Travelers are responsible for holding valid passports and meeting embassy requirements, but our team assists with documentation and application guidance.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >Are there any age restrictions for booking a tour?</h3> <br/>
                    There are no general age restrictions for booking with us. However, certain activities or destinations may have age-related guidelines. We recommend checking with our team before finalizing your booking.                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>Why do some tour packages show a price of ₹0?</h3> <br/>
                    If a package displays a price of ₹0, it may be due to pending updates or a technical issue. Please contact our team for accurate pricing details.                
                </p>


                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >What types of transportation are included in your tours?</h3> <br/>
                    Transportation arrangements depend on the selected package and may include flights, trains, private vehicles, airport transfers, or local transport for sightseeing.                
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>Can I modify my itinerary after booking?</h3> <br/>
                    Changes may be possible depending on availability and service provider policies. We recommend informing us as early as possible if you need to make any adjustments.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >What is your cancellation policy?</h3> <br/>
                    Cancellation terms vary based on the tour package and services booked. Please refer to our Cancellation & Refund Policy page or contact us for booking-specific details.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>Do you offer discounts or special travel deals?</h3> <br/>
                    Yes, we occasionally introduce seasonal offers and special promotions. Updates are shared on our website and social media platforms.
                </p>

                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >What is the best time to visit destinations in India?</h3> <br/>
                    The ideal travel period depends on the destination, climate, and local events. Our team can help you plan the best time to visit based on your chosen location.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>How can I contact N N Travel Hub for support?</h3> <br/>
                    For any questions or assistance, you can email us at <strong>nntravelhub@gmail.com</strong>. Our team is always happy to help you plan your journey.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >How can I stay informed about new offers?</h3> <br/>
                    You can stay updated by subscribing to our newsletter or following us on our social media channels for the latest travel updates and deals.                
                </p>
                

              </div>

              <div className="services-container">
          
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
