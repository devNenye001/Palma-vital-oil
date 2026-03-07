import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Using react-icons as requested
import './final-section.css';

const FinalSection = () => {
  return (
    <section className="final-cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Ready to order? <br />
          We <span className="text-red">deliver nationwide.</span>
        </h2>
        
        <p className="whatsapp-number">
          WhatsApp Us: +234 915 645 8850
        </p>

        <a 
          href="https://wa.me/2349156458850" 
          target="_blank" 
          rel="noreferrer"
          className="whatsapp-btn"
        >
          <FaWhatsapp className="btn-icon" /> Order on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default FinalSection;