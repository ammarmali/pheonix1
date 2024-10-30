/* eslint-disable no-unused-vars */
import React from 'react';
import './DEISection.css'; // Importing the CSS file

const DEISection = () => {
  return (
    <section className="dei-journey-container">
      <div className="content-wrapper">
        <h1 className="main-title1">3 steps of an organisations DEI journey</h1>

        <div className="step-container">
          <article className="step-content">
            <h2 className="step-number">01</h2>
            <h3 className="step-title">Diagnose</h3>
            <p className="step-description">
              Diagnose: Conduct a thorough assessment of existing DEI practices, identify gaps and areas for improvement, analyze organizational culture and employee feedback, evaluate current policies and procedures, benchmark against industry standards, and gather insights to develop a customized, strategic DEI plan that addresses specific needs and drives meaningful change.
            </p>
          </article>
          <div className="step-content">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/520d1ca3aaadcfd802dbf834c3dd84fdda22416d264336f514c40613d7253ca5?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
              alt="Diagnostic assessment visualization"
              className="step-image"
            />
          </div>
        </div>

        <div className="step-container">
          <div className="step-content">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f78eed2bdc68a9d65cb512001b6e3ce3970a79fd50723eed3999cbea2aafdd1?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
              alt="Development process illustration"
              className="step-image"
            />
          </div>
          <article className="step-content">
            <h2 className="step-number">02</h2>
            <h3 className="step-title">Develop</h3>
            <p className="step-description">
              To drive meaningful and sustained progress in diversity, equity, and inclusion (DEI), it is essential to provide comprehensive training and development programs that equip employees and leaders with the necessary skills and knowledge. Implementing a robust suite of tools and resources supports these DEI initiatives, ensuring that all members of the organization.
            </p>
          </article>
        </div>

        <div className="step-container">
          <article className="step-content">
            <h2 className="step-number">03</h2>
            <h3 className="step-title">Impact</h3>
            <p className="step-description">
              Measuring the impact of DEI initiatives is crucial for understanding their effectiveness. This involves evaluating how these efforts enhance employee engagement, drive innovation, and improve overall business performance. By sharing success stories and data-driven results, organizations can reinforce the importance of DEI, inspiring continued commitment and scaling successful practices across the organization.
            </p>
          </article>
          <div className="step-content">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7efcd4b4037bee08cdff51890f5a9cbff14df1ca596aaa5a66c527f63ba8692f?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
              alt="Impact measurement visualization"
              className="step-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DEISection;
