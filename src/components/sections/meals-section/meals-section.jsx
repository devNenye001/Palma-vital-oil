import React from 'react';
import './meals-section.css';

const MealsSection = () => {
  const mealGallery = [
    { id: 1, img: '/meal1.svg', alt: 'Egusi Soup' },
    { id: 2, img: '/meal2.svg', alt: 'Nigerian Vegetable Soup' },
    { id: 3, img: '/meal3.svg', alt: 'Jollof Rice and Chicken' },
    { id: 4, img: '/meal4.svg', alt: 'Banga Soup' },
  ];

  return (
    <section className="meals-section">
      <div className="meals-header">
        <span className="section-badge">Meals</span>
        <h2 className="meals-title">
          Good <span className="text-red">meals</span> begin with <span className="text-red">Good</span> oil.
        </h2>
        <p className="meals-description">
          Explore delicious Nigerian dishes made richer, healthier, and more aromatic with Palma Vital Oil. <br />
          From soups to stews and everyday cooking — your meals just hit different.
        </p>
      </div>

      <div className="meals-gallery">
        {mealGallery.map((meal) => (
          <div key={meal.id} className="meal-card">
            <img src={meal.img} alt={meal.alt} className="meal-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MealsSection;