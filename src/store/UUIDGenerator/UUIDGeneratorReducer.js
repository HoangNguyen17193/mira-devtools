import {v1,v4} from 'uuid';
import actionTypes from './UUIDGeneratorActionTypes';

const initialState = {
  uuidV1Value: v1(),
  uuidV4Value: v4(),
};

const UUIDGeneratorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_UUID_V1: {
      return {
        ...state,
        uuidV1Value: v1()
      };
    }
    case actionTypes.GENERATE_UUID_V4: {
      return {
        ...state,
        uuidV4Value: v4()
      }
    }
    default: {
      return initialState;
    }
  }
};

export default UUIDGeneratorReducer;