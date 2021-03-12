import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark, atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

import classes from './JsonView.module.scss';

const JsonView = (props) => {
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
        {props.jsonString || ''}
      </SyntaxHighlighter>
    </div>
  )
}

export default JsonView;

