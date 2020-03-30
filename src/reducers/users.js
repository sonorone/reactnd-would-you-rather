import { RECEIVED_USERS, ADDED_USER_ANSWER } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVED_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADDED_USER_ANSWER:
      const userId = action.answer.authedUser;
      const questionId = action.answer.qid;
      return {
        ...state,
        [userId]: {
          ...state[userId],
          answers: {
            ...state[userId].answers,
            [questionId]: action.answer.answer
          }
        }
      };
    default:
      return state;
  }
}
