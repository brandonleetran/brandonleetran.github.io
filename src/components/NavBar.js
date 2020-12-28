import '../styles/navbar.css';
import React from 'react';

function NavBar() {
  return (
    <div id="navbar">
      <ul id="nav">
        <li className="nav-list-item">Home</li>
        <li className="nav-list-item">About Me</li>
        <li className="nav-list-item">Projects</li>
        <li className="nav-list-item">Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
