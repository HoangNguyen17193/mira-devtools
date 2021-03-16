import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { materialDark, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { isValidJsonString } from '../../../utils';

import classes from './JsonView.module.scss';

const JsonView = (props) => {
  const jsonString = props.jsonString;
  const result = isValidJsonString(jsonString) ? JSON.stringify(JSON.parse(jsonString), null, 4)
    : 'Syntax Error';
  const customMaterialDark = {
    ...atomDark,
    "code[class*=\"language-\"]": {
      ...atomDark["code[class*=\"language-\"]"],
      "background": "#323841",
    },
    "pre[class*=\"language-\"]": {
      ...atomDark["pre[class*=\"language-\"]"],
      "background": "#323841",
      "border-radius": "10px"
    }
  }
  return (
    <div className={classes.JsonView}>
      <SyntaxHighlighter language="json" style={customMaterialDark} showLineNumbers={true}>
        {result || ''}
      </SyntaxHighlighter>
    </div>
  )
}

export default JsonView;

