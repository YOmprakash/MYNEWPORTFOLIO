
import React from "react";


import './index.css'

const About = () => (
    <div id="about" className="about-container">
    <div className="about-card-container">
    <img className='about-img' src='https://img.freepik.com/premium-photo/happy-freelancer-working-laptop-desk-white-background-vector-illustration_807028-434.jpg?w=900' alt='im' />
        <div className="about-content-container">
            
            <h3>
About Me</h3>
 <h4>A Dedicated Developer</h4>
            <p>At NxtWave’s CCBP 4.0 Intensive, I’m currently learning fullstack development with a specialization in 4.0 technologies. In love with the coding challenges and hands-on projects. With Industry’s first ever IRC 4.0, getting ready to take on new challenges in the tech world.</p>

            <a href='https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Omprakash_2023-12-25-002857.pdf' target="_blank" rel="noopener noreferrer">
          <button className="resume-button" type="button">
            Resume
          </button>
        </a>

        </div>
        
    </div>
    
    </div>
)

export default About