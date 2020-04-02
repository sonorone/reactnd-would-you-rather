import React from 'react';
import Button from './Button';
import Message from './Message';
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';

class Login extends React.Component {
  state = {
    login: 'kharo'
  };

  handleChange = (e) => {
    this.setState({
      login: e.target.value
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.login));
  };

  render() {
    return (
      <form className='App-header'>
        <Message text='Sign in to Would You Rather' />
        {/* <TwoRowsInputForm optionOne={login} optionTwo={password} /> */}
        <div className='form-row card-shell'>
          <label htmlFor='users'>Select user:</label>

          <select id='users' onChange={this.handleChange}>
            <option value='kharo'>Kathy</option>
            <option value='dmurawiecki'>Damian</option>
            <option value='johndoe'>John</option>
          </select>
        </div>

        <Button text='Login' handleClick={this.handleLogin} />
      </form>
    );
  }
}

export default connect()(Login);
