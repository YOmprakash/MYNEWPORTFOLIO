// components/ContactMe.js
import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactMe = () => (

    <div className="contact-container">
      <div className="contact-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='icon'/>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='icon'/>
        </a>
        <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className='icon'/>
        </a>
      </div>
      <div className="copyright-section">
        <p>&copy; 2024 All Rights Reserved</p>
      </div>
    </div>
  );


export default ContactMe;
