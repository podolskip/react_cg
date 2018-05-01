import * as React from 'react';

const WithClassFn = (WithClassComponent, classNames, classStyles) => {
  return class extends React.Component {
    render() {
      return (
        <div className={classNames} style={classStyles}>
          <WithClassComponent {...props} />
        </div>);
    };
  };
};

export default WithClassFn;