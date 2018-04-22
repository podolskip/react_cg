import * as React from 'react';
import './App.css';
import Radium from 'radium';
import  Person from './Person/Person';
class App extends React.Component {
  state = {
    persons: [
      { id: '1', name: 'max', age: 30 },
      { id: '2', name: 'Namu', age: 29 },
      { id: '3', name: 'Sue', age: 26 }
    ]
  };

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
    const styleBtn = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      styleBtn.backgroundColor = 'red';
      styleBtn[':hover'] = {
        backgroundColor: 'salmon',
        color: 'yellow'
      };

      persons = (
        <div >
          {this.state.persons.map( (item, index) => {
            return <Person
              key={item.id }
              name={item.name}
              age={item.age}
              changed={(val) => this.nameChangedHandler(index,val)}
              click={ () => this.deletePersonHandler(index)}
            ></Person>;
          } )}
        </div>
      );
    }

    let classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    } 
    
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }
    

    return (
      <div className="App">
        <p className={classes.join(' ')}> Works fine !</p>
        <button 
          style={styleBtn} 
          onClick={this.togglePersonsHandler}
        >Switch Names
        </button>
        {persons}
        
        
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Works fine!!!');
  }
}

export default Radium(App);
