import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
import { NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // New state for navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [pagesDropdown, setPagesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past initial point
      setIsScrolled(currentScrollY > 50);
      
      // Auto-hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up or at top - show navbar
        setIsVisible(true);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

   // Close mobile menu/dropdown when resizing window or navigating
  useEffect(() => {
    const handleResize = () => setIsMobileMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const navItems = [
  //   { name: 'Home', to: 'hero' },
  //   { name: 'About', to: 'about' },
  //   { name: 'India', to: 'destinations' },
  //   { name: 'World', to: 'world' },
  //   { name: 'Pages', to: 'pages' },
    
  //   { name: 'Contact', to: 'contact' }
  // ];

  return (
    <>
      {/* Top bar with contact info and social media */}
      <div className={`top-bar ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="top-bar-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@nntravelhub.com">nntravelhub@gmail.com</a>
            </div>
          </div>
          
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="nav-container">
          {/* Logo Section with Image, Company Name & Slogan */}
          <div className="nav-logo">
            <div className="logo-container">
              <img 
                src="/nn.jpeg" 
                alt="N N Travel Hub Logo" 
                className="logo-image"
              />
              <div className="brand-text">
                <h2 className="company-name">N N Travel Hub</h2>
                <p className="company-slogan">One Hub To Endless Journey</p>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <NavLink to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)} end>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/b2b" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              B2B
            </NavLink>
            <NavLink to="/india" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              India
            </NavLink>
            <NavLink to="/world" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              World
            </NavLink>
            {/* Dropdown for Visa Services & Blogs */}
            <div
              className="nav-link dropdown"
              onMouseEnter={() => setPagesDropdown(true)}
              onMouseLeave={() => setPagesDropdown(false)}
              onClick={() => setPagesDropdown(!pagesDropdown)}
              tabIndex={0}
            >
              Pages <i className="fas fa-angle-down"></i>
              <div className={`dropdown-content${pagesDropdown ? ' show' : ''}`}>
                <NavLink to="/visa-services" className="dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Visa Services</NavLink>
                <NavLink to="/blogs" className="dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Blogs</NavLink>
              </div>
            </div>
            <NavLink to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </NavLink>
          </div>
          
          {/* <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.to}
                activeClass="active"
                to={item.to}
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div> */}

          <div 
            className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
