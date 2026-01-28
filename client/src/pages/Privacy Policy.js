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
                
                <h2 className="about-title">Privacy Policy - N N Travel Hub</h2>
              </div>

              {/* Description */}
              <div className="about-description" textAlign="center">
                <p style={{ marginBottom: '1em' }}>
                    At N N Travel Hub, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>

<p style={{ marginBottom: '1em' }}><strong>Information We Collect:</strong> We may collect personal details such as your name, email address, phone number, country, and postal code when you voluntarily submit information through our website forms. This information is collected only when you choose to share it with us.</p>
<p ><strong>How We Use Your Information:</strong></p><ul style={{ marginBottom: '1em' }}>The information you provide is used solely to:

<li style={{ marginLeft: "20px" }}>Respond to your travel inquiries</li>

<li style={{ marginLeft: "20px" }}>Assist with trip planning and booking requests</li>

<li style={{ marginLeft: "20px" }}>Communicate with you regarding services you have requested</li>
<li style={{ marginLeft: "20px" }}>Improve our customer service and user experience</li>

<li style={{ marginLeft: "20px" }}>We do not sell, rent, or trade your personal information to third parties.</li>
</ul>
<p style={{ marginBottom: '1em' }}><strong>Booking & Reservation Requests:</strong> When you submit a booking or reservation request, we collect the necessary details required to process your request efficiently. Providing this information is completely voluntary, and you may choose not to proceed if you prefer not to share personal details.</p>

<p style={{ marginBottom: '1em' }}><strong>Travel Queries & Support Requests:</strong> If you contact us through the website for travel-related questions, we may request your contact details so our team can respond to you via email or phone. Sharing this information is optional and based on your consent.</p>
<p style={{ marginBottom: '1em' }}><strong>Data Security:</strong> We take reasonable measures to protect your personal information. All collected data is stored securely and accessed only by authorized personnel for legitimate business purposes.</p>
<p style={{ marginBottom: '1em' }}><strong>Legal Requirements:</strong> In certain situations, we may be required to disclose personal information if mandated by law or in response to lawful requests from government or legal authorities.</p>
<p style={{ marginBottom: '1em' }}><strong>Customer Feedback & Reviews:</strong> If you choose to submit reviews or feedback, you may optionally share your email address to allow communication related to your review. This information is shared only with your consent.</p>
<p style={{ marginBottom: '1em' }}><strong>Contact Information:</strong> If you have any questions or concerns about this Privacy Policy or how your information is handled, you can contact us at: <strong>nntravelhub@gmail.com</strong> or through our Contact page on the website.
                </p>
              </div>

              
          
          
        </div>

            </div>
          </div>

     
        </section>
      

      
    </>
  );
}
