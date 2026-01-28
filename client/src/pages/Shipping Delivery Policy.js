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
                
                <h2 className="about-title">Shipping & Delivery Policy - N N Travel Hub</h2>
              </div>

              {/* Description */}
              <div className="about-description" textAlign="center">
                <p style={{marginBottom: '1em'}}>
                  N N Travel Hub offers travel-related services and does not deal in the sale or shipment of physical products. Our services include tour packages, hotel reservations, transportation arrangements, sightseeing services, and flight or train ticket bookings.
                </p>
                <p style={{marginBottom: '1em'}}>
                  Since our offerings are service-based, no physical shipping is required. All booking confirmations, travel vouchers, tickets, and related documents are shared digitally through email, WhatsApp, or other messaging platforms using the contact details provided at the time of booking.
                </p>
                <p style={{marginBottom: '1em'}}>
                  Clients who prefer in-person assistance may collect printed documents from our office during working hours, subject to prior confirmation.
                </p>
                <p style={{marginBottom: '1em'}}>
                  We make every effort to ensure that all travel documents and service details are delivered accurately, securely, and within the agreed timeline to support a smooth travel experience.
                </p>
                <p style={{marginBottom: '1em'}}>
                  If you have any questions or require assistance regarding document delivery, please contact our support team through our website or provided contact channels.
                </p>
              </div>

              
          
          
        </div>

            </div>
          </div>

     
        </section>
      

      
    </>
  );
}
