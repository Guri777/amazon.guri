import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[],
    offersvalue:[],
    mostdemand:[],
    product:[]
}


const Homeslice = createSlice({
    name:"home",
    initialState,
    reducers:{
        addproductstoslider(state,action){
            state.value=action.payload
        },
        addofferstoslider(state,action){
            state.offersvalue=action.payload

        },
        addmostdemand(state,action){
            state.mostdemand=action.payload

        },

        addproduct (state,action){
            state.product=action.payload

        }
    }

})

export const {addproductstoslider,addofferstoslider,addmostdemand,addproduct} = Homeslice.actions
export default Homeslice.reducer