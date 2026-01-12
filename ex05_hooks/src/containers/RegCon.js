import { useReducer } from "react";
import RegCom from "../components/RegCom";
import { initalReg, initalState, reducer } from "../moduls/member_red";
const RegCon = () => {
    const [state, dispatch] = useReducer(reducer, initalState);
    //{ id:"", pwd:"", name:"", addr:"" }
    const onChange = (e) => {
        console.log( e.target )
        //<input name="id", value="1">
        const {value, name} = e.target
        dispatch({
            //type:"REG_INPUT", 
            type : "CHANGE_INPUT",
            value, name, form:"register" })
    }
    console.log("reg : ", state)
    return (<>
    <RegCom onChange={onChange} 
                username={state.register.id}
                pwd={state.register.pwd} 
                name={state.register.name} 
                addr={state.register.addr} />
    </>)
}
export default RegCon;