import { useContext } from "react";
import HeaderCom from "../components/HeaderCom";
import { AuthContext } from "../store/AuthContext";
const HeaderCon = () => {

    const {auth, logout} = useContext(AuthContext);
    const onLogout = (e) => {
        e.preventDefault();
        logout();
    }
    return (<>
        <HeaderCom onLogout={onLogout} auth={auth}/>
    </>)
}
export default HeaderCon;