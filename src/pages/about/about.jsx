
import Breadcrumb from '../../components/breadcrumbs/breadcrumb';
import Footer from '../../components/footer/footer';
import Nav from '../../components/nav/nav';
import FinalSection from '../../components/sections/final-section/final-section';
import TestimonialSection from '../../components/sections/testimonial-section/testimonial-section';
import './about.css';

const About = () => {
       const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us' }
  ]
  return (
    <>
    <Nav />
<Breadcrumb items={breadcrumbItems} />
    <main className="pva-about-page">
      <header className="pva-about-hero">
        <h1 className="pva-about-hero-title">About Palma Vital Oils</h1>
      </header>

      {/* Who We Are Section */}
      <section className="pva-who-we-are">
        <div className="pva-text-container">
          <h2 className="pva-section-heading">Who We Are</h2>
          <p className="pva-body-copy">
            Palma Vital Oils is a p21, Family Size-proudly Nigerian brand dedicated to producing pure, 
            cold-pressed palm kernel oil for homes, restaurants, and wellness lovers across the country.
          </p>
          <p className="pva-body-copy">
            Our goal is simple: make high-quality, natural oil available to every family — without 
            preservatives, additives, or shortcuts.
          </p>
          <p className="pva-body-copy">
            We believe food should nourish the body, strengthen families, and bring people together, 
            and our oil is made to support that everyday joy.
          </p>
        </div>
        <div className="pva-image-container">
          <img src="/a1.svg" alt="Nigerian market harvest" className="pva-hero-img" />
        </div>
      </section>

      {/* Our Story Section */}
     <section className="pv-story-section">
      <div className="pv-story-container">
        
        {/* Left Side: Image Grid */}
        <div className="pv-story-visual-grid">
          <div className="pv-grid-main">
            <img src="/a2.svg" alt="5L Premium Jar with splash" />
          </div>
          <div className="pv-grid-top-right">
            <img src="/a3.svg" alt="Hands holding palm kernels" />
          </div>
          <div className="pv-grid-bottom-right">
            <img src="/a4.svg" alt="Detail of oil pouring" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="pv-story-content-block">
          <h2 className="pv-story-heading">Our Story</h2>
          
          <p className="pv-story-paragraph">
            What started as a small local production has grown into a trusted household name. 
            We noticed many families were using low-quality oils that affected the taste 
            and healthiness of their meals.
          </p>

          <p className="pv-story-intro-list">So we focused on creating an oil that is:</p>
          <ul className="pv-story-bullet-list">
            <li>Pure</li>
            <li>Fresh</li>
            <li>Cold-pressed</li>
            <li>Rich in nutrients</li>
            <li>Safe for the whole family</li>
          </ul>

          <p className="pv-story-paragraph">
            Today, Palma Vital Oils is supplied to homes, supermarkets, restaurants, 
            and skincare businesses — and we continue to expand across Nigeria.
          </p>
        </div>

      </div>
    </section>
      {/* Our Promise Section */}
      <section className="pva-our-promise">
        <h2 className="pva-section-heading pva-center-text">Our Promise</h2>
        <p className="pva-body-copy pva-center-text pva-max-width">
          Palma Vital is more than just oil — it's a partner in your kitchen, helping you prepare 
          meals that nourish, inspire, and bring people together.
        </p>
        <div className="pva-promise-gallery">
          <img src="/meal1.svg" alt="Egusi Soup" className="pva-gallery-img" />
          <img src="/meal2.svg" alt="Vegetable Soup" className="pva-gallery-img" />
          <img src="/meal3.svg" alt="Jollof Rice" className="pva-gallery-img" />
        </div>
      </section>
      <TestimonialSection />
      <section className="pva-partner-section">
      <div className="pva-partner-container">
        <span className="pva-partner-badge">Wholesale</span>
        <h2 className="pva-partner-title">Partner With Us</h2>
        <p className="pva-partner-subtitle">
          Grow with a brand that Nigerians trust. <br />
          We offer great margins, timely supply, and nationwide support.
        </p>
        <button 
          className="pva-partner-cta-btn"
          onClick={() => window.open('https://wa.me/2348134567789', '_blank')}
        >
          Join Our Distributor Network
        </button>
      </div>
    </section>
    </main>
      <Footer />
      </>
  );
};

export default About;