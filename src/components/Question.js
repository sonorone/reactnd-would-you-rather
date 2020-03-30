import React from 'react';
// import Button from './Button';
import Message from './Message';
import TwoOptionRadioComponent from './TwoOptionRadioComponent';
import { addUserAnswer } from '../actions/users';
import { handleAddQuestionAnswer } from '../actions/questions';

import { connect } from 'react-redux';
class Question extends React.Component {
  state = {
    option: 'init'
  };

  handleOption = (e) => {
    e.preventDefault();

    const userId = this.props.authedUser;
    const questionId = this.props.question.id;
    const option = e.target.value;
    console.log(userId, questionId, option);

    this.props.dispatch(
      handleAddQuestionAnswer({ userId, questionId, option })
    );

    this.setState({
      option: e.target.value
    });
  };

  handleSubmit = () => {};

  render() {
    const { question } = this.props;

    return (
      <React.Fragment>
        {question ? (
          <form className=''>
            <Message text='Would you rather ...' />
            <TwoOptionRadioComponent
              optionOne={question.optionOne.text}
              optionTwo={question.optionTwo.text}
              handleOptionSelect={(e) => this.handleOption(e)}
            />
            {/* <Button text='Submit your answer' handleClick={this.handleSubmit} /> */}
          </form>
        ) : (
          <div>User must be logged in to see a question.</div>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authedUser, questions }, id) {
  // FIXME: get ID from URL
  const question = questions['6ni6ok3ym7mf1p33lnez'];

  return {
    authedUser,
    question: questions ? question : null
  };
}

export default connect(mapStateToProps)(Question);
