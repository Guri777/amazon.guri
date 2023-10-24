import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[]
    
}

const categoriesslice = createSlice({
    name:"categories",
    initialState,
    reducers:{
        handleCategoreValue(state,action){
            state.value = action.payload
        }
    }

})

export const {handleCategoreValue} = categoriesslice.actions
export default categoriesslice.reducer