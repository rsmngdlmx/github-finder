import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import './App.css';

let baseUrl;

if (process.env.NODE_ENV !== 'production') {
  baseUrl = process.env.REACT_APP_BASE_URL;
} else {
  baseUrl = process.env.BASE_URL;
}

const App = () => (
  <GithubState>
      <Router>
        <div className='App'>
          <Navbar icon='fab fa-github' title='Github Finder' />
          <div className='container'>
            <Switch>
              <Route exact path={ `${baseUrl}` } component={ Home } />
              <Route exact path={ `${baseUrl}about` } component={ About } />
              <Route exact path={ `${baseUrl}user/:username` } component={ User } />
              <Route component={ NotFound } />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
);

export default App;
