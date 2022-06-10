
import './Header.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';

const Header = (): JSX.Element => {

  return (
    <div className='header'>
      <div className='title'>
        <h1>TRIVIA NIGHT</h1>
      </div>
      <Link to='/'>
        <button className='home'>HOME</button>
      </Link>
      <Link to='/game'>
        <button className='view-game'>VIEW GAME</button>
      </Link>
    </div>
  )
}

export default Header;
