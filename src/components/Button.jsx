import React from "react";

export default class Button extends React.PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        return <button 
            className={"fw-bold btn btn-" + this.props.color}
            onClick={this.props.onClick}
            >
            {this.props.children}
        </button>
    }
}