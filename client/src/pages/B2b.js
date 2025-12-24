import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import aboutBanner from '../assets/b2b.jpg'; // Use your actual filename!
import './About.css';

export default function B2b() {

    
 
  return (
    <>
      {/* <Navbar /> */}

      <section className="about-banner-section">
        <img src={aboutBanner} alt="About Us" className="about-banner-img" />
        <div className="about-banner-overlay"></div>
        <h1 className="about-banner-heading">B2B</h1>
      </section>

      <section className="about-section-home" id="about">
        <div className="about-home-container">
         
          {/* Right Column - Content */}
          <div className="about-content-column">
            <div className="about-content">
              
              {/* Section Header */}
              <div className="about-header">
                
                <h2 className="about-title">N N Travel Hub: A Decade of Expertise and A Dedicated Partner for B2B Agents in Madhya Pradesh Tourism</h2>
              </div>

              {/* Description */}
              <div className="about-description" textAlign="center">
                <p marginBottom="20px">
                    N N Travel Hub, a leading Destination Management Company (DMC) of Madhya Pradesh, has been working tirelessly to serve the B2B agent community. By offering customized tours of Madhya Pradesh with exclusive B2B rates, N N Travel Hub provides a valuable proposition for travel agents to ensure their clients experience the best of this culturally rich and diverse state. Here's why partnering with N N Travel Hub is beneficial for B2B agents:
                </p>
                <h3><br/>Benefits for B2B Agents:<br/></h3>
                <p style={{ marginBottom: '1em' }}><strong>1.       Exclusive B2B Rates:</strong> N N Travel Hub offers competitive and exclusive rates tailored for B2B agents, ensuring higher margins and profitability for their partners.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>2.    Customized Tour Packages:</strong> Agents can collaborate with N N Travel Hub to create tailor-made itineraries based on their clients' preferences. Whether it’s wildlife safaris, heritage tours, or spiritual journeys, every package can be customized.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>3. Dedicated Support:</strong> The team at N N Travel Hub provides dedicated support to B2B agents, offering assistance with bookings, itinerary planning, and on-ground operations. This ensures a seamless experience for both agents and their clients.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>4. Local Expertise:</strong> With an in-depth knowledge of Madhya Pradesh, N N Travel Hub ensures that agents have access to insider insights and hidden gems. This expertise helps agents offer unique experiences to their clients.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>5. Wide Range of Experiences:</strong> From rural tours to adventure activities, N N Travel Hub offers a wide array of experiences, enabling agents to cater to diverse client interests. This versatility makes it easier for agents to fulfill specific requests.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>6. Special Tours & MICE Movements:</strong> N N Travel Hub offers specialized tours, including Women Tours, Senior Citizen Tours, Educational Tours for Schools and Colleges, and Special Interest Tours. Additionally, N N Travel Hub facilitates MICE Movements like Corporate Offsites, Conferences, Seminars, Sales Meets, Dealer Meets, and Management/Officer Retreats with seamless travel support.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>7. Efficient Communication:</strong> Quick response times and transparent communication make working with N N Travel Hub hassle-free. Agents receive regular updates on bookings, ensuring no last-minute surprises.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>8. Trusted Network:</strong> N N Travel Hub has a strong network of local vendors, accommodations, and transportation services across Madhya Pradesh. This ensures reliability and quality service for clients, making the agent’s job smoother.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>9. Marketing Support:</strong> N N Travel Hub also offers marketing collateral, including brochures and digital assets, that agents can use to promote Madhya Pradesh tours to their clients, enhancing their own sales efforts.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>10. High Client Satisfaction:</strong> With a focus on delivering memorable experiences, N N Travel Hub ensures high client satisfaction. Happy clients mean repeat business and positive referrals for agents.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>11. Sustainable Tourism Practices:</strong> N N Travel Hub emphasizes eco-friendly and responsible tourism, allowing agents to offer ethical travel options to clients who value sustainability.
</p>
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
