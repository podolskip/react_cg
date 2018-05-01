/*jslint es6 */
import * as React from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import Radium from 'radium';
import WithClassFn from '../../../hoc/WithClassFn';
import Aux from '../../../hoc/Auxx';
import { AuthContext } from '../../../containers/App';

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
    if (this.props.position === 0) {
      this.inputElem.focus();
    }
  }

  onBlur = (event) => {
    this.props.changed(event.target.value);
  }

  focus = () => {
    return this.inputElement.current.focus();
  }

  render () {
    console.log('[Person.js] inside render');
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated2</p> : null}
        </AuthContext.Consumer>
        {this.props.authenticated ? <p>I'm authenticated</p> : null}
        <p onClick={this.props.click}>Hi I'm a person that's name is {this.props.name}</p>
        <input
          ref={( inp ) => { this.inputElem = inp; }} // references only available in state-full components!!!
          type="text" 
          onChange={this.onBlur.bind(this)} 
          value={this.props.name} />
      </Aux>
           
    );
  }
}

Person.propTypes = {
  click: PropTypes.func ,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default WithClassFn(Radium(Person),'Person', style);