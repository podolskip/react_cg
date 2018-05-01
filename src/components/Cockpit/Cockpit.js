import * as React from 'react';
import Radium, { StyleRoot } from 'radium';
import Aux from '../../hoc/Auxx';

const cockpit = (props) => {
  let classes = [];

  let styleBtn = {
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

  if (props.persons.length <= 2){
    classes.push('red');
  }

  if (props.persons.length <= 1){
    classes.push('bold');
  }

  if (props.showPersons) {
    styleBtn.backgroundColor = 'red';
    styleBtn[':hover'] = {
      backgroundColor: 'salmon',
      color: 'yellow'
    };
  };


  return (
    <Aux>
      <p className={classes.join(' ')}> Works fine !</p>
      <button 
        style={ styleBtn} 
        onClick={props.clicked}
      >Switch Names
      </button>
    </Aux>
  );
};

export default cockpit;