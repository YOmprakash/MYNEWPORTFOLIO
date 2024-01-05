// AddProject.js
import React, { useState } from 'react';
import './index.css'
import { useProjectContext } from '../ProjectContext';

const AddProject = () => {
  const { addProject } = useProjectContext();
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const addNewProject = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!projectName || !projectLink || !projectDescription) {
      alert('Please fill in all fields');
      return;
    }

    // Create a new project object
    const newProject = {
      title: projectName,
      link: projectLink,
      description: projectDescription,
      id: Date.now(),
      src: 'https://i.postimg.cc/qBNH2qDY/Screenshot-2024-01-04-220535.png',
    };

    // Call the addProject function from the context to add the project
    addProject(newProject);

    // Clear the form fields
    setProjectName('');
    setProjectLink('');
    setProjectDescription('');
  };

  return (
    <div className="addProject-container">
      <h2>Add Project</h2>
      <form onSubmit={addNewProject}>
        <label htmlFor="projectName">Project Name</label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <label htmlFor="projectLink">Project Link</label>
        <input
          type="text"
          id="projectLink"
          name="projectLink"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />

        <label htmlFor="projectDescription">Project Description</label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={8}
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        ></textarea>

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;
