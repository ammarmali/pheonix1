/* eslint-disable no-unused-vars */
import React from 'react';
import './ServicePage2.css';

function ServicePage2() {
  return (
    <section className="services-container">
      <div className="services-grid">
        
        <article className="service-card1">
          <h2 className="service-title">Training</h2>
          <p className="service-description">
            Our training programs are customized to meet the unique needs of each client, guiding participants through a progressive learning journey that empowers them to apply DEIB principles in their daily practices and lead meaningful change.
          </p>
          <button className="learn-more-button button-style">
            LEARN MORE
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a810da472c3a41f806cde492e3a045379c6247290cef770dca9f347739d8f011?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
              alt=""
              className="arrow-icon"
              loading="lazy"
            />
          </button>
        </article>

        <article className="service-card1">
          <h2 className="service-title">Consulting</h2>
          <p className="service-description">
            Our consulting services assist organizations in identifying, evaluating, and addressing DEIB challenges through collaborative development of tailored strategies that embed inclusion at all levels.
          </p>
          <button className="learn-more-button button-style">
            LEARN MORE
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a810da472c3a41f806cde492e3a045379c6247290cef770dca9f347739d8f011?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
              alt=""
              className="arrow-icon"
              loading="lazy"
            />
          </button>
        </article>

        <article className="service-card1">
          <h2 className="service-title">Keynote</h2>
          <p className="service-description">
            PhoenixRize delivers inspiring keynotes focused on diversity and inclusion, offering engaging speeches tailored to meet the specific interests and needs of each client.
          </p>
          <button className="learn-more-button button-style">
            LEARN MORE
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a810da472c3a41f806cde492e3a045379c6247290cef770dca9f347739d8f011?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
              alt=""
              className="arrow-icon"
              loading="lazy"
            />
          </button>
        </article>

      </div>

      <h1 className="custom-heading">Need something more specific?</h1>
      <h3 className="custom-solutions">
        We also offer customized training solutions tailored to your needs
      </h3>
     
    </section>
  );
}

export default ServicePage2;
