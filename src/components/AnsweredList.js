import React from 'react';
import { connect } from 'react-redux';

const AnsweredList = (props) => {
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
  const answeredQuestions = [];
  const profiles = [];

  for (const prop of Object.keys(questions)) {
    if (Object.keys(answers).includes(questions[prop].id)) {
      answeredQuestions.push(questions[prop]);
      profiles.push(users[questions[prop].author]);
    }
  }

  return {
    profiles,
    questions: answeredQuestions
  };
}

export default connect(mapStateToProps)(AnsweredList);
