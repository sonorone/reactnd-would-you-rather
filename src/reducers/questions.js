import { GET_QUESTIONS } from '../actions/questions';
import { ADD_QUESTION } from '../actions/questions';
import { ADD_QUESTION_ANSWER } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };

    case ADD_QUESTION:
      const id = action.question.id;
      return {
        ...state,
        [id]: action.question
      };

    case ADD_QUESTION_ANSWER:
      const questionId = action.answer.questionId;
      const votes =
        action.answer.option === 'optionOne'
          ? state[questionId].optionOne.votes
          : state[questionId].optionTwo.votes;

      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [action.answer.option]: {
            votes: [...votes, action.answer.userId]
          }
        }
      };

    default:
      return state;
  }
}
