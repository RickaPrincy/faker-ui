import { ChangeEvent } from "react";
import { v4 as uuid } from "uuid";

type SelectProps = {
    id: string,
    list: string[] | undefined,
    name: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLSelectElement>, id: string)=>void
}

function Select(props: SelectProps) {
    const {list, name, onChange, value, id} = props;

    const handlerChange = (event: ChangeEvent<HTMLSelectElement>)=>{
        onChange(event, id);
    }
    return (  
        <select name={name} onChange={handlerChange} value={value} className="input">
            {list?.map(el=>{
                return <option value={el} key={uuid()}>{el}</option> 
            })}         
        </select>
    );
}

export default Select;