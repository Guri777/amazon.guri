import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[],
    signinvalue:"Hello, sign-in",
    cartvalue:[]
}


const Headerslice = createSlice({
    name:"header",
    initialState,
    reducers:{
        addcategories(state,action){
            state.value=action.payload
        },
        handleinput(state,action){
            state.value=action.payload
        },
        handlecartvalue(state,action){
            state.cartvalue = action.payload
        }

        

    }


})

export const {addcategories,handleinput,handlecartvalue}=Headerslice.actions
export default Headerslice.reducer
