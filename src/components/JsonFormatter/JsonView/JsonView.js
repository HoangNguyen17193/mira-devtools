import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { isValidJsonString } from '../../../utils';

import classes from './JsonView.module.scss';

const customStyle = {
  ...atomDark,
  'code[class*="language-"]': {
    ...atomDark['code[class*="language-"]'],
    'background': '#323841',
  },
  'pre[class*="language-"]': {
    ...atomDark['pre[class*="language-"]'],
    'background': '#323841',
    'borderRadius': '10px'
  }
}
const JsonView = (props) => {
  const jsonString = props.jsonString;
  if(!jsonString) {
    return (
      <div className={classes.JsonView}>
      </div>
    )
  }
  const result = isValidJsonString(jsonString) ? JSON.stringify(JSON.parse(jsonString), null, 4)
    : 'Syntax Error';
  return (
    <div className={`${classes.JsonView} ${props.className} || ''`}>
      <SyntaxHighlighter language='json' style={customStyle} showLineNumbers={true}>
        {result || ''}
      </SyntaxHighlighter>
    </div>
  )
}

export default JsonView;

