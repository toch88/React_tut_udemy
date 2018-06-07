import * as React from 'react';
// import { SyntheticEvent } from 'react';
import './App.css';
import Person, { IPersonPropsType } from './Person/Preson';
// import logo from './logo.svg';

class App extends React.Component {

  public state = {
    persons: [
      { key: 'aasd', name: 'Max', age: 5 },
      { key: 'dsdf', name: 'Steve', age: 15 },
      { key: 'fhgj', name: 'Matt', age: 25 }
    ] as IPersonPropsType[],
    showPersons: false as boolean
  };
  public persons:JSX.Element;
  constructor(props:any){
    super(props);


    

    if (this.state.showPersons) {
      this.persons = (
        <div>
          {this.state.persons.map(
            (person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.key}
                changed={(event:React.FormEvent<HTMLInputElement>)=>this.nameChangeHandler(event, person.key)}
                // changed={this.nameChangeHandler.bind(this, person.key)}
                 />;
            }
          )}
        </div>
      );
    }

  }
  public togglePersonHandler = () => {
    const doseShow = this.state.showPersons;
    this.setState({ showPersons: !doseShow });
  }

  public nameChangeHandler=( e:React.FormEvent<HTMLInputElement>, id:string,):void=>{

    const personIndex = this.state.persons.findIndex(
      p=>{
        return p.key===id;
      }
    );

    const person ={
      ...
      this.state.persons[personIndex]
    }; 
    // creating new object with spread operator, alternative Object.assing({},this.state.persons[personIndex])

    person.name =e.currentTarget.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    
    this.setState({persons});
    
  }

  public deletePersonHandler = (personIndex: number): any => {
    // const persons=this.state.persons.slice();
    const persons = [...this.state.persons]; // new array with elements form person
    persons.splice(personIndex, 1);
    this.setState({ persons }); // ({persons: persons}) it's equal
  }
  public render() {

    const style: React.CSSProperties = {
      backgroundColor: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
    };



    // tslint:disable-next-line:jsx-self-close
    

    return (
      <div className="App">
        <h1>Hi</h1>
        <p>this is working</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        {this.persons}
      </div>
    );

  }
}

export default App;
