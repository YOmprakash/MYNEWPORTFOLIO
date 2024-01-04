import React from 'react';
import './index.css'

const Project = () => (
    <>
    <div className='project-container'>
      <h2>Add Project</h2>
      <form>

       
          <label htmlFor="projectName">Project Name</label>
          <input type="text" id="projectName" name="projectName" />
   

       
          <label htmlFor="projectLink">Project Link</label>
          <input type="text" id="projectLink" name="projectLink" />
     

    
          <label htmlFor="projectDescription">Project Description</label>
          <textarea id="projectDescription" name="projectDescription" rows={8}></textarea>
      

        <button type="submit">Add Project</button>
      </form>
    </div>
    </>
  );


export default Project;
