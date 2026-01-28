import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import aboutBanner from '../assets/t&cimg.jpg'; // Use your actual filename!
import './About.css';

export default function TermsAndConditions() {


  return (
    <>
      {/* <Navbar /> */}

      <section className="about-banner-section">
        <img src={aboutBanner} alt="About Us" className="about-banner-img" />
        <div className="about-banner-overlay"></div>
        <h1 className="about-banner-heading">Terms and Conditions</h1>
      </section>

      <section className="about-section-home" id="about">
        <div className="about-home-container">
         
          {/* Right Column - Content */}
          <div className="about-content-column">
            <div className="about-content">
              
              {/* Section Header */}
              <div className="about-header">
                
                <h2 className="about-title">Terms & Conditions - N N Travel Hub</h2>
              </div>

              {/* Description */}
              <div className="about-description" textAlign="center">
                <p style={{ marginBottom: '1em' }}>
                   Welcome to N N Travel Hub. By booking a tour or using our services, you agree to the following terms and conditions. We encourage you to read them carefully to ensure a smooth and pleasant travel experience.
                </p>
                <p style={{ marginBottom: '1em' }}>
                  <strong>Booking Confirmation:</strong><br/> A booking is considered confirmed only after the required booking amount is received. Travelers are responsible for providing correct and complete personal details at the time of booking.
                </p>
                <p style={{ marginBottom: '1em' }}>
                  <strong>Booking & Payments:</strong> <ul ><li>All bookings are subject to availability.</li>
                  <li>Depending on the tour, either a partial payment or full payment may be required at the time of booking.</li>
                  <li>Accepted payment methods will be communicated during the booking process.</li></ul>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Payment Schedule:</strong><br/> Unless otherwise specified, the standard payment structure is:
                  <ul>
                    <li><strong>Booking Amount:</strong> Required to secure the reservation (non-refundable).</li>
                    <li><strong>Second Installment:</strong> Payable 60 days prior to the departure date.</li>
                    <li><strong>Final Payment:</strong> Payable 30 days prior to the departure date.</li>
                    <p>Failure to follow the payment schedule may result in cancellation of the booking.</p>
                  </ul>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Cancellation & Refund Policy:</strong><br/>If a booking is cancelled, the following cancellation charges will apply: <br/> 
                  <ul>
                    <li>More than 60 days before departure: Booking amount will be retained.</li>
                    <li>31-60 days before departure: 50% of the tour cost will be charged.</li>
                    <li>Less than 30 days before departure: 100% of the tour cost will be charged.</li>
                    <p>Cancellation policies may vary based on the specific tour or service booked. Any applicable refunds will be processed as per the policy in effect at the time of booking. We strongly recommend purchasing travel insurance to cover unexpected cancellations.</p>
                  </ul>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Changes to Itinerary:</strong> 
                  <p>N N Travel Hub reserves the right to modify tour itineraries due to factors beyond our control, such as weather conditions, operational requirements, or safety concerns. Any changes will be communicated to travelers at the earliest possible time.</p>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Travel Documents:</strong>
                  <p>Travelers must ensure they carry valid passports, visas, and any other required travel documents. While we may offer guidance, the final responsibility for documentation lies with the traveler.</p>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Health & Medical Requirements:</strong> 
                  <p>Travelers with existing medical conditions or special needs must inform us at the time of booking. It is the traveler’s responsibility to obtain necessary medical advice, vaccinations, or medications before travel.</p>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Travel Insurance:</strong> 
                  <p>Travel insurance is highly recommended to protect against unforeseen situations such as medical emergencies, trip cancellations, delays, or loss of personal belongings.</p>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Responsibility and Liability:</strong>
                  <p>N N Travel Hub acts as a travel service provider and shall not be held responsible for loss, damage, or theft of personal belongings. We are also not liable for injuries, accidents, delays, or disruptions caused by third parties or circumstances beyond our control.</p>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Traveler's Responsibilities:</strong>
                  <ul>
                    <li>Travelers are responsible for their personal belongings throughout the journey.</li>
                    <li>Travelers are expected to follow tour guidelines, respect local customs, and cooperate with fellow travelers and tour staff.</li>
                  </ul> 
                </p>
                <p style={{ marginBottom: '1em' }}>
                  <strong>Complaints and Disputes:</strong>
                  <ul>
                    <li>Any concerns or complaints should be reported to N N Travel Hub as soon as possible so that we can attempt a timely resolution. Disputes, if any, will be handled in good faith and resolved through mutual discussion.</li>
                    For any questions related to these Terms & Conditions, please contact us via our website or email us at:
                    <strong> nntravelhub@gmail.com</strong>
                  </ul> 
                </p>
                
              </div>

              
          
          
        </div>

            </div>
          </div>

     
        </section>
      

      
    </>
  );
}
