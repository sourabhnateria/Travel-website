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
                
                <h2 className="about-title">N N Travel Hub: T & C</h2>
              </div>

              {/* Description */}
              <div className="about-description" textAlign="center">
                <p style={{ marginBottom: '1em' }}>
                   Welcome to N N Travel Hub.! We are delighted to have you on board as a valued traveler. Before you embark on your journey with us, it is essential to familiarize yourself with our terms and conditions to ensure a smooth and enjoyable experience.
                </p>
                <p style={{ marginBottom: '1em' }}>
                  <strong>Reservation Confirmation:</strong><br/> Upon selecting your desired tour package, a reservation will be made upon receipt of the specified booking amount. Please ensure that all personal details provided are accurate.
                </p>
                <p style={{ marginBottom: '1em' }}>
                  <strong>Booking and Payment:</strong> <ul ><li>All bookings are subject to availability.</li>
                  <li>A deposit or full payment may be required at the time of booking.</li>
                  <li>Payment methods accepted may include credit cards, bank transfers, or other methods as specified.</li></ul>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Payment Schedule:</strong><br/> The payment schedule is as follows:
                  <ul>
                    <li><strong>Booking Amount:</strong> A non-refundable booking amount is required to secure your reservation.</li>
                    <li><strong>Second Installment:</strong> Due 60 days before the departure date.</li>
                    <li><strong>Final Payment:</strong> Due 30 days before the departure date.</li>
                  </ul>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Cancellation Policy:</strong><br/>Cancellation Charges <br/> In the event of a cancellation, the following charges will apply:
                  <ul>
                    <li>More than 60 days before departure: Booking amount is non-refundable.</li>
                    <li>31-60 days before departure: 50% of the tour cost.</li>
                    <li>Less than 30 days before departure: 100% of the total package cost.</li>
                    <li>Cancellation policies may vary depending on the specific tour packag</li>
                    <li>Refunds, if applicable, will be processed according to the cancellation policy in effect at the time of booking.</li>
                    <li>Travel insurance is recommended to cover cancellation fees in case of unexpected events.</li>
                  </ul>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Itinerary Changes:</strong> 
                  <ul>
                    <li>N N Travel Hub reserves the right to alter tour itineraries due to circumstances beyond its contro</li>
                    <li>Changes, if necessary, will be communicated to travelers as soon as possible.</li>
                  </ul>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Travel Documents:</strong>
                  <ul>
                    <li>Travelers are responsible for ensuring they have valid passports, visas, and any required travel documents.</li>
                    <li>N N Travel Hub may provide guidance, but ultimate responsibility lies with the traveler.</li>
                  </ul>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Health and Medical Considerations:</strong> 
                  <ul>
                    <li>Travelers with medical conditions or special requirements should inform N N Travel Hub at the time of booking.</li>
                    <li>It is the traveler’s responsibility to seek medical advice and vaccinations as needed before the trip.</li>
                  </ul>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Travel Insurance:</strong> 
                  <ul>
                    <li>Travel insurance is strongly recommended to cover unforeseen events, including trip cancellation, medical emergencies, and lost luggage.</li>
                  </ul>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Responsibility and Liability:</strong>
                  <ul>
                    <li>N N Travel Hub acts as a tour operator and is not responsible for losses or damages to personal property.</li>
                    <li>N N Travel Hub is not liable for any injuries, accidents, or other mishaps that may occur during the trip.</li>
                  </ul>
                </p><p style={{ marginBottom: '1em' }}>
                  <strong>Traveler's Responsibility:</strong>
                  <ul>
                    <li>Travelers are responsible for their personal belongings and valuables throughout the trip.</li>
                    <li>Travelers are also responsible for following the instructions of the tour guide and cooperating with fellow travelers.</li>
                  </ul> 
                </p>
                <p style={{ marginBottom: '1em' }}>
                  <strong>Complaints and Disputes:</strong>
                  <ul>
                    <li>Any complaints or disputes should be brought to the attention of N N Travel Hub promptly, and efforts will be made to resolve them.</li>
                    
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
