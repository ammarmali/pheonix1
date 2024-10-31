/* eslint-disable no-unused-vars */

import React from 'react';
import img1 from '../assets/Group 65.png';
import img2 from '../assets/Group 67.png'
import './Team.css';

const Team = () => {
  return (
    <>
<section className="mission-vision-container">
        <h2 className="section-title">Our Mission & Vision</h2>
        <div className="cards-container">
          <div className="cards-wrapper">
            <div className="column">
              <article className="card">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/137f56e210d939504dd84e6256b125918221f8e582c3c2f6086ae531442d8413?placeholderIfAbsent=true&apiKey=a2acdceba9474ffebdaf77e02b0399d6"
                  alt="Mission Icon"
                  className="card-icon"
                />
                <h3 className="card-title">Mission</h3>
                <p className="card-description">
                  To help companies and organizations create and sustain inclusive workplaces and turn diversity into a strategic business asset.
                </p>
              </article>
            </div>
            <div className="column column-right">
              <article className="card">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ccf4acc1a04b1f0308b254ed7cb818b7080745a85de6765ee9adb91fcd56f2f?placeholderIfAbsent=true&apiKey=a2acdceba9474ffebdaf77e02b0399d6"
                  alt="Vision Icon"
                  className="card-icon"
                />
                <h3 className="card-title">Vision</h3>
                <p className="card-description">
                  To help companies and organizations create and sustain inclusive workplaces and turn diversity into a strategic business asset.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>








    <div className='img-folder'>
      <img src={img1} alt="Hero" />
      </div>

      <div className='img22'><img src={img2} alt="" /></div>
    </>
  );
};

export default Team;
