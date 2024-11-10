/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './ShopPage.css';

const ShopHero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animated-element');
    elements.forEach((element) => {
      element.classList.add('animate');
    });
  }, []);

  return (
    <div className="shop-hero-wrapper-shop">
      <section className="shop-hero">

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51e7681cf599c87e33a3df3a7344ec157eb4a2ad9aa1fb0187fbdc479439b455?placeholderIfAbsent=true&apiKey=a2acdceba9474ffebdaf77e02b0399d6"
        alt=""
        className="background-image-shop"/>
        
        <div className="hero-content-shop">
          <h2 className="primary-heading animated-element">
            Empowering Inclusive Growth
          </h2>
          <h1 className="secondary-heading animated-element">
            SHOP DEI SERVICES
          </h1>
          <p className="hero-paragraph-S animated-element">
          At the PhoenixRize DEI Services Shop, inclusive growth begins here. Explore our range of DEI solutions, from strategy consultations to leadership coaching, and easily purchase the services that meet your needs. Take the first step towards building a more diverse and equitable workplace today..
          </p>

        </div>
      </section>
    </div>
  );
};

export default ShopHero;
