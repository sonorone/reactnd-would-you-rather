import React from 'react';
import './Card.css';

function OpenedCard(props) {
  const {
    author,
    optionOne,
    optionTwo,
    selected,
    optionOneVotes,
    optionTwoVotes
  } = props;

  return (
    <div className='card'>
      <div className='card-shell'>
        <div className={`option ${selected === 'optionOne' ? 'selected' : ''}`}>
          {optionOne}
          <div>Votes: {optionOneVotes}</div>
        </div>
        <div className={`option ${selected === 'optionTwo' ? 'selected' : ''}`}>
          {optionTwo}
          <div>Votes: {optionTwoVotes} / </div>
        </div>
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

export default OpenedCard;
