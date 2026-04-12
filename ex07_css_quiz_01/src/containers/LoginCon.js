import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import LoginCom from "../components/LoginCom";
import {changeInput, initInput} from "../redux/inputSlice"
import {loginThunk} from "../service/authThunk"
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
const LoginCon = () => {
    const dispatch = useDispatch();
    
    useEffect( ()=>{
        dispatch( initInput() )
    },[dispatch])


    
    const navigate = useNavigate();
    const {username, password} = useSelector( state => {
        return state.input.login;
    })
    const {isLoggedIn, result, loading, error} = useSelector( state => {
        return state.auth;
    })
    const onChange = (e) => {
        const {name, value} = e.target
        dispatch( changeInput({ name , value , form : "login" }) )
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("[LOGIN SUBMIT]", { username, password });
        dispatch( loginThunk({username, password}) );
    }
    useEffect( () => {
        if( isLoggedIn ){
            navigate("/")
        }
    },[isLoggedIn,navigate]);
    
    return (<>
       
        <LoginCom loading={loading} error={error} result={result} onSubmit={onSubmit} onChange={onChange} username={username} password={password} />
    </>)
}
export default LoginCon;