import actionTypes from './UnixTimeConverterActionTypes';

const {TYPE} = actionTypes;

const initialState = {
  time: {
    type: TYPE.millisecond,
    value: ''
  },
};

const UnixTimeConverterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TIME_TYPE: {
      return {
        ...state,
        time: {
          ...state.time,
          type: action.timeType
        }
      }
    }
    case actionTypes.SET_TIME_VALUE: {
      return {
        ...state,
        time: {
          ...state.time,
          value: action.value
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default UnixTimeConverterReducer;