import { Link, Outlet } from "react-router-dom";

function HeaderCom(){
    return (<>
       <header>
        <Link to="/">HOME</Link> &nbsp;
        <Link to="/member/list">MEMBER</Link> &nbsp;
        <Link to="/member/register">회원가입</Link> &nbsp;
        <hr></hr>
       </header>
       <main><Outlet /></main>
    </>)
}
export default HeaderCom;