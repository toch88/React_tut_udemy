import * as React from "react";
// import PropTypes from "prop-types";

// Note that the console.log below isn't called
// when delete is clicked on a user.
// That's because pureComponent's shallow
// comparison works properly here because
// the parent component isn't passing down
// an arrow function (which would cause this
// component to see a new function on each render)
class User extends React.PureComponent<any,any> {

  constructor(props:any){
    super(props);
    
  }
  public onDeleteClick = () => {
    // No bind needed since we can compose the relevant data for this item here
    this.props.onClick(this.props.user.id);
  } 

  public render() {
    console.log(`${name} just rendered`);
    return (
      <li>
        <input 
          type="button" 
          value="Delete" 
          onClick={this.onDeleteClick} 
        />
        {this.props.user.name}
      </li>
    );
  }
}

// User.propTypes = {
//   user: PropTypes.object.isRequired,
//   onClick: PropTypes.func.isRequired
// };

export default User;
