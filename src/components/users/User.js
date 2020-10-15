import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const baseUrl = process.env.REACT_APP_BASE_URL;

const User = ({ match }) => {
  const { loading, user, getUser, getUserRepos } = useContext(GithubContext);
  
  useEffect(() => {
    getUser(match.params.username);
    getUserRepos(match.params.username);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    login,
    avatar_url,
    html_url,
    location,
    bio,
    blog,
    twitter_username,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <h1>{ name }</h1>
      <Link to={ `${baseUrl}` } className='btn btn-light my-1'>
        <i className='fas fa-long-arrow-alt-left' /> Go back home
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={ avatar_url }
            alt='User avatar'
            className='round-img'
            style={{ width: '150px' }}
          />
          <a href={ html_url } rel='noopener noreferrer' target='_blank' >
            <h3>@{ login }</h3>
          </a>
          <p><i className='fas fa-map-marker-alt' /> { location }</p>
          <p>
            Hireable:{ ' ' }
            {
              hireable ?
              <i className='fas fa-check text-success' /> :
              <i className='fas fa-times-circle text-danger' />
            }
          </p>
        </div>
        <div>
          { bio && <Fragment>
            <h3>Bio</h3>
            <p>{ bio }</p>
          </Fragment> }
          <ul className='my-1'>
            <li>
              { blog && <Fragment>
                <i className='fas fa-globe' />{ ' ' }
                <a
                  href={ `http://${blog}` }
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  { blog }
                </a>
              </Fragment> }
            </li>
            <li>
              { twitter_username && <Fragment>
                <i className='fab fa-twitter' />{ ' ' }
                <a
                  href={ `https://twitter.com/${twitter_username}` }
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  @{ twitter_username }
                </a>
              </Fragment> }
            </li>
          </ul>
          <a
            href={ html_url }
            className='btn btn-dark'
            rel='noopener noreferrer'
            target='_blank'
          >
            Go to Github profile
          </a>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: { followers }</div>
        <div className='badge badge-primary'>Following: { following }</div>
        <div className='badge badge-primary'>Public repos: { public_repos }</div>
        <div className='badge badge-primary'>Public gists: { public_gists }</div>
      </div>
      <h2>Newest public repos</h2>
      <Repos />
    </Fragment>
  )
}

export default User
