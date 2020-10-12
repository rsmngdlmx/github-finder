import React, { Fragment } from 'react';
import Alert from '../layout/Alert';
import Users from '../users/Users';
import Search from '../users/Search';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Alert />
      <Users />
    </Fragment>
  )
};

export default Home;
