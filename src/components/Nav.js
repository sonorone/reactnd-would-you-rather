import React from 'react';
import Face from './Face';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
  return (
    <nav className='top-nav'>
      {props.user !== null ? (
        <div className='block'>
          <div className='nav-face'>
            <Face avatarURL={props.user.avatarURL} />
          </div>
          <div className='nav-face-text block'>Hi, {props.user.name}</div>
        </div>
      ) : (
        <div className='block'>Hello there!</div>
      )}
      <div>
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
          New
        </NavLink>
      </div>
    </nav>
  );
};
function mapStateToProps({ authedUser, users }) {
  return { user: users[authedUser] ? users[authedUser] : null };
}
export default connect(mapStateToProps)(Nav);
