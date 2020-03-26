import React from 'react';
import './Filter.css';

const Filter = (props) => {
  return (
    <div className='filterTab'>
      <input
        type='radio'
        name='tabs'
        id='Unanswered'
        value='Unanswered'
        checked={props.filter === 'Unanswered'}
        onChange={props.handleOption}
      />
      <label htmlFor='Unanswered'>Unanswered</label>
      <input
        type='radio'
        name='tabs'
        id='Answered'
        value='Answered'
        checked={props.filter === 'Answered'}
        onChange={props.handleOption}
      />
      <label htmlFor='Answered'>Answered</label>
    </div>
  );
};

export default Filter;
