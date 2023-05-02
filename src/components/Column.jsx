import React from "react";

export default class Column extends React.PureComponent{
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
        ]
    }

    render(){
        const { column, handleChange } = this.props;
        return <tr>
            <td>
                <input type="text" maxLength={25} value={column.name} placeholder="Column Name" onChange={handleChange}/>
            </td>
            <td>
                <select name="type" value={column.type} onChange={handleChange}>
                    {this.listOfType.map(el => <option  key={el.id} value={el.value}>{el.value}</option>)}
                </select>
            </td>
            <td>      
                <input type="text" value={column.constraint} placeholder="Constraint" onChange={handleChange}/>
            </td>
        </tr>
    }

}