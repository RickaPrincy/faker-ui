import axios from "axios";
import { useEffect, useState } from "react";

function useAxiosGet( url : string ){
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get(url)
        .then(response =>{
            response = response.data.map((el : any)=>{
                if(el.nom) 
                    return {id: el.id, value: el.nom};
                else
                    return {el: el.id, value: el.genre};
            })

            setData(response as any);
        })
        .catch(error => console.log(error))
    }, [])

    return [data,setData]; 
}

export default useAxiosGet;