import React from 'react';
import './testimonial-section.css';

const TestimonialSection = () => {
  const reviews = [
    {
      id: 1,
      image: '/test1.svg',
      text: "The color is so fresh. My soup always comes out perfect.",
      name: "Mama Emeka",
      type: "image-card"
    },
    {
      id: 2,
      text: "Palma Vital has really improved my cooking. The oil is clean, fresh, and gives my meals a richer taste without feeling heavy. I love how consistent the quality is, and it has become my go-to for soups and everyday cooking. Ever since I started using it, my food simply tastes better.",
      name: "Mrs Obioma Ogbonna",
      type: "text-card"
    },
    {
      id: 3,
      image: '/test2.svg',
      text: "Clean, rich and delivered fast.",
      name: "Mrs Zainab Aliyu",
      type: "image-card"
    }
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <span className="section-badge">Testimonials</span>
        <h2 className="testimonial-title">
          What Our <span className="text-red">Customers</span> Say
        </h2>
      </div>

      <div className="testimonial-grid">
        {reviews.map((review) => (
          <div key={review.id} className={`testimonial-card ${review.type}`}>
            {review.type === "image-card" && (
              <div className="card-image-bg">
                <img src={review.image} alt="User meal" />
              </div>
            )}
            
            <div className="card-content">
              <p className="review-text">"{review.text}"</p>
              <h4 className="customer-name">{review.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;