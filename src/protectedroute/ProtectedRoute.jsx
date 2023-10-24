import jwtDecode from "jwt-decode"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { handlelogin } from "../pages/login/loginslice"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ()=>{

    const dispatch = useDispatch()

    const isloggedin = useMemo(()=>{
        const token = localStorage.getItem("token")
        if(token){

            const decodedtoken = jwtDecode(token)

            dispatch(handlelogin(decodedtoken))
            return true

        }
        return false
    },[])

    if(!isloggedin){
        return <Navigate to="/login" replace/>
    }


    return <Outlet/>





}