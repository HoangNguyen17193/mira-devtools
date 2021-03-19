import {combineReducers} from 'redux';
import JSONFormatterReducer from './JSONFormatter/JSONFormatterReducer';
import JWTParserReducer from './JWTParser/JWTParserReducer';
import UUIDGeneratorReducer from './UUIDGenerator/UUIDGeneratorReducer';

export default combineReducers({
  JSONFormatter: JSONFormatterReducer,
  JWTParser: JWTParserReducer,
  UUIDGenerator: UUIDGeneratorReducer
});
