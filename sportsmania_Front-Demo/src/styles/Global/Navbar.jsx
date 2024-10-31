// Navbar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function Navbar({ title }) {
  return (
    <div className="navbar">
      <span className="menu-icon">
        <FontAwesomeIcon icon={faBars} />
      </span>
      <h1 className="navbar-title">{title}</h1>
      <span className="user-icon">
        <FontAwesomeIcon icon={faUserCircle} />
      </span>
    </div>
  );
}

export default Navbar;
