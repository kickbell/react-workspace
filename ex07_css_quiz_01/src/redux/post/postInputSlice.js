import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register : {title:"", content:""}
}

const postInputSlice = createSlice({
  name : "postInput",
  initialState : initialState,
  reducers : {
    initInput : (state) => initialState,
    changeInput : ( state, action ) => {
      const { form, name, value } = action.payload
      state[form][name] = value;
    }
  }
})

export const {initInput, changeInput} = postInputSlice.actions;
export default postInputSlice;