// Home.js

import React from 'react';

import Header from '../Header'; 
import Hero from '../Hero';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';
import Footer from '../Footer';

import './index.css'



const Home = () => (
<div id="home" className='home-container'>
<Header />
    <Hero />
    <Skills />
    <About />
    <Projects/>
    <Contact/>
   <Footer/>
    </div>
)
  
export default Home;
