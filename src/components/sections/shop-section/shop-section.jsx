import React from 'react';
import './shop-section.css';
import ProductCard from '../../productCard/productCard';
import { Link } from 'react-router-dom';


const products = [
  {
    image: '/one-litre.png',
    title: '1L Palma Vital Oil',
    description: 'Daily cooking made easy.',
    price: 'N2500'
  },
  {
    image: '/two-litres.png',
    title: '2L Family Size',
    description: 'More value, same freshness.',
    price: 'N5500'
  },
  {
    image: '/five-litres.png',
    title: '5L Premium Jar',
    description: 'For homes, restaurants & bulk buyers.',
    price: 'N7500'
  },
  {
    image: '/twenty-five-litres.png',
    title: '25L Premium Gallon',
    description: 'Bulk packaging for commercial & industrial use.',
    price: 'N35,000'
  }
];

const ShopSection = () => {
  return (
    <>
      <section className="shop-section">
        <div className="shop-header">
          <div className="header-left">
            <span className="shop-badge">Shop</span>
            <h2 className="shop-title">Our <span className="text-red">Best</span> Sellers</h2>
          </div>

         <Link to="/products">
    <button className="view-all-btn">View all Products</button>
</Link>

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
    </section >
    </>
  );
};

export default ShopSection;