import actionTypes from './UnixTimeConverterActionTypes';

const setTimeValue = (value = 0) => {
  return {
    type: actionTypes.SET_TIME_VALUE,
    value
  }
};

const setTimeType = (timeType = actionTypes.TYPE.millisecond) => {
  return {
    type: actionTypes.SET_TIME_TYPE,
    timeType
  }
};

export {
  setTimeValue,
  setTimeType
}