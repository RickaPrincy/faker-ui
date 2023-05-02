import React from "react";
import Column from "./Column";
import "../css/Table.css";

export default class Table extends React.Component{
    
    constructor(props){
        super(props);
        this.test = this.test.bind(this);
    }
    
    test(event){
        console.log(event.target.value);
    }

    render(){
        return <table className="w-100">
            <colgroup>
                <col />
                <col />
                <col />
            </colgroup>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Constraint</th>
                </tr>
            </thead>
            <tbody>
                {this.props.columns.map(el =><Column key={el.id} column={el} handleChange ={this.test}/>)}
            </tbody>
        </table>
    }
}