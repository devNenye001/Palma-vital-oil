import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Modern icons
import './nav.css';
import Button from '../button/button';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img src="/logo1.svg" alt="Palma vita oil logo" height="60"/>
      </Link>
      
      {/* Mobile Toggle Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </div>

      {/* Desktop & Mobile Links */}
      <div className={`navlinks ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/products" onClick={toggleMenu}>Products</Link>
        <Link to="/about" onClick={toggleMenu}>About us</Link>
        <Link to="/distributor" onClick={toggleMenu}>Become a Distributor</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        <Link to="/faqs" onClick={toggleMenu}>FAQs</Link>
        
        {/* Button inside menu for mobile */}
        <div className="mobile-cta">
           <Link to="/shop" onClick={toggleMenu}>
            <Button label="Shop Now"/>
          </Link>
        </div>
      </div>

      {/* Button hidden on mobile, visible on desktop */}
      <div className="desktop-cta">
        <Link to="/shop">
          <Button label="Shop Now"/>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;