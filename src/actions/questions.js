export const GET_QUESTIONS = 'GET_QUESTIONS';
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
