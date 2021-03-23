import React from 'react';
import {Col, Row} from 'antd';
import {useSelector, useDispatch} from 'react-redux';

import UUIDCard from '../../components/UUIDGenerator/UUIDCard/UUIDCard';
import classes from './UUIDGenerator.module.scss';
import {generateUUIDV1, generateUUIDV4} from '../../store/UUIDGenerator/UUIDGeneratorAction';

const UUIDGenerator = () => {
  const uuidV1Value = useSelector(state => state.UUIDGenerator.uuidV1Value);
  const uuidV4Value = useSelector(state => state.UUIDGenerator.uuidV4Value);
  const dispatch = useDispatch();
  return (
    <div className={classes.UUIDGenerator}>
      <Row className={classes.UUIDGeneratorRow}>
        <Col span={12}>
          <UUIDCard
            title='UUID v1(timestamp)'
            randomString={uuidV1Value}
            generate={() => dispatch(generateUUIDV1())}
          />
        </Col>
        <Col span={12}>
          <UUIDCard
            title='UUID v4(random)'
            randomString={uuidV4Value}
            generate={() => dispatch(generateUUIDV4())}
          />
        </Col>
      </Row>
    </div>);
}

export default UUIDGenerator;