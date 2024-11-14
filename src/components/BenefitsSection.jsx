/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import useWindowSize from '../hooks/useWindowSize'; 
import newimg from '../assets/Frame 8.png';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const { width } = useWindowSize(); // Get the current window width

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate percentages only once when in view
            document.querySelectorAll('.percentage-indicator').forEach(animatePercentage);
            observer.disconnect(); // Stop observing after the animation starts
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
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
      <section className="preference-section">
        <div className="section-title">
          <h1 className='title1'>Company Needs To Unlock The Benefits Of DEI</h1>
        </div>
        <div className="preference-container">
          {[
            {
              target: 86,
              title: 'Employee Preference',
              description: 'Employee Preference: How DEI Initiatives Shape Workplace Culture, Enhance Job Satisfaction, Attract Top Talent, Foster Inclusive Leadership, Improve Employee Engagement, Increase Retention and Loyalty, Drive Innovation, Promote Work-Life Balance, and Build a Positive Organizational Reputation'
            },
            {
              target: 62,
              title: 'Profitability Boost',
              description: 'How DEI Strategies Drive Financial Growth, Enhance Market Competitiveness, Improve Operational Efficiency, Attract Top Talent, Strengthen Customer Loyalty, Foster Innovation, Expand Market Reach, Boost Employee Productivity, Elevate Brand Reputation, and Secure Long-Term Success Across All Sectors and Global Markets'
            },
            {
              target: 32,
              title: 'Critical Importance',
              description: 'How DEI Fuels Innovation, Enhances Collaboration, Drives Employee Engagement, Fosters Inclusive Leadership, Strengthens Talent Retention, Expands Market Reach, Boosts Financial Performance, and Elevates Organizational Success Across All Levels, Industries, and Global Markets'
            }
          ].map(({ target, title, description }, index) => (
            <article className="preference-card" key={index}>
              <div className="percentage-indicator" data-target={target}>0%</div>
              <h2 className="preference-title">{title}</h2>
              <p className="preference-description">{description}</p>
            </article>
          ))}
        </div>
        
      </section>
      <section className="performance-section22">
      <div className="performance-content">
        <h2 className="performance-title09">
          Unlock Greater Organisational performance from Diverse and inclusive team
        </h2>
        <p className="performance-description">
          Cultivate a thriving, inclusive culture where diverse perspectives are not only welcomed but celebrated, creating a dynamic environment where innovation and creativity can truly flourish. Empower leaders at every level to be champions of inclusivity, equipping them with the tools and mindset needed to drive meaningful, transformative change within the organization. Build and sustain equitable systems that foster fairness, transparency, and opportunity, ensuring long-term success by embedding these values into the core of your operations.
        </p>
      </div>
    </section>


<div className='dei-img1'><img src={newimg} alt="" /></div>

<section className="consultation-cta12">
  <div className='cta-con'>
      <h1 className="cta-message1">
        Wondering what approach works best for your organization? We're happy to help. Schedule a complimentary 30-minute consultation call with us to discuss your specific diversity, equity and inclusion consultants' training needs.
      </h1>
      <button>
        Schedule your free consultation
      </button>
      </div>
    </section>
    
    </div>
  );
};

export default BenefitsSection;
