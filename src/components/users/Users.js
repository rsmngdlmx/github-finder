import React, { useContext } from 'react';
import UserCard from './UserCard';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const { loading, users } = useContext(GithubContext);
  
  if (loading) return <Spinner />;
  
  return (
    <div style={ userStyle }>
      { users.map(user => (<UserCard key={ user.id } user={ user } />)) }
    </div>
  );
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
