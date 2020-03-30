import React from 'react';
import Message from './Message';
import TwoOptionRadioComponent from './TwoOptionRadioComponent';
import { handleAddQuestionAnswer } from '../actions/questions';
import { addUserAnswer } from '../actions/users';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Question extends React.Component {
  state = {
    option: ''
  };
  handleOption = (e) => {
    e.preventDefault();

    const authedUser = this.props.authedUser;
    const qid = this.props.question.id;
    const answer = e.target.value;

    this.props.dispatch(handleAddQuestionAnswer({ authedUser, qid, answer }));
    this.props.dispatch(addUserAnswer({ authedUser, qid, answer }));

    this.setState({
      option: answer
    });
  };

  render() {
    const { question } = this.props;

    if (this.state.option !== '') return <Redirect to='/' />;

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
          </form>
        ) : (
          <Message text='Loading' />
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authedUser, questions }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  return {
    authedUser,
    question: questions ? question : null
  };
}

export default connect(mapStateToProps)(Question);
