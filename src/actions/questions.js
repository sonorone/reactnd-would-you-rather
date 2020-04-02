import { saveQuestion } from '../utils/api';
import { saveQuestionAnswer } from '../utils/api';
import { addUserQuestion } from './users';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}

export function addQuestionAnswer(answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    answer
  };
}

export function handleAddQuestionAnswer(answer) {
  return (dispatch) => {
    return saveQuestionAnswer(answer)
      .then(() => {
        dispatch(addQuestionAnswer(answer));
      })
      .catch((e) => {
        console.warn('Error in handleAddQuestionAnswer: ', e);

        alert('There was an error saving the answer. Try again.');
      });
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    return saveQuestion(question)
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question));
      })
      .catch((e) => {
        console.warn('Error in handleAddQuestion: ', e);

        alert('There was an error adding the question. Try again.');
      });
  };
}
