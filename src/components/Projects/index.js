// Projects.js
import React from 'react';
import ProjectItem from '../ProjectItem'; // Import the Project component
import './index.css'; // Import your project-specific styles

const projectsData = [
  {
    id:1,
  
    title: 'Nxt Trendz',
    description: 'Developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart. USERNAME:rahul,PASSWORD:rahul@2021',
    link: 'https://prakashtrendz.ccbp.tech/login',
    src:"https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-output-v0.gif",
  },
  {
    id:2,
  
    title: 'Jobby App ',
    description: 'Constructed an all-in-one job searching platform, Jobby App.USERNAME:rahul,PASSWORD:rahul@2021',
    link: 'https://prakashjobby1.ccbp.tech/loginhttps://example.com/project2',
    src:'https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-lg-output.png',
  },
  {
    id:3,
    title:'Todos App',
    description:'You can add or delete tasks',
    link:'https://prakashtd.ccbp.tech/',
    src:'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/todo-application-part-6-v1.gif'
  }
  // Add more projects as needed
];

const Projects = () => (
  <div id="projects" className="projects-container">
  <h1>Projects</h1>
  <ul className='ul-container'>
  {projectsData.map((project) => (
      <ProjectItem key={project.id} project={project} />
      ))}
  </ul>
    
  </div>
);

export default Projects;
