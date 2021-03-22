import {combineReducers} from 'redux';
import JSONFormatterReducer from './JSONFormatter/JSONFormatterReducer';
import JWTParserReducer from './JWTParser/JWTParserReducer';
import UUIDGeneratorReducer from './UUIDGenerator/UUIDGeneratorReducer';
import UnixTimeConverterReducer from './UnixTimeConverter/UnixTimeConverterReducer';

export default combineReducers({
  JSONFormatter: JSONFormatterReducer,
  JWTParser: JWTParserReducer,
  UUIDGenerator: UUIDGeneratorReducer,
  UnixTimeConverter: UnixTimeConverterReducer
});
