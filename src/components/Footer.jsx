/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css"; // Importing the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="logo-container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d4a0121fee9bf9091336c643ff3070ae9d67783cc3aa77f3c01e91776f2ace?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
          alt="Primary company logo"
          className="primary-logo"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/38b562e0b959702006edc55f8c6fe9cf633e7defaaa4525e282ddcca1c33026c?placeholderIfAbsent=true&apiKey=e59ec647e8834dcf973e15f6f0bdc424"
          alt="Secondary company logo"
          className="secondary-logo"
        />
      </div>

      <hr className="divider" />

      <section className="footer-content">
        <div className="footer-links">
          <nav className="policy-links">
            <a href="#" className="cookie-policy">Cookie Policy</a>
            <div className="legal-links">
              <a href="#" className="privacy-policy">Privacy Policy</a>
              <a href="#" className="terms">Terms and Conditions</a>
            </div>
          </nav>
          <p className="copyright-text">
            © 2022 Phoenixrize.ie. All rights reserved.
          </p>
        </div>

        <address className="contact-info">
          <p>Email: info@phoenixrize.ie</p>
          <p className="company-info">Company Reg No: 714032</p>
        </address>
      </section>
    </footer>
  );
};

export default Footer;
