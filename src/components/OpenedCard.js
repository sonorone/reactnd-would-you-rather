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
  const one = (optionOneVotes / (optionOneVotes + optionTwoVotes)) * 100;
  const two = (optionTwoVotes / (optionOneVotes + optionTwoVotes)) * 100;

  return (
    <div className='card'>
      <div className='title'>Would you rather...</div>
      <div className='card-shell'>
        <div className='option border'>
          <div className={`${selected === 'optionOne' ? 'selected' : ''}`}>
            <span className='option-text'>{optionOne}</span>
          </div>
          <div className='percentage'>{one}%</div>
          <div className='votes'>{optionOneVotes} vote(s)</div>
        </div>
        <div className='option'>
          <div className={`${selected === 'optionTwo' ? 'selected' : ''}`}>
            <span className='option-text'>{optionTwo}</span>
          </div>
          <div className='percentage'>{two}%</div>
          <div className='votes'>{optionTwoVotes} vote(s)</div>
        </div>
      </div>
      <div className='footer'>
        <div className='poll-results'>Poll Results</div>
        <div className='author'>Asked by {author.name}</div>
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
