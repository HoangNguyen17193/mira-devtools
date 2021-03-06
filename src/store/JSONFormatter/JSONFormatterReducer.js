import actionTypes from './JSONFormatterActionTypes';

const initialState = {
  jsonString: ''
};


const JSONFormatterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_JSON_STRING: {
      return {
        ...state,
        jsonString: action.jsonString
      }
    }
    default: {
      return state;
    }
  }
};

export default JSONFormatterReducer;