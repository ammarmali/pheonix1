/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";

import useWindowSize from "../hooks/useWindowSize";
import { useAuth0 } from "@auth0/auth0-react";
import logoimg1 from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { width } = useWindowSize();
  const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "unset" : "hidden";
  };
  const handleContactClick = () => {
    navigate("/Contact"); // Use the correct route path
    setTimeout(() => {
      const contactSection = document.getElementById("ContactUs");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };
  

  return (
    <header className={`header-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-text">
        <img src={logoimg1} alt="Logo" className="logo-image" />
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
        {!isLoading && isAuthenticated ? (
          <>
            <span className="user-name">{user?.name}</span>
            <button
              className="auth-button"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              <FontAwesomeIcon icon={faArrowRightToBracket} /> Log Out
            </button>
          </>
        ) : (
          <button className="auth-button" onClick={() => loginWithRedirect()}>
            <FontAwesomeIcon icon={faArrowRightToBracket} /> Log In
          </button>
        )}

        {/* Updated Contact Us Button */}
        <button
          className="contact-button"
          onClick={handleContactClick} // Use the handler
        >
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
