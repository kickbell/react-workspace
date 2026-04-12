import { createSlice } from "@reduxjs/toolkit";
import { postOneThunk, postThunk } from "../../service/post/postThunk";
import { createLoadingReducers } from "../commonLoadingHandlers";

const initialState = { data : null, dataOne : null, loading : false, error : null }
const postDataSlice = createSlice({
  name : "postDataSlice",
  initialState : initialState,
  extraReducers : ( builder ) =>{
    builder
    .addCase( postThunk.fulfilled , (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })

    builder
    .addCase( postOneThunk.fulfilled , (state, action) => {
      state.dataOne = action.payload;
      state.loading = false;
    })
    createLoadingReducers(builder, postThunk)
    createLoadingReducers(builder, postOneThunk)
  }
})
export default postDataSlice;