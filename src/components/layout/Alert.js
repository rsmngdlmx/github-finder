import React, { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Alert = () => {
  const { alert } = useContext(GithubContext);
  
  return (
    alert !== null && (
      <div className={ `alert alert-${alert.alertType}` }>
        <i className='fas fa-info-circle' /> { alert.message }
      </div>
    )
  )
}

export default Alert;
