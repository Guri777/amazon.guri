import { baseAPI } from "./baseAPI"

export const getbyid = async (id)=>{

    const res = await baseAPI.get(`/api/product/products/${id}`)
    return res.data
}