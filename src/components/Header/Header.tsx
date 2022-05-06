
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
        <h1>Welcome to Trivia Night!</h1>
        <h2>Feel free to browse through questions based on categories and save them to your game for easy access when hosting a trivia night with friends.</h2>
      </div>
      <div className='description'>
      </div>
    </div>
  )
}

export default Header;
