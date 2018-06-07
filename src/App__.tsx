import * as React from 'react';

import User from './User/User';

export default class App extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Cory' }, 
        { id: 2, name: 'Meg' }, 
        { id: 3, name: 'Bob'}
      ],
    };
  }

  public deleteUser = (id:any) => {
    this.setState( (prevState:any) => {
      return { 
        users: prevState.users.filter((user:any) => user.id !== id) 
      };
    });
  }

  public renderUser = (user:any) => {
    return <User key={user.id} user={user} onClick={this.deleteUser} />;
  }

  public render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map(this.renderUser)}
        </ul>
      </div>
    );
  }
}


