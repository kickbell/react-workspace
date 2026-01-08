import { useNavigate } from "react-router-dom";
function NotFound(){
    const nav = useNavigate()
    return (<>
        <h1>경로를 찾을 수 없음!!!!</h1>
        <button onClick={ () => nav("/") }>HOME 이동</button>
    </>)
}
export default NotFound;