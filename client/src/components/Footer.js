import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Quick Contact</h3>
                        <p>One of the leading Travel agency In Bhopal,<br/> Madhya Pradesh,<br/> 462044 <br/>
                            +91 7354251333<br/>
                            nntravelhub@gmail.com</p>
                    </div>
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="./About">About us</a></li>
                            <li><a href="./Blogs">Community Blog</a></li>
                            <li><a href="./privacy-policy">Privacy policy</a></li>
                            <li><a href="./terms-and-conditions">Terms of service</a></li>
                            <li><a href="cancellation-policy">Cancellation & Refund Policy</a></li>
                            <li><a href="shipping-delivery-policy">Shipping & Delivery Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="./faq" target="_blank" rel="noopener noreferrer">FAQ</a>
                            <a href="./Contact" target="_blank" rel="noopener noreferrer">Get in touch</a>
                            <a href="career" target="_blank" rel="noopener noreferrer">Careers</a>
                            
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Social</h4>
                        <div className="social-links">
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
                <div className="footer-bottom">
                    <p>&copy; {currentYear} N N Travel Hub | All rights reserved.<p className='creator'> This website is developed by <a className='name' href='https://sourabhnateria.vercel.app/'>Sourabh Nateria</a></p></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
