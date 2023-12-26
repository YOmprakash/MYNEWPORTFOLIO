// ProjectItem.js
// ProjectItem.js
// ProjectItem.js
import React from 'react';
import './index.css';

const ProjectItem = (props) => {
  const { project } = props;
  const { title, src,description, link } = project;

  return (
    <li  className="project-item">
      <img src={src} alt={title} className="p-image" />
      
      <div className='list-content'>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">
        Open
      </a>
  
      </div>
      
     
    </li>
  );
};

export default ProjectItem;