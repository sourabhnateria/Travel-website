import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import aboutBanner from '../assets/privacyimg.jpg'; // Use your actual filename!
import './About.css';

export default function PrivacyPolicy() {


  return (
    <>
      {/* <Navbar /> */}

      <section className="about-banner-section">
        <img src={aboutBanner} alt="About Us" className="about-banner-img" />
        <div className="about-banner-overlay"></div>
        <h1 className="about-banner-heading">Privacy Policy</h1>
      </section>

      <section className="about-section-home" id="about">
        <div className="about-home-container">
         
          {/* Right Column - Content */}
          <div className="about-content-column">
            <div className="about-content">
              
              {/* Section Header */}
              <div className="about-header">
                
                <h2 className="about-title">N N Travel Hub: Privacy Policy</h2>
              </div>

              {/* Description */}
              <div className="about-description" textAlign="center">
                <p style={{ marginBottom: '1em' }}>
                    N N Travel Hub is committed to protect your privacy. This notice is to explain our online information practices and the choices you can make about the way information is collected and used. N N Travel Hub will only use the information it collects for the purposes of enhancing your experience and providing you with a more personalized trip-planning process. At no time will we sell, trade, or rent your personal information to any third parties.</p>

<p style={{ marginBottom: '1em' }}>How N N Travel Hub Uses the Information It Collects: There will be times when we will ask you for personal information. In order to ensure the integrity of your personal information, all of your data is stored in our secure databases.</p>

<p style={{ marginBottom: '1em' }}><strong>Reservation Requests:</strong> You can request that N N Travel Hub reserve a trip for you by submitting a Reservation Request Form. completing the required fields mentioned in the Booking Form. For the Booking Request, N N Travel Hub will require that you submit information including name, e-mail address, telephone number, postal code and country to enable N N Travel Hub to efficiently process your request. Use of this service is completely voluntary and you therefore have a choice whether or not to join N N Travel Hub and disclose this information.</p>

<p style={{ marginBottom: '1em' }}><strong>Questions to Expert:</strong> N N Travel Hub visitors can request that N N Travel Hub contact them via e-mail or phone call regarding a specific travel question submitted online. In this case, N N Travel Hub will request your e-mail address so that we may reach you quickly and easily. Use of this service is completely voluntary and you therefore have a choice whether or not to disclose this information.</p>
<p style={{ marginBottom: '1em' }}><strong>Law Enforcement:</strong> Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
<p style={{ marginBottom: '1em' }}><strong>Customer Reviews:</strong> When you submit a trip review to share with fellow travelers, you have the choice of providing your e-mail address if you’d like to talk directly with others about the trip. If you have any questions about the security at our Web site, please send an e-mail to <strong>nntravelhub@gmail.com</strong></p>

<p style={{ marginBottom: '1em' }}>If you have any questions about this privacy policy statement or the practices of this site, you can e-mail us at <strong>nntravelhub@gmail.com</strong> or via our Contact Us page
                </p>
              </div>

              
          
          
        </div>

            </div>
          </div>

     
        </section>
      

      
    </>
  );
}
