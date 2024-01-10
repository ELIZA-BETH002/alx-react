import React from 'react';
import './Footer.css';
import HolbertonLogo from './dashboard/holberton-logo.jpg';

function Footer() {
  return (
    <div className="App">
      <footer className="App-footer">
      <img src={HolbertonLogo} className="App-logo" alt="Holberton Logo" />
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default Footer;
