
import './Header.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';

const Header = (): JSX.Element => {

  return (
    <div className='header'>
      <Link to='/'>
        <button className='home'>Home</button>
      </Link>
      <Link to='/game'>
        <button className='view-game'>View Game</button>
      </Link>
      <div className='title'>
        <h1>Trivia Night</h1>
      </div>
    </div>
  )
}

export default Header;
