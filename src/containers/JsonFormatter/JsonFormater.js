import React from "react";
import JsonView from "../../components/JsonFormatter/JsonView/JsonView";

export default () => {
  const jsonString = JSON.stringify({
    a: {
      b: 1,
      c: 2.1,
      d: 'test',
      test: {
        b: 1,
        c: 2.1,
        d: 'test'
      }
    },
    t: '1123',
    fd: ''
  }, null, 4);
  return (
    <JsonView jsonString={jsonString}/>
  );
};