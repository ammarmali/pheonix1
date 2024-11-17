/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useRef } from 'react';
import './ShopPage.css';

const ShopHero = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Ensure animation is added when the component is mounted
    const elements = document.querySelectorAll('.animated-element');
    elements.forEach((element) => {
      element.classList.add('animate');
    });

    if (paragraphRef.current) {
      const text = paragraphRef.current.textContent;
      paragraphRef.current.setAttribute('data-text', text); // Optional, if you want to capture text
    }
  }, []);

  return (
    <div className="shop-hero-section-wrapper">
      <section className="shop-hero">
        {/* Background image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/51e7681cf599c87e33a3df3a7344ec157eb4a2ad9aa1fb0187fbdc479439b455?placeholderIfAbsent=true&apiKey=a2acdceba9474ffebdaf77e02b0399d6"
          alt="Background Image"
          className="shop-background-image"
        />

        {/* Overlay */}
        <div className="overlay-shop"></div>

        {/* Hero content */}
        <div className="hero-content-shop">
          <h2 className="primary-heading animated-element">
            Empowering Inclusive Growth
       
          </h2>
         
          <h1 className="shop-secondary-heading" data-text="SHOP DEI SERVICES">
            SHOP DEI SERVICES
          </h1>

          {/* Paragraph with typing effect */}
          <p className="hero-paragraph-S animated-element" >
          <p p1>At the PhoenixRize DEI Services Shop, inclusive growth begins here. Explore our range of DEI solutions,</p>
          <p p2>from strategy consultations to leadership coaching, and easily purchase the services that meet your</p>
          <p p3>Take the first step towards building a more diverse and equitable workplace </p>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ShopHero;