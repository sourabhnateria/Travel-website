import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import aboutBanner from '../assets/cancellationimg.jpg'; // Use your actual filename!
import './About.css';

export default function CancellationPolicy() {


  return (
    <>
      {/* <Navbar /> */}

      <section className="about-banner-section">
        <img src={aboutBanner} alt="About Us" className="about-banner-img" />
        <div className="about-banner-overlay"></div>
        <h1 className="about-banner-heading">Cancellation Policy</h1>
      </section>

      <section className="about-section-home" id="about">
        <div className="about-home-container">
         
          {/* Right Column - Content */}
          <div className="about-content-column">
            <div className="about-content">
              
              {/* Section Header */}
              <div className="about-header">
                
                <h2 className="about-title">N N Travel Hub: Cancellation and Refund Policy</h2>
              </div>

              {/* Description */}
              <div className="about-description" textAlign="center" >
                <p style={{ marginBottom: '1em' }}>
                  At N N Travel Hub we understand that travel plans can change. Our cancellation and refund policy is designed to be transparent and fair, keeping your convenience in mind.
                </p>
                <p style={{ marginBottom: '1em' }}>
                  <strong>Cancellation Charges:</strong><br/>
                  <ul style={{ marginBottom: '1em' }}>
                    <li>More than 60 days before departure: The booking amount is non-refundable.</li>
                    <li>31–60 days before departure: A charge of 50% of the total tour cost will apply.</li>
                    <li>30 days or less before departure: 100% of the tour cost will be charged as cancellation.</li>
                  </ul>
                  Please note that cancellation policies may vary based on specific tour packages or promotional deals. Kindly refer to the individual tour terms at the time of booking.<br/> <br/>
                  Refunds, if applicable, will be processed as per the cancellation terms mentioned and are subject to standard banking timelines.<br/>

Your satisfaction is our priority, and we aim to make every step of your journey—from planning to cancellation—clear and reliable.
                </p>
              </div>

              
          
          
        </div>

            </div>
          </div>

     
        </section>
      

      
    </>
  );
}
