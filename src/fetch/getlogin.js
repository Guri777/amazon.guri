import { baseAPI } from "./baseAPI";

export const getlogin = (loginobj)=>baseAPI.post("/api/User/Login",loginobj)
