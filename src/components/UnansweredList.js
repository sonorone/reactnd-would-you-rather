import React from 'react';
import { connect } from 'react-redux';
import OpenCard from './OpenedCard';

const UnansweredList = (props) => {
  const { questions, users } = props;

  return (
    <React.Fragment>
      <ul style={{ listStyle: 'none' }}>
        {questions.map((e) => (
          <li key={e.id}>
            <OpenCard
              className='open-card'
              avatarURL={users[e.author].avatarURL}
              optionOne={e.optionOne.text}
              optionTwo={e.optionTwo.text}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

function mapStateToProps({ authedUser, users, questions }) {
  const user = users[authedUser];
  const answers = user ? users[user.id].answers : null;
  const unansweredQuestions = [];

  for (const prop of Object.keys(questions)) {
    if (!Object.keys(answers).includes(questions[prop].id)) {
      unansweredQuestions.push(questions[prop]);
    }
  }

  return {
    users,
    questions: unansweredQuestions
  };
}

export default connect(mapStateToProps)(UnansweredList);
