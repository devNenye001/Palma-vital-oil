import React from 'react';
import './contact.css';
import Footer from '../../components/footer/footer';
import Nav from '../../components/nav/nav';
import Breadcrumb from '../../components/breadcrumbs/breadcrumb';

const Contact = () => {

   const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact' }
  ]
  return (
    <>
    <Nav />
    <Breadcrumb items={breadcrumbItems} />
   
    <main className="pvc-contact-wrapper">
      {/* Header Section */}
      <header className="pvc-contact-header">
        <h1 className="pvc-header-title">
          We’re Here to <span className="pvc-text-red">Help</span>
        </h1>
        <p className="pvc-header-subtitle">
          Whether you want to order, partner with us, or ask questions — reach out anytime.
        </p>
      </header>

      <div className="pvc-contact-container">
        {/* Form Section */}
        <div className="pvc-form-column">
          <form className="pvc-message-card">
            <h2 className="pvc-card-title">Send us a message.</h2>
            
            <div className="pvc-input-group">
              <label htmlFor="fullName">Full Name<span className="pvc-required">*</span></label>
              <input type="text" id="fullName" required />
            </div>

            <div className="pvc-input-group">
              <label htmlFor="email">Email Address<span className="pvc-required">*</span></label>
              <input type="email" id="email" required />
            </div>

            <div className="pvc-input-group">
              <label htmlFor="message">Message<span className="pvc-required">*</span></label>
              <textarea id="message" rows="6" required></textarea>
            </div>

            <button type="submit" className="pvc-submit-button">Submit</button>
            
            <p className="pvc-form-footer">
              We're always happy to hear from you. Your healthy, delicious cooking starts here. 🌿
            </p>
          </form>
        </div>

        {/* Info & Image Section */}
        <div className="pvc-info-column">
          <div className="pvc-image-wrapper">
            <img 
              src="/contact.svg" 
              alt="Nigerian woman with Palma Vital Oil" 
              className="pvc-contact-brand-img"
            />
          </div>
          
          <div className="pvc-details-block">
            <h3 className="pvc-details-label">Contact</h3>
            <p className="pvc-detail-item">Phone Number: +234 813 456 7789</p>
            <p className="pvc-detail-item">Order on WhatsApp: +234 813 456 7789</p>
            <p className="pvc-detail-item">Email Address: info@palmavital.com.ng</p>
            <p className="pvc-detail-item">Location: Enugu, Nigeria</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default Contact;