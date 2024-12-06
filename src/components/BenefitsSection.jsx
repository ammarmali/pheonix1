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
            button: "Learn More"
          }, {
            target: 32,
            title: 'Critical Importance',
            description: 'Companies with a strong ethnic diversity are 36% more likely to have above-average profitability',
            button: "Explore"
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


<div className="dei-container">
  <h1 className="dei-title">3 Steps Of An Organisation's DEI Journey</h1>
  
  <div className="dei-step">
    <div className="dei-step-content">
      <div className="dei-text-content">

        <div className="dei-step-header">
          <span className="dei-step-number">01</span>
        </div>
        <h2 className="dei-step-title">DIAGNOSE:</h2>
        <p className="dei-step-description">
          Diagnose: Conduct A Thorough Assessment Of Existing DEI Practices, Identify Gaps And Areas For Improvement, Analyze Organizational Culture And Employee Feedback, Evaluate Current Policies And Procedures, Benchmark Against Industry Standards, And Gather Insights To Develop A Customized, Strategic DEI Plan That Addresses Specific Needs And Drives Meaningful Change.
        </p>    
      </div>
      <img 
      loading='lazy'
      src="https://s3-alpha-sig.figma.com/img/d80e/8307/dcd60fc3ad4d7bed74d59408e5517f23?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YkLpkW3dqPbcyK5i-NUJ8beCxcjTO4jRnK~ufGzJxedNNj8qIfwic3y4Dibrq7l0UoHcWbzExYThszy64gOTL-x6L3tgL~y7leGOJj8neFZc7eH-QHZNZ2K2HjD6KSopm58DeSSKeIQV6-HNEQXQo3vIyE2IBYp5IOGO-JBWpDB5WFgta5z70fZngU9s5E~bNFyI6eCrL4uRUSzGyWbfKueULYrAV-T2RPMr51vjlkz80xHIPwXXE3z7O9m1jEc~tSI-Gb9sslXXXivKRrPEz6RC6QlrdKPZ8Hu5B9CfWAQr5FJE4XyMYi9qMH9i56kWRZew8crbUeJwNmdTEJdaBA__" alt="Diagnose Step" className="dei-image" />
    </div>
  </div>

  <div className="dei-step1">
    <div className="dei-step-content1">
      <div className="dei-text-content">
      <img 
        loading='lazy'
        src="https://s3-alpha-sig.figma.com/img/a8cd/77f3/0b359701ffc8b9d105286fb246700a8d?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lspc0jbOmJdTGZDSVvYkaL7lx-hBhlOvRru-Q9vGHxoPFfNAO-zj4FLs5oIztFr08igOLefeG-vbCT6XTkRLV0e018ga~O7pcxYsEsx3BiJE52irW9QeGcY-r64sJHAMgtSvWNbNftMgewTQQTFBX22O4HM8g6xPee1ZRYkmnZ8T2Gza~mHey8crNkdjH0sbTVFq372WEovh0PBIr6o920~sd6YntOiXvJN-DXa7kiFGPTvAUy~GAUXcjYXCi~-~TqWDvFMQScraJjTtE0rC2JOJ0EThweCRYpBkoGK4QvUREfWcGonDJ2~lPyWt-D40KyymH9P-Kxwa58bMSfQ3ug__" 
        alt="Develop Step" 
        className="dei-image" 
      />
        <div className="dei-step-header">
          <span className="dei-step-number">02</span> 
        </div>
        <h2 className="dei-step-title">DEVELOP:</h2>
        <p className="dei-step-description">
          To Drive Meaningful And Sustained Progress In Diversity, Equity, And Inclusion (DEI), It Is Essential To Provide Comprehensive Training And Development Programs That Equip Employees And Leaders With The Necessary Skills And Knowledge. Implementing A Robust Suite Of Tools And Resources Supports These DEI Initiatives, Ensuring That All Members Of The Organization.
        </p>
      </div>
   
    </div>
  </div>

  <div className="dei-step">
    <div className="dei-step-content">
      <div className="dei-text-content">
        <div className="dei-step-header">
          <span className="dei-step-number">03</span>
        </div>
        <h2 className="dei-step-title">IMPACT:</h2>
        <p className="dei-step-description">
          Measuring The Impact Of DEI Initiatives Is Crucial For Understanding Their Effectiveness. This Involves Evaluating How These Efforts Enhance Employee Engagement, Drive Innovation, And Improve Overall Business Performance. By Sharing Success Stories And Data-Driven Results, Organizations Can Reinforce The Importance Of DEI, Inspiring Continued Commitment And Scaling Successful Practices Across The Organization
        </p>
      </div>
      <img 
      loading='lazy'
      src="https://s3-alpha-sig.figma.com/img/d80e/8307/dcd60fc3ad4d7bed74d59408e5517f23?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YkLpkW3dqPbcyK5i-NUJ8beCxcjTO4jRnK~ufGzJxedNNj8qIfwic3y4Dibrq7l0UoHcWbzExYThszy64gOTL-x6L3tgL~y7leGOJj8neFZc7eH-QHZNZ2K2HjD6KSopm58DeSSKeIQV6-HNEQXQo3vIyE2IBYp5IOGO-JBWpDB5WFgta5z70fZngU9s5E~bNFyI6eCrL4uRUSzGyWbfKueULYrAV-T2RPMr51vjlkz80xHIPwXXE3z7O9m1jEc~tSI-Gb9sslXXXivKRrPEz6RC6QlrdKPZ8Hu5B9CfWAQr5FJE4XyMYi9qMH9i56kWRZew8crbUeJwNmdTEJdaBA__" alt="Impact Step" className="dei-image" />
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
