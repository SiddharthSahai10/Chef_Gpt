import React from 'react';
import chefClaude from '../assets/chef_claude.png';
import '../App.css';

function Header() {
  return (
    <div className="page-container">
      <div className="card">
        <img src={chefClaude} alt="Chef Claude" />
        <h1>Chef Claude</h1>
      </div>
    </div>
  );
}

export default Header;
