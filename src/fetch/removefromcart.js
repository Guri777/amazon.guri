import { baseAPI } from "./baseAPI"

export const removefromcart = async (productId)=>{
    const token = localStorage.getItem("token")


        const res = await baseAPI.delete("/api/cart/removefromcart/",{
            data:{productId},
            headers:{
            Authorization:`Bearer ${token}`
        }})
        return {productId, removed:res.data}
}