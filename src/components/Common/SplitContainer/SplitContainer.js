import React from 'react';
import Split from 'react-split';

import './SplitContainer.scss';
import classes from './SplitContainer.module.scss';

const SplitContainer = (props) => {
  return (
    <Split className={`${classes.SplitContainer} SplitContainer`}
           sizes={props.sizes}
           cursor="col-resize"
           gutterSize={10}
           minSize={300}
           expandToMin={true}
    >
      {props.children}
    </Split>
  )
};

export default SplitContainer;
