import { ChangeEvent, useState } from "react";
import "../assets/css/form.css";
import InsertInfo from "./InsertInfo";
import useAxiosGet from "../hooks/useAxiosGet";
import { v4 as uuid } from "uuid";
import Row from "./Row";

export type InsertInfoType = {
    tableName: string,
    numberOfRows: number | string,
}

export type RowType = {
    id: string,
    name: string,
    type: string,
    constraint: string,
}

function Form() {

    const [insertInfo, setInsertInfo] = useState<InsertInfoType>({
        tableName: "",
        numberOfRows: ""
    });

    const [columns, setColumns] = useState<RowType[]>([
        { name: "", constraint: "not null", id: uuid(), type: "varchar" }
    ]);

    const listTypes = useAxiosGet<{types: string[]}>("http://localhost:5000/types");

    const onChangeInsertInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInsertInfo(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const onChangeColumn = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>, id?: string)=>{
        const {name, value} = event.target;
        if (id) {
            const newColumn = [...columns].map(el => {
                if (el.id == id){
                    el[name as keyof RowType] = value;
                    return el;
                }
                return el;     
            })

            setColumns(newColumn);
        }
    }

    return (
        <form action="submit" className="container bg-white py-5 px-3 mt-5">
            <InsertInfo onChange={onChangeInsertInfo} value={insertInfo}/>
            <hr />
            <h2 className="mt-3 fw-bold table-columns">Table columns :</h2>
            <table className="w-100">
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
                    {columns.map(el => {
                        return <Row key={el.id} row={el} onChange={onChangeColumn} listTypes={listTypes.data?.types}></Row>
                    })}
                </tbody>
            </table>
        </form>
    );
}

export default Form;