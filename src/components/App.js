import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import NewQuestion from './NewQuestion';
import Question from './Question';
import Leaderboard from './Leaderboard';
import Error404 from './Error404';
import { getData } from '../actions/shared';
import { removeAuthedUser } from '../actions/authedUser';

class App extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;

    dispatch(removeAuthedUser());
  };
  authenticate() {
    const { authedUser, dispatch } = this.props;

    if (authedUser !== null) {
      dispatch(getData());
      return true;
    }
    return false;
  }

  render() {
    return (
      <Router>
        <div className='App App-header'>
          <Nav handleLogout={this.handleLogout} />
          {this.authenticate() === true ? (
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/questions/:id' component={Question} />
              <Route component={Error404} />
            </Switch>
          ) : (
            <Login />
          )}
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
