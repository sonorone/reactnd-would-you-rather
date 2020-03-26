import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Login from './Login';
import Home from './Home';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <Nav />
          {this.props.authedUser === null ? <Login /> : <Home />}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
