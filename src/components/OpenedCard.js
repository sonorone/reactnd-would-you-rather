import React from 'react';
import './OpenCard.css';

function OpenCard(props) {
  return (
    <div className='card'>
      <div className='card-shell'>
        <div className='option'>{props.optionOne}</div>
        <div className='option'>{props.optionTwo}</div>
      </div>
      <div classname='footer'>
        <h6>Asked by {props.author.name}</h6>
      </div>
      <div className='face'>
        <img
          alt='avatar'
          style={{ height: '60px', width: '60px' }}
          src={props.author.avatarURL}
        ></img>
      </div>
    </div>
  );
}

export default OpenCard;
