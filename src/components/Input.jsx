import React from "react";
import "../css/Input.css"
import "../css/Variable.css"

export default class Input extends React.PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        let {placeholder,value,onChange,type,max} = this.props;

        return <div className="Input">
            { 
                type === "number" ? 
                <input className ="f-18" type={type} value={value} onChange={onChange} placeholder={placeholder} min={max}/>:
                <input className ="f-18" type={type} value={value} onChange={onChange} placeholder={placeholder} maxLength={max}/>
            }
        </div>
    }
}