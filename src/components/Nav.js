import React from 'react';
import Avatar from 'avataaars';
import './Nav.css';

const Nav = () => {
  return (
    <div className='top-nav'>
      <Avatar
        className='block'
        style={{ width: '40px', height: '80px' }}
        avatarStyle=''
        topType='Hat'
        accessoriesType='Round'
        hairColor='Blonde'
        facialHairType='BeardMagestic'
        facialHairColor='Brown'
        clotheType='CollarSweater'
        clotheColor='PastelRed'
        eyeType='Happy'
        eyebrowType='Default'
        mouthType='Grimace'
        skinColor='DarkBrown'
      />
      <div className='block'>
        <a className='App-link' href='/'>
          Home
        </a>
        <a className='App-link' href='/leaderboard'>
          Leaderboard
        </a>
        <a className='App-link' href='/new'>
          New
        </a>
      </div>
    </div>
  );
};

export default Nav;
