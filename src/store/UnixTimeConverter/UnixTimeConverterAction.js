import actionTypes from './UnixTimeConverterActionTypes';


const setTime = (value = 0, type = actionTypes.TYPE.millisecond) => {
  return {
    type: actionTypes.SET_JSON_STRING,
    time: {
      type,
      value
    }
  }
};

export {
  setTime
}