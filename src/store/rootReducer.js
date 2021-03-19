import {combineReducers} from 'redux';
import JSONFormatterReducer from './JSONFormatter/JSONFormatterReducer';
import JWTParserReducer from './JWTParser/JWTParserReducer';

export default combineReducers({
  JSONFormatter: JSONFormatterReducer,
  JWTParser: JWTParserReducer,
});
