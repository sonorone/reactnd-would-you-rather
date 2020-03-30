import React from 'react';
import './TwoRowsForm.css';

function TwoRowsInputForm(props) {
  return (
    <div className='form-row'>
      <div>
        <input
          id='optionOne'
          placeholder={props.optionOne}
          onChange={props.onChange}
        ></input>
      </div>
      <div className='optionTwo'>
        <input
          id='optionTwo'
          placeholder={props.optionTwo}
          onChange={props.onChange}
        ></input>
      </div>
    </div>
  );
}

export default TwoRowsInputForm;
