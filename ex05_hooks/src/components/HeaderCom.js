import {Link} from "react-router-dom"
const HeaderCom = () => {
    return (<>
        <Link to="/">HOME</Link> &nbsp;
        <Link to="/list">목록</Link> &nbsp;
        <Link to="/login">로그인</Link> &nbsp;
        <Link to="/register">회원가입</Link> &nbsp;
        <hr></hr>
    </>)
}
export default HeaderCom;