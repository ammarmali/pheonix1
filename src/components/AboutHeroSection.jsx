import React, { useEffect } from 'react';
import "./AboutHeroSection.css"
const ShopHero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animated-element');
    elements.forEach((element) => {
      element.classList.add('animate');
    });
  }, []);

  return (
    <div className="shop-hero-wrapper">
      <section className="shop-hero">
        <div className="hero-content">
          <h2 className="primary-heading1 animated-element">
            Empowering Inclusive Excellence
          </h2>
          <h1 className="secondary-heading1 animated-element">
            <span>MEET</span> PhoenixRize
          </h1>
          <button className="buy-button1">Free Self Analysis</button>
        </div>
      </section>
    </div>
  );
};

export default ShopHero;