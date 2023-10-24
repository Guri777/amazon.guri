import { baseAPI } from "./baseAPI"

export const getmostdemandproducts = async()=>{
    return baseAPI.get("/api/product/mostdemandproducts")
}