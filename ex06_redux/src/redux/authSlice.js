import { createSlice } from "@reduxjs/toolkit";

const initialState = {isLoggedIn : false, username : null}
const savedAuth = sessionStorage.getItem("auth");
const authSlice = createSlice({
    name : "auth",
    initialState : savedAuth ? JSON.parse(savedAuth) : initialState ,
    reducers : {
        login : (state, action)=>{
            state.isLoggedIn = true;
            state.username = action.payload.username
            //state = {isLoggedIn : true, username : 사용자id }
            sessionStorage.setItem("auth", JSON.stringify({...state}) )
        },
        logout : (state) => {
                //state.isLoggedIn = false;
                //state.username = null;
                sessionStorage.clear();
                return initialState;
        }
    }
});
export const {login, logout} = authSlice.actions
export default authSlice;