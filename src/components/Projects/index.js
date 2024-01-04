// components/Projects.js
import React from 'react';
import ProjectItem from '../ProjectItem';
import Header from '../Header';
import './index.css'
const Projects = () => {
  // Dummy project data, replace with your actual data
  const projectsData = [
    {
      id:1,
    
      title: 'Nxt Trendz',
      description: 'Developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart.',
      link: 'https://prakashtrendz.ccbp.tech/login',
      src:"https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-lg-output.png",
    },
    {
      id:2,
    
      title: 'Jobby App ',
      description: 'Constructed an all-in-one job searching platform, Jobby App.',
      link: 'https://prakashjobby1.ccbp.tech/loginhttps://example.com/project2',
      src:'https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-lg-output.png',
    },
    {
      id:3,
      title:'Todos App',
      description:'You can add or delete tasks',
      link:'https://prakashtd.ccbp.tech/',
      src:'https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-lg-output.png'
    }
    // Add more projects as needed
  ];

  return (
    <>
        <Header/>
 
    <div className="projects-container">
    <div className='project-card-container'>

    </div>
    <h2 className="project-title">My Projects</h2>
      <ul className="project-cards">
        {projectsData.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
      <img src='https://i.postimg.cc/hG9HpfRf/Vector.png' alt='vector' className='vector' />
    </div>
    </>
  );
};

export default Projects;