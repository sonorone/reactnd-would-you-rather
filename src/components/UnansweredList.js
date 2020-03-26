import React from 'react';
import { connect } from 'react-redux';

const UnansweredList = (props) => {
  const { questions } = props;

  return (
    <React.Fragment>
      <ul>
        {questions.map((e) => (
          <li key={e.id}>
            {e.optionOne.text} {e.optionTwo.text}
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
