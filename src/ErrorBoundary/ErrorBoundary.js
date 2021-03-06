import * as React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  }

  render(){
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.state.children;
    }
  }
}


export default ErrorBoundary;