/* eslint-disable no-unused-vars */
// HeroSection.js
import React from "react";
import "./HeroSection.css"; // Import the CSS file

const HeroSection = () => {
  return (
     
    <section className="consultant-section">
      <div className="consultant-content">
        <div className="text-column">
          <div className="text-wrapper">
            <h1 className="consultant-title">Your <span>Professional DEI</span>  Consultant</h1>
            <p className="consultant-description">
              Our commitment to DEI ensures that every individual has the opportunity to thrive and succeed.
            </p>
          </div>
        </div>
        <div className="image-column">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/59c881acaa77f324f9feeb74640c4a2569ff37168b8f58f11804eeedf90fe0de?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
            className="consultant-image"
            alt="Professional DEI Consultant illustration"
          />
        </div>
      </div>
      <div className="button-column">
        <a href="#contact" className="consultant-button">
          Free Self Analysis
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
