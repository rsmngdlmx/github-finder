import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

const UserItem = ({ user: { avatar_url, login } }) => {
  return (
    <div className='card text-center'>
      <img
        src={ avatar_url }
        alt='User avatar'
        className='round-img'
        style={{ width: '60px' }}
      />
      
      <h3>{ login }</h3>
      
      <Link
        to={ `${baseUrl}/user/${login}` }
        className='btn btn-dark btn-sm my-1'
      >Profile</Link>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
