import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="Menu">
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/profile">Profile</Link>
      <Link className="menu-item" to="/repo">Repo</Link>
    </div>
  );
};

export default Menu;