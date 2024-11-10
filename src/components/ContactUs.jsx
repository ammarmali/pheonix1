/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      subject: '',
      email: '',
      message: ''
    });
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-card">
        <div className="contact-us-left">
          <img src="/path-to-your-logo.png" alt="PhoenixRize Logo" className="logo" />
          <ul className="contact-us-list">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Diversity</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Equity</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Inclusion</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Belonging</li>
          </ul>
          <p className="website">PhoenixRize.com</p>
        </div>
        <div className="contact-us-right">
          <h2>Get In Touch With Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className='submit-btn' type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
