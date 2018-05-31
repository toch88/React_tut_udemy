import * as React from 'react';
import './App.css';
import Person, { IPersonPropsType } from './Person/Preson';
// import logo from './logo.svg';

class App extends React.Component {
  public state = {
    persons: [
      { name: 'Max', age: 5 },
      { name: 'Steve', age: 15 },
      { name: 'Matt', age: 25 }
    ] as IPersonPropsType[]
  };

  public switchNameHandler = (newName:any) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 5 },
        { name: 'Steve', age: 15 },
        { name: 'Mateusz', age: 25 }
      ] as IPersonPropsType[]
    });
  }

  public render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <p>this is working</p>
        <button onClick={this.switchNameHandler.bind(this, 'Mateusz')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person click={this.switchNameHandler.bind(this, 'Stephane')} name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

        {/* <Person dupa="30" /> */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'));
  }
}

export default App;
