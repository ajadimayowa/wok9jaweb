import { toast } from "react-toastify";
import api from "./api"

const getServices = async (limit:number,page:number) => {
    try {
        const res = await api.get(`service/all-services?limit=${limit}&page=${page}`);
        return  res;
    } catch (error:any) {
        toast.error(error?.code)
        return error?.code
    }

}

export { getServices }