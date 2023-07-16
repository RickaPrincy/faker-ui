import React from "react";
import Column from "./Column";
import "../assets/css/Table.css";

export default function Table({columns,isRemove, onRemove,onChange}){
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
            {columns.map(el =>{
                    return <Column key={el.id} column={el} onRemove={onRemove} isRemove={isRemove} onChange ={onChange}/>
            })}
        </tbody>
    </table>
}