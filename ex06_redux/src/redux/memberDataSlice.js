import { createSlice } from "@reduxjs/toolkit";

const memberDataSlice = createSlice({
    name : "memberData",
    initialState : {data : null},
    reducers : {
        list : (state, action) => {
            //console.log("list state : ", {...state})
            //console.log("list action : ", action)
            state.data = action.payload
        }
    }
});
export const {list} = memberDataSlice.actions
export default memberDataSlice;