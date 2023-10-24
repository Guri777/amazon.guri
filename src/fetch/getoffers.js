import { baseAPI } from "./baseAPI"

export const getoffers = async()=>{
    return baseAPI.get("/api/product/offers")
}