import { GET_QUESTIONS } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };

    // TODO
    // case ADD_QUESTION:
    //   return {
    //     ...state,
    //     [action.id]: action.question
    //   };
    default:
      return state;
  }
}
