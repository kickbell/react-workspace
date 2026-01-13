import { useReducer } from "react";
import RegCom from "../components/RegCom";
import { initalReg, initalState, reducer } from "../moduls/member_red";
import { register } from "../service/member";
import {useNavigate} from "react-router-dom";
const RegCon = () => {
    const [state, dispatch] = useReducer(reducer, initalState);
    console.log("RegCon :", state)
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
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(state)
        dispatch({type:"LOADING"})
        try{
            //setTimeout(()=>{
                const result = register(state.register);
                if( result === 1) {//성공1, 실패 0
                    //alert("회원가입 성공")
                    navigate("/list")
                }
                dispatch({type:"FINISHED"})
            //}, 1000 )
            
        }catch(error){
            dispatch({type:"ERROR", msg:error.toString()})
        }
    }
    return (<>
    <RegCom loading={state.loadding} error={state.error}
                onChange={onChange} onSubmit={onSubmit}
                username={state.register.id}
                pwd={state.register.pwd} 
                name={state.register.name} 
                addr={state.register.addr} />
    </>)
}
export default RegCon;