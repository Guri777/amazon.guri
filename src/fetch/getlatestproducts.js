import { baseAPI } from "./baseAPI"


export const getlatestproducts =async()=>{
    return baseAPI.get("/api/product/latestproducts")
}