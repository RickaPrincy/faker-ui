import React from "react";
import InsertInfo from "./InsertInfo"
import Button from "./Button";
import Table from "./Table.jsx";

export default class Froms extends React.Component{
    constructor(){
        super();
        this.state = {
            numberOfRows : "",
            fileName : "",
            columns : [
                { id: 1, name : "", type : "varchar", constraint : "" }
            ]
        }
        ;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addColumn = this.addColumn.bind(this);
    }

    handleSubmit(event){
        console.log("submit");
        event.preventDefault();
    }
    
    handleChange(event){
        switch(event.target.type){
            case "number" : 
                this.setState({numberOfRows : event.target.value });
                break;
            case "text" : 
                this.setState({fileName : event.target.value });
                break;
            default : break;
        }

        event.preventDefault();
    }

    addColumn(event){
        console.log("added column");
        event.preventDefault();
    }

    render(){
        const {fileName, numberOfRows,columns}  = this.state;

        return <div className="container bg-white InsertInfo mt-5">
            <form action="submit" className="w-100 text-dark" onSubmit={this.handleSubmit}>
                <InsertInfo fileName={fileName} numberOfRows={numberOfRows} handleChange={this.handleChange}/>
                <hr />
                <h2 className="mt-3 f-20 fw-bold">Table Columns : </h2>
                <Table columns={columns}/>
                <Button color="success px-5 mt-4" onClick={this.addColumn}>+</Button>
            </form>
        </div> 
    }
}