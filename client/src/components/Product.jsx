/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import defaultImage from "../assets/shop.png"; // Default image for products with no specific image
import image1 from "../assets/shop.png";
import image2 from "../assets/shop.png";
import image4 from "../assets/shop.png";
import image6 from "../assets/shop.png";
import "./Product.css";

// Update the product array to reference the imported images
const products = [
  { id: 1, name: "Diversity & Inclusion Policy Review", description: "A one-on-one consultation to assess your organization's DEI needs and create a tailored strategy.", price: "$100", image: image1 },
  { id: 2, name: "Diversity & Inclusion Policy Review", description: "A one-on-one consultation to assess your organization's DEI needs and create a tailored strategy.", price: "$100", image: image2 },
  { id: 3, name: "Diversity & Inclusion Policy", description: "A one-on-one consultation to assess your organization's DEI needs and create a tailored strategy.", price: "$120", image: null }, // No image provided
  { id: 4, name: "Diversity & Inclusion Policy Review", description: "A one-on-one consultation to assess your organization's DEI needs and create a tailored strategy.", price: "$100", image: image4 },
  { id: 5, name: "Diversity & Inclusion Policy", description: "A one-on-one consultation to assess your organization's DEI needs and create a tailored strategy.", price: "$110", image: null }, // No image provided
  { id: 6, name: "Diversity & Inclusion Policy Review", description: "A one-on-one consultation to assess your organization's DEI needs and create a tailored strategy.", price: "$100", image: image6 },
];

const PhoenixRizeSection = () => {
  return (
    <div className="phoenixrize-section">
      <div className="container">
        <div className="heading-group">
          <h2 className="main-heading"><span>PHOENIXRIZE</span> DEI SHOP SERVICE</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image || defaultImage} // Use product image or fallback to defaultImage
                alt={product.name}
              />
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
            <p className="purchase-guide-description">Once you're ready, head to the checkout to complete your purchase. You'll receive an email confirmation with the next steps.</p>
          </div>
          <div className="purchase-guide-section">
            <h2 className="purchase-guide-heading">Schedule:</h2>
            <p className="purchase-guide-description">After purchase, a member of our team will reach out within 24 hours to schedule your service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoenixRizeSection;
