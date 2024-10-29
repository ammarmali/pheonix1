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
    </div>
  );
};

export default BenefitsSection;
