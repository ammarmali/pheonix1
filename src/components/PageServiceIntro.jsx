/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './PageServiceIntro.css';

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
          <h2 className="primary-heading2 animated-element">
          Our Services
          </h2>
          <h1 className="secondary-heading2 animated-element">
          CUSTOMISED DEIB SOLUTIONS
          </h1>
          <p className="hero-paragraph2 animated-element">
          At PhoenixRize, we offer a comprehensive range of services designed to address the specific DEIB challenges organisations face today. Whether you're seeking consulting services to build a long-term strategy, training programmes to foster inclusive leadership, or engaging keynotes to inspire action, we are here to help. Our approach is data-driven, focused on delivering measurable results, and powered by the expertise of our team.          </p>
        </div>

        <button className="buy-button3">About Us</button>
      </section>
    </div>
  );
};

export default ShopHero;
