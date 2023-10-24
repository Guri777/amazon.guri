import { baseAPI } from "./baseAPI"


export const getcartprod = () =>{
    const token = localStorage.getItem("token")
   const res =  baseAPI.get("/api/cart/getmycartproducts/", {headers:{
    Authorization:`Bearer ${token}`
   }})
  
  return res
 
}