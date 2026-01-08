import {Link} from "react-router-dom"
function MListCom({data}){
    //console.log("com : ", data)
    return (<>
    <table border={1}>
        <thead>
            <tr><th>id</th><th>name</th></tr>
        </thead>
        <tbody>
        {data && data.map( (d, index) =>
            <tr key={index}>
                <td>{d.id}</td>
                <td>
                    <Link to={"/member/one?userId="+d.id}>{d.name}</Link>
                </td>
            </tr>
        )}
        </tbody>
    </table>
    {/*
        {data && data[0]["id"]}<br></br>
        {data && data[1]["name"]}<br></br>
    */}
    <hr></hr>
        MListCom 화면 출력 용도
    </>)
}
export default MListCom;