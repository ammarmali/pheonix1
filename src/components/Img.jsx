/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import './Img.css';

const Img = () => {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
        
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } 
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
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

const ImageRow = () => {
  return (
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
};

const ImageColumn = ({ src, alt, className }) => {
  return (
    <div className="image-column">
      <img loading="lazy" src={src} className={`gallery-image ${className}`} alt={alt} />
    </div>
  );
};

export default Img;
