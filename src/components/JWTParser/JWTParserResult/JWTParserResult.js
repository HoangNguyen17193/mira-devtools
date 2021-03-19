import React from 'react';
import jwtDecode from 'jwt-decode'
import {isEmpty} from 'lodash';
import classes from './JWTParserResult.module.scss';
import JsonView from "../../JsonFormatter/JsonView/JsonView";

function parseToken(token) {
  if(isEmpty(token)) {
    return {
      header: '{}',
      payload: '{}'
    }
  }
  try {
    const payload = jwtDecode(token);
    const header = jwtDecode(token, { header: true });
    return {
      header: JSON.stringify(header, null, 4),
      payload: JSON.stringify(payload, null, 4)
    }
  } catch (e) {
    return {}
  }
}
export default (props) => {
  const {header, payload} = parseToken(props.token);
  const InvalidTokenView = <div className={classes.InvalidTokenLabel}>Invalid Token</div>;
  const HeaderView = header ? <JsonView jsonString={header} /> : InvalidTokenView;
  const PayloadView = payload ? <JsonView jsonString={payload} /> : InvalidTokenView;
  return (
    <div className={classes.JWTParserResult}>
        <div className={classes.JWTParserResultItem}>
          <h3 className={classes.Header}>Header</h3>
          {HeaderView}
        </div>
        <div className={classes.JWTParserResultItem}>
          <h3 className={classes.Header}>Payload</h3>
          {PayloadView}
        </div>
    </div>
  )
};