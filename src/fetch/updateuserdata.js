import { baseAPI } from "./baseAPI"

export const updateuserdata = async (obj)=>{
    const token = localStorage.getItem("token")

    const res = await baseAPI.put("/api/User/updateuserdata", obj,{headers:{
        Authorization:`Bearer ${token}`
    }} )
    return res.data
} 