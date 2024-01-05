// Projects.js
import React from 'react';
import { useProjectContext } from '../ProjectContext';
import ProjectItem from '../ProjectItem';
import Header from '../Header';

const Projects = () => {
  const { projectsList } = useProjectContext();

  return (
    <>
    <Header/>
    <div className="projects-container">
      <h2 className="project-title">My Projects</h2>
      <ul className="project-cards">
        {projectsList.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </div>
    <img src='https://i.postimg.cc/hG9HpfRf/Vector.png' alt='vector' className='vector' />
    </>
  );
};

export default Projects;
