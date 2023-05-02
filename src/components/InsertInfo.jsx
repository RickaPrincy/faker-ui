import Input from "./Input"
import Button from "./Button";

export default function InsertInfo ({fileName,numberOfRows,handleChange}){

    return <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex">
            <Input onChange={handleChange} value={fileName} placeholder="File Name" type="text" max={50}/>
            <Input onChange={handleChange} value={numberOfRows} placeholder="Number Of Rows" type="number" max={1}/>    
        </div>
        <Button color="primary btn-started ms-1">Generate</Button>
    </div>
}