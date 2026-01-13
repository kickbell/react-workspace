import { createSlice } from "@reduxjs/toolkit";

//state 관리 및 기능 정의
const inputSlice = createSlice({
    name : "input",
    initialState : {
        login : {id:"", pwd:""},
        register : {id:"", pwd:"", name:"", addr:""}
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
    }
})
export const {changeinput} = inputSlice.actions
export default inputSlice;