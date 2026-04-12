import { createSlice } from "@reduxjs/toolkit";
import { postThunk } from "../../service/post/postThunk"

const initialState = { data : null }
const postDataSlice = createSlice({
  name : "postDataSlice",
  initialState : initialState,
  extraReducers : ( builder ) =>{
    builder
    .addCase( postThunk.fulfilled , (state, action) => {
      state.data = action.payload;
    })
  }
})
export default postDataSlice;