import * as React from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends React.Component {
  constructor(props){
    super(props);
    console.log('[App.js] inside constructo',props);
    
    this.state = {
      persons: [
        { id: '1', name: 'max', age: 30 },
        { id: '2', name: 'Namu', age: 29 },
        { id: '3', name: 'Sue', age: 26 }
      ],
      showPersons: false
    };
  };

  componentWillMount() {
    console.log('[App.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount');
  }
  

  nameChangedHandler = (id,val) => {
    const personsFromState = [...this.state.persons];
    personsFromState[id].name = val;

    this.setState({persons: personsFromState});
  }

  deletePersonHandler = (id) => {
    const personsFromState = [...this.state.persons];
    personsFromState.splice(id,1);

    this.setState({persons: personsFromState});
  }

  togglePersonsHandler = () => {
    this.setState({showPersons:!this.state.showPersons});
  }
  render() {
    console.log('[App.js] inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed2={this.nameChangedHandler}
      />;
    }   

    return (
      <StyleRoot >
        <div className="App">
          <Cockpit 
            clicked={this.togglePersonsHandler}
            persons={this.state.persons}
            showPersons={this.state.showPersons}            
          />
          {persons}
        </div>
      </StyleRoot>
      
    );
    // return React.createElement('div', null, 'h1', 'Works fine!!!');
  }
}

export default Radium(App);
