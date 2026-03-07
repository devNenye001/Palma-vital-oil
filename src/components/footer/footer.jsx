import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand-section">
          <img src="/LOGO3.jpeg" alt="Palma vita oil logo" height="70"/>
          <p className="brand-desc">Premium-quality palm oil processed with care, freshness, and authenticity.</p>
        </div>

        <div className='footer-links-group'>
          <div className='footer-column'>
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About us</Link>
            <Link to="/distributor">Become a Distributor</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faqs">FAQs</Link>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <a href="https://www.instagram.com/palma_vital_oil/" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
            <a href="https://www.tiktok.com/@pamavitaloil" target="_blank" rel="noreferrer"><FaTiktok /> TikTok</a>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <p><FiPhone /> +234 915 645 8850</p>
            <p><FiMail /> info@palmavital.com.ng</p>
            <p><FiMapPin /> Enugu, Nigeria</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Palma Vita Oil.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;