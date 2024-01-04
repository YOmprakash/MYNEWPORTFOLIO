import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home'; // Import your components
import Projects  from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'

const App = () => (
<div className='container'>
    <Switch>
 <Route exact path="/" component={Home} />
 <Route exact path="/projects" component={Projects} />
 <Route exact path='/about' component={About} />
 <Route exact path='/contact' component={Contact} />

      
    </Switch>
    </div>

);

export default App;
