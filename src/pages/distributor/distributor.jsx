import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import './distributor.css';
import Footer from '../../components/footer/footer';
import Breadcrumb from '../../components/breadcrumbs/breadcrumb';
import Nav from '../../components/nav/nav';

const Distributor = () => {
  const benefits = [
    { title: "High Demand, Everyday Product", desc: "Nigerian homes cook with oil daily — sell a product people already love." },
    { title: "Top-Quality, Cold-Pressed Oil", desc: "Our purity and consistency make repeat sales easy." },
    { title: "Bulk Prices & Profit Margins", desc: "Enjoy discounted rates that give you strong, stable profit per carton." },
    { title: "Fast Nationwide Delivery", desc: "We deliver to your location quickly so you never run out of stock." },
    { title: "Marketing Support", desc: "Photos, videos, posters, and product content to help you promote and sell easily." }
  ];

  const categories = [
    "Supermarkets", "Mini-marts", "Wholesalers", "Skincare vendors", 
    "Restaurant owners", "Market traders", "Entrepreneurs looking to start a side business", 
    "Individuals buying in bulk to resell"
  ];

  const steps = [
    { num: 1, title: "Fill the Distributor Form", desc: "Provide your name, location and expected quantity." },
    { num: 2, title: "Receive Wholesale Price List", desc: "We'll send you the updated bulk prices and options." },
    { num: 3, title: "Make Your Order", desc: "Choose your quantities and preferred bottle sizes." },
    { num: 4, title: "Delivery to Your Location", desc: "We process and deliver your products quickly, anywhere in Nigeria." }
  ];
      const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: ' Become a Distributor' }
  ]
  return (
    <>
    <Nav />
<Breadcrumb items={breadcrumbItems} />
    <main className="pvd-page-wrapper">
      <header className="pvd-main-header">
        <h1 className="pvd-main-title">Become a Distributor</h1>
      </header>

      {/* Intro Section */}
      <section className="pvd-intro-section">
        <div className="pvd-intro-grid">
          <div className="pvd-intro-visual">
            <img src="/d2.svg" alt="Palm fruit harvest" className="pvd-img-primary" />
          </div>
          <div className="pvd-intro-content">
            <h2 className="pvd-sub-heading">Partner With Palma Vital Oil</h2>
            <p className="pvd-text">
              Join our fast-growing network of distributors across Nigeria. 
              Earn more by supplying premium, natural palm kernel oil trusted by families, 
              supermarkets, restaurants, and skincare brands nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="pvd-benefits-section">
        <div className="pvd-benefits-grid">
          <div className="pvd-benefits-list">
            <h2 className="pvd-sub-heading">Why Become a Distributor?</h2>
            {benefits.map((b, i) => (
              <div key={i} className="pvd-benefit-item">
                <FiCheckCircle className="pvd-icon" />
                <div>
                  <strong>{b.title}</strong>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pvd-benefits-visual">
            <img src="/d3.svg" alt="Palma Vital product line" className="pvd-img-secondary" />
          </div>
        </div>
      </section>

      {/* Who Section */}
      <section className="pvd-target-section">
        <h2 className="pvd-sub-heading pvd-center">Who Can Become a Distributor?</h2>
        <div className="pvd-target-grid">
          <div className="pvd-target-visual">
             <img src="/d4.svg" alt="Oil stock display" className="pvd-img-tertiary" />
          </div>
          <div className="pvd-category-list">
            {categories.map((cat, i) => (
              <div key={i} className="pvd-cat-item">
                <FiCheckCircle className="pvd-icon-small" /> {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="pvd-steps-section">
        <h2 className="pvd-sub-heading pvd-center">How It Works</h2>
        <div className="pvd-steps-container">
          {steps.map((s, i) => (
            <div key={i} className="pvd-step-card">
              <div className="pvd-step-number">{s.num}</div>
              <div className="pvd-step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pva-approval-section">
      <div className="pva-approval-container">
        {/* Left Side: Contact Information */}
        <div className="pva-approval-info">
          <h2 className="pva-approval-title">Contact for Fast Approval</h2>
          
          <div className="pva-approval-details">
            <p className="pva-detail-row">
              <span className="pva-label">Phone Number:</span> +234 813 456 7789
            </p>
            <p className="pva-detail-row">
              <span className="pva-label">Order on WhatsApp:</span> +234 813 456 7789
            </p>
            <p className="pva-detail-row">
              <span className="pva-label">Email Address:</span> info@palmavital.com.ng
            </p>
            <p className="pva-detail-row">
              <span className="pva-label">Location:</span> Enugu, Nigeria
            </p>
          </div>
        </div>

        {/* Right Side: Visual Detail */}
        <div className="pva-approval-visual">
          <img 
            src="/d1.svg" 
            alt="Fresh palm fruit detail" 
            className="pva-approval-img"
          />
        </div>
      </div>
    </section>
    </main>
    <Footer />
     </>
  );
};

export default Distributor;