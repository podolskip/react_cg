import * as React from 'react';
import Person from './Person/Person';


class Persons extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps (nextProps) {
    console.log('[Persons.js] inside will receive props', nextProps);
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('[Persons.js] inside should component UPDATE',nextProps,nextState);
    return true;
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('[Persons.js] inside WILL UPDATE',nextProps,nextState);
  }
  
  componentDidUpdate (){
    console.log('[Persons.js] inside DID UPDATE');
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
