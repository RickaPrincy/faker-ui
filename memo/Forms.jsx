import React from "react";
import { v4 as uuid } from "uuid";
import InsertInfo from "./InsertInfo"
import Button from "./Button";
import Table from "./Table.jsx";

export default class Froms extends React.Component{
    constructor(){
        super();
        this.state = {
            url : "",
            isRemove : false,
            numberOfRows : "",
            tableName : "",
            columns : []
        }
        ;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetUrl = this.resetUrl.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addColumn = this.addColumn.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.showRemoveColumn = this.showRemoveColumn.bind(this);
    }

    /**
     * Change the state tableName or numberOfRows
     * @param {DOM_Event} event DOM Event
     */
    handleChange(event){
        switch(event.target.type){
            case "number" : 
                this.setState({numberOfRows : event.target.value });
                break;
            case "text" : 
                this.setState({tableName : event.target.value });
                break;
            default : break;
        }

        event.preventDefault();
    }
    /**
     * Call a function who generate all the insert
     * @param {DOM_Event} event DOM Event
     */
    handleSubmit(event){
        const options = {
            method: "POST",
            headers : {"Content-type" : "application/json"},
            body: JSON.stringify(this.state)
        }
        
        fetch(`http://localhost:5000`,options)
        .then(response => response.json())
        .then(data => {
            this.setState({url : data.url});
        })
        .catch(error => console.error('Erreur lors de la requête', error));

        event.preventDefault();
    }

    resetUrl(){
        setTimeout(()=>{
            this.setState({tableName : "", numberOfRows : "", url : "",columns : []});
        },1000);
    }

    /**
     * Add new column on the state columns with 
     * id: faker.uuid...
     * name: ""...
     * type: "varchar"...
     * constraint: ""
     * @param {DOM_Event} event DOM Event
     */
    addColumn(event){
        this.setState(state=>{
            return { columns : [...state.columns,
                    { 
                        id : uuid(),
                        name : "", 
                        type : "varchar",
                        constraint : ""
                    }
                ] 
            }
        });
        
        event.preventDefault();
    }

    /**
     * Change the correct state (columns[id])
     * @param {DOM Event} event DOM Event
     * @param {faker_UUID} id Faker_UUID
     */
    onChange(event,id){
        const key = event.target.name;
        this.setState(state =>{
            let tab = [...state.columns].map(el =>{
                if(el.id === id)
                    el[key] = event.target.value;
                return el;
            });

            return { columns : tab}
        });
    }

    /**
     * Toggle a button remove for every rows
     * @param {DOM_Event} event DOM Event
     */
    showRemoveColumn(event){
        this.setState(state => ({isRemove : !state.isRemove}));
        event.preventDefault();
    }   

    /**
     * Remove a row who has the id = id
     * @param {faker_UUID} id Faker UUID
     */
    onRemove(id){
        this.setState(state =>{
            let tab = [...state.columns].filter(el => el.id !== id);

            return { columns : tab}
        });
    }


    render(){
        const {tableName, numberOfRows,columns,isRemove,url}  = this.state;

        return <div className="container bg-white InsertInfo mt-5">
            
            <form action="submit" className="w-100 text-dark" onSubmit={this.handleSubmit}>
                
                <InsertInfo tableName={tableName} resetUrl={this.resetUrl} url={url} numberOfRows={numberOfRows} handleChange={this.handleChange}/>
                
                <hr />
                <h2 className="mt-3 f-20 fw-bold">Table Columns : </h2>
                
                <Table columns={columns} onChange={this.onChange} isRemove={isRemove} onRemove={this.onRemove}/>
                
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <p className="f-18 text-primary">Number of columns : { this.state.columns.length }</p>
        
                    <div className="d-flex align-items-center">
                        <Button color="danger px-5 mx-1" onClick={this.showRemoveColumn}>-</Button>
                        <Button color="success px-5 mx-1" onClick={this.addColumn}>+</Button>
                    </div>
                </div>
            </form>
        
        </div> 
    }
}