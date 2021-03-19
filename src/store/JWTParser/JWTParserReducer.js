import actionTypes from './JWTParserActionTypes';

const initialState = {
  token: ''
};


const JWTParserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN: {
      return {
        ...state,
        token: action.token
      }
    }
    default: {
      return state;
    }
  }
};

export default JWTParserReducer;