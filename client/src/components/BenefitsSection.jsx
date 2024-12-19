/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import useWindowSize from '../hooks/useWindowSize'; 

import './BenefitsSection.css';

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const { width } = useWindowSize(); // Get the current window width

  useEffect(() => {
    const percentageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate percentages only once when in view
            document.querySelectorAll('.percentage-indicator').forEach(animatePercentage);
            percentageObserver.disconnect(); // Stop observing after the animation starts
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    const fadeInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      percentageObserver.observe(sectionRef.current);
    }

    const allElements = document.querySelectorAll(
      '.benefit-section-title, .title1, .benefit-preference-card, ' +
      '.home-performance-content, .dei-step, .dei-step-2, .cta-con, ' +
      '.home-performance-title, .home-performance-description, .dei-title, ' +
      '.dei-step-number, .dei-step-title, .dei-step-description, .cta-message1, .cta-btn1'
    );
    
    allElements.forEach(element => fadeInObserver.observe(element));

    return () => {
      if (sectionRef.current) {
        percentageObserver.unobserve(sectionRef.current);
      }
      allElements.forEach(element => fadeInObserver.unobserve(element));
    };
  }, []);

  const animatePercentage = (element) => {
    const targetValue = parseInt(element.getAttribute('data-target'), 10);
    let currentValue = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / targetValue));

    const timer = setInterval(() => {
      if (currentValue < targetValue) {
        currentValue++;
        element.textContent = `${currentValue}%`;
      } else {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <div ref={sectionRef}>
      <section className="benefit-preference-section">
        <div className="benefit-section-title">
          <h2 className='benefit-title-2'>the challenge</h2>
          </div>
          <div>
          <h1 className='title1'>Company Needs To Unlock The Benefits Of DEI</h1>
          </div>
        
        <div className="benefit-preference-container">
          {[{
            target: 86,
            title: 'Employee Preference',
            description: 'of employees consider diversity and inclusion to be critically important for workplace success.',
            button: "Monster’s Global Future of Work"
          }, {
            id:2,
            
            target: 62,
            title: 'Profitability Boost',
            description: 'of employees would reject a job offer if it came from an organisation with a culture that didn’t support diversity',
            button:"Monster’s Global Future of Work"
          }, {
            target: 32,
            title: 'Critical Importance',
            description: 'Companies with a strong ethnic diversity are 36% more likely to have above-average profitability',
            button: "Monster’s Global Future of Work"
          }].map(({ target, title, description, button }, index) => (
            <article className="benefit-preference-card" key={index}>
              <div className="percentage-indicator" data-target={target}>0%</div>
              <h2 className="benefit-preference-title">{title}</h2>
              <p className="benefit-preference-description">{description}</p>
              <button className="benefit-preference-button">{button}</button>
            </article>
          ))}
        </div>
      </section>

      <section className="home-performance-section">
  <div className='home-overlay-performance'></div>
  <div className="home-performance-content">
    <h2 className="home-performance-title">
      Unlock Greater Organisational Performance from Diverse and Inclusive Teams
    </h2>
    <p className="home-performance-description">
      Cultivate a thriving, inclusive culture where diverse perspectives are not only welcomed but celebrated, creating a dynamic environment where innovation and creativity can truly flourish. Empower leaders at every level to be champions of inclusivity, equipping them with the tools and mindset needed to drive meaningful, transformative change within the organization. Build and sustain equitable systems that foster fairness, transparency, and opportunity, ensuring long-term success by embedding these values into the core of your operations.
    </p>
  </div>
</section>


<div className="journey-container">
  <div className="journey-content">
    <h1 className="journey-title">3 steps of an organisation's DEI journey</h1>
    
    <div className="step-container">
      <div className="step-content">
        <div className="step-details">
          <span className="step-number">01</span>
          <h2 className="step-title">Diagnose</h2>
          <p className="step-description">
            Diagnose: Conduct a thorough assessment of existing DEI practices, identify gaps and areas for improvement, analyze organizational culture and employee feedback, evaluate current policies and procedures, benchmark against industry standards, and gather insights to develop a customized, strategic DEI plan that addresses specific needs and drives meaningful change.
          </p>
        </div>
      </div>
      <div className="step-content">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/955a9cb3070fd4f4e2c3ede3fdacbbaba0b1b9ec4e2ef8ce7dd3bc76e5aef0a7?placeholderIfAbsent=true&apiKey=a81574df70b8455693c5aa03f1eabb8d" alt="Visual representation of DEI diagnosis process" className="step-image" />
      </div>
    </div>

    <div className="step-container">
      <div className="step-content">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f78eed2bdc68a9d65cb512001b6e3ce3970a79fd50723eed3999cbea2aafdd1?placeholderIfAbsent=true&apiKey=a81574df70b8455693c5aa03f1eabb8d" alt="Visual representation of DEI development process" className="step-image" />
      </div>
      <div className="step-content">
        <div className="step-details">
          <span className="step-number">02</span>
          <h2 className="step-title">Develop</h2>
          <p className="step-description">
            To drive meaningful and sustained progress in diversity, equity, and inclusion (DEI), it is essential to provide comprehensive training and development programs that equip employees and leaders with the necessary skills and knowledge. Implementing a robust suite of tools and resources supports these DEI initiatives, ensuring that all members of the organization.
          </p>
        </div>
      </div>
    </div>

    <div className="step-container">
      <div className="step-content">
        <div className="step-details">
          <span className="step-number">03</span>
          <h2 className="step-title">Impact</h2>
          <p className="step-description">
            Measuring the impact of DEI initiatives is crucial for understanding their effectiveness. This involves evaluating how these efforts enhance employee engagement, drive innovation, and improve overall business performance. By sharing success stories and data-driven results, organizations can reinforce the importance of DEI, inspiring continued commitment and scaling successful practices across the organization.
          </p>
        </div>
      </div>
      <div className="step-content">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7efcd4b4037bee08cdff51890f5a9cbff14df1ca596aaa5a66c527f63ba8692f?placeholderIfAbsent=true&apiKey=a81574df70b8455693c5aa03f1eabb8d" alt="Visual representation of DEI impact measurement" className="step-image" />
      </div>
    </div>
  </div>
</div>

      <section className="home-consultation-cta">
        <div className="cta-con">
          <h1 className="cta-message1">
          Wondering what approach works best for your organization? We’re happy to help. Schedule a complimentary 30-minute consultation call with us to discuss your specific diversity, equity and inclusion consultants’ training needs.
          </h1>
          <button className="cta-btn1">Book Your Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default BenefitsSection;
