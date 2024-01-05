// ProjectContext.js
import React, { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

export const useProjectContext = () => {
  return useContext(ProjectContext);
};

export const ProjectProvider = ({ children }) => {
  const [projectsList, setProjectsList] = useState([]);

  const addProject = (newProject) => {
    setProjectsList((prevProjects) => [...prevProjects, newProject]);
  };

  return (
    <ProjectContext.Provider value={{ projectsList, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
