import React from 'react';
import './TwoRowsForm.css';

function TwoOptionRadioComponent(props) {
  return (
    <div className='container'>
      <ul>
        <li>
          <input
            onClick={props.handleOptionSelect}
            type='radio'
            id='optionOne'
            value='optionOne'
            name='options'
          />
          <label htmlFor='optionOne'>{props.optionOne}</label>
          <div className='check'></div>
        </li>

        <li>
          <input
            onClick={props.handleOptionSelect}
            type='radio'
            id='optionTwo'
            value='optionTwo'
            name='options'
          />
          <label htmlFor='optionTwo'>{props.optionTwo}</label>
          <div className='check'></div>
        </li>
      </ul>
    </div>
  );
}

export default TwoOptionRadioComponent;
