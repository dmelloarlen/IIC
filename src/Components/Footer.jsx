import React from 'react';
import '../CSS/Footer.css'; // Import the CSS file for styling
import { FaPhoneAlt, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content d-flex justify-content-between">
        <div className="contact-info">
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span><a href='tel:+919665348677'>9665348677</a></span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span><a href='mailto:iic@tpoly.in'>iic@tpoly.in</a></span>
          </div>
        </div>
        <div className="social-media">
          <a href="https://www.instagram.com/tpolyiic/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://wa.me/9665348677" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
