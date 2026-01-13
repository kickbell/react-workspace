import {Link} from "react-router-dom"
const HeaderCom = ({onLogout, auth}) => {
    return (<>
        <Link to="/">HOME</Link> &nbsp;
        <Link to="/list">목록</Link> &nbsp;
        {auth.isLoggedIn?(
            <>
                <Link to="/" onClick={onLogout}>로그아웃</Link> &nbsp;
                <span>{auth.user}님 로그인</span>
            </>
        ):(<>
            <Link to="/login">로그인</Link> &nbsp;
            <Link to="/register">회원가입</Link> &nbsp;
            </>
        )}
        
        <Link to="/context">context</Link> &nbsp;
        <hr></hr>
    </>)
}
export default HeaderCom;