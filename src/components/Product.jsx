/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

import './Product.css';

const products = [
  { id: 1, name: 'Diversity & Inclusion Policy Review', description: "A one-on-one consultation to assess your organization's DEI needs and create a tailored strategy.", price: '$100', image: 'src/components/bigfoot-represented-neon-glow 2.png' },
  { id: 2, name: 'Diversity & Inclusion Policy Review', description: "A one-on-one consultation to assess your organization's DEI needs and create a tailored strategy.", price: '$100', image: 'src/components/bigfoot-represented-neon-glow 2.png' },
  { id: 3, name: 'Diversity & Inclusion Policy', description: "A one-on-one consultation to assess your organization's DEI needs and create a tailored strategy.", price: '$120', image: 'src/components/bigfoot-represented-neon-glow 2.png' },
  { id: 4, name: 'Diversity & Inclusion Policy Review', description: "A one-on-one consultation to assess your organization's DEI needs and create a tailored strategy.", price: '$100', image: 'src/components/bigfoot-represented-neon-glow 2.png' },
  { id: 5, name: 'Diversity & Inclusion Policy', description: "A one-on-one consultation to assess your organization's DEI needs and create a tailored strategy.", price: '$110', image: 'src/components/bigfoot-represented-neon-glow 2.png' },
  { id: 6, name: 'Diversity & Inclusion Policy Review', description: "A one-on-one consultation to assess your organization's DEI needs and create a tailored strategy.", price: '$100', image: 'src/components/bigfoot-represented-neon-glow 2.png' },
];

const PhoenixRizeSection = () => {
  return (
    <><div className="phoenixrize-section">
      <div className="container">
        <div className="heading-group">
          <h2 className="main-heading"><span>PHOENIXRIZE</span> DEI SHOP SERVICE</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <div className="image-placeholder">No Image Available</div>
              )}
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <button className="buy-button">Purchase</button>
                <span className="product-price">
                  {product.price} (1 HOUR)
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="purchase-guide-container">
      <div className="purchase-guide-overlay"></div>
      <div className="purchase-guide-content">
        <h1 className="purchase-guide-gradient-text">How To Purchase:</h1>
        <div className="purchase-guide-section">
          <h2 className="purchase-guide-heading">Select Your Services:</h2>
          <p className="purchase-guide-description">Browse through our offerings and add your selected services to the cart.</p>
        </div>
        <div className="purchase-guide-section">
          <h2 className="purchase-guide-heading">Checkout:</h2>
          <p className="purchase-guide-description">Once you're ready, head to the checkout to complete your purchase.</p><p className="purchase-guide-description"> You'll receive an email confirmation with the next steps.</p>
        </div>
        <div className="purchase-guide-section">
          <h2 className="purchase-guide-heading">Schedule:</h2>
          <p className="purchase-guide-description">After purchase, a member of our team will reach out within 24 hours to schedule your service.</p>
        </div>
      </div>
    </div></div></>
  );
};

export default PhoenixRizeSection;