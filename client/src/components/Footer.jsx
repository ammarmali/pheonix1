/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png'; // Ensure the logo file path is correct.

const CustomFooter = () => {
  const companyLinks = [
    'About us',
    'Our services',
    'Cookie Policy',
    'Privacy Policy',
    'Term and Conditions',
  ];
  const helpLinks = ['FAQ', 'How to order', 'Payment Options'];
  const shopLinks = ['info@phoenixrize.ie', 'Location: xyz', 'Company Reg No: 123'];
  const socialLinks = [
    { href: '#', icon: 'fab fa-facebook-f' },
    { href: '#', icon: 'fab fa-twitter' },
    { href: '#', icon: 'fab fa-instagram' },
    { href: '#', icon: 'fab fa-linkedin-in' },
  ];

  const renderLinks = (links) =>
    links.map((link, index) => (
      <li key={index}>
        <a href="#">{link}</a>
      </li>
    ));

  const renderSocialLinks = (links) =>
    links.map((social, index) => (
      <a key={index} href={social.href}>
        <i className={social.icon}></i>
      </a>
    ));

  return (
    <footer className="custom-footer">
      <div className="custom-footer-container">
        <div className="custom-footer-row">
          <div className="custom-footer-col">
            <h4>Company</h4>
            <ul>{renderLinks(companyLinks)}</ul>
          </div>
          <div className="custom-footer-col">
            <h4>Get Help</h4>
            <ul>{renderLinks(helpLinks)}</ul>
          </div>
          <div className="custom-footer-col">
            <h4>Information</h4>
            <ul>{renderLinks(shopLinks)}</ul>
          </div>
          <div className="custom-footer-col">
            <h4>Follow Us</h4>
            <div className="custom-footer-social-links">
              {renderSocialLinks(socialLinks)}
            </div>
          </div>
        </div>
        <div className="custom-footer-bottom">
          <img src={logo} alt="Company Logo" className="custom-footer-logo" />
          <p className="custom-footer-copyright">
            © {new Date().getFullYear()} Phoenix Rize. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;