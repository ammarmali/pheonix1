/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./ShopPage.css";

const ShopHero = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Add animation classes to elements with a staggered effect
    const elements = document.querySelectorAll(".animated-element");
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("animate");
      }, index * 700); // Staggered delay for smoother animations
    });

    if (paragraphRef.current) {
      const text = paragraphRef.current.textContent;
      paragraphRef.current.setAttribute("data-text", text); // Optional for text capture
    }
  }, []);

  return (
    <div className="shop-hero-section-wrapper">
      <section className="shop-hero">
        {/* Background image */}
        <img
          src="https://www.jpmorgan.com/content/dam/jpm/commercial-banking/insights/leadership/banner_deiseries_art2_1440x810.jpg"
          alt="Background"
          className="shop-hero-background-image"
        />

        {/* Overlay */}
        <div className="shop-hero-overlay-section"></div>

        {/* Hero content */}
        <div className="shop-hero-content">
          <h2 className="shop-hero-primary-heading animated-element">
            Empowering Inclusive Growth
          </h2>
          <h1
            className="shop-hero-secondary-heading animated-element"
            data-text="SHOP DEI SERVICES"
          >
            SHOP DEI SERVICES
          </h1>

          {/* Paragraph container with typing effect */}
          <div className="hero-paragraph-Shop" ref={paragraphRef}>
            <p className="typing-paragraph animated-element">
              At the PhoenixRize DEI Services Shop, inclusive growth begins here.
              Explore our range of DEI solutions,
            </p>
            <p className="typing-paragraph animated-element">
              from strategy consultations to leadership coaching, and easily purchase
              the services that meet your needs.
            </p>
            <p className="typing-paragraph animated-element">
              Take the first step towards building a more diverse and equitable workplace.
            </p>
          </div>
        </div>
      </section>
    </div>         
  );
};

export default ShopHero;