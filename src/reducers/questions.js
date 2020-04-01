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
      const { qid, answer, authedUser } = action.answer;
      const votes =
        action === 'optionOne'
          ? state[qid].optionOne.votes
          : state[qid].optionTwo.votes;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]) //[...votes, authedUser]
          }
        }
      };

    default:
      return state;
  }
}
