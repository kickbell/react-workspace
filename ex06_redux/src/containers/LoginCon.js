import { useDispatch, useSelector } from "react-redux";
import LoginCom from "../components/LoginCom";
import inputSlice from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { login } from "../redux/authSlice";
const LoginCon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //저장소에 저장되어 있는 state를 꺼내는 역할
    //변수.id, 변수.pwd
    //const 변수 = useSelector( state => {
    const {id, pwd} = useSelector( state => {
        //console.log("logincon state : ", state)
        return state.input.login; //{id:"", pwd:""}
    })
    const {result , loading, error} = useSelector( state => state.input )
    const onChange = (e) => {
        const {name, value} = e.target
        dispatch( inputSlice.actions.changeinput({name, value, form:"login"}) )
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const resultThunk = await dispatch( loginThunk( {id:id, pwd } ) )
        if( resultThunk.payload === 0 ){
            dispatch( login( {username:id} ) )
            navigate("/")
        }
    }

    return (<>
     <LoginCom result={result} loading={loading} error={error}
     onSubmit={onSubmit} onChange={onChange} username={id} pwd={pwd}/>
    </>)
}
export default LoginCon;