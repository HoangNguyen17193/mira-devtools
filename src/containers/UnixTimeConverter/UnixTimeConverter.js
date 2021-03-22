import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Input, Select, Radio} from 'antd';

import classes from './UnixTimeConverter.module.scss';
import './UnixTimeConverter.scss';
import SplitContainer from '../../components/Common/SplitContainer/SplitContainer';
import {setTimeValue, setTimeType} from '../../store/UnixTimeConverter/UnixTimeConverterAction';
import ActionTypes from '../../store/UnixTimeConverter/UnixTimeConverterActionTypes';

const {TYPE} = ActionTypes;

export default () => {
  const time = useSelector(state => state.UnixTimeConverter.time);
  const {
    value, type
  } = time;

  const dispatch = useDispatch();
  const changeType  = (e) => {
    dispatch(setTimeType(e.target.value))
  };
  const changeValue = (e) => {
    dispatch(setTimeValue(e.target.value))
  };
  return (
    <div className={`${classes.UnixTimeConverter} UnixTimeConverter`}>
      <SplitContainer sizes={[40, 60]}>
        <div className={classes.Container}>
          <label>Enter a timestamp to convert it to a date and time:</label>
          <Input className={classes.Input} value={value} onChange={changeValue}/>
          <Radio.Group onChange={changeType} value={type}>
            <Radio value={TYPE.millisecond}>
              Millisecond
            </Radio>
            <Radio value={TYPE.second}>
              Second
            </Radio>
          </Radio.Group>
        </div>
        <div className={classes.Container}>
          <h1>UnixTime Converter</h1>
          <h3>{value}</h3>
          <h3>{type}</h3>
        </div>
      </SplitContainer>
    </div>
  );
}