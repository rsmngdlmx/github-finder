import React, { Fragment } from 'react';
import Links from '../layout/Links';
import Alert from '../layout/Alert';
import Users from '../users/Users';
import Search from '../users/Search';

const Home = () => {
  return (
    <Fragment>
      <Links />
      <Search />
      <Alert />
      <Users />
    </Fragment>
  )
};

export default Home;
