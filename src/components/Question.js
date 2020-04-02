import React from 'react';
import Message from './Message';
import OpenedCard from './OpenedCard';
import TwoOptionRadioComponent from './TwoOptionRadioComponent';
import { handleAddQuestionAnswer } from '../actions/questions';
import { addUserAnswer } from '../actions/users';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Question extends React.Component {
  state = {
    option: '',
    isAnswered: false
  };
  handleOption = (e) => {
    e.preventDefault();

    const authedUser = this.props.authedUser;
    const qid = this.props.question.id;
    const answer = e.target.value;

    this.props.dispatch(handleAddQuestionAnswer({ authedUser, qid, answer }));
    this.props.dispatch(addUserAnswer({ authedUser, qid, answer }));

    this.setState({
      option: answer,
      isAnswered: true
    });
  };

  render() {
    const { question, author } = this.props;
    const { isAnswered } = this.state;

    if (isAnswered) {
      return (
        <React.Fragment>
          <OpenedCard
            className='open-card'
            author={author}
            selected={author.answers[question.id]}
            optionOne={question.optionOne.text}
            optionOneVotes={question.optionOne.votes.length}
            optionTwo={question.optionTwo.text}
            optionTwoVotes={question.optionTwo.votes.length}
          />
        </React.Fragment>
      );
    }

    if (this.state.option !== '') return <Redirect to='/' />;

    return (
      <React.Fragment>
        {question ? (
          <form>
            <Message text='Would you rather ...' />
            <TwoOptionRadioComponent
              optionOne={question.optionOne.text}
              optionTwo={question.optionTwo.text}
              handleOptionSelect={(e) => this.handleOption(e)}
            />
          </form>
        ) : (
          <Message text='Loading' />
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  return {
    authedUser,
    question: questions ? question : null,
    author: users[question?.author]
  };
}

export default connect(mapStateToProps)(Question);
