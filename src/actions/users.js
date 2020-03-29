export const RECEIVED_USERS = 'RECEIVED_USERS';
export const ADDED_USER_ANSWER = 'ADDED_USER_ANSWER';

export function receiveUsers(users) {
  return {
    type: RECEIVED_USERS,
    users
  };
}

export function addUserAnswer(answer) {
  return {
    type: ADDED_USER_ANSWER,
    answer // object props: userId, questionId, option
  };
}
