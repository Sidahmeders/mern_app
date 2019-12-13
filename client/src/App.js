import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './dev/components/navbar.component';
import HomePage from './dev/components/home.component';
import AboutPage from './dev/components/about.component';
import MakeUpPage from './dev/components/makeUp.component';


function App() {

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact  component={ HomePage } />
          <Route path="/makeup" component={ MakeUpPage } />
          <Route path="/about" component={ AboutPage } />
        </div>
      </Router>
      );
}

export default App;
