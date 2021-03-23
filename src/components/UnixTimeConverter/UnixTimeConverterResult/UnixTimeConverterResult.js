import React from 'react';
import {Input, Row, Col, Button} from 'antd';
import {CopyOutlined} from '@ant-design/icons';
import dayjs from 'dayjs';
import {isNaN} from 'lodash';

import ActionTypes from '../../../store/UnixTimeConverter/UnixTimeConverterActionTypes';
import classes from './UnixTimeConverterResult.module.scss';

const {TYPE} = ActionTypes;

export default (props) => {
  const copy = (text) => {
    navigator.clipboard.writeText(text);
  };
  const time = parseInt(props.timeString);
  const date = {};
  if (!isNaN(time) && time > 0) {
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
      <Row>
        <label>ISO format</label>
      </Row>
      <Row>
        <Col span={18}>
          <Input className={classes.Input} disabled value={date.isoFormat}/>
        </Col>
        <Col span={6}>
          <Button className={classes.Button} type="default" shape="round" icon={<CopyOutlined />} onClick={() => copy(date.isoFormat)}>
            Copy
          </Button>
        </Col>
      </Row>
      <Row>
        <label>UTC format</label>
      </Row>
      <Row>
        <Col span={18}>
          <Input className={classes.Input} disabled value={date.utcFormat}/>
        </Col>
        <Col span={6}>
          <Button className={classes.Button} type="default" shape="round" icon={<CopyOutlined />} onClick={() => copy(date.utcFormat)}>
            Copy
          </Button>
        </Col>
      </Row>
    </div>
  );
}