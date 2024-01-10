import React from 'react';
import Notifications from './Notifications';

import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="Notifications">
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
