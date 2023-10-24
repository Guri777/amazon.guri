import { baseAPI } from "./baseAPI"

export const getcategories = async()=>{

   return baseAPI.get("/api/product/categories")
}
