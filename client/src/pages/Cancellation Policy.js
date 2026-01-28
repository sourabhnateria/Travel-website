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
                
                <h2 className="about-title">Cancellation and Refund Policy - N N Travel Hub</h2>
              </div>

              {/* Description */}
              <div className="about-description" textAlign="center" >
                <p style={{ marginBottom: '1em' }}>
                  At N N Travel Hub, we understand that travel plans may change due to unforeseen circumstances. Our cancellation and refund policy is structured to be transparent and easy to understand while maintaining fairness for both travelers and service providers.
                </p>
                <p style={{ marginBottom: '1em' }}>
                  <strong>Cancellation Charges</strong><br/>
                  If a booking is cancelled, the following charges will apply:<br/>
                  <ul style={{ marginBottom: '1em' }}>
                    <li>More than 60 days before departure: The booking amount paid will be retained and is non-refundable.</li>
                    <li>Between 31 and 60 days before departure: 50% of the total tour cost will be charged as a cancellation fee.</li>
                    <li>30 days or less before departure: The full tour cost will be charged as cancellation.</li>
                  </ul>
                  Cancellation terms may differ for certain tour packages, special offers, or third-party services. Travelers are advised to review the specific conditions applicable to their booking at the time of confirmation
                </p>
                <p style={{ marginBottom: '1em' }}>
                  <strong>Refund Processing</strong><br/>
                  Any eligible refunds will be processed according to the applicable cancellation terms. Refund timelines may vary depending on banking procedures and payment methods used.<br/>
                  Our aim is to keep the cancellation process clear and dependable, ensuring you have the right information to plan your travel decisions with confidence.
                </p>  
              </div>

              
          
          
        </div>

            </div>
          </div>

     
        </section>
      

      
    </>
  );
}
