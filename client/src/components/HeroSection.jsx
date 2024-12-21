/* eslint-disable no-unused-vars */
import React from 'react';
import heroImage from '../assets/hero-image.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="consultant-section-home">
      <img
        src={heroImage}
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
            <button className="cta-home-btn">Free Self Analysis</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
