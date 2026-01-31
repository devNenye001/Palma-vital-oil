import React from 'react';
import './wholesale-section.css';

const WholesaleSection = () => {
  return (
    <section className="wholesale-section">
      {/* Header Content */}
      <div className="wholesale-header">
        <span className="section-badge">Wholesale</span>
        <h2 className="wholesale-title">
          Become a <span className="text-red">Distributor</span>
        </h2>
        <p className="wholesale-subtitle">
          Grow with a brand that Nigerians trust. <br />
          We offer great margins, timely supply, and nationwide support.
        </p>
        <button className="join-network-btn">Join Our Distributor Network</button>
      </div>

      {/* Banner Image with Overlay */}
      <div className="wholesale-banner">
        <div className="banner-overlay">
          <h2 className="banner-text">Pure. Fresh. Trusted.</h2>
        </div>
        <img 
          src="/wholesale.svg" 
          alt="Group of Palma Vital Oil bottles" 
          className="banner-img"
        />
      </div>
    </section>
  );
};

export default WholesaleSection;