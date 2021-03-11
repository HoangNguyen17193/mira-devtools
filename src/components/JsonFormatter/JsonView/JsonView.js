import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

import classes from './JsonView.module.scss';

const JsonView = (props) => {

  return (
    <div className={classes.JsonView}>
      <SyntaxHighlighter language="json" style={materialDark} showLineNumbers={true}>
        {props.jsonString || ''}
      </SyntaxHighlighter>
    </div>
  )
}

export default JsonView;

