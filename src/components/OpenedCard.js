import React from 'react';
import './OpenCard.css';

function OpenCard(props) {
  return (
    <div className='card'>
      <div className='face'>
        <img
          alt='avatar'
          style={{ height: '50px', width: '50px' }}
          src={props.avatarURL}
        ></img>
      </div>
      <div className='card-shell'>
        <div className='option'>{props.optionOne}</div>
        <div className='option'>{props.optionTwo}</div>
      </div>
    </div>
  );
}

export default OpenCard;
