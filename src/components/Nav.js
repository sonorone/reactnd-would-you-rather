import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className='top-nav'>
      <div className='block'>
        <NavLink
          className='App-link'
          to='/'
          exact
          activeClassName='nav-link-active'
        >
          Home
        </NavLink>
        <NavLink
          className='App-link'
          to='/leaderboard'
          activeClassName='nav-link-active'
        >
          Leader Board
        </NavLink>
        <NavLink
          className='App-link'
          to='/new'
          activeClassName='nav-link-active'
        >
          Add Question
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
