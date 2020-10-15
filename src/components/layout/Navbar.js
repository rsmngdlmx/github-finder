import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <Link to={ `${baseUrl}` }><div className='navbar-title'><i className={ icon } /> { title }</div></Link>
      <ul>
        <li>
          <Link to={ `${baseUrl}about` }>About</Link>
        </li>
      </ul>
    </nav>
  );
}

// If a prop is not passed, the default value in defaultProps is used.
// If a prop is passed, it will override the value in defaultProps.
Navbar.defaultProps = { 
  icon: 'fab fa-github',
  title: 'Github Finder'
};

// PropTypes are used to check properties' types.
Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Navbar;