import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    cartobj:[],
    
}

const Cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
       
        handlevalue(state,action){
            state.cartobj = action.payload

        },


        handleaddvalue(state,action){
            
            state.cartobj = [...state.cartobj,action.payload]
        },


       
        removefromcartval(state,action){
            state.cartobj = state.cartobj.filter((ele)=>ele.id!=action.payload)
            
        }

    }

})


export const {handlevalue,removefromcartval,handleaddvalue} = Cartslice.actions
export default Cartslice.reducer