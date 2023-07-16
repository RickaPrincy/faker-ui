import React, { ChangeEvent } from "react";
import {  RowType } from "./Form";
import Input from "../components/Input";
import Select from "../components/Select";

type RowProps = {
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>, id?: string)=> void,
    row : RowType 
    listTypes : string[] | undefined
}

const Row = React.memo((props: RowProps)=>{
    const {row, onChange, listTypes } = props;
    return ( 
        <tr>
            <td>
                <Input
                    name="name"
                    id={row.id}
                    onChange={onChange}
                    placeHolder="ColumnName"
                    type="text"
                    value={row.name}
                    isRequired={true}
                /> 
            </td>
            <td>
                <Select id={row.id} value={row.type} list={listTypes} name="type" onChange={onChange}/>                
            </td>
            <td>
                <Input
                    name="constraint"
                    id={row.id}
                    onChange={onChange}
                    placeHolder="Constraint"
                    type="text"
                    value={row.constraint}
                    isRequired={false}
                /> 
            </td>       
        </tr>
    );
});

export default Row;