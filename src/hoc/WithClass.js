import * as React from 'react';

const WithClass = (props) => {
  return (
    <div className={props.classes} style={props.styles}>
      {props.children}
    </div>
  );
};

export default WithClass;