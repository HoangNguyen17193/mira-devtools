import actionTypes from './UnixTimeConverterActionTypes';

const {TYPE} = actionTypes;

const initialState = {
  time: {
    type: TYPE.millisecond,
    value: 0
  },

};

const UnixTimeConverterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TIME: {
      return {
        ...state,
        time: {
          ...action.time
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default UnixTimeConverterReducer;