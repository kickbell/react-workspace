import { useDispatch, useSelector } from "react-redux";
import LoginCom from "../components/LoginCom";
import inputSlice from "../redux/inputSlice";

const LoginCon = () => {
    const dispatch = useDispatch();

    //저장소에 저장되어 있는 state를 꺼내는 역할
    //변수.id, 변수.pwd
    //const 변수 = useSelector( state => {
    const {id, pwd} = useSelector( state => {
        //console.log("logincon state : ", state)
        return state.input.login; //{id:"", pwd:""}
    })
    const onChange = (e) => {
        const {name, value} = e.target
        //console.log( name )
        //console.log( value )
        dispatch( inputSlice.actions.changeinput({name, value, form:"login"}) )
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    }
    return (<>
     <LoginCom onSubmit={onSubmit} onChange={onChange} username={id} pwd={pwd}/>
    </>)
}
export default LoginCon;