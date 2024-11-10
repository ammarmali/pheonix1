/* eslint-disable no-unused-vars */
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="consultant-section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51e7681cf599c87e33a3df3a7344ec157eb4a2ad9aa1fb0187fbdc479439b455?placeholderIfAbsent=true&apiKey=a2acdceba9474ffebdaf77e02b0399d6"
        alt=""
        className="background-image"
      />
      <div className="content-wrapper1">
        <div className="content-container">
          <h1 className="main-heading12 animated-element  ">Your Professional DEI Consultant</h1>
          <p className="description">
            Our commitment to DEI ensures that every individual has the opportunity to thrive and succeed.
          </p>
          <a href="#" className="cta-button" role="button">
            <span className="cta-text">Free Self Analysis</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
