import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './faqs.css';
import Nav from '../../components/nav/nav';
import Breadcrumb from '../../components/breadcrumbs/breadcrumb';
import Footer from '../../components/footer/footer';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set first item open by default

  const faqData = [
    {
      question: "What is Palma Vital Oil made from?",
      answer: "Palma Vital is made from pure, cold-pressed palm kernel oil, extracted without chemicals to keep all the natural nutrients intact."
    },
    {
      question: "Is Palma Vital healthy for cooking?",
      answer: "Yes, our oil is processed naturally to retain essential vitamins and antioxidants, making it a healthy and aromatic choice for all Nigerian delicacies."
    },
    {
      question: "Do you offer discounts for bulk/wholesale?",
      answer: "Absolutely! We have special pricing for restaurants, hotels, and bulk distributors. Reach out to us via WhatsApp for our wholesale price list."
    },
    {
      question: "How do I place an order?",
      answer: "You can place an order directly through our website shop or click the WhatsApp button to chat with a representative for instant processing."
    },
    {
      question: "Do you deliver nationwide?",
      answer: "Yes, we deliver to all 36 states in Nigeria. Shipping times vary depending on your location, but we prioritize fast and secure delivery."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

   const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'FAQs' }
  ]

  return (
    <>
    <Nav />
    <Breadcrumb items={breadcrumbItems} />
    <main className="pvf-faq-wrapper">
      <div className="pvf-faq-layout">
        
        {/* Left Side: Header & CTA */}
        <div className="pvf-faq-intro">
          <h1 className="pvf-faq-main-title">
            Read our <br />
            <span className="pvf-text-red">FAQs</span>
          </h1>
          <p className="pvf-faq-subtitle">
            Find quick, clear answers to help you shop with confidence and choose what’s best for your home and kitchen.
          </p>
          <a 
            href="https://wa.me/2348134567789" 
            className="pvf-contact-support-btn"
            target="_blank" 
            rel="noreferrer"
          >
            Contact Support
          </a>
        </div>

        {/* Right Side: Accordion List */}
        <div className="pvf-accordion-container">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`pvf-accordion-item ${activeIndex === index ? 'pvf-active' : ''}`}
            >
              <button 
                className="pvf-accordion-header" 
                onClick={() => toggleAccordion(index)}
              >
                <span className="pvf-question-text">{item.question}</span>
                <span className="pvf-icon-wrapper">
                  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              
              <div className="pvf-accordion-body">
                <p className="pvf-answer-text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
    <Footer />
    </>
  );
};

export default FAQs;