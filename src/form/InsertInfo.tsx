import React, { ChangeEvent } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { InsertInfoType } from "./Form";

export type InsertInfoProps={
    value : InsertInfoType,
    onChange: (event: ChangeEvent<HTMLInputElement>)=>void
}

const InsertInfo = React.memo((props: InsertInfoProps)=>{    
    const {onChange} = props; 
    const {tableName, numberOfRows} = props.value;
    
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center w-400px">
                <div className="w-50 me-2 border-light">
                    <Input onChange={onChange} value={tableName} name="tableName" type="text" placeHolder="TableName" isRequired={true} />
                </div>
                <div className="w-50 border-light">
                    <Input onChange={onChange} value={numberOfRows} name="numberOfRows" type="number" placeHolder="NumberOfRows" isRequired={true} min={1} />
                </div>
            </div>
            <Button className="primary px-3 py-2" text="Generate" />
        </div>
    )
});

export default InsertInfo;