import * as React from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);

class App extends React.PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] inside constructo',props);
    
    this.state = {
      persons: [
        { id: '1', name: 'max', age: 30 },
        { id: '2', name: 'Namu', age: 29 },
        { id: '3', name: 'Sue', age: 26 }
      ],
      showPersons: false,
      toggleClickCounter: 0,
      authenticated: false
    };
  };

  componentWillMount() {
    console.log('[App.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount');
  }
  
  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('[App.js] inside should component UPDATE',nextProps,nextState);
  //   return true;
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('[App.js] inside WILL UPDATE',nextProps,nextState);
  }
  
  componentDidUpdate (){
    console.log('[App.js] inside DID UPDATE');
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

  // set state is an ASYNC call and this is the best way to call state change!!!!
  togglePersonsHandler = () => {
    this.setState((prevState, props) => {
      return {
        showPersons:!prevState.showPersons,
        toggleClickCounter: prevState.toggleClickCounter + 1
      };
    });
  }

  loginHandler = () => {
    this.setState((pastState, props) => {
      return {
        authenticated: true
      };
    });
  }
  render() {
    console.log('[App.js] inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed2={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated}
      />;
    }   

    return (
      <StyleRoot >
        <WithClass classes="App">
          <button onClick={() => { this.setState({showPersons:true});}}>Show Persons</button>
          <Cockpit 
            clicked={this.togglePersonsHandler}
            persons={this.state.persons}
            showPersons={this.state.showPersons} 
            login={this.loginHandler}           
          />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
        </WithClass>
      </StyleRoot>
      
    );
    // return React.createElement('div', null, 'h1', 'Works fine!!!');
  }
}

export default Radium(App);
