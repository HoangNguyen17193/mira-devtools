import actionTypes from './JSONFormatterActionTypes';

const setJsonString = (jsonString) => {
  return {
    type: actionTypes.SET_JSON_STRING,
    jsonString
  }
};

export {
  setJsonString
}