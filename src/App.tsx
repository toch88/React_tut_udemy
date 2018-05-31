import * as React from 'react';
import './App.css';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    // return (
    //   <div className="App">
    //     <h1>Hi</h1>
    //   </div>
    // );
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'));
  }
}

export default App;
