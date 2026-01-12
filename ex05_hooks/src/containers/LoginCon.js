import { useReducer } from "react";
import LoginCom from "../components/LoginCom";
import { initalLogin, initalState, reducer } from "../moduls/member_red";

const LoginCon = () => {
    //[input, setInput] = useState({id:"",pwd:""})
    //initalLogin = { id:"", pwd:"" }
    const [ state, dispatch] = useReducer(reducer,initalLogin)
    const onChange = ( e ) => {
        dispatch({
            type:"LOGIN_INPUT", 
            value:e.target.value, 
            name:e.target.name 
        });
    }
    return (<>
    <LoginCom state={state} onChange={onChange}/>
    </>)
}
export default LoginCon;