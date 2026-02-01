import React from 'react';
import './products.css';
import Breadcrumb from '../../components/breadcrumbs/breadcrumb';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';

 const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop' }
  ]

const Products = () => {
  const productList = [
    {
      id: 1,
      name: "1L Palma Vital Oil",
      tagline: "Daily cooking made easy.",
      price: "N2500",
      image: "/p1.svg"
    },
    {
      id: 2,
      name: "2L Family Size",
      tagline: "More value, same freshness.",
      price: "N5500",
      image: "/p2.svg"
    },
    {   
      id: 3,
      name: "5L Premium Jar",
      tagline: "For homes, restaurants & bulk buyers.",
      price: "N7500",
      image: "/p3.svg"
    }
  ];

  return (
    <>
    <Nav />
    <Breadcrumb items={breadcrumbItems} />
    <main className="pv-products-page">
      <header className="pv-products-header">
        <h1 className="pv-products-main-title">Shop</h1>
      </header>

      <section className="pv-products-grid">
        {productList.map((product) => (
          <div key={product.id} className="pv-product-item-card">
            <div className="pv-product-image-wrapper">
              <img 
                src={product.image} 
                alt={product.name} 
                className="pv-product-img-element" 
              />
            </div>
            <div className="pv-product-info-block">
              <h3 className="pv-product-name-text">{product.name}</h3>
              <p className="pv-product-tagline-text">{product.tagline}</p>
              <h4 className="pv-product-price-value">{product.price}</h4>
            </div>
          </div>
        ))}
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Products;