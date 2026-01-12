import { useReducer } from "react";
import RegCom from "../components/RegCom";
import { initalReg, reducer } from "../moduls/member_red";
const RegCon = () => {
    const [state, dispatch] = useReducer(reducer, initalReg);
    //{ id:"", pwd:"", name:"", addr:"" }
    const onChange = (e) => {
        console.log( e.target )
        //<input name="id", value="1">
        const {value, name} = e.target
        dispatch({type:"REG_INPUT", value, name:name })
    }
    return (<>
    <RegCom onChange={onChange} username={state.id}
                pwd={state.pwd} name={state.name} addr={state.addr} />
    </>)
}
export default RegCon;