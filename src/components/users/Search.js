import React, { Fragment, useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const { users, searchUsers, clearUsers, setAlert } = useContext(GithubContext);
  const [ searchText, setSearchText ] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (searchText === '') {
      const message = 'Sorry, but you forgot to enter some text.';
      const type = 'warning';
      setAlert(message, type);
    } else {
      searchUsers(searchText);
      setSearchText('');
    }
  };

  const onClick = e => setSearchText(e.target.value);
  
  return (
    <Fragment>
      <h1 className='mb-1'>Github Finder</h1>
      <form onSubmit={ onSubmit } className='form'>
        <label htmlFor='searchText' >Username</label>
        <input
          id='searchText'
          type='text'
          name='searchText'
          placeholder='trickfinger, anyone?'
          value={ searchText }
          onChange={ onClick }
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      { users.length > 0 && <button
        className='btn btn-light btn-block mb-1'
        onClick={ clearUsers }
      >Clear</button> }
    </Fragment>
  )
}

export default Search;
