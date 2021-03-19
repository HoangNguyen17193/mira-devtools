import React from 'react';
import jwtDecode from 'jwt-decode'
import {isEmpty} from 'lodash';
import classes from './JWTParserResult.module.scss';
import JsonView from "../../JsonFormatter/JsonView/JsonView";

function parseToken(token) {
  if(isEmpty(token)) {
    return {
      header: {},
      payload: {}
    }
  }
  try {
    const payload = jwtDecode(token);
    console.log(payload);
    const header = jwtDecode(token, { header: true });
    return {
      header,
      payload
    }
  } catch (e) {
    return {
      header: {},
      payload: {}
    }
  }
}
export default (props) => {
  const {header, payload} = parseToken(props.token);
  return (
    <div className={classes.JWTParserResult}>
        <div className={classes.JWTParserResultItem}>
          <h3 className={classes.Header}>Header</h3>
          <JsonView
            jsonString={JSON.stringify(header, null, 4)}
          />
        </div>
        <div className={classes.JWTParserResultItem}>
          <h3 className={classes.Header}>Payload</h3>
          <JsonView jsonString={JSON.stringify(payload, null, 4)} />
        </div>
    </div>
  )
};