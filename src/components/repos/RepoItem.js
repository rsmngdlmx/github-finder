import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  const { html_url, name } = repo;

  return (
    <div className='card'>
      <h3>
        <a href={ html_url } rel='noopener noreferrer' target='_blank' >
          { name }
        </a>
      </h3>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem;
