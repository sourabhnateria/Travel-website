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
                
                <h2 className="about-title">N N Travel Hub: FAQs</h2>
              </div>

              {/* Description */}
              <div className="about-description" textAlign="center">
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >What services does N N Travel Hub offer?</h3> <br/>
                    N N Travel Hub offers a wide range of services including travel packages across India and to destinations like Dubai, Singapore, Thailand, Sri Lanka, and Malaysia. We also provide customized tour packages, hotel bookings, transportation arrangements, and sightseeing options, all at affordable prices.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>How can I book a tour package with N N Travel Hub?</h3> <br/>
                    Booking with us is easy! You can visit our website at nntravelhub.com to explore our packages and make a booking. Alternatively, you can reach out to us via email at nntravelhub@gmail.com for assistance with your booking.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >Can I customize a tour package to suit my preferences and interests?</h3> <br/>
                    Absolutely! We specialize in creating customized tour packages tailored to your specific preferences, interests, and budget. Simply let us know your requirements, and we’ll work with you to design the perfect itinerary.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>What are the popular destinations offered by N N Travel Hub?</h3> <br/>
                    Absolutely! We specialize in creating customized tour packages tailored to your specific preferences, interests, and budget. Simply let us know your requirements, and we’ll work with you to design the perfect itinerary.
                </p>

                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >Do you provide accommodation options as part of your packages?</h3> <br/>
                    Yes, we do! N N Travel Hub offers a range of accommodation options to suit various budgets and preferences. We can help you book hotels that align with your travel needs.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>What documentation do I need for international travel, such as visas and passports?</h3> <br/>
                    For international travel, it’s essential to have a valid passport and, in most cases, a visa. Our team can guide you through the visa application process and provide any necessary information regarding documentation requirements for your chosen destination.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >Are there any age restrictions for booking with N N Travel Hub?</h3> <br/>
                    While there are no strict age restrictions, certain activities or destinations may have specific age limitations for participation. We recommend checking with our team when booking, so we can provide you with accurate information based on your travel preferences.                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>Many Tour Packages Price display ₹0 (Zero)?</h3> <br/>
                    If tour package prices display as ₹0 (Zero), it’s either a technical error or the new prices haven’t been updated yet.                
                </p>


                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >What types of transportation arrangements can I expect with your packages?</h3> <br/>
                    We arrange various types of transportation depending on your chosen package. This can include flights, trains, private transfers, or rental cars, ensuring you have convenient and comfortable travel options.                
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>How can I get in touch with N N Travel Hub for further assistance?</h3> <br/>
                    you can reach out to us via email at nntravelhub@gmail.com for any inquiries or assistance you may need. Our dedicated team is ready to help you with any questions you have.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >What is the best time to visit specific destinations in India?</h3> <br/>
                    The best time to visit different destinations in India can vary based on factors such as weather, festivals, and local events. Our experienced team can provide you with detailed information to help you plan your trip.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>Do you offer any special deals or discounts on your packages?</h3> <br/>
                    Yes, N N Travel Hub occasionally offers special promotions, discounts, and seasonal deals. Keep an eye on our website for any ongoing offers.
                </p>

                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >Is it possible to make changes to my itinerary after booking?</h3> <br/>
                    We understand that travel plans can change. Depending on the circumstances and availability, we’ll do our best to accommodate any necessary changes to your itinerary. Please contact us at the earliest convenience if you need to make adjustments.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }}>What is the cancellation policy for bookings made with N N Travel Hub?</h3> <br/>
                    Our cancellation policy varies depending on the specific package and service booked. We encourage you to review our detailed cancellation policy on our website or contact us directly for specific information related to your booking.
                </p>
                <p style={{ marginBottom: '1.5em' }}>
                    <h3 style={{ marginBottom: '-1em' }} >How can I stay updated on N N Travel Hub's latest offers and promotions?</h3> <br/>
                    To stay updated on our latest offers and promotions, we recommend subscribing to our newsletter on our website. Additionally, you can follow us on our social media platforms for real-time updates on exciting travel deals and experiences.                
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
