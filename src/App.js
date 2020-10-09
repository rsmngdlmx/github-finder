import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import About from './components/about/About';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  };

  searchUsers = async searchText => {
    this.setState({ loading: true });
    
    const res = await axios.get(`https://api.github.com/search/users?` +
      `q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
      `&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({ users: res.data.items, loading: false, alert: null });
  };

  getUser = async username => {
    this.setState({ loading: true });
    
    const res = await axios.get(`https://api.github.com/users/${username}` +
      `?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
      `&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({ user: res.data, loading: false, alert: null });
  };

  getUserRepos = async username => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}` +
      `/repos?per_page=5&sort=created:asc` +
      `&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
      `&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ repos: res.data, loading: false, alert: null });
  };

  clearUsers = () => this.setState({ users: [], loading: false, alert: null });

  setAlert = (message, type) => this.setState({ alert: { message, type } });

  render() { // Life cycle method. It runs when the component's loaded.
    const { loading, users, user, repos, alert } = this.state;
    
    return (
      // Important: All JSX elements must be wrapped in a single parent element.
      // If no extra element is wanted, use 'Fragment'.
      // Fragment is like a 'ghost': It exists in JSX, but it is not rendered.
      <Router>
        <div className='App'>
          <Navbar icon='fab fa-github' title='Github Finder' />
          <div className='container'>
            <Switch>
              <Route exact path='/' render={ props => (
                <Fragment>
                  <Search
                    searchUsers={ this.searchUsers }
                    clearUsers={ this.clearUsers}
                    showClear={ users.length > 0 }
                    setAlert={ this.setAlert }
                  />
                  <Alert alert={ alert } />
                  <Users loading={ loading } users={ users } />
                </Fragment>
              )} />
              <Route exact path='/about' component={ About } />
              <Route exact path='/user/:username' render={ props => (
                <User
                  {...props}
                  getUser={ this.getUser }
                  getUserRepos={ this.getUserRepos }
                  user={ user }
                  repos={ repos }
                  loading={ loading }
                />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
