import * as React from 'react';
import './App.css';
import  Person from './Person/Person';
class App extends React.Component {
  state = {
    persons: [
      { name: 'max', age: 30 },
      { name: 'Namu', age: 29 },
      { name: 'Sue', age: 26 }
    ]
  };

  swithNameHandler = () => {
    console.log('works!');
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1 > Works fine !</h1>
        <button onClick={this.swithNameHandler}>Swith Names</button>
        <Person name={this.state.persons[0].name} >Mz hobbies Are: Running</Person>
        
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Works fine!!!');
  }
}

export default App;
