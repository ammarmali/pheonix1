/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img23 from '../assets/color_4_logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo-text">
        <img src={img23} alt="PhoenixRize Logo" />
      </div>

      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </nav>

      <div className="right-section">
        <div className="auth-buttons">
          {isLoading ? (
            <p>Loading...</p>
          ) : isAuthenticated ? (
            <>
              <Link to="/profile" className="profile-link">Profile</Link>
              <button
                className="auth-button"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>

            </>
          ) : (
            <><button className="auth-button" onClick={() => loginWithRedirect()}>
                  Log In
                </button>
               <button className="contact-button">contact us</button>
                  </>
          )}
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
    </header>
  );
};

export default Navbar;
