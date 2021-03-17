import React, { useState } from "react";
import { Row, Col, Input } from 'antd';
import { debounce } from 'lodash';

import Split from 'react-split'

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
    <div className={`JsonFormatter ${classes.JsonFormatter}`}>
      <Split className={classes.SplitContainer}
             sizes={[50, 50]}
             cursor="col-resize"
             gutterSize={10}
             minSize={300}
             expandToMin={true}
      >
        <div className={classes.InputContainer} span={12}>
          <TextArea onChange={onInputChanged} className={classes.Input} />
        </div>
        <div className={classes.JsonViewContainer} span={12}>
          <JsonView jsonString={jsonString}/>
        </div>
      </Split>

    </div>

  );
};