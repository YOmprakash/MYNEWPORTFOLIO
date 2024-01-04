// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`nav-container ${menuOpen ? 'menu-open' : ''}`}>
      <a href='/'>Omprakash</a>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <div className='menu-icon' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <ul>
          <li>
            <Link to='/about' onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to='/projects' onClick={toggleMenu}>
              Project
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
