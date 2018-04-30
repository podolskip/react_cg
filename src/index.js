import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

class Sth extends React.Component {
  render() {
    return(<h1>sadsad</h1>);
  }
}

export default Sth;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
