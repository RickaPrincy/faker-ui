import React from "react";

export default class Column extends React.Component{
    constructor(props){
        super(props);

        this.listOfType = [
            { id : 1, value : "varchar" },
            { id : 2, value : "int" },
            { id : 3, value : "boolean" },
            { id : 4, value : "first_name" },
            { id : 6, value : "last_name" },
            { id : 7, value : "age" },
            { id : 8, value : "float" },
            { id : 9, value : "birthdate" },
            { id : 10, value : "date" },
            { id : 11, value : "timestamp" }
        ];

        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleChange(event){
        this.props.onChange(event, this.props.column.id);
        event.preventDefault();
    }
    handleRemove(event){
        this.props.onRemove(this.props.column.id);
        event.preventDefault();
    }

    render(){
        const { column ,isRemove} = this.props;
        return <tr>
            <td>
                <input type="text" name="name" maxLength={25} value={column.name} placeholder="Column Name" onChange={this.handleChange}/>
            </td>
            <td>
                <select name="type" value={column.type} onChange={this.handleChange}>
                    {this.listOfType.map(el => <option  key={el.id} value={el.value}>{el.value}</option>)}
                </select>
            </td>
            <td>      
                <input type="text" name="constraint" value={column.constraint} placeholder="Constraint" onChange={this.handleChange}/>
                <button className={isRemove ? "btn-remove" : "d-none"} onClick={this.handleRemove}>-</button>
            </td>
        </tr>
    }

}