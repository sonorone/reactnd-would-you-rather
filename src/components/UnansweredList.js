import React from 'react';
import { connect } from 'react-redux';
import ClosedCard from './ClosedCard';

const UnansweredList = (props) => {
  const { questions, users } = props;

  return (
    <React.Fragment>
      <ul style={{ listStyleType: 'none', paddingInlineStart: '0px' }}>
        {questions.map((e) => (
          <li key={e.id}>
            <ClosedCard
              id={e.id}
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

  for (const id of Object.keys(questions)) {
    if (!Object.keys(answers).includes(id)) {
      unansweredQuestions.push(questions[id]);
    }
  }

  return {
    users,
    questions: unansweredQuestions.sort((a, b) => b.timestamp - a.timestamp)
  };
}

export default connect(mapStateToProps)(UnansweredList);
