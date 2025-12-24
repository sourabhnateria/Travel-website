import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import aboutBanner from '../assets/deliveryimg.jpg'; // Use your actual filename!
import './About.css';

export default function ShippingDeliveryPolicy() {


  return (
    <>
      {/* <Navbar /> */}

      <section className="about-banner-section">
        <img src={aboutBanner} alt="About Us" className="about-banner-img" />
        <div className="about-banner-overlay"></div>
        <h1 className="about-banner-heading">Shipping & Delivery Policy</h1>
      </section>

      <section className="about-section-home" id="about">
        <div className="about-home-container">
         
          {/* Right Column - Content */}
          <div className="about-content-column">
            <div className="about-content">
              
              {/* Section Header */}
              <div className="about-header">
                
                <h2 className="about-title">N N Travel Hub: Shipping & Delivery Policy</h2>
              </div>

              {/* Description */}
              <div className="about-description" textAlign="center">
                <p style={{marginBottom: '1em'}}>
                  At N N Travel Hub, we provide high-quality travel-related services and do not sell any physical products. Our services include tour packages, hotel bookings, car rentals, sightseeing arrangements, flight tickets, and train reservations.
                </p>
                <p style={{marginBottom: '1em'}}>
                  As we deal exclusively in services, there is no physical shipping involved. All confirmed bookings, vouchers, tickets, and travel documents are delivered electronically via email or messaging platforms to the contact details provided by the client at the time of booking.
                </p>
                <p style={{marginBottom: '1em'}}>
                  For clients who visit our office in person, we are happy to hand over all necessary documents directly during office hours.
                </p>
                <p style={{marginBottom: '1em'}}>
                  We strive to ensure that all documents and service information are shared accurately, securely, and on time, so your travel experience remains seamless and worry-free.
                </p>
                <p style={{marginBottom: '1em'}}>
                  For any assistance or questions related to document delivery, feel free to reach out to our customer support team.
                </p>
              </div>

              
          
          
        </div>

            </div>
          </div>

     
        </section>
      

      
    </>
  );
}
