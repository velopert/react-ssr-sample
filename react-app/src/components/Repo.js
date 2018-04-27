import React from 'react';
import './Repo.css';

const RepoItem = ({ name, description }) => {
  return (
    <div className="repo-item">
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

const Repo = ({ data }) => {
  const repoList = data.map(repo => (
    <RepoItem key={repo.id} name={repo.name} description={repo.description} />
  ));
  return <div className="Repo">{repoList}</div>;
};

export default Repo;
