import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/HeaderCom";
import { logout } from "../redux/authSlice";
const HeaderCon = () => {
    const {username, isLoggedIn} = useSelector(state => {
        console.log("header state : ", state.auth )
        return state.auth
    })
    const dispatch = useDispatch();
    const onLogout = (e) => {
        e.preventDefault();
        dispatch( logout() );
    }
    return (<>
        <HeaderCom onLogout={onLogout} username={username} isLoggedIn={isLoggedIn} />
    </>)
}
export default HeaderCon;