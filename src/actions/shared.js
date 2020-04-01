import { getQuestions } from './questions';
import { receiveUsers } from './users';
import { getInitialData } from '../utils/api';

export function getData() {
  return (dispatch) => {
    getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}
