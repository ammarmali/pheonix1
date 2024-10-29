/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './AdminPanel.css';

const ServiceCard = ({ title, description, price, duration, image }) => {
  return (
    <article className="service-card">
      <img loading="lazy" src={image} className="service-image" alt={`${title} service illustration`} />
      <h2 className="service-title">{title}</h2>
      <p className="service-description">{description}</p>
      <div className="purchase-container">
        <button className="purchase-button">purchase</button>
        <span className="price">{price}</span>
        <span className="duration">{duration}</span>
      </div>
    </article>
  );
};

export default ServiceCard;
