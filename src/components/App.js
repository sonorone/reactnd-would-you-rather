import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
// import Login from './Login';
// import Home from './Home';
// import Question from './Question';
import NewQuestion from './NewQuestion';
import { connect } from 'react-redux';
import { getData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getData());
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <Nav />
          <NewQuestion />
          {/* <Question /> */}
          {/* <Home /> */}
          {/* {this.props.authedUser === null ? <Login /> : <Home />} */}
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
