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

  public togglePersonHandler = () => {
    const doseShow = this.state.showPersons;
    this.setState({ showPersons: !doseShow });
  }


  public deletePersonHandler = (personIndex:number):any => {
    // const persons=this.state.persons.slice();
    const persons=[...this.state.persons]; //new array with elements form person 
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  public render() {

    const style: React.CSSProperties = {
      backgroundColor: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
    };



    // tslint:disable-next-line:jsx-self-close
    let persons: JSX.Element = <div><p></p></div>;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(
            (person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(index)} />;
            }
          )}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi</h1>
        <p>this is working</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );

  }
}

export default App;
