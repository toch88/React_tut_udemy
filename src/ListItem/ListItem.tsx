import * as React from 'react';
// import './Person.css';

export default class ListItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        // this.handleClick=this.handleClick.bind(this);
    }

    public handleClick = () => {
        this.props.onItemClick(this.props.item.key);
    }
    public render() {
        return (
            <li onClick={this.handleClick}>
                {this.props.item.name}
            </li>
        );
    }
}

