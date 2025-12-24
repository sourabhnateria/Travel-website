import React, { useState, useEffect } from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
// Import your background image from src/assets
import heroImage from '../assets/your-hero-image.png'; // Update with your image name
// import aboutImage from '../assets/about-image.jpg';
import aboutImage1 from '../assets/about-image1.png'; // Add your images
import aboutImage2 from '../assets/about-image2.png';
import aboutImage3 from '../assets/about-image3.png';
import aboutImage4 from '../assets/about-image4.png'; // Update with your image name
import rajasthanImg from '../assets/rajasthan.png';
import lehLadakhImg from '../assets/destinations/leh-ladakh.png';
import andamanImg from '../assets/destinations/andaman.png';
import kashmirImg from '../assets/destinations/kashmir.png';
import madhyaPradeshImg from '../assets/destinations/madhya-pradesh.png';
import keralaImg from '../assets/destinations/kerala.png';
import westBengalImg from '../assets/destinations/west-bengal.png';
import tamilNaduImg from '../assets/destinations/tamil-nadu.png';
import himachalPradeshImg from '../assets/destinations/himachal-pradesh.png';
import bhopal from '../assets/destinations/Bhopal/bhopal1.jpg';


const Hero = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // ✅ NEW: State for modal
  const [selectedDestination, setSelectedDestination] = useState(null);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ✅ Location to route mapping
  const locationRoutes = {
    'India': '/india',
    'Madhya Pradesh': '/india/madhya-pradesh',
    'Uttar Pradesh': '/india/uttar-pradesh',
    'Rajasthan': '/india/rajasthan',
    'Gujarat': '/india/gujarat',
    'Daman': '/india/daman',
    'Maharashtra': '/india/maharashtra',
    'Himachal Pradesh': '/india/himachal-pradesh',
    'Jammu & Kashmir': '/india/jammu-kashmir',
    'Ladakh': '/india/ladakh',
    'Uttarakhand': '/india/uttarakhand',
    'Goa': '/india/goa',
    'Kerala': '/india/kerala',
    'Karnataka': '/india/karnataka',
    'Tamil Nadu': '/india/tamil-nadu',
    'Andhra Pradesh': '/india/andhra-pradesh',
    'Andaman & Nicobar': '/india/andaman-nicobar',
    'West Bengal': '/india/west-bengal'
  };

  // ✅ Location to route mapping
  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!location) {
      alert('Please select a destination');
      return;
    }

    // ✅ Updated handleSearch with navigation
    const route = locationRoutes[location];
    if (route) {
      navigate(route);
    } else {
      console.log('Search:', { location, checkIn, checkOut });
      alert(`Searching for: ${location}`);
    }
  };

  // Services data
  const services = [
    {
      id: 1,
      title: "India Tour",
      icon: "fas fa-map-marked-alt",
      bgColor: "#a7f3d0", // Light green
      iconColor: "#065f46"
    },
    {
      id: 2,
      title: "International Tour",
      icon: "fas fa-globe-americas",
      bgColor: "#bfdbfe", // Light blue
      iconColor: "#1e40af"
    },
    {
      id: 3,
      title: "Air Ticket",
      icon: "fas fa-plane",
      bgColor: "#93c5fd", // Medium blue
      iconColor: "#1e40af"
    },
    {
      id: 4,
      title: "Visa Services",
      icon: "fas fa-passport",
      bgColor: "#7dd3fc", // Sky blue
      iconColor: "#0c4a6e"
    },
    {
      id: 5,
      title: "Honeymoon Package",
      icon: "fas fa-heart",
      bgColor: "#ddd6fe", // Light purple
      iconColor: "#6b21a8"
    }
  ];

  

  const aboutServices = [
    'Travel Packages',
    'Hotel',
    'Transportation',  
    'Air Ticket',
    'Visa'
  ];

  const aboutImages = [
    aboutImage1,
    aboutImage2,
    aboutImage3,
    aboutImage4
  ];



  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % aboutImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearTimeout(timer);
  }, [currentImageIndex, aboutImages.length]);


  const mpdestinations = [
    {
      id: 1,
      name: "BHOPAL, TAWA, MADHAI, PACHMARHI",
      image: bhopal,
      size: "large",
      duration: "6 Days / 5 Nights",
      price: "₹0",
      images: [madhyaPradeshImg, madhyaPradeshImg, madhyaPradeshImg],
      about: "Experience the rich heritage of Bhopal, Unesco heritage site, etc.",
      highlights: [
        "The City of Lakes",
        "UNESCO Heritage Site",
        "Ratapani Wildlife Sanctuary",
        "Serene Reservoir Amidst Greenery",
        "Gateway to Satpura's Exquisite Forests",
        "Pachmarhi - Queen of Satpura"
      ],
      included: [
        "	The costing is based on per person basis.",
        "	Meal plan as per hotel tariff",
        "AC Sedan will be provided for 2 Pax and Innova Crysta will be given for 4 and above pax for all transfers – pickup from Nagpur to Drop at Bhopal."

      ],
      excluded: [
        "	Anything not mentioned in Inclusions",
"	Safari charges are not included",
"	Entry Fee for any sightseeing, Monuments etc",
"	Air or Train Fare"

      ],
      itinerary: [
        {
          day: 1,
          title: "Bhopal - The City of Lakes",
          description: "Embark on an exciting road trip from the vibrant city of Bhopal, surrounded by picturesque landscapes. Explore the serene beauty of the lakes, with the Boat Club offering enchanting boat rides. Start your sightseeing early to make the most of the day."
        },
        {
          day: 2,
          title: "Bhimbetka - UNESCO Heritage Site",
          description: "Travel approximately 45 km from Bhopal to Bhimbetka, known for its UNESCO World Heritage caves. This historic site, steeped in legend from the Mahabharata, is a haven for adventure seekers, historians, and nature lovers."
        },
        {
          day: 3,
          title: "Amargarh Waterfalls - Ratapani Wildlife Sanctuary",
          description: "Head southeast about 60 km from Bhopal to reach the Amargarh Waterfalls within the Ratapani Wildlife Sanctuary. Embrace the lush surroundings and relish the tranquility of this picturesque destination, especially captivating during the monsoon."
        },
        {
          day: 4,
          title: "Tawa Dam - Serene Reservoir Amidst Greenery",
          description: "Travel approximately 80 km from Amargarh Waterfalls to reach Tawa Dam, nestled amidst lush greenery. Enjoy enchanting sunsets over the dam and embark on a serene lake cruise, offering breathtaking views of little islands and the Satpura hills."
        },
        {
          day: 5,
          title: "Madai - Gateway to Satpura's Exquisite Forests",
          description: "Madhai, located at the entrance of the enchanting Satpura forests, offers absolute tranquility and mystique. Delight in its rich wildlife, sprawling meadows, and spellbinding views, immersing yourself in nature's magic."
        },
        {
          day: 6,
          title: "Pachmarhi - Queen of Satpura",
          description: "Conclude your road trip in Pachmarhi, a favoured destination in Madhya Pradesh. Marvel at scenic waterfalls and lush green valleys, making it an ideal picnic spot. Experience the captivating beauty of Pachmarhi, especially during the monsoon season. Pack your bags and set off on a memorable road trip across Madhya Pradesh, known as the Heart of Incredible India. This journey promises not just exploration but a treasure trove of cherished memories amidst nature's grandeur."
        }
      ]
    },
    {
      id: 2,
      name: "Pachmarhi",
      image: lehLadakhImg,
      size: "large",
      duration: "5 Days / 4 Nights",
      price: "₹0",
      images: [lehLadakhImg, lehLadakhImg, lehLadakhImg],
      about: "Discover Pachmarhi, the Queen of Satpura. Explore beautiful waterfalls, ancient caves, and lush green valleys in this hill station.",
      highlights: [
        "Arrival and Tawa Exploration",
        "Madhai Wilderness",
        "Wildlife Expedition to Pachmarhi",
        "Pachmarhi Exploration",
        
      ],
      included: [
        "The costing is based on per person basis.",
        "Meal plan as per hotel tariff",
        "AC Sedan will be provided for 2 Pax and Innova Crysta will be given for 4 and above pax for all transfers - pickup from Nagpur to Drop at Bhopal.",
        
      ],
      excluded: [
        "Anything not mentioned in Inclusions",
        "Safari charges are not included",
        "Open gypsy at Pachmarhi not included",
        "Entry Fee for any sightseeing, Monuments etc",
        "Air or Train Fare"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival and Tawa Exploration",
          description: ["Morning arrival in Bhopal via Train/Flight/Bus.",
            "Welcome & Check-In followed by breakfast/refreshments at the hotel.",
            "Journey to Tawa (120 Kms) with a stop at Bhimbetka on route.",
            "Check-In at Hotel Tawa Resort, lunch, and relaxation.",
            "Evening stroll to the Dam, enjoy Evening Tea, followed by dinner & overnight stay."
          ]

        },
        {
          day: 2,
          title: "Madhai Wilderness",
          description: ["Breakfast and departure for Madhai (50 Kms) via a scenic Motor Boat (Jalpari) - 2 hours journey.",
            "Check-In at Bison Resort, Madhai. Lunch at leisure",
            "Evening Park Safari Round & Tea, optional Night Park Safari Round/Nature Walk.",
            "Dinner & Overnight stay amidst the wilderness.",
          ]
        },
        {
          day: 3,
          title: "Wildlife Expedition to Pachmarhi",
          description: ["Morning Park Safari round followed by breakfast.",
            "Departure for Pachmarhi (90 Kms) post lunch.",
            "Check-In at Hotel Highland, Tea, Dinner & Overnight stay."
          ]
        },
        {
          day: 4,
          title: "Pachmarhi Exploration",
          description: ["Full-day sightseeing after breakfast.",
            "Lunch amidst nature, enjoy Evening Tea, Dinner & Overnight stay."
          ]
        },
        {
          day: 5,
          title: "Departure and Shopping",
          description: ["Breakfast followed by a free morning for shopping or personal exploration.",
"Lunch and departure for Bhopal (200 Kms) to conclude the tour.",
"This updated itinerary highlights the natural wonders and wildlife experiences across Tawa, Madhai, and Pachmarhi, allowing travellers to immerse themselves in the scenic beauty and wildlife while ensuring comfortable stays and well-paced exploration."
          ]
        }
      ]
    },
    {
      id: 3,
      name: "GWALIOR, ORCHHA, KHAJURAHO",
      image: andamanImg,
      size: "large",
      duration: "5 Days / 4 Night",
      price: "₹0",
      images: [andamanImg, andamanImg, andamanImg],
      about: "",
      highlights: [
        "Gwalior Fort, Jai Vilas Palace, Tansen Tomb, Gujari Mahal, Gurudwara Data Bandi Chhor Sahib, etc",
        "Orchha Fort, Jahangir Mahal, Raja Ram Mandir, Chaturbhuj Temple etc.",
        "Khajuraho Heritage",
        "Raneh Fall/Ken Gadiyal Sanctuary/Pandav fall",
        
      ],
      included: [
        "	The costing is based on per person basis.",
"	Meal plan as per hotel tariff",
"	AC Sedan will be provided for 2 Pax and Innova Crysta will be given for 4 and above pax for all transfers – pickup from Nagpur to Drop at Bhopal."
      ],
      excluded: [
        "	Anything not mentioned in Inclusions",
"	Safari charges are not included",
"	Entry Fee for any sightseeing, Monuments etc",
"	Air or Train Fare",

      ],
      itinerary: [
        {
          day: 1,
          title: "Gwalior Welcome",
          description: "Pickup from Gwalior Airport and transfer to the hotel and complete the check-in process. After get freshen up move to visit – Gwalior Fort, Jai Vilas Palace, Tansen Tomb, Gujari Mahal, Gurudwara Data Bandi Chhor Sahib, etc. Evening you can opt to go for local market visit to explore the Delicate and light cotton along with Maheshwari and Chanderi Silk Saris. The dinner and a cozy overnight stay at hotel."
        },
        {
          day: 2,
          title: "Orchha Expedition",
          description: "Start the day with a fulfilling breakfast and complete the checkout process. Later depart for Orchha (120 Kms). On arrival check-in to the hotel and after take rest proceed to visit – Orchha Fort, Jahangir Mahal, Raja Ram Mandir, Chaturbhuj Temple etc. In the evening you opt to visit light & sound show (on additional charges basis). Dinner and overnight stay at hotel."
        },
        {
          day: 3,
          title: "Khajuraho Heritage",
          description: "Rise and shine with breakfast and checkout depart for Khajuraho (170 Kms), where Hotel Payal awaits your check-in. You can opt to go to STATE MUSEUM OF TRIBAL AND FOLK ARTS (on additional charges basis) and in the evening there will be an option to visit “Light and Sound Show” (on additional charges basis). Later get back to the hotel for dinner and comfortable overnight stay."
        },
        {
          day: 4,
          title: "Discovering Khajuraho's Beauty",
          description: "After breakfast, delve into a full-day excursion exploring – Easter and Western Group of Temple in the first half and later opt to go to visit - Raneh Fall/Ken Gadiyal Sanctuary (25 Kms)/Pandav fall. Unwind with an evening tea and savor dinner before a peaceful overnight stay."
        },
        {
          day: 5,
          title: "Departure from Khajuraho",
          description: "Enjoy breakfast before checkout and later departing to drop at Khajuraho Airport/Railway Station."
        }
      ]
    },
    // Add more destinations with similar structure...
    {
      id: 4,
      name: "Khajuraho",
      image: kashmirImg,
      size: "large",
      duration: "2 Days / 1 Night",
      price: "₹9,999",
      images: [kashmirImg],
      about: "UNESCO World Heritage Site famous for stunning temples and intricate sculptures.",
      highlights: ["Western Group Temples", "Eastern Group Temples", "Light & Sound Show"],
      included: ["Hotel", "Breakfast", "Guide"],
      excluded: ["Transport", "Meals"],
      itinerary: [{day: 1, title: "Temple Tour", description: "Full day temple exploration"}]
    },
    {
      id: 5,
      name: "Gwalior",
      image: himachalPradeshImg,
      size: "large",
      duration: "2 Days / 1 Night",
      price: "₹7,999",
      images: [himachalPradeshImg],
      about: "Historic city with magnificent fort and palaces.",
      highlights: ["Gwalior Fort", "Jai Vilas Palace", "Tansen Tomb"],
      included: ["Hotel", "Breakfast"],
      excluded: ["Transport", "Meals"],
      itinerary: [{day: 1, title: "Fort Visit", description: "Explore Gwalior Fort"}]
    },
    {
      id: 6,
      name: "Maheshwar",
      image: keralaImg,
      size: "large",
      duration: "1 Day",
      price: "₹4,999",
      images: [keralaImg],
      about: "Holy town on banks of Narmada River.",
      highlights: ["Ahilya Fort", "Narmada Ghat", "Maheshwari Saree Weaving"],
      included: ["Guide", "Entry fees"],
      excluded: ["Hotel", "Transport"],
      itinerary: [{day: 1, title: "Day Tour", description: "Explore Maheshwar"}]
    },
    {
      id: 7,
      name: "Ujjain",
      image: westBengalImg,
      size: "large",
      duration: "2 Days / 1 Night",
      price: "₹6,999",
      images: [westBengalImg],
      about: "One of the seven sacred cities for Hindus.",
      highlights: ["Mahakaleshwar Temple", "Ram Ghat", "Kal Bhairav Temple"],
      included: ["Hotel", "Breakfast", "Guide"],
      excluded: ["Transport", "Meals"],
      itinerary: [{day: 1, title: "Temple Tour", description: "Visit holy temples"}]
    },
    {
      id: 8,
      name: "Omkareshwar",
      image: tamilNaduImg,
      size: "large",
      duration: "1 Day",
      price: "₹3,999",
      images: [tamilNaduImg],
      about: "Sacred island shaped like Om symbol.",
      highlights: ["Omkareshwar Temple", "Mamleshwar Temple", "Narmada Parikrama"],
      included: ["Guide", "Entry fees"],
      excluded: ["Hotel", "Transport"],
      itinerary: [{day: 1, title: "Temple Visit", description: "Spiritual tour"}]
    },
    {
      id: 9,
      name: "Jabalpur",
      image: rajasthanImg,
      size: "large",
      duration: "2 Days / 1 Night",
      price: "₹8,999",
      images: [rajasthanImg],
      about: "Famous for marble rocks and Narmada river.",
      highlights: ["Bhedaghat Marble Rocks", "Dhuandhar Falls", "Boat Ride"],
      included: ["Hotel", "Breakfast", "Boat ride"],
      excluded: ["Transport", "Meals"],
      itinerary: [{day: 1, title: "Bhedaghat Tour", description: "Explore marble rocks"}]
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: selectedDestination.name,  // ✅ Send tour name as location
          notes: formData.notes,
          tourName: selectedDestination.name,
          tourPrice: selectedDestination.price,
          tourDuration: selectedDestination.duration
        }),
      });
  
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: selectedDestination.name,
          notes: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit enquiry. Please try again.');
    }
  };
  const destinations = [
    {
      id: 1,
      name: "Madhya Pradesh",
      packages: "10 Tour Packages",
      image: madhyaPradeshImg,
      size: "large"
    },
    {
      id: 2,
      name: "Leh Ladakh",
      packages: "6 Tour Packages",
      image: lehLadakhImg,
      size: "medium"
    },
    {
      id: 3,
      name: "Andaman",
      packages: "5 Tour Packages",
      image: andamanImg,
      size: "medium"
    },
    {
      id: 4,
      name: "Kashmir",
      packages: "5 Tour Packages",
      image: kashmirImg,
      size: "medium"
    },
    
    {
      id: 5,
      name: "Himachal Pradesh",
      packages: "6 Tour Packages",
      image: himachalPradeshImg,
      size: "medium"
    },
    {
      id: 6,
      name: "Kerala",
      packages: "8 Tour Packages",
      image: keralaImg,
      size: "medium" // Large card
    },
    {
      id: 7,
      name: "West Bengal",
      packages: "5 Tour Packages",
      image: westBengalImg,
      size: "medium"
    },
    {
      id: 8,
      name: "Tamil Nadu",
      packages: "5 Tour Packages",
      image: tamilNaduImg,
      size: "medium"
    },
    
    {
      id: 9,
      name: "Rajasthan",
      packages: "5 Tour Packages",
      image: rajasthanImg,
      size: "large" // Large card
    },
  ];

  // ✅ Handle destination click
  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  // ✅ Close modal
  const closeModal = () => {
    setSelectedDestination(null);
    document.body.style.overflow = 'auto';
  };

  // ✅ Image navigation in modal
  const nextImage = () => {
    if (selectedDestination) {
      setCurrentImageIndex((prev) =>
        prev === selectedDestination.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedDestination) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedDestination.images.length - 1 : prev - 1
      );
    }
  };



  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="hero-section" id="hero">
        <div className="hero-background">
          <img 
            src={heroImage} 
            alt="Travel Adventure" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Find Your Perfect
              <span className="hero-title-highlight"> Destination</span>
            </h1>
            <p className="hero-description">
              Discover amazing places and create unforgettable memories with N N Travel Hub.
            </p>
          </div>


          {/* Horizontal Search Form - ✅ UPDATED */}
          <div className="search-form-container">
            <form className="horizontal-search-form" onSubmit={handleSearch}>
              
              {/* Location Field - ✅ Changed to SELECT dropdown */}
              <div className="search-field location-field">
                <div className="field-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="field-content">
                  <label className="field-label">Location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="field-input"
                    required
                  >
                    <option value="">Select Destination</option>
                    <option value="India">India - All Destinations</option>
                    <optgroup label="Indian States & UTs">
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Daman">Daman</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="Goa">Goa</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Andaman & Nicobar">Andaman & Nicobar</option>
                      <option value="West Bengal">West Bengal</option>
                    </optgroup>
                  </select>
                </div>
              </div>


              {/* Vertical Divider */}
              <div className="field-divider"></div>


              {/* Check In Date */}
              <div className="search-field date-field">
                <div className="field-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className="field-content">
                  <label className="field-label">Date</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="field-input"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>


              {/* Arrow Icon */}
              <div className="date-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>


              {/* Check Out Date */}
              <div className="search-field date-field">
                <div className="field-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div className="field-content">
                  <label className="field-label">Check out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="field-input"
                    min={checkIn || new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>


              {/* Vertical Divider */}
              <div className="field-divider"></div>


              {/* Search Button */}
              <button type="submit" className="search-button">
                Search
              </button>


            </form>
          </div>
        </div>
      </section>

      {/* Separate Our Services Section - Below Hero */}
      <section className="services-section" id="services">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Our Services</h2>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="service-card"
                style={{ backgroundColor: service.bgColor }}
              >
                <div 
                  className="service-icon"
                  style={{ color: service.iconColor }}
                >
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section with Auto-Changing Images */}
      <section className="about-section-home" id="about">
        <div className="about-home-container">
          
          {/* Left Column - Auto-Changing Image Slider */}
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <div className="image-slider">
                {aboutImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Travel Experience ${index + 1}`}
                    className={`about-image ${
                      index === currentImageIndex ? 'active' : ''
                    }`}
                  />
                ))}
              </div>
              
              {/* Experience Badge Overlay */}
              <div className="experience-badge">
                <div className="badge-number">19+</div>
                <div className="badge-text">
                  <div>Years of</div>
                  <div>Experience</div>
                </div>
              </div>

              {/* Image Indicators */}
              <div className="image-indicators">
                {aboutImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentImageIndex ? 'active' : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-content-column">
            <div className="about-content">
              
              {/* Section Header */}
              <div className="about-header">
                <span className="about-subtitle"><h2>ABOUT US</h2></span>
                <h2 className="about-title">N N Travel Hub</h2>
              </div>

              {/* Description */}
              <div className="about-description">
                <p>
                  N N Travel Hub is a leading travel agency, established in 2005, 
                  specializing in providing exceptional travel experiences across India 
                  and around the world. Trusted by thousands of happy customers, we make 
                  your travel dreams come true with personalized service and unbeatable prices.
                </p>
              </div>

              {/* Services List with Checkmarks */}
              <div className="about-services">
                {aboutServices.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="service-checkmark">
                      <i className="fas fa-check"></i>
                    </div>
                    <span className="service-name">{service}</span>
                  </div>
                ))}
              </div>

              {/* Discover More Button */}
              <div className="about-button">
                <button className="discover-btn" >
                  <a href="./About" target="_blank" rel="noopener noreferrer">Discover More</a>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>

            </div>
          </div>

        </div>
       {/* ✅ MP Destinations Section with Click Handler */}
        <section className='top-destination' id="mpdestinations">
          <div className="top-destination-container">
            
            <div className="destination-header">
              <div className="destination-subtitle-wrapper">
                <div className="subtitle-line"></div>
                <span className="destination-subtitle">Madhya Pradesh</span>
                <div className="subtitle-line"></div>
              </div>
              <h3 className="destination-title">EXPLORE TOUR PACKAGES OF B2B MADHYA PRADESH</h3>
            </div>

            <div className="mpdestinations-grid">
              {mpdestinations.map((destination) => (
                <div 
                  key={destination.id} 
                  className={`destination-card ${destination.size}`}
                  onClick={() => handleDestinationClick(destination)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="destination-image-wrapper">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="destination-image"
                    />
                    
                    <div className="destination-overlay"></div>
                    
                    <div className="destination-info">
                      <h3 className="destination-name">{destination.name}</h3>
                      {/* <span className="destination-packages">{destination.duration}</span>
                      <span className="destination-price">{destination.price}</span> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </section>
      </section>
      <section className='top-destination' id="destinations">
      <div className="top-destination-container">
        
        {/* Section Header */}
        <div className="destination-header">
          <div className="destination-subtitle-wrapper">
            <div className="subtitle-line"></div>
            <span className="destination-subtitle">DESTINATIONS</span>
            <div className="subtitle-line"></div>
          </div>
          <h2 className="destination-title">TOP DESTINATIONS</h2>
          <p className="destination-description">
            Discover India's enchanting destinations, from the tranquil seas to majestic mountains. With 
            N N Travel Hub
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className={`destination-card ${destination.size}`}
            >
              <div className="destination-image-wrapper">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="destination-image"
                />
                <div className="destination-overlay"></div>
                
                {/* Destination Info */}
                <div className="destination-info">
                  <h3 className="destination-name">{destination.name}</h3>
                  <span className="destination-packages">{destination.packages}</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Explore India Card */}
          <div className="destination-card explore-card">
            <div className="explore-content">
              <h3 className="explore-title">EXPLORE INDIA</h3>
              <p className="explore-description">
                India, a country of diverse heritage, from ancient temples to colonial architecture. 
                Its landscapes range from serene coastlines to towering mountains, 
                complemented by lush national parks.
              </p>
              <button className="explore-btn">
                <a href="./India" target="_blank" rel="noopener noreferrer">Explore Now</a>
                <div className="explore-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    {/* ✅ MODAL for MP Destinations */}
      {selectedDestination && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            {/* Image Slider */}
            <div className="image-slider">
              <img
                src={selectedDestination.images[currentImageIndex]}
                alt={selectedDestination.name}
              />
              <button className="slider-btn prev" onClick={prevImage}>‹</button>
              <button className="slider-btn next" onClick={nextImage}>›</button>
              
              <div className="image-indicators">
                {selectedDestination.images.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  ></span>
                ))}
              </div>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <h2 className="modal-tour-title">{selectedDestination.name}</h2>
              <p className="modal-tour-duration">
                {selectedDestination.duration} • {selectedDestination.price}
              </p>

              {/* About */}
              <div className="detail-section">
                <h3>About This Tour</h3>
                <p>{selectedDestination.about}</p>
              </div>

              {/* Highlights */}
              <div className="detail-section">
                <h3>Tour Highlights</h3>
                <ul className="highlights-list">
                  {selectedDestination.highlights.map((highlight, index) => (
                    <li key={index}>
                      <i className="fas fa-star"></i> {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Included/Excluded */}
              <div className="detail-section">
                <h3>What's Included & Excluded</h3>
                <div className="included-excluded-grid">
                  <div className="included-col">
                    <h4><i className="fas fa-check-circle"></i> Included</h4>
                    <ul>
                      {selectedDestination.included.map((item, index) => (
                        <li key={index}>
                          <i className="fas fa-check"></i> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="excluded-col">
                    <h4><i className="fas fa-times-circle"></i> Excluded</h4>
                    <ul>
                      {selectedDestination.excluded.map((item, index) => (
                        <li key={index}>
                          <i className="fas fa-times"></i> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="detail-section">
                <h3>Day-by-Day Itinerary</h3>
                <div className="itinerary-list">
                  {selectedDestination.itinerary.map((day) => (
                    <div key={day.day} className="itinerary-item">
                      <div className="itinerary-header">
                        <div>
                          <span className="day-num">Day {day.day}</span>
                          <span className="day-title"> - {day.title}</span>
                        </div>
                      </div>
                      <div className="itinerary-content">
                        {Array.isArray(day.description) ? (
            <ul className="itinerary-points">
              {day.description.map((point, index) => (
                <li key={index}>
                  <i className="fas "></i> {point}
                </li>
              ))}
            </ul>
          ) : (
                        <p>{day.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <section className="detail-section">
  <h3>Book This Tour</h3>
  <div className="enquiry-contact-grid">
    {/* Enquiry Form - Left Side */}
    <div className="enquiry-form-card">
      <h4>Send Enquiry</h4>
      {formSubmitted ? (
        <div className="success-message">
          <i className="fas fa-check-circle"></i>
          <h5>Thank You!</h5>
          <p>We have received your enquiry. Our team will get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="enquiry-form">
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Your full name"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              placeholder="+91 XXXXX XXXXX"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Selected Tour</label>
            <input
              type="text"
              name="TourName"
              value={selectedDestination.name}
              readOnly
              className="readonly-input"
            />
          </div>
          
          <div className="form-group">
            <label>Additional Requirements</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleFormChange}
              placeholder="Tell us about any special requirements, preferences, or questions..."
              rows="4"
            ></textarea>
          </div>
          
          <button type="submit" className="submit-enquiry-btn">
            <i className="fas fa-paper-plane"></i> Send Enquiry
          </button>
        </form>
      )}
    </div>

    {/* Contact Information - Right Side */}
    <div className="contact-info-card">
      <h4>Contact Information</h4>
      <div className="contact-details">
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span className="contact-label">Email</span>
            <a href="mailto:info@nntravelhub.com">info@nntravelhub.com</a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div className="contact-text">
            <span className="contact-label">Phone</span>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span className="contact-label">Website</span>
            <a href="https://nntravelhub.com" target="_blank" rel="noopener noreferrer">
              www.nntravelhub.com
            </a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="contact-text">
            <span className="contact-label">Address</span>
            <p>N N Travel Hub, Bhopal<br/>Madhya Pradesh, India</p>
          </div>
        </div>
      </div>
      
      <div className="contact-hours">
        <h5><i className="fas fa-clock"></i> Business Hours</h5>
        <p>Monday - Saturday: 9:00 AM - 7:00 PM<br/>Sunday: 10:00 AM - 5:00 PM</p>
      </div>
      
      <div className="social-links">
        <h5>Follow Us</h5>
        <div className="social-icons">
          <a href="facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
          {/* <a href="#" target="_blank"><i className="fab fa-whatsapp"></i></a> */}
        </div>
      </div>
    </div>
  </div>
</section>

            </div>
            
            </div>
            
        </div>
        
        
      )}
      
    </>
  );
};

export default Hero;
