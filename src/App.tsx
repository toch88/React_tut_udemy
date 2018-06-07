import * as React from 'react';
// import { SyntheticEvent } from 'react';
import './App.css';
// import Person, { IPersonPropsType } from './Person/Preson';
import ListItem from './ListItem/ListItem';
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

  public handleClick=(key?: any)=> {
    console.log(`Trybi ${this}`);
  }


  public render() {

 
    return (
      <div id="App">
      <ul>
        
        {this.state.persons.map(person =>
          <ListItem key={person.key} item={person} onItemClick={this.handleClick} />
        )}
      </ul>
      </div>
    );

  }

}

export default App;


