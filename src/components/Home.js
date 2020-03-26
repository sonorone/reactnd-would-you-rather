import React from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import UnansweredList from './UnansweredList';
import AnsweredList from './AnsweredList';
import { getData } from '../actions/shared';

class Home extends React.Component {
  state = {
    filter: 'Unanswered'
  };

  componentDidMount() {
    this.props.dispatch(getData());
  }

  handleOptionChange = (e) => {
    this.setState({
      filter: e.target.value
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <React.Fragment>
        <Filter handleOption={this.handleOptionChange} filter={filter} />
        {filter === 'Unanswered' && <UnansweredList />}
        {filter === 'Answered' && <AnsweredList />}
      </React.Fragment>
    );
  }
}

export default connect()(Home);
