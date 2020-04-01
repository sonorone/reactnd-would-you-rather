import React from 'react';
import './Face.css';

const Face = (props) => {
  return (
    <div className='face'>
      <img
        alt='avatar'
        style={{ height: '60px', width: '60px' }}
        src={props.avatarURL}
      ></img>
    </div>
  );
};

export default Face;
