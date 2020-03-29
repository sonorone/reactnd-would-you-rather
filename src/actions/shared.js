import { getQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { getInitialData } from '../utils/api';

export function getData() {
  return (dispatch) => {
    getInitialData().then(({ users, questions }) => {
      dispatch(setAuthedUser('dmurawiecki'));
      dispatch(receiveUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}
