import React from 'react';
import {Input} from 'antd';
import dayjs from 'dayjs';
import {isNaN} from 'lodash';

import ActionTypes from '../../../store/UnixTimeConverter/UnixTimeConverterActionTypes';
import classes from './UnixTimeConverterResult.module.scss';

const {TYPE} = ActionTypes;

export default (props) => {
  const time = parseInt(props.timeString);
  const date = {
  };
  if(!isNaN(time) && time > 0) {
    try {
      const DayJs = props.type === TYPE.millisecond ? dayjs(time) : dayjs.unix(time);
      date.isoFormat = DayJs.toISOString();
      date.utcFormat = DayJs.toString();
      console.log(DayJs.toString());
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={classes.UnixTimeConverterResult}>
      <label>ISO format</label>
      <Input className={classes.Input} disabled value={date.isoFormat} />
      <label>UTC format</label>
      <Input className={classes.Input} disabled value={date.utcFormat} />
    </div>
  );
}