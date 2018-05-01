import * as React from 'react';

const WithClassClass = (WithClassComponent, classNames, classStyles) => {
  return class extends React.Component {
    render() {
      return (
        <div className={classNames} style={classStyles}>
          <WithClassComponent {...props} />
        </div>);
    };
  };
};

export default WithClassClass;