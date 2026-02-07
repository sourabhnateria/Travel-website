import React from 'react';
// import { Link } from 'react-router-dom';
import aboutBanner from '../assets/india/india-banner.jpg';
import tajMahalImg from '../assets/india/content-image.png';
import madhyaImg from '../assets/india/madhya-pradesh.jpg';
import UttarPradeshImg from '../assets/india/uttar-pradesh.jpg';
import RajasthanImg from '../assets/rajasthan.png';
import GujaratImg from '../assets/india/gujarat.jpg';
import DamanImg from '../assets/india/daman.jpg';
import MaharashtraImg from '../assets/india/maharashtra.jpg';
import HimachalImg from '../assets/india/himachal-pradesh.jpg';
import JammuImg from '../assets/india/jammu-kashmir.jpg';
import LadakhImg from '../assets/india/ladakh.jpg';
import UttarakhandImg from '../assets/india/uttarakhand.jpg';
import GoaImg from '../assets/india/goa.jpg';
import KeralaImg from '../assets/india/kerala.jpg';
import KarnatakaImg from '../assets/india/karnataka.jpg';
import TamilImg from '../assets/india/tamil-nadu.jpg';
import AndhraImg from '../assets/india/andhra-pradesh.jpg';
import AndmanImg from '../assets/india/andman-nicobar.jpg';

import './India.css';

// List of states, you can expand with all 16 like in your screenshot.
const destinations = [
  { name: "Madhya Pradesh", img: madhyaImg, tours: "", slug: "madhya-pradesh" },
  { name: "Uttar Pradesh", img: UttarPradeshImg, tours: "", slug: "uttar-pradesh" },
  { name: "Rajasthan", img: RajasthanImg, tours: "", slug: "rajasthan" },
  { name: "Gujarat", img: GujaratImg, tours: "", slug: "gujarat" },
  { name: "Daman & Diu", img: DamanImg, tours: "", slug: "daman" },
  { name: "Maharashtra", img: MaharashtraImg, tours: "", slug: "maharashtra" },
  { name: "Himachal Pradesh", img: HimachalImg, tours: "", slug: "himachal-pradesh" },
  { name: "Jammu & Kashmir", img: JammuImg, tours: "", slug: "jammu-kashmir" },
  { name: "Ladakh", img: LadakhImg, tours: "", slug: "ladakh" },
  { name: "Uttarakhand", img: UttarakhandImg, tours: "", slug: "uttarakhand" },
  { name: "Goa", img: GoaImg, tours: "", slug: "goa" },
  { name: "Kerala", img: KeralaImg, tours: "", slug: "kerala" },
  { name: "Karnataka", img: KarnatakaImg, tours: "", slug: "karnataka" },
  { name: "Tamil Nadu", img: TamilImg, tours: "", slug: "tamil-nadu" },
  { name: "Andhra Pradesh", img: AndhraImg, tours: "", slug:"andhra-pradesh" },
  { name: "Andman & Nikobar", img: AndmanImg, tours: "", slug: "andman-nicobar" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "" },
  
];

export default function India() {
  return(
    <>
          <section className="about-banner-section">
            <img src={aboutBanner} alt="About Us" className="india-banner-img" loading="lazy" />
            <div className="about-banner-overlay"></div>
            <h1 className="about-banner-heading">India</h1>
          </section>

          <section className="india-feature-section">
      <div className="india-feature-container">
        <div className="india-feature-text">
          <h2>Discover India</h2>
          <p>
          Traveling across India is a journey through vibrant cultures, timeless traditions, and breathtaking landscapes. Each region offers a unique story, creating experiences that are both enriching and unforgettable.
          </p>
          <p>
          Begin your exploration with iconic landmarks like the Taj Mahal in Agra, a masterpiece of architecture and emotion. Walk through the historic streets of Delhi, where ancient monuments and modern life exist side by side. Experience the royal charm of Rajasthan in cities such as Jaipur and Udaipur, known for their grand palaces, colorful markets, and rich heritage. Head south to Kerala to relax amidst peaceful backwaters, or enjoy the lively coastal atmosphere and golden beaches of Goa. Discover spiritual depth in Varanasi, where age-old rituals unfold along the sacred banks of the Ganges.
          </p>
          <p>India’s magic extends beyond its destinations into its celebrations and daily life. Festivals like Diwali, Holi, and Eid reflect the country’s unity, joy, and cultural richness. From flavorful regional cuisine and bustling bazaars to classical music and traditional dance, every moment offers something new to experience.
          </p>
          <p>With its perfect balance of tradition and modern living, India welcomes travelers with warmth and authenticity. Explore its diversity, connect with its people, and create memories that stay with you long after the journey ends.</p>
        </div>
        <div className="india-feature-image">
          <img src={tajMahalImg} alt="Taj Mahal" />
        </div>
      </div>
    </section>

    <section className="india-destinations-section">
      <div className="india-destinations-header">
        <div className="destination-subtitle-row">
          <span className="destination-line" style={{backgroundColor:"#0072ff"}}></span>
          <span className="destination-subtitle" style={{color:"#0072ff"}}>DESTINATIONS</span>
          <span className="destination-line" style={{backgroundColor:"#0072ff"}}></span>
        </div>
        <h2 className="india-destinations-title">EXPLORE INDIA</h2>
        <p className="india-destinations-text">
            Discover India's enchanting destinations, from the tranquil seas to majestic mountains. With N N Travel Hub
        </p>
      </div>
      <div className="india-destinations-grid">
        {destinations.map((dest, i) => (
          <div className="india-dest-card" onClick={() => window.open(`/india/${dest.slug}`, '_self')} key={i}>
            <img src={dest.img} alt={dest.name} />
            <div className="india-dest-overlay">
              <span className="india-dest-name">{dest.name}</span>
              {/* <button  className="india-dest-tours"> <a href={`/india/${dest.slug}`} target="_blank" rel="noopener noreferrer" >{dest.tours}</a></button> */}
            </div>
          </div>
        ))}
      </div>
    </section>

    
    </>
  )
  
}