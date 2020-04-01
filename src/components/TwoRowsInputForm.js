import React from 'react';
import './TwoRowsForm.css';
import './Card.css';

function TwoRowsInputForm(props) {
  return (
    <div className='form-row card-shell'>
      <div>
        <input
          id='optionOne'
          placeholder={props.optionOne}
          onChange={props.onChange}
        ></input>
      </div>
      <div className=''>
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
