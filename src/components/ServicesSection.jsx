/* eslint-disable no-unused-vars */
import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (

    <section className="section-container">
      <h1 className="title-con">our  services</h1>

      <div className="column-layout">
        <div className="title">
          <h1>our services</h1>
        </div><br /> <br />
        {/* Consulting Card */}
        <article className="service-card2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/29e1953531544fcb1b64609f47feaaf62bd4f2da79496f034406333ca3253ccf?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
            className="service-icon"
            alt="Consulting service icon"
          />
          <h2 className="service-title1">Consulting</h2>
          <p className="description-item1">
          <br /> 
            We are strategy consultants taking a data-driven approach to
            developing your diversity and inclusion strategy. <br /> <br />
            1. DEI audit and scorecard
            <br /> <br />
            2.Policy evaluation
            <br /> <br />
            3.Regulatory compliance
            <br /> <br />
            4.Talent retention
            <br /> <br />
          </p>
        </article>

        {/* Training Card */}
        <article className="service-card2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c6a7c68689d34db34cebc9862935d385da3f5fdc5698b543c28a330ad1d263?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
            className="service-icon"
            alt="Training service icon"
          />
          <h2 className="service-title1">Training</h2>
          <p className="description-item1">
            Through our network of trusted trainers and coaches, we deliver the
            right training for you to upskill your team. <br /> <br />
            1.Coach inclusive leaders <br /> <br />
            2.Address unconscious bias <br /> <br />
            3.Regulatory compliance <br /> <br />
            4.Talent retention <br />
          </p>
        </article>

        {/* Technology Card */}
        <article className="service-card2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5884549b7939f96650d7cc29ac086c719f036a70e3e6c6a8a7e4e0f0a1946049?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
            className="service-icon"
            alt="Technology service icon"
          />
          <h2 className="service-title1">Technology</h2>
          <p className="description-item1">
            Change needs to be sustainable. We implement tech solutions that
            embed more inclusive practices.
            <br />
            <br /> 1 . Best-practice DEI survey
            <br />
            <br />
            2.Bias-free hiring <br />
            <br />
            3.Empower Employee Groups <br />
            <br />
            4.Pay gaps reporting
          </p>
        </article>
      </div>
    </section>
  );
};

export default ServicesSection;
