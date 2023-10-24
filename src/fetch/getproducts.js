
import { baseAPI } from "./baseAPI";

export const getproducts =async()=>{
    return baseAPI.get("/api/product/products")
}
 