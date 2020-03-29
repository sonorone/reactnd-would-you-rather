import { GET_QUESTIONS } from '../actions/questions';
import { ADD_QUESTION_ANSWER } from '../actions/questions';

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

    // TODO:
    case ADD_QUESTION_ANSWER:
      const id = action.answer.questionId;
      const votes =
        action.answer.option === 'optionOne'
          ? state[id].optionOne.votes
          : state[id].optionTwo.votes;

      return {
        ...state,
        [id]: {
          ...state[id],
          [action.answer.option]: {
            votes: [...votes, action.answer.userId]
          }
        }
      };

    default:
      return state;
  }
}
