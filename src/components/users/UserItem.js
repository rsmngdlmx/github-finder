import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login, profile_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={ avatar_url }
        alt='User avatar'
        className='round-img'
        style={{ width: '60px' }}
      />
      
      <h3>{ login }</h3>
      
      <a
        href={ profile_url }
        className='btn btn-dark btn-sm my-1'
        rel='noopener noreferrer'
        target='_blank'
      >Profile</a>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem
