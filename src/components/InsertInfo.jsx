import Input from "./Input"
import Button from "./Button";

export default function InsertInfo ({tableName,numberOfRows,handleChange,url,resetUrl}){

    return <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
            <Input onChange={handleChange} value={tableName} placeholder="Table Name" type="text" max={50}/>
            <Input onChange={handleChange} value={numberOfRows} placeholder="Number Of Rows" type="number" max={1}/>    
            <div className={url === "" ? "d-none" : "download m-0 p-0"}>
                <p className="m-0">
                    Download your file :
                    <a href={url} onClick={resetUrl} target="_blank" rel="noreferrer" className="text-success f-18 text-underline m-0">here !</a>
                </p>
            </div>
        </div>
        <Button color="primary btn-started ms-1">Generate</Button>
    </div>
}