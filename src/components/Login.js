import React from 'react';
import Button from './Button';
import TwoRowsInputForm from './TwoRowsInputForm';
import { setAuthedUser } from '../actions/authedUser';

import { connect } from 'react-redux';
class Login extends React.Component {
  state = {
    login: 'dmurawiecki'
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser('dmurawiecki'));
  };

  render() {
    const { login, password } = this.state;
    return (
      <form className='App-header'>
        {/* TODO */}
        <TwoRowsInputForm optionOne={login} optionTwo={password} />
        <Button text='Login' handleClick={this.handleLogin} />
      </form>
    );
  }
}

export default connect()(Login);
