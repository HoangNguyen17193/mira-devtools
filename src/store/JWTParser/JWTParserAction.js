import actionTypes from './JWTParserActionTypes';

const setToken = (token) => {
  return {
    type: actionTypes.SET_TOKEN,
    token
  }
};

export {
  setToken
}