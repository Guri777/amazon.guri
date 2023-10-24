import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    
   
    value:{}
}

const Detailslice = createSlice({
    name:"details",
    initialState,
    reducers:{

      
       

        handleprod(state,action){
            state.value = action.payload

        }


    }

})

export const {handleprod } = Detailslice.actions
export default Detailslice.reducer
