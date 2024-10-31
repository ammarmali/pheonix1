/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indicators = document.querySelectorAll('.percentage-indicator');
            indicators.forEach((indicator) => {
              animatePercentage(indicator);
            });
            observer.disconnect(); // Disconnect observer once animation starts
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animatePercentage = (element) => {
    const targetValue = parseInt(element.getAttribute('data-target'), 10);
    let currentValue = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / targetValue));

    const timer = setInterval(() => {
      currentValue += 1;
      element.textContent = `${currentValue}%`;
      if (currentValue === targetValue) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <div ref={sectionRef}>
      <section className="preference-section">
        <div className="section-title">
          <h1 className='title1'>Company Needs To Unlock The Benefits Of DEI</h1>
        </div>
        <div className="preference-container">
          <article className="preference-card">
            <div className="percentage-indicator" data-target="86">0%</div>
            <h2 className="preference-title">Employee Preference</h2>
            <p className="preference-description">
            Employee Preference: How DEI Initiatives Shape Workplace Culture, Enhance Job Satisfaction, Attract Top Talent, Foster Inclusive Leadership, Improve Employee Engagement, Increase Retention and Loyalty, Drive Innovation, Promote Work-Life Balance, and Build a Positive Organizational Reputation
            </p>
          </article>
          <article className="preference-card">
            <div className="percentage-indicator" data-target="62">0%</div>
            <h2 className="preference-title">Profitability Boost</h2>
            <p className="preference-description">
            How DEI Strategies Drive Financial Growth, Enhance Market Competitiveness, Improve Operational Efficiency, Attract Top Talent, Strengthen Customer Loyalty, Foster Innovation, Expand Market Reach, Boost Employee Productivity, Elevate Brand Reputation, and Secure Long-Term Success Across All Sectors and Global Markets
            </p>
          </article>
          <article className="preference-card">
            <div className="percentage-indicator" data-target="32">0%</div>
            <h2 className="preference-title">Critical Importance</h2>
            <p className="preference-description">
            How DEI Fuels Innovation, Enhances Collaboration,Drives Employee Engagement, Fosters Inclusive Leadership, Strengthens Talent Retention, Expands Market Reach, Boosts Financial Performance, and Elevates Organizational Success Across All Levels, Industries, and Global Markets
            </p>
          </article>
        </div>
      </section>


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
    </div>
  );
};

export default BenefitsSection;
