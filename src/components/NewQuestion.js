import React from 'react';
import Button from './Button';
import Message from './Message';
import TwoRowsInputForm from './TwoRowsInputForm';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends React.Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
    isDisabled: false
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleAdd = (e) => {
    e.preventDefault();

    const { dispatch, authedUser } = this.props;
    const { optionOne, optionTwo } = this.state;

    if (optionOne === '' || optionTwo === '') {
      alert('Fields cannot be empty');
      return;
    }

    dispatch(
      handleAddQuestion({
        optionOneText: this.state.optionOne,
        optionTwoText: this.state.optionTwo,
        author: authedUser
      })
    );

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }));
  };

  render() {
    const { optionOne, optionTwo, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />;
    }

    return (
      <form className=''>
        <Message text='Would you rather ...' />
        <TwoRowsInputForm
          optionOne={optionOne}
          optionTwo={optionTwo}
          onChange={(e) => this.handleChange(e)}
        />
        <Button text='Submit your question' handleClick={this.handleAdd} />
      </form>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewQuestion);
