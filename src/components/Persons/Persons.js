import * as React from 'react';
import Person from './Person/Person';


class Persons extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return this.props.persons.map( (item, index) => {
      return <Person
        key={item.id }
        name={item.name}
        age={item.age}
        changed={(val) => this.props.changed2(index,val)}
        click={ () => this.props.clicked(index)}
      ></Person>;
    });
  }
    
    

}
;

export default Persons;
