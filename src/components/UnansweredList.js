import React from 'react';
import { connect } from 'react-redux';
import OpenCard from './OpenedCard';

const UnansweredList = (props) => {
  const { questions, users } = props;

  return (
    <React.Fragment>
      <ul style={{ listStyleType: 'none', paddingInlineStart: '0px' }}>
        {questions.map((e) => (
          <li key={e.id}>
            <OpenCard
              className='open-card'
              author={users[e.author]}
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
