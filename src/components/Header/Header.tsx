
import './Header.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';

const Header = () => {

  return (
    <div>
      <Link to='/'>
        <button className='home'>Home</button>
      </Link>
      <Link to='/game'>
        <button className='view-game'>View Game</button>
      </Link>
    </div>
  )
}

export default Header;
