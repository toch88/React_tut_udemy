// import * as React from 'react';
// import './Person.css';


// export interface IPersonPropsType {
//     person:any;
//     onChangedPerson?: any;
//     onClickPerson?:any;
// }



// // const preson: any = (props: IPersonPropsType) => {
// //     return <p>I'm {props.name} and my age is {props.age} </p>
// // };

// export default class Person extends React.Component<IPersonPropsType, any> {
//     constructor(props: IPersonPropsType) {
//         super(props);
//     }

//     public render() {
//         return (
//             <div className="Person">
//                 <p onClick={this.props.click} >I'm {this.props.name} and my age is {this.props.age} </p>
//                 <p>{this.props.children}</p>
//                 <input type="text" onChange={this.props.changed} value={this.props.name} />
//             </div>
//         );
//     }
// }

// // export default preson