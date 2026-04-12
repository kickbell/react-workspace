import { createSlice } from "@reduxjs/toolkit";
import { postDeleteThunk, postOneThunk, postRegisterThunk, postThunk } from "../../service/post/postThunk";
import { createLoadingReducers } from "../commonLoadingHandlers";

const initialState = { data : null, dataOne : null, loading : false, error : null, deleteResult: 0, registerResult: 0 }
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

    builder
    .addCase(postDeleteThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.deleteResult = action.payload?.result ?? 1;
      if (Array.isArray(state.data)) {
        state.data = state.data.filter((item) => (item.id ?? item.postId) !== Number(action.payload?.id));
      }
      state.dataOne = null;
    })

    builder
    .addCase(postRegisterThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.registerResult = action.payload?.result ?? 1;
    })

    createLoadingReducers(builder, postThunk)
    createLoadingReducers(builder, postOneThunk)
    createLoadingReducers(builder, postDeleteThunk)
    createLoadingReducers(builder, postRegisterThunk)
  }
})
export default postDataSlice;