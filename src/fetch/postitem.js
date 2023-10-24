import { baseAPI } from "./baseAPI"

export const postitem = (id)=>{
    const token = localStorage.getItem("token")


        const res =  baseAPI.post("/api/cart/addincart",{productId: id},{headers:{
            Authorization:`Bearer ${token}`
        }})
        return res.data
}