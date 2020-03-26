import React from 'react';
import './TwoRowsForm.css';

function TwoRowsInputForm(props) {
  return (
    <div>
      <div className='form-row'>
        <div>
          <input key='optionOne' placeholder={props.optionOne}></input>
        </div>
        <div className='optionTwo'>
          <input
            key='optionTwo'
            placeholder={props.optionTwo}
            type='password'
          ></input>
        </div>
      </div>
    </div>
  );
}

export default TwoRowsInputForm;
