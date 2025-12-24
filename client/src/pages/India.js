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
  { name: "Madhya Pradesh", img: madhyaImg, tours: "4 Tours", slug: "madhya-pradesh" },
  { name: "Uttar Pradesh", img: UttarPradeshImg, tours: "6 Tours", slug: "uttar-pradesh" },
  { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours", slug: "rajasthan" },
  { name: "Gujarat", img: GujaratImg, tours: "6 Tours", slug: "gujarat" },
  { name: "Daman & Diu", img: DamanImg, tours: "6 Tours", slug: "daman" },
  { name: "Maharashtra", img: MaharashtraImg, tours: "6 Tours", slug: "maharashtra" },
  { name: "Himachal Pradesh", img: HimachalImg, tours: "6 Tours", slug: "himachal-pradesh" },
  { name: "Jammu & Kashmir", img: JammuImg, tours: "6 Tours", slug: "jammu-kashmir" },
  { name: "Ladakh", img: LadakhImg, tours: "6 Tours", slug: "ladakh" },
  { name: "Uttarakhand", img: UttarakhandImg, tours: "6 Tours", slug: "uttarakhand" },
  { name: "Goa", img: GoaImg, tours: "6 Tours", slug: "goa" },
  { name: "Kerala", img: KeralaImg, tours: "6 Tours", slug: "kerala" },
  { name: "Karnataka", img: KarnatakaImg, tours: "6 Tours", slug: "karnataka" },
  { name: "Tamil Nadu", img: TamilImg, tours: "6 Tours", slug: "tamil-nadu" },
  { name: "Andhra Pradesh", img: AndhraImg, tours: "6 Tours", slug:"andhra-pradesh" },
  { name: "Andman & Nikobar", img: AndmanImg, tours: "6 Tours", slug: "andman-nicobar" },
  // { name: "Rajasthan", img: RajasthanImg, tours: "6 Tours" },
  
];

export default function India() {
  return(
    <>
          <section className="about-banner-section">
            <img src={aboutBanner} alt="About Us" className="about-banner-img" />
            <div className="about-banner-overlay"></div>
            <h1 className="about-banner-heading">India</h1>
          </section>

          <section className="india-feature-section">
      <div className="india-feature-container">
        <div className="india-feature-text">
          <h2>Travel India</h2>
          <p>
          Exploring India's tourist destinations and culture festivals promises an enriching journey filled with diversity and warmth. India's vast landscape is a canvas of experiences waiting to be discovered. Begin your adventure by visiting the Taj Mahal in Agra, a stunning symbol of love, and immerse yourself in the cultural tapestry of Delhi's historic sites. Dive into Rajasthan's royal heritage in Jaipur and Udaipur, where you'll encounter majestic palaces and vibrant bazaars. Travel to Kerala to unwind in tranquil backwaters or bask in the sun on Goa's beautiful beaches. Experience the spiritual essence of Varanasi along the sacred Ganges River.
          </p>
          <p>
          But it's not just about the destinations; India's culture festivals are a vibrant tapestry. Witness Diwali's dazzling lights, Holi's colorful celebrations, and the unity of Eid. Embrace the welcoming spirit of the Indian people who greet you with open hearts. Explore bustling markets, savor mouthwatering cuisine, and be captivated by traditional dance and music performances. India's blend of tradition and modernity creates an unforgettable experience for travelers seeking both cultural immersion and warm hospitality. Come, explore, and discover the incredible India.
          </p>
        </div>
        <div className="india-feature-image">
          <img src={tajMahalImg} alt="Taj Mahal" />
        </div>
      </div>
    </section>

    <section className="india-destinations-section">
      <div className="india-destinations-header">
        <div className="destination-subtitle-row">
          <span className="destination-line"></span>
          <span className="destination-subtitle">DESTINATIONS</span>
          <span className="destination-line"></span>
        </div>
        <h2 className="india-destinations-title">EXPLORE INDIA</h2>
        <p className="india-destinations-text">
            Discover India's enchanting destinations, from the tranquil seas to majestic mountains. With N N Travel Hub
        </p>
      </div>
      <div className="india-destinations-grid">
        {destinations.map((dest, i) => (
          <div className="india-dest-card" key={i}>
            <img src={dest.img} alt={dest.name} />
            <div className="india-dest-overlay">
              <span className="india-dest-name">{dest.name}</span>
              <button  className="india-dest-tours"> <a href={`/india/${dest.slug}`} target="_blank" rel="noopener noreferrer" >{dest.tours}</a></button>
            </div>
          </div>
        ))}
      </div>
    </section>

    
    </>
  )
  
}