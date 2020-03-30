import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
// import Login from './Login';
import NewQuestion from './NewQuestion';
import Question from './Question';
import Leaderboard from './Leaderboard';
import { connect } from 'react-redux';
import { getData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getData());
  }

  render() {
    return (
      <Router>
        <div className='App App-header'>
          <Nav />
          <Route path='/' exact component={Home} />
          <Route path='/new' component={NewQuestion} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/questions/:id' component={Question} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
