import React from 'react';
import { connect } from 'react-redux';
import OpenedCard from './OpenedCard';

const AnsweredList = (props) => {
  const { questions, users, authedUser } = props;

  return (
    <React.Fragment>
      <ul style={{ listStyleType: 'none', paddingInlineStart: '0px' }}>
        {questions.map((e) => (
          <li key={e.id} id={e.id}>
            <OpenedCard
              className='open-card'
              author={users[e.author]}
              selected={users[authedUser].answers[e.id]}
              optionOne={e.optionOne.text}
              optionOneVotes={e.optionOne.votes.length}
              optionTwo={e.optionTwo.text}
              optionTwoVotes={e.optionTwo.votes.length}
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
  const answeredQuestions = [];
  const profiles = {};

  for (const id of Object.keys(questions)) {
    if (Object.keys(answers).includes(id)) {
      answeredQuestions.push(questions[id]);
      profiles[questions[id].author] = users[questions[id].author];
    }
  }

  return {
    authedUser,
    users: profiles,
    questions: answeredQuestions.sort((a, b) => b.timestamp - a.timestamp)
  };
}

export default connect(mapStateToProps)(AnsweredList);
