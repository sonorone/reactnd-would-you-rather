import React from 'react';
import Face from './Face';
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
  const total = optionOneVotes + optionTwoVotes;
  const one = ((optionOneVotes / total) * 100).toFixed(0);
  const two = ((optionTwoVotes / total) * 100).toFixed(0);

  return (
    <div className='card'>
      <div className='title'>Would you rather...</div>
      <div className='card-shell'>
        <div
          className={`option border ${
            selected === 'optionOne' ? 'selected' : ''
          }`}
        >
          <div className='option-text'>
            <span className=''>{optionOne}</span>
          </div>
          <div className='percentage'>{one}%</div>
          <div className='votes'>
            {optionOneVotes} vote(s) out of {total}
          </div>
        </div>
        <div
          className={`option border ${
            selected === 'optionTwo' ? 'selected' : ''
          }`}
        >
          <div className='option-text'>
            <span className='option-text'>{optionTwo}</span>
          </div>
          <div className='percentage'>{two}%</div>
          <div className='votes'>
            {optionTwoVotes} vote(s) out of {total}
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='poll-results'>Poll Results</div>
        <div className='author'>Asked by {author.name}</div>
      </div>
      <Face avatarURL={author.avatarURL} />
    </div>
  );
}

export default OpenedCard;
