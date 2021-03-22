import actionTypes from './UUIDGeneratorActionTypes';

const generateUUIDV1 = () => {
  return {
    type: actionTypes.GENERATE_UUID_V1
  }
};

const generateUUIDV3 = () => {
  return {
    type: actionTypes.GENERATE_UUID_V3
  }
};

const generateUUIDV4 = () => {
  return {
    type: actionTypes.GENERATE_UUID_V4
  }
};

const generateUUIDV5 = () => {
  return {
    type: actionTypes.GENERATE_UUID_V5
  }
};

export {
  generateUUIDV1,
  generateUUIDV3,
  generateUUIDV4,
  generateUUIDV5
}