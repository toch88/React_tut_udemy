import * as React from 'react';
// import { SyntheticEvent } from 'react';
import './App.css';
// import Person, { IPersonPropsType } from './Person/Preson';
// import logo from './logo.svg';

class App extends React.Component {

  public state = {
    persons: [
      { key: 'aasd', name: 'Max', age: 5 },
      { key: 'dsdf', name: 'Steve', age: 15 },
      { key: 'fhgj', name: 'Matt', age: 25 }
    ],
    showPersons: false as boolean
  };

  public handleClick(key:number){
    console.log(`Trybi ${key}`);
  }

  public render() {
    
    return (
      <ul>
        {this.state.persons.map(person =>
          <li key={person.key} onClick={this.handleClick.bind(this, person.key)}>
            {person.name}
          </li>
        )}
      </ul>
    );
  
  }

}

export default App;
