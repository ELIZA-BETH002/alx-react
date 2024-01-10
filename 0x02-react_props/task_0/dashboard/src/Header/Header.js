import React from 'react';
import './Header.css';
import HolbertonLogo from './dashboard/holberton-logo.jpg';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={HolbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
    </div>
  );
}

export default Header;
