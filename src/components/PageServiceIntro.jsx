/* eslint-disable no-unused-vars */
import React from 'react';
import './PageServiceIntro.css'; // Ensure your CSS file is imported

function PageServiceIntro() {
    return (
        <div className="services-page">
           <div> <h2 className="services-title">Our Services</h2></div>
            <div className="main-content">
              
            <div className="customized-solutions">
                    <h3 className="solutions-heading">
                        CUSTOMISED DEIB SOLUTIONS
                        <span className="transformation-tag">For Lasting Transformation</span>
                    </h3>
                    <p className="services-description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur, praesentium, necessitatibus amet neque dolores quos veniam optio animi maiores quidem quisquam dicta quam unde sequi inventore ipsum expedita quia beatae iste eligendi commodi, excepturi asperiores! Provident, eos quis blanditiis numquam,
                    </p>
                    <button className="btn btn-gradient btn-glow">
                        <i className="fa-solid fa-arrow-right-to-bracket"></i> About Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PageServiceIntro;
