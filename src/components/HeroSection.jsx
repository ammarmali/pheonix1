/* eslint-disable no-unused-vars */
// HeroSection.jsx

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import React, { useEffect, useRef, useState } from "react";
import useResponsive from '../hooks/useWindowSize'; // Custom hook for responsive handling
import "./HeroSection.css"; // CSS for styling

// ImageColumn Component (Displays individual images)
const ImageColumn = ({ src, alt, className }) => (
  <div className="image-column">
    <img loading="lazy" src={src} className={`gallery-image ${className}`} alt={alt} />
  </div>
);

// ImageRow Component (Contains multiple ImageColumns)
const ImageRow = () => (
  <div className="image-row">
    <ImageColumn
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f02c34612fe6160e8a7f4243e43b7ba0b2daf4b576136ee883014a1e497a9126?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
      alt="Gallery image 1"
      className="image-1"
    />
    <ImageColumn
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc9c30eb3a2028d294d9db9b1cbc4ccab2df3fc391bdee7e58eb15f86c1e9b06?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
      alt="Gallery image 2"
      className="image-2"
    />
  </div>
);

// Img Component (Handles visibility of image gallery using IntersectionObserver)
const Img = () => {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => {
      if (galleryRef.current) observer.unobserve(galleryRef.current);
    };
  }, []);

  return (
    <section className="image-gallery" ref={galleryRef}>
      <div className={`gallery-container ${isVisible ? 'visible' : ''}`}>
        <ImageRow />
      </div>
    </section>
  );
};

// HeroSection Component (Main section with text and image)
// HeroSection.jsx

// ... (previous imports remain the same)

const HeroSection = () => {
  const { screenSize } = useResponsive();
  const isLargeScreen = screenSize > 1200;
  const consultantTitleStyle = isLargeScreen ? 'large-title' : 'small-title';

  return (
    <>
      <section className="consultant-section">
        <div className="consultant-content">
          <div className="text-column">
            <h1 className={`consultant-title2 ${consultantTitleStyle}`}>
              Your <span>Professional DEI</span> Consultant
            </h1>
            <p className="consultant-description2">
              Our commitment to DEI ensures that every individual has the opportunity to thrive and succeed.
            </p>
          </div>
          <div className="image-column">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59c881acaa77f324f9feeb74640c4a2569ff37168b8f58f11804eeedf90fe0de?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
              className="consultant-image"
              alt="Professional DEI Consultant illustration"
            />
          </div>
        </div>
        <div className="btn-container">
          <button className="btn-free">Free Self Analysis</button>
        </div>
      </section>
      <Img />
    </>
  );
};

// ... (rest of the code remains the same)

export default HeroSection;
