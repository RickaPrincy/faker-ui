import React from "react";

export default class Column extends React.Component{
    constructor(props){
        super(props);

        this.listOfType = [
            { id : 1, value : "int" },
            { id : 2, value : "date" },
            { id : 3, value : "timestamp" },
            { id : 4, value : "char" },
            { id : 6, value : "varchar" },
            { id : 7, value : "float" },
            { id : 8, value : "boolean" },
            { id : 9, value : "text" },
            { id : 10, value : "city" },
            { id : 11, value : "country" },
            { id : 12, value : "countryCode" },
            { id : 13, value : "animal" },
            { id : 14, value : "color" },
            { id : 15, value : "colorRgb" },
            { id : 16, value : "product" },
            { id : 17, value : "productDescription" },
            { id : 18, value : "price" },
            { id : 19, value : "databaseType" },
            { id : 20, value : "transactionType" },
            { id : 21, value : "imageUrl" },
            { id : 22, value : "ipv4" },
            { id : 23, value : "ipv6" },
            { id : 24, value : "email" },
            { id : 25, value : "adressMac" },
            { id : 26, value : "word" },
            { id : 27, value : "songType" },
            { id : 28, value : "songName" },
            { id : 29, value : "gender" },
            { id : 30, value : "first_name" },
            { id : 31, value : "last_name" },
            { id : 32, value : "full_name" },
            { id : 33, value : "middle_name" },
            { id : 34, value : "jobDescriptor" },
            { id : 35, value : "jobType" },
            { id : 36, value : "sex" },
            { id : 37, value : "vehicule" },
            { id : 38, value : "fileName" },
            { id : 39, value : "phoneNumber" }
        ];

        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    /**
     * Give event and column.id to this.props.onChange 
     * @param {DOM_Event} event DOM Event
     */
    handleChange(event){
        this.props.onChange(event, this.props.column.id);
        event.preventDefault();
    }

    /**
     * Give column.id to this.props.onRemove
     * @param {DOM_Event} event DOM Event
     */
    handleRemove(event){
        this.props.onRemove(this.props.column.id);
        event.preventDefault();
    }

    render(){
        const { column ,isRemove} = this.props;
        return <tr>
            <td>
                <input type="text" name="name" maxLength={25} value={column.name} placeholder="Column Name" onChange={this.handleChange} required/>
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