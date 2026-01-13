import { useContext, useEffect, useReducer } from "react";
import LoginCom from "../components/LoginCom";
import { initalLogin, initalState, reducer } from "../moduls/member_red";
import { useNavigate } from "react-router-dom";
import { loginCheck } from "../service/member";
import { AuthContext } from "../store/AuthContext";

const LoginCon = () => {
    //[input, setInput] = useState({id:"",pwd:""})
    //initalLogin = { id:"", pwd:"" }
    const [ state, dispatch] = useReducer(reducer,initalState)
    const {login} = useContext(AuthContext)

    const onChange = ( e ) => {
        dispatch({
            //type:"LOGIN_INPUT", 
            type : "CHANGE_INPUT",
            value:e.target.value, 
            name:e.target.name,
            form : "login"
        });
    }
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({type:"LOADING"})
        //setTimeout(()=>{
            try{
                const result = loginCheck(state.login.id, state.login.pwd)
                if( result === 0 ){
                    login( state.login.id )
                    navigate("/list")
                }
            }catch(e){
                dispatch({type:"ERROR", error:e.toString() })
                return;
            }
            dispatch({type:"FINISHED"})
        //} , 1000)
        
    }
    return (<>
    <LoginCom onSubmit={onSubmit} loading={state.loadding} error={state.error}
                state={state} onChange={onChange}/>
    </>)
}
export default LoginCon;