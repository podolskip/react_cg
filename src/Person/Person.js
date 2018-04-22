/*jslint es6 */
import * as React from 'react';
import './Person.css';
import Radium from 'radium';
class  Person extends React.Component  {  
  onBlur = (event) => {
    this.props.changed(event.target.value);
  }

  render () {
    return (
      <div className="Person">
        <p onClick={this.props.click}>Hi I'm a person that's name is {this.props.name}</p>
        <input type="text" onChange={this.onBlur.bind(this)} value={this.props.name} />
      </div>
      
    );
  }
}

export default Radium(Person);