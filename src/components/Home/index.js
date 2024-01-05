// Home.js

import React from 'react';
import Header from '../Header';
import AddProject from '../AddProject';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => (
  <>
    <div className='home-container'>
      <Header />
      <div className='home-card-container'>
        <div className='home-content'>
          <p className='role'>Ui/Ux designer</p>
          <h1>Hello, My name is Omprakash</h1>
          <p className='description'>
            At NxtWave’s CCBP 4.0 Intensive, I’m currently learning fullstack development with a specialization in 4.0
            technologies. In love with the coding challenges and hands-on projects. With Industry’s first-ever IRC 4.0,
            getting ready to take on new challenges in the tech world.
          </p>
          <div className='button-container'>
            <Link to='/projects'>
              <button className='project-btn'>Projects</button>
            </Link>
            <button className='linkdin-btn'>
              <a href='https://www.linkedin.com/in/omprakash-yamavaram/'>LinkedIn</a>
            </button>
          </div>
        </div>
        <img src='https://i.postimg.cc/BQcR43PM/image-1.png' alt='girl' />
      </div>
    </div>
    <AddProject />
    <img src='https://i.postimg.cc/hG9HpfRf/Vector.png' alt='vector' className='vector' />
  </>
);

export default Home;
