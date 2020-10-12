import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
  const { repos } = useContext(GithubContext);
  return repos.map(repo => <RepoItem key={ repo.id } repo={ repo } />);
}

export default Repos;
