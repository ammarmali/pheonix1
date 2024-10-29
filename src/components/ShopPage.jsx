/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './ShopPage.css';

const ShopPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animated-element');
    elements.forEach((element) => {
      element.classList.add('animate');
    });
  }, []);

  return (
    <div className="shop-hero-wrap">
      <section className="shop-hero12">
        <div className="hero-content">
          <h2 className="primary-heading animated-element">
            Empowering Inclusive Growth
          </h2>
          <h1 className="secondary-heading animated-element">
            SHOP DEI SERVICES
          </h1>
          <p className="hero-paragraph animated-element">
          At the Phoenixrize DEI Services Shop, inclusive growth begins here. Explore our range of DEI solutions, from strategy consultations to leadership coaching, and easily purchase the services that meet your needs. Take the first step towards building a more diverse and equitable workplace today..
          </p>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
