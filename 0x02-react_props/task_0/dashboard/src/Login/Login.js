import React from 'react';
import './Login.css';
import HolbertonLogo from './dashboard/holberton-logo.jpg';

function Login() {
  return (
    <div className="App">
      <body className="App-body">
      <img src={HolbertonLogo} className="App-logo" alt="Holberton Logo" />
        <div className="App-body-content">
          <p>Login to access the full dashboard</p>
        </div>
      </body>
    </div>
  );
}

export default Login;
