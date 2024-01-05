// ProjectItem/index.js

import React from 'react';
import './index.css';

const ProjectItem = ({ project }) => {
  const { title, src, description, link } = project;

  return (
    <li className="project-card">
      <div className='project-info'>
        <div className='project-content'>
          <h3>{title}</h3>
          <p>{description}</p>
          <button className='view-button'>
            <a href={link} target='_blank' rel="noreferrer">View Project</a>
          </button>
        </div>
      </div>
      <img src={src} alt={title} />
    </li>
  );
};

export default ProjectItem;

