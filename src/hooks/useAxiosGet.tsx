import { useEffect, useState } from "react";
import axios , { AxiosResponse } from "axios";

export type ResponseData<T> = {
    data: T | null;
    pending: boolean;
    error: any;
};

function useAxiosGet<T>(url: string):ResponseData<T>{
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response: AxiosResponse<T> = await axios.get(url);
                setData(response.data);
                setPending(false);
            }
            catch (error) {
                setError(error);
                setPending(false);
            }
        }
        fetch();
    }, [url]);

    return { data, pending ,error};
}

export default useAxiosGet;