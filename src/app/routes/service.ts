import api from "../controllers/api";

interface IProm {
    loading:boolean
    success:boolean,
    data:any
    error?:any
}


const getService = async (id:number)=>{
    const res = await api.get(`service/${id}`);
    if(res.data){
        return {success:true,loading:false,data:res.data?.services}
    } else {
        return {success:false,loading:false,data:{}}
    }
   
}

export {getService}