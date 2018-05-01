/*jslint es6 */
import * as React from 'react';
import './Person.css';
import Radium from 'radium';
import WithClassFn from '../../../hoc/WithClassFn';
import Aux from '../../../hoc/Auxx';

const style = {
  '@media (minwidth: 500px)': {
    width: '450px'
  }
};

class  Person extends React.Component  {
  constructor(props){
    super(props);
    console.log('[Person.js] inside constructo',props);

  };

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount');
  }

  onBlur = (event) => {
    this.props.changed(event.target.value);
  }

  render () {
    console.log('[Person.js] inside render');
    return (
      <Aux>
        <p onClick={this.props.click}>Hi I'm a person that's name is {this.props.name}</p>
        <input type="text" onChange={this.onBlur.bind(this)} value={this.props.name} />
      </Aux>
           
    );
  }
}

export default WithClassFn(Radium(Person),'Person', style);