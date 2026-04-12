import { createSlice } from "@reduxjs/toolkit";
import { postDeleteThunk, postLikedThunk, postModifyThunk, postOneThunk, postRegisterThunk, postThunk } from "../../service/post/postThunk";
import { createLoadingReducers } from "../commonLoadingHandlers";

const initialState = { data : null, dataOne : null, loading : false, error : null, deleteResult: 0, registerResult: 0, modifyResult: 0 }
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

    builder
    .addCase(postModifyThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.modifyResult = action.payload?.result ?? 1;
      if (state.dataOne && String(state.dataOne.id ?? state.dataOne.postId) === String(action.payload?.id)) {
        state.dataOne = {
          ...state.dataOne,
          updatedAt: new Date().toISOString()
        };
      }
    })

    builder
    .addCase(postLikedThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      const { postId, liked, delta } = action.payload || {};

      if (Array.isArray(state.data)) {
        state.data = state.data.map((item) => {
          const itemId = Number(item.id ?? item.postId);
          if (itemId !== Number(postId)) return item;
          return {
            ...item,
            liked,
            likedCount: Math.max(0, Number(item.likedCount ?? 0) + Number(delta ?? 0)),
          };
        });
      }

      if (state.dataOne && Number(state.dataOne.id ?? state.dataOne.postId) === Number(postId)) {
        state.dataOne = {
          ...state.dataOne,
          liked,
          likedCount: Math.max(0, Number(state.dataOne.likedCount ?? 0) + Number(delta ?? 0)),
        };
      }
    })

    createLoadingReducers(builder, postThunk)
    createLoadingReducers(builder, postOneThunk)
    createLoadingReducers(builder, postDeleteThunk)
    createLoadingReducers(builder, postRegisterThunk)
    createLoadingReducers(builder, postModifyThunk)
    createLoadingReducers(builder, postLikedThunk)
  }
})
export default postDataSlice;