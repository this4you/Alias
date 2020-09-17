import React from 'react';
import logo from '../logo4.png';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to Alias
        </p>
      <Link className='start-button' to='/gameconfig' >Start game</Link>
    </header>
  );
}

export default Home;
