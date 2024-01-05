
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home'; // Import your components
import Projects  from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { ProjectProvider } from './components/ProjectContext';
import './App.css'

const App = () => (
  
<div className='container'>
<ProjectProvider>
    <Switch>
 <Route exact path="/" component={Home} />
 <Route exact path="/projects" component={Projects}  />
 <Route exact path='/about' component={About} />
 <Route exact path='/contact' component={Contact}  />


    </Switch>
    </ProjectProvider>
   
    </div>

);
  

export default App;
