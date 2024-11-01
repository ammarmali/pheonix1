/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import useWindowSize from '../hooks/useWindowSize'; // Import the custom hook
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { width } = useWindowSize(); // Get the current window size

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'unset' : 'hidden';
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-text">
        <img src="/path/to/logo.png" alt="Logo" className="logo-image" />
      </div>

      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <ul className="nav-links" onClick={() => setIsOpen(false)}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </nav>

      <div className="right-section">
        <button className="auth-button" onClick={() => console.log("Login")}>
          <FontAwesomeIcon icon={faArrowRightToBracket} /> Log In
        </button>
        <button className="contact-button">
          <FontAwesomeIcon icon={faPhone} /> Contact Us
        </button>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FontAwesomeIcon icon={faTimes} /> : (
          <>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </>
        )}
      </button>
    </header>
  );
};

export default Navbar;
