import React from "react";
import InsertInfo from "./InsertInfo"

export default class Froms extends React.Component{
    constructor(){
        super();
        this.state = {fileName : "", numberOfRows : ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    render(){
        const {fileName, numberOfRows}  = this.state;

        return <div className="container bg-white InsertInfo mt-5">
            <form action="submit" className="w-100 text-dark" onSubmit={this.handleSubmit}>
                <InsertInfo fileName={fileName} numberOfRows={numberOfRows} handleChange={this.handleChange}/>
            </form>
        </div> 
    }
}