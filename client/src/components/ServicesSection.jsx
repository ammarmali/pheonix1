/* eslint-disable no-unused-vars */
import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "James L",
      text: "Perfect execution! Layout scales beautifully at every breakpoint....",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d70a4e9d393cc7235c0703e90e339a0a5e03ef3c9c1a492951cf789d5e759633",

    },
    {
      id: 2,
      name: "Emily R",
      text: "Outstanding! Responsive design is seamless across all devices.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b24119fe8aa3d697563b699d50935310eb316249fb9571a854885a8a23149c4",

    },
    {
      id: 3,
      name: "Sarah M",
      text: "Fantastic work! Smooth, clean, and highly responsive design...",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd2379c55ccf124e698dcf40eaa47ad9ba9651adef2d23850a571230856f63a1",
     
    },
    
    {
      id: 4,
      name: "Alex B",
      text: "Excellent! Looks amazing and works flawlessly on any screen size...",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd2379c55ccf124e698dcf40eaa47ad9ba9651adef2d23850a571230856f63a1",

   },
   {
      id: 5,
      name: "Lara T",
      text: "Impressive! Every breakpoint is handled with precision...",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b24119fe8aa3d697563b699d50935310eb316249fb9571a854885a8a23149c4",
    
   },
   {
      id: 6,
      name: "Chris P",
      text: "Brilliant! Responsive and visually appealing on all devices...",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d70a4e9d393cc7235c0703e90e339a0a5e03ef3c9c1a492951cf789d5e759633",
    
   }
   
  ];

  return (
    <>
      <section className="section-container">
        <h1 className="title-con">Our Services</h1>

        <div className="column-layout">
          <div className="title">
            <h1>Our Services</h1>
          </div>
          <br /> <br />

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
              We are strategy consultants taking a data-driven approach to developing your diversity and inclusion strategy.
              <br /> <br />
              1. DEI audit and scorecard
              <br /> <br />
              2. Policy evaluation
              <br /> <br />
              3. Regulatory compliance
              <br /> <br />
              4. Talent retention
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
              Through our network of trusted trainers and coaches, we deliver the right training for you to upskill your team.
              <br /> <br />
              1. Coach inclusive leaders
              <br /> <br />
              2. Address unconscious bias
              <br /> <br />
              3. Regulatory compliance
              <br /> <br />
              4. Talent retention
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
              Change needs to be sustainable. We implement tech solutions that embed more inclusive practices.
              <br />
              <br /> 1. Best-practice DEI survey
              <br />
              <br /> 2. Bias-free hiring
              <br />
              <br /> 3. Empower Employee Groups
              <br />
              <br /> 4. Pay gaps reporting
            </p>
          </article>
        </div>
      </section>

      <section className="testimonials-container33">
        <h2 className="testimonials-heading">What Our Clients Are Saying?</h2>
        <div className="slider-container">
          <div className="testimonials-grid">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <article key={`${testimonial.id}-${index}`} className="testimonial-card">
                <img src={testimonial.imageUrl} alt={`Portrait of ${testimonial.name}`} className="testimonial-image" />
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-text">{testimonial.text}</p>
               
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
