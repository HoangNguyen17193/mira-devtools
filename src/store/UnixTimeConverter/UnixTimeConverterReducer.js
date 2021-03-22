import actionTypes from './UnixTimeConverterActionTypes';

const {TYPE} = actionTypes;

const initialState = {
  time: {
    type: TYPE.millisecond,
    value: 0
  },
};

const UnixTimeConverterReducer = (state = initialState, action) => {
  console.log(action);
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
      console.log({
        ...state,
        time: {
          ...state.time,
          type: action.timeType
        }
      });
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