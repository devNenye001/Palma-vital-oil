import React from 'react';
import './about-section.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side: Text Content */}
        <div className="about-text-content">
          <span className="about-badge">About Us</span>
          <h2 className="about-title">
            About <br />
            The <span className="text-red">brand.</span>
          </h2>
          
          <div className="about-description">
            <p className="highlight-text">Quality isn’t a claim — it’s our process.</p>
            <p>
              Palma Vital Oils delivers premium, fresh palm oil sourced 
              from trusted Nigerian farms.
            </p>
            <p>
              Each batch is carefully processed to maintain its natural 
              color, aroma, and richness. Perfect for family meals, 
              restaurants, and bulk buyers who value purity.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="about-image-container">
          <img 
            src="/about1.svg" 
            alt="Fresh Nigerian Palm Fruit Bunches" 
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;