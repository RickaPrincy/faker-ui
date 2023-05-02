import React from "react"

const Button = React.memo((props)=>{
    return <button 
        className={"fw-bold btn btn-" + props.color}
        onClick={props.onClick}
        >
        {props.children}
    </button>
});

export default Button;