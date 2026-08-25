import React from 'react';
import './Maintenance.css';

const Maintenance = () => {
  return (
    <div className="maintenance-wrapper">
      <div className="maintenance-card">
        {/* Browser Window Illustration */}
        <div className="browser-illustration">
          <svg className="illustration-svg" viewBox="0 0 320 200" width="100%" height="100%">
            {/* Top Bar Dots */}
            <circle cx="20" cy="20" r="4.5" fill="#FF5F56" />
            <circle cx="34" cy="20" r="4.5" fill="#FFBD2E" />
            <circle cx="48" cy="20" r="4.5" fill="#27C93F" />

            {/* Vertical Split Line */}
            <line x1="160" y1="0" x2="160" y2="200" stroke="#E4E4E7" strokeWidth="1" />

            {/* Left Side Hexagon Nut (Light Gray / White) */}
            <path 
              d="M 160,65 L 129.8,82.4 L 129.8,117.6 L 160,135 L 160,113 A 13,13 0 0,0 160,87 Z" 
              fill="#F4F4F5" 
              stroke="#D4D4D8" 
              strokeWidth="1.5" 
            />

            {/* Right Side Hexagon Nut (Black) */}
            <path 
              d="M 160,65 L 190.2,82.4 L 190.2,117.6 L 160,135 L 160,113 A 13,13 0 0,1 160,87 Z" 
              fill="#000000" 
              stroke="#000000" 
              strokeWidth="1.5" 
            />

            {/* Circuit Line 1 (Upper right) */}
            <path 
              d="M 190.2,82.4 L 225,82.4 L 225,50 L 255,50" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <circle cx="255" cy="50" r="3" fill="#000000" />

            {/* Circuit Line 2 (Lower right) */}
            <path 
              d="M 190.2,117.6 L 240,117.6 L 240,110" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <circle cx="240" cy="110" r="3" fill="#000000" />

            {/* Circuit Line 3 (Bottom center) */}
            <path 
              d="M 160,135 L 160,175" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
            <circle cx="160" cy="175" r="3" fill="#000000" />

            {/* Background Circuit detail lines */}
            <path 
              d="M 245,20 L 275,20 L 275,60" 
              fill="none" 
              stroke="#E4E4E7" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M 275,100 L 290,100 L 290,140" 
              fill="none" 
              stroke="#E4E4E7" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Text Content */}
        <h1 className="maintenance-heading">Under Maintenance</h1>
        <p className="maintenance-text">
          The page you're looking for is currently under maintenance and will be back soon.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
