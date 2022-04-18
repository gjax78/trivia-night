
import './Header.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';

const Header = (): JSX.Element => {

  return (
    <div>
      <Link to='/'>
        <button className='home'>Home</button>
      </Link>
      <Link to='/game'>
        <button className='view-game'>View Game</button>
      </Link>
      <div className='title'>
        <h1>THE HOST WITH THE MOST</h1>
      </div>
    </div>
  )
}

export default Header;
