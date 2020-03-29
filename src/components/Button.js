import React from 'react';
import Message from './Message';
import './Button.css';

function Button(props) {
  return (
    <a
      style={{ backgroundColor: 'rgb(47, 47, 48)', cursor: 'pointer' }}
      type='submit'
      className='button-shell'
      href={props.href}
      onClick={props.handleClick}
    >
      <Message text={props.text} />
    </a>
  );
}

export default Button;
