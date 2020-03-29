import React from 'react';
import './Card.css';

function ClosedCard(props) {
  const { id, author, optionOne, optionTwo } = props;
  return (
    <div className='card'>
      <a href={`/questions/${id}`}>
        <div className='title'>Would you rather...</div>
        <div className='card-shell card-link'>
          <div className='option border'>{optionOne}</div>
          <div className='option'>{optionTwo}</div>
        </div>
        <div className='footer'>
          <div className='poll-results'></div>
          <div className='author'>Asked by {author.name}</div>
        </div>
        <div className='face'>
          <img
            alt='avatar'
            style={{ height: '60px', width: '60px' }}
            src={author.avatarURL}
          ></img>
        </div>
      </a>
    </div>
  );
}

export default ClosedCard;
