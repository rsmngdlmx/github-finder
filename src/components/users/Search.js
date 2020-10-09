import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    searchText: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.searchText === '') {
      const message = 'Please, enter some text.';
      const type = 'warning';
      this.props.setAlert(message, type);
    } else {
      this.props.searchUsers(this.state.searchText);
      this.setState({ searchText: '' });
    }
  };

  onClick = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;
    
    return (
      <Fragment>
        <h1 className='mb-1'>Github Finder</h1>
        <form onSubmit={ this.onSubmit } className='form'>
          <label htmlFor='searchText' >Username</label>
          <input
            id='searchText'
            type='text'
            name='searchText'
            placeholder='trickfinger, anyone?'
            value={ this.state.searchText }
            onChange={ this.onClick }
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        { showClear && <button
          className='btn btn-light btn-block mb-1'
          onClick={ clearUsers }
        >Clear</button> }
      </Fragment>
    )
  }
}

export default Search;
