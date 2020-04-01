import React from 'react';
import { Link } from 'react-router-dom';
import Face from './Face';
import './Card.css';

function ClosedCard(props) {
  const { id, author, optionOne, optionTwo } = props;
  return (
    <div className='card'>
      <Link to={`/questions/${id}`}>
        <div className='title'>Would you rather...</div>
        <div className='card-shell card-link'>
          <div className='option border'>{optionOne}</div>
          <div className='option'>{optionTwo}</div>
        </div>
        <div className='footer'>
          <div className='poll-results'></div>
          <div className='author'>Asked by {author.name}</div>
        </div>
        <Face avatarURL={author.avatarURL} />
      </Link>
    </div>
  );
}

export default ClosedCard;
