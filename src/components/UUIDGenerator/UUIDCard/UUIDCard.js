import React from 'react';
import {Card,Input, Button} from 'antd';
import {CopyOutlined, RedoOutlined} from '@ant-design/icons';

import classes from './UUIDCard.module.scss';
import './UUIDCard.scss';

export default (props) => {
  return (
    <Card className={`${classes.UUIDCard} UUIDCard`} title={props.title} bordered={false}>
      <Input disabled className={classes.Input} value={props.randomString} />
      <Button type="primary" shape="round" icon={<RedoOutlined />} onClick={props.generate}>
        Generate
      </Button>
      <Button className={classes.Button} type="default" shape="round" icon={<CopyOutlined />}>
        Copy
      </Button>
    </Card>
  )
};