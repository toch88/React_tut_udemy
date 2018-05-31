import * as React from 'react';

interface IPersonPropsType {
    name: string;
    age: number;
}

// const preson: any = (props: IPersonPropsType) => {
//     return <p>I'm {props.name} and my age is {props.age} </p>
// };

export default class HelloForm extends React.Component<IPersonPropsType, any> {
    constructor(props: IPersonPropsType) {
        super(props);
    }

    public render() {
        return (
            <div>
                <p>I'm {this.props.name} and my age is {this.props.age} </p>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

// export default preson