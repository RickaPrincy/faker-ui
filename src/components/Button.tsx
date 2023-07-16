type ButtonProps = {
    text: string,
    className: string,
    onClick?: ()=> void 
}

function Button(props : ButtonProps) {
    const { text, className, onClick} = props;

    return ( 
        <button onClick={onClick} className={"btn btn-" + className}>{text}</button>
    );
}

export default Button;