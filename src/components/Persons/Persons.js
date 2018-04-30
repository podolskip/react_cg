import * as React from 'react';
import Person from './Person/Person';


const persons = (props) => (
  props.persons.map( (item, index) => {
    return <Person
      key={item.id }
      name={item.name}
      age={item.age}
      changed={(val) => props.clicked(index,val)}
      click={ () => props.changed(index)}
    ></Person>;
  } )
);

export default persons;
