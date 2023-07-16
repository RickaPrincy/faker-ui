import { ChangeEvent } from "react";

type InputProps = {
    id?: string,
    type: string,
    placeHolder: string,
    onChange: (event: ChangeEvent<HTMLInputElement>, id?: string) => void,
    value:  string | number,
    name: string,
    isRequired?: boolean,
    min?: string | number
    max?: string | number
}

function Input(props: InputProps) {
    const {onChange, placeHolder, id, type, value, name, isRequired, min, max} = props;

    const handlerChange = (event : ChangeEvent<HTMLInputElement>)=>{
        if(id){
            onChange(event, id);
        }else{
            onChange(event);
        }
    }

    return ( 
        <input 
            type={type} 
            placeholder={placeHolder} 
            value={value} 
            onChange={handlerChange} 
            className="input" 
            name={name}
            required={isRequired}
            min={min}
            max={max}
        />
    );
}

export default Input;