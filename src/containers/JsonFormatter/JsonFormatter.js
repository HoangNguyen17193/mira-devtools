import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from 'antd';
import { setJsonString } from '../../store/JSONFormatter/JSONFormatterAction';

import Split from 'react-split'

import JsonView from "../../components/JsonFormatter/JsonView/JsonView";
import classes from './JsonFormatter.module.scss';
import './JsonFormatter.scss';

const {TextArea} = Input;

function JsonFormatter(){
  const jsonString = useSelector(state => state.JSONFormatter.jsonString);
  const dispatch = useDispatch();

  const onInputChanged = (e) => {
    dispatch(setJsonString(e.target.value));
  }
  return (
    <div className={`JsonFormatter ${classes.JsonFormatter}`}>
      <Split className={classes.SplitContainer}
             sizes={[40, 60]}
             cursor="col-resize"
             gutterSize={10}
             minSize={300}
             expandToMin={true}
      >
        <div className={classes.InputContainer}>
          <TextArea value={jsonString} onChange={onInputChanged} className={classes.Input} />
        </div>
        <div className={classes.JsonViewContainer}>
          <JsonView jsonString={jsonString}/>
        </div>
      </Split>
    </div>
  );
};

export default JsonFormatter;