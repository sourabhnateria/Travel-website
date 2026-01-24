import React from 'react';
import worldBanner from '../assets/world/world-banner.jpg'
import tajMahalImg from '../assets/world/content-image.png';
import madhyaImg from '../assets/world/dubai.jpg';
import RajasthanImg from '../assets/world/singapore.jpg';
import IndonesiaImg from '../assets/world/indonesia.jpg';
import ThailandImg from '../assets/world/thailand.jpg';
import MalaysiaImg from '../assets/world/malaysia.jpg';
import SrilankaImg from '../assets/world/srilanka.jpg';
import './World.css';

const destinations = [
  { name: "Dubai", img: madhyaImg, tours: "",slug: "dubai" },
  { name: "Singapore", img: RajasthanImg, tours: "",slug: "singapore" },
  { name: "Indonesia", img: IndonesiaImg, tours: "",slug: "indonesia" },
  { name: "Thailand", img: ThailandImg, tours: "",slug: "thailand" },
  { name: "Malaysia", img: MalaysiaImg, tours: "",slug: "malaysia" },
  { name: "Srilanka", img: SrilankaImg, tours: "",slug: "srilanka" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  
];

export default function World() {
  return(
      <>
            <section className="world-banner-section">
              <img src={worldBanner} alt="About Us" className="world-banner-img" />
              <div className="world-banner-overlay"></div>
              <h1 className="world-banner-heading">World</h1>
            </section>

            <section className="world-feature-section">
                  <div className="world-feature-container">
                    <div className="world-feature-text">
                      <h2>Travel International</h2>
                      <p>
                      A global adventure with Travel India Tourism, your gateway to an array of captivating destinations. Our diverse tour packages seamlessly blend convenience and excitement, offering everything from hotel accommodations to car rentals, visas, and air tickets. Explore the gleaming skyscrapers and bustling souks of Dubai, or unwind amidst the pristine beaches and lush landscapes of Thailand. Delve into the rich cultural tapestry of Indonesia, with its ancient temples and vibrant markets, or immerse yourself in the scenic beauty and rich history of Vietnam.
                      </p>
                      <p>
                      Experience the melting pot of cultures in Malaysia, where modernity meets tradition, or marvel at the breathtaking landscapes of Switzerland, with its snow-capped peaks and picturesque villages. Discover the tropical paradise of Sri Lanka, renowned for its stunning beaches, lush tea plantations, and ancient ruins.
                      </p>
                      <p>
                        Venture into the vibrant city-state of Singapore, where futuristic architecture coexists with lush greenery and bustling markets. Whatever your destination, Travel India Tourism ensures a seamless and unforgettable travel experience. With our expertly curated packages, you can explore the world with ease, creating memories to last a lifetime. Book your international adventure with Travel India Tourism today and let us guide you on the journey of a lifetime.
                      </p>
                    </div>
                    <div className="world-feature-image">
                      <img src={tajMahalImg} alt="Taj Mahal" />
                    </div>
                  </div>
                </section>
            
                <section className="world-destinations-section">
                  <div className="world-destinations-header">
                    <div className="destination-subtitle-row">
                      <span className="destination-line"></span>
                      <span className="destination-subtitle">INTERNATIONAL</span>
                      <span className="destination-line"></span>
                    </div>
                    <h2 className="world-destinations-title">EXPLORE WORLD</h2>
                    <p className="world-destinations-text">
                        Discover International enchanting destinations, from the tranquil seas to majestic mountains. With N N Travel Hub
                    </p>
                  </div>
                  <div className="world-destinations-grid">
                    {destinations.map((dest, i) => (
                      <div className="world-dest-card" onClick={() => window.open(`/international/${dest.slug}`, '_blank')} key={i}>
                        <img src={dest.img} alt={dest.name} loading="lazy" />
                        <div className="world-dest-overlay">
                          <span className="world-dest-name">{dest.name}</span>
                          <button className="world-dest-tours"><a href={`/international/${dest.slug}`} target="_blank" rel="noopener noreferrer" >{dest.tours}</a></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
      </>
    )
}