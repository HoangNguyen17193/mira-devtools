import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from 'antd';

import { setJsonString } from '../../store/JSONFormatter/JSONFormatterAction';
import SplitContainer from '../../components/Common/SplitContainer/SplitContainer';
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
      <SplitContainer sizes={[40, 60]}>
        <div className={classes.InputContainer}>
          <TextArea value={jsonString} onChange={onInputChanged} className={classes.Input} />
        </div>
        <div className={classes.JsonViewContainer}>
          <JsonView jsonString={jsonString}/>
        </div>
      </SplitContainer>
    </div>
  );
};

export default JsonFormatter;