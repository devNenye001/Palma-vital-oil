import React from 'react';
import './shop-section.css';
import ProductCard from '../../productCard/productCard';


const products = [
  {
    image: '/p1.svg',
    title: '1L Palma Vital Oil',
    description: 'Daily cooking made easy.',
    price: 'N2500'
  },
  {
    image: '/p2.svg',
    title: '2L Family Size',
    description: 'More value, same freshness.',
    price: 'N5500'
  },
  {
    image: '/p3.svg',
    title: '5L Premium Jar',
    description: 'For homes, restaurants & bulk buyers.',
    price: 'N7500'
  }
];

const ShopSection = () => {
  return (
    <section className="shop-section">
      <div className="shop-header">
        <div className="header-left">
          <span className="shop-badge">Shop</span>
          <h2 className="shop-title">Our <span className="text-red">Best</span> Sellers</h2>
        </div>
        <button className="view-all-btn">View all Products</button>
      </div>

      <div className="products-grid">
        {products.map((item, index) => (
          <ProductCard 
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopSection;