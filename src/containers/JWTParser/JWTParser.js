import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Input } from 'antd';

import SplitContainer from '../../components/Common/SplitContainer/SplitContainer';
import classes from './JWTParser.module.scss';
import './JWTParser.scss';
import {setToken} from '../../store/JWTParser/JWTParserAction';
import JWtParserResult from '../../components/JWTParser/JWTParserResult/JWTParserResult';

const {TextArea} = Input;

const JWTParser = () => {
  const token = useSelector(state => state.JWTParser.token);
  const dispatch = useDispatch();

  const onInputChanged = (e) => {
    dispatch(setToken(e.target.value));
  }

  return (
    <div className={`${classes.JWTParser} JWTParser`}>
      <SplitContainer>
        <div className={classes.InputContainer}>
          <TextArea placeholder='Paste a token here' value={token} onChange={onInputChanged} className={classes.Input} />
        </div>
        <div className={classes.JWTResultContainer}>
          <JWtParserResult token={token}/>
        </div>
      </SplitContainer>

    </div>
  );
}

export default JWTParser;