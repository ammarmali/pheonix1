/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import "./AboutHeroSection.css";

const AboutHeroSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animated-element');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
   
      <section className="shop-hero-service">

      <div className="shop-abouthero-wrapper"></div>
        <div className="hero-content">
          <h2 className="primary-heading1 animated-element">
            Empowering Inclusive Excellence
          </h2>
          <h1 className="secondary-heading1 animated-element">
            <span>MEET</span> PhoenixRize
          </h1>
          <button className="buy-button1 animated-element">Free Self Analysis</button>
        </div>
      </section>
   
  );
};

export default AboutHeroSection;
