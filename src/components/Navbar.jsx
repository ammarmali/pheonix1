import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const loginWithRedirect = () => {
    console.log("Login clicked");
  };

  const logout = () => {
    console.log("Logout clicked");
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo-text">
        <img src="/path/to/logo.png" alt="Logo" className={`logo-image ${scrolled ? "scrolled" : ""}`} />
      </div>

      {/* Navbar Links */}
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <ul className="nav-links" onClick={() => setIsOpen(false)}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </nav>

      {/* Auth and Contact Buttons */}
      <div className="right-section">
        <div className="auth-buttons">
          {isLoading ? (
            <div className="loading-spinner" />
          ) : isAuthenticated ? (
            <>
              <button className="profile-button" onClick={logout}>
                Profile
              </button>
              <button className="auth-button" onClick={logout}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <button className="auth-button" onClick={loginWithRedirect}>
                <FontAwesomeIcon icon={faArrowRightToBracket} /> Log In
              </button>
              <button className="contact-button">
                <FontAwesomeIcon icon={faPhone} /> Contact Us
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
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
