import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token")

const initialState = {
    isloggedin:false,
    email:"",
    exp:0,
    iat:0,
    nameid:"",
    nbf:0,
    role:"",
    unique_name:""

}

const loginslice = createSlice({
    name:"login",
    initialState,
    reducers:{
        handlelogin(state,action){
            if(token){
                state.isloggedin = true
                
            }
            
            for(let key in action.payload){
                state[key] = action.payload[key]
            }

        },
        handlelogout(state,action){
            state.isloggedin = false
            // localStorage.removeItem("token")
        },
        
    }

})

export const {handlelogin,handlelogout} = loginslice.actions
export default loginslice.reducer