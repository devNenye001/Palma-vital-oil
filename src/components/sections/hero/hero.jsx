import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Left Content */}
      <div className="hero-text-content">
        <p className="brand-name">PALMA VITAL OIL</p>
        <h1 className="hero-title">
          <span className="text-red">Pure</span> taste. <br />
          True <span className="text-red">freshness</span>.
        </h1>
        <p className="hero-description">
          From our farms to your kitchen — bottled with care and quality.
        </p>
        <div className="hero-buttons">
          <Link to="/shop">
          <button className="btn-filled">Order Now</button>
          </Link>
          <Link to="/distributor">
          <button className="btn-outline">Become a Distributor</button>
          </Link>
        </div>
      </div>

      {/* Right Content - Product Image */}
      <div className="hero-image-container">
        <img 
          src="/hero.svg" 
          alt="Palma Vital Oil Products" 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;