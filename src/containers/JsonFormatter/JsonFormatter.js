import React, { useState } from "react";
import { Row, Col, Input } from 'antd';
import { debounce } from 'lodash';

import JsonView from "../../components/JsonFormatter/JsonView/JsonView";
import classes from './JsonFormatter.module.scss';
import './JsonFormatter.scss';

const {TextArea} = Input;


export default () => {
  const [jsonString, setJsonString] = useState('');
  const onInputChanged = debounce((e) => {
    setJsonString(e.target.value)
  }, 400);

  return (
    <Row className={`JsonFormatter ${classes.JsonFormatter}`}>
      <Col className={classes.InputContainer} span={12}>
        <TextArea onChange={onInputChanged} className={classes.Input} />
      </Col>
      <Col span={12}>
        <JsonView jsonString={jsonString}/>
      </Col>
    </Row>

  );
};