/*jslint es6 */
import * as React from 'react';

class  Person extends React.Component  {
  render () {
      console.log(this.props);
    return (
      <div>
        <p>Hi I'm a person that's name is {this.props.name}</p>
      </div>
      
    );
  }
}

export default Person;