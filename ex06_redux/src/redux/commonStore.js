import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import memberDataSlice from "./memberDataSlice";

const store = configureStore({
    reducer : {
        //state.input = {login:{id, pwd}}
        input : inputSlice.reducer,
        //state.memberData : {data : null}
        memberData : memberDataSlice.reducer
    }
});
export default store;