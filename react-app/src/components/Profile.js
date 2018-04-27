import React from 'react';
import './Profile.css';

const Profile = ({ username, fullname, thumbnail }) => {
  return (
    <div className="Profile">
      <img src={thumbnail} alt="thumbnail" />
      <h1>{username}</h1>
      <h2>{fullname}</h2>
    </div>
  );
};

export default Profile;
