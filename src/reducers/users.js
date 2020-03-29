import { RECEIVED_USERS, ADDED_USER_ANSWER } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVED_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADDED_USER_ANSWER:
      const userId = action.answer.userId;
      const questionId = action.answer.questionId;
      return {
        ...state,
        [userId]: {
          ...state[userId],
          answers: {
            ...state[userId].answers,
            [questionId]: action.answer.option
          }
        }
      };
    default:
      return state;
  }
}
