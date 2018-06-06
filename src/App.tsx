import * as React from 'react';
// import { SyntheticEvent } from 'react';
import './App.css';
import Person, { IPersonPropsType } from './Person/Preson';
// import logo from './logo.svg';

class App extends React.Component {
  public state = {
    persons: [
      { name: 'Max', age: 5 },
      { name: 'Steve', age: 15 },
      { name: 'Matt', age: 25 }
    ] as IPersonPropsType[],
    showPersons: false as boolean
  };

  public switchNameHandler = (newName: string) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 5 },
        { name: 'Steve', age: 15 },
        { name: 'Mateusz', age: 25 }
      ] as IPersonPropsType[]
    });
  }

  public nameChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      persons: [
        { name: "Max", age: 5 },
        { name: e.currentTarget.value, age: 15 },
        { name: 'Wiola', age: 25 }
      ] as IPersonPropsType[]
    });
  }

  public togglePersonHandler = () => {
    const doseShow=this.state.showPersons;
    this.setState({showPersons: !doseShow});
  }

  public render() {

    const style: React.CSSProperties = {
      backgroundColor: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
    };

    return (
      <div className="App">
        <h1>Hi</h1>
        <p>this is working</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        {this.state.showPersons===true ?

          <div>
            <Person name={this.state.persons[0].name}
              age={this.state.persons[0].age} />

            <Person click={this.switchNameHandler.bind(this, 'Stephane')}
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangeHandler} />

            <Person name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div>

          : null}
      </div>
    );

  }
}

export default App;
