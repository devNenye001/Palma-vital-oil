import React from 'react';
import { FiDroplet, FiTruck } from 'react-icons/fi'; // Feather Icons
import { MdOutlineAgriculture, MdOutlineScience } from 'react-icons/md'; // Material Design
import './features-section.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiDroplet />, 
      title: "Fresh & Pure",
      desc: "Processed under clean conditions to preserve nutrients and natural flavor."
    },
    {
      icon: <MdOutlineAgriculture />, 
      title: "100% Nigerian Sourcing",
      desc: "We support local farmers and local communities."
    },
    {
      icon: <MdOutlineScience />, 
      title: "No Preservatives or Additives",
      desc: "Just rich, natural palm oil."
    },
    {
      icon: <FiTruck />, 
      title: "Nationwide Delivery",
      desc: "Fast shipping to all states in Nigeria."
    }
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <span className="section-badge">Features</span>
        <h2 className="features-main-title">
          Why Choose <br />
          <span className="text-red">Palma Vital Oils?</span>
        </h2>
      </div>

      <div className="features-grid">
        <div className="features-col">
          <FeatureCard {...features[0]} />
          <FeatureCard {...features[1]} />
        </div>

        <div className="features-center">
          <div className="product-bg-blob">
            <img src="/f1.svg" alt="Palma Vital Oil Bottle" />
          </div>
        </div>

        <div className="features-col">
          <FeatureCard {...features[2]} />
          <FeatureCard {...features[3]} />
        </div>
      </div>
       <video src="/ad.mp4" controls loop muted className="home-video" style={{width:"100%", height:"auto", marginTop:"20px"}}/>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="feature-card">
    <div className="feature-icon-container">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-desc">{desc}</p>
  </div>
);

export default FeaturesSection;