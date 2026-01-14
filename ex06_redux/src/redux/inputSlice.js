import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../service/authThunk";

//state 관리 및 기능 정의
const inputSlice = createSlice({
    name : "input",
    initialState : {
        login : {id:"", pwd:""},
        register : {id:"", pwd:"", name:"", addr:""},
        result : -1, loading : false, error : null
    },
    reducers : {
        changeinput : (state, action) => {
            //console.log("changeinput state : ", {...state})
            //console.log("changeinput state : ", {...state["login"]} )
            //console.log("changeinput action : ", action)
            //payload : { name : id, value : 1}
            //payload : { name : pwd, value : a}
            
            //state[action.payload.form][action.payload.name] = action.payload.value
            const {form, name, value} = action.payload
            state[form][name] = value;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(loginThunk.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginThunk.fulfilled,(state, action) => {
            //console.log("fulfilled action : ", action)
            state.result = action.payload
            state.loading = false;
            state.error = null;
            
        })
        .addCase(loginThunk.rejected,(state,action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})
export const {changeinput} = inputSlice.actions
export default inputSlice;