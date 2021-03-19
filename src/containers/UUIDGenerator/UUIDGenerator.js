import React from 'react';
import {Col, Row} from 'antd';

import UUIDCard from "../../components/UUIDGenerator/UUIDCard/UUIDCard";
import classes from './UUIDGenerator.module.scss';

export default () => {

  return (
    <div className={classes.UUIDGenerator}>
      <Row className={classes.UUIDGeneratorRow}>
        <Col span={12}>
          <UUIDCard
            title='UUID v1(timestamp)'
          />
        </Col>
        <Col span={12}>
          <UUIDCard
            title='UUID v3(namespace w/ MD5)'
          />
        </Col>
        <Col span={12}>
          <UUIDCard
            title='UUID v4(random)'/>
        </Col>
        <Col span={12}>
          <UUIDCard
            title='UUID v5(namespace w/ SHA-1)'/>
        </Col>

      </Row>

    </div>);
}