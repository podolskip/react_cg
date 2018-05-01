import * as React from 'react';

const WithClassRef = (WithClassComponent, classNames, classStyles) => {
  const WithClassRef = class extends React.Component {
    render() {
      return (
        <div className={classNames} style={classStyles}>
          <WithClassComponent {...this.props} ref={this.props.forwardedRef} />
        </div>);
    };
  };

  return React.forwardRef((props, ref) => {
    return <WithClassRef { ...props } forwardedRef={ref} />;
  });
};

export default WithClassRef;