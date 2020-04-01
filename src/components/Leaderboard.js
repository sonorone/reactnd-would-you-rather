import React from 'react';
import Message from './Message';
import Face from './Face';
import { connect } from 'react-redux';
import './Card.css';

const Leaderboard = (props) => {
  return (
    <React.Fragment>
      <Message text='Leader Board' />
      <code>answers / questions</code>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} className='card-shell'>
            <Face avatarURL={user.avatarURL} />
            <div className='option'>{user.name}</div>
            <div className='option'>
              {Object.keys(user.answers).length}
              <span> / </span>
              {Object.keys(user.questions).length}
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
function mapStateToProps({ users }) {
  const profiles = Object.keys(users).map((key) => users[key]);

  return {
    users: profiles.sort(
      (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
    )
  };
}
export default connect(mapStateToProps)(Leaderboard);
