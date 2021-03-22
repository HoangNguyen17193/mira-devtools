import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {InputNumber, Radio} from 'antd';

import classes from './UnixTimeConverter.module.scss';
import './UnixTimeConverter.scss';
import SplitContainer from '../../components/Common/SplitContainer/SplitContainer';
import {setTimeValue, setTimeType} from '../../store/UnixTimeConverter/UnixTimeConverterAction';
import ActionTypes from '../../store/UnixTimeConverter/UnixTimeConverterActionTypes';
import UnixTimeConverterResult from '../../components/UnixTimeConverter/UnixTimeConverterResult/UnixTimeConverterResult';

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
  const changeValue = (timeValue) => {
    dispatch(setTimeValue(timeValue))
  };
  return (
    <div className={`${classes.UnixTimeConverter} UnixTimeConverter`}>
      <SplitContainer sizes={[40, 60]}>
        <div className={classes.Container}>
          <label>Enter a timestamp to convert it to a date and time:</label>
          <InputNumber type='number' placeholder='Enter a timestamp' className={classes.Input} value={value} onChange={changeValue}/>
          <Radio.Group onChange={changeType} value={type}>
            <Radio value={TYPE.millisecond}>
              Milliseconds since epoch
            </Radio>
            <Radio value={TYPE.second}>
              Seconds since epoch
            </Radio>
          </Radio.Group>
        </div>
        <div className={classes.Container}>
          <UnixTimeConverterResult
            timeString={value} type={type}/>
        </div>
      </SplitContainer>
    </div>
  );
}