import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[]
}

const liveserachslice = createSlice({
    name:"livesearch",
    initialState,
    reducers:{
        addtolivesearch(state,action){
            state.value=action.payload

        }
    }
})

export const {addtolivesearch} = liveserachslice.actions
export default liveserachslice.reducer