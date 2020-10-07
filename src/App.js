import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // Life cycle method. It runs when the component's mounted.
  async componentDidMount() {
    this.setState({ loading: true });
    
    const ctId = process.env.REACT_APP_GITHUB_USER_ID;
    const ctSecret = process.env.REACT_APP_GITHUB_USER_SECRET;
    const apiBaseUrl = 'https://api.github.com/users'; 
    const apiUrl = `${apiBaseUrl}?client_id=${ctId}&client_secret=${ctSecret}`;
    const res = await axios.get(apiUrl);
    
    this.setState({ users: res.data, loading: false });
  }

  render() { // Life cycle method. It runs when the component's loaded.
    const { loading, users } = this.state;
    return (
      // Important: All JSX elements must be wrapped in a single parent element.
      // If no extra element is wanted, use 'Fragment'.
      // Fragment is like a 'ghost': It exists in JSX, but it is not rendered.
      <div className='App'>
        <Navbar icon='fab fa-github' title='Github Finder' />
        <div className='container'>
          <Users loading={ loading } users={ users } />
        </div>
      </div>
    );
  }
}

export default App;
