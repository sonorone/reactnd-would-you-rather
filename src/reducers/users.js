import {
  RECEIVED_USERS,
  ADDED_USER_ANSWER,
  ADDED_USER_QUESTION
} from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVED_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADDED_USER_ANSWER:
      const { authedUser, qid, answer } = action.answer;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    case ADDED_USER_QUESTION:
      const { author, id } = action.question;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      };
    default:
      return state;
  }
}
