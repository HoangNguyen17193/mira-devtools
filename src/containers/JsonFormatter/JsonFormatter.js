import React from "react";
import { Row, Col, Input } from 'antd';

import JsonView from "../../components/JsonFormatter/JsonView/JsonView";
import classes from './JsonFormatter.module.scss';
import './JsonFormatter.scss';

const {TextArea} = Input;


export default () => {
  const jsonString = JSON.stringify({
    a: {
      b: 1,
      c: 2.1,
      d: 'test',
      test: {
        b: 1,
        c: 2.1,
        d: 'test'
      }
    },
    t: '1123',
    fd: ''
  }, null, 4);
  return (
    <Row className={`JsonFormatter ${classes.JsonFormatter}`}>
      <Col className={classes.InputContainer} span={12}>
        <TextArea className={classes.Input} />
      </Col>
      <Col span={12}>
        <JsonView jsonString={jsonString}/>
      </Col>
    </Row>

  );
};