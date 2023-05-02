import React from "react";
import "../css/Input.css"
import "../css/Variable.css"

const Input = React.memo(({placeholder,value,onChange,type,max})=>{
    return <div className="Input">
            { 
                type === "number" ? 
                <input className ="f-18" type={type} value={value} onChange={onChange} placeholder={placeholder} min={max}/>:
                <input className ="f-18" type={type} value={value} onChange={onChange} placeholder={placeholder} maxLength={max}/>
            }
        </div>
});

export default Input;