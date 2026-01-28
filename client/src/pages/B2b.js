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
                    N N Travel Hub operates as a reliable destination management partner for travel agents and tour operators looking to promote Madhya Pradesh. We work closely with the B2B travel community to design value-driven, flexible, and well-managed travel solutions that help agents deliver exceptional experiences to their clients.

By combining local expertise with practical operational support, we enable our B2B partners to confidently sell Madhya Pradesh as a diverse and culturally rich destination.
                </p>
                <h3><br/>Why Partner with N N Travel Hub (For B2B Agents):<br/><br/></h3>
                <p style={{ marginBottom: '1em' }}><strong>1.       Preferential Agent Pricing:</strong> We provide specially structured B2B pricing designed to support better margins and long-term partnerships. Our rates are competitive, transparent, and aligned with agent business needs.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>2.    Flexible & Tailor-Made Itineraries:</strong> Our team works hand-in-hand with agents to create customized itineraries based on client interests, travel style, and budget. From heritage circuits and wildlife experiences to spiritual and cultural tours, every plan is adaptable.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>3. Dedicated B2B Coordination:</strong> Each B2B partner receives focused operational support for itinerary planning, confirmations, and on-ground coordination. This ensures smooth execution and reduces operational burden for agents.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>4. Strong Local Knowledge:</strong> With deep familiarity of Madhya Pradesh’s destinations, routes, and experiences, we help agents offer authentic travel programs that go beyond standard sightseeing.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>5. Diverse Travel Experiences:</strong> We offer a wide range of travel options including cultural tours, rural experiences, adventure activities, and special-interest travel allowing agents to cater to varied customer segments.<br/></p>

{/* <p style={{ marginBottom: '1em' }}><strong>6. Special Interest & MICE Travel:</strong> N N Travel Hub offers specialized tours, including Women Tours, Senior Citizen Tours, Educational Tours for Schools and Colleges, and Special Interest Tours. Additionally, N N Travel Hub facilitates MICE Movements like Corporate Offsites, Conferences, Seminars, Sales Meets, Dealer Meets, and Management/Officer Retreats with seamless travel support.<br/></p> */}

<p style={{ marginBottom: '1em' }}><strong>6. Clear & Prompt Communication:</strong> We believe strong partnerships are built on communication. Our team ensures timely responses, clear updates, and smooth coordination at every stage of the booking process.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>7. Trusted Local Network:</strong> Our established network of hotels, transport providers, and local service partners across Madhya Pradesh ensures consistent service quality and operational reliability.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>8. Sales & Marketing Assistance:</strong> To support agent sales efforts, we provide promotional materials and digital resources that help showcase Madhya Pradesh travel products effectively to end customers.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>9. Focus on Client Satisfaction:</strong> Every program is executed with attention to detail and guest experience. Satisfied travelers translate into repeat business and positive word-of-mouth for our agent partners.<br/></p>

<p style={{ marginBottom: '1em' }}><strong>10. Responsible & Sustainable Travel:</strong> We promote responsible tourism practices by supporting local communities and encouraging environmentally conscious travel experiences.
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
