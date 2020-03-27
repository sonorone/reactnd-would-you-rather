import React from 'react';
import './Card.css';

function ClosedCard(props) {
  const { author, optionOne, optionTwo } = props;
  return (
    <div className='card'>
      <div className='card-shell'>
        <div className='option'>{optionOne}</div>
        <div className='option'>{optionTwo}</div>
      </div>
      <div className='footer'>
        <h6>Asked by {author.name}</h6>
      </div>
      <div className='face'>
        <img
          alt='avatar'
          style={{ height: '60px', width: '60px' }}
          src={author.avatarURL}
        ></img>
      </div>
    </div>
  );
}

export default ClosedCard;
