import { useNavigate, useSearchParams } from "react-router-dom";
import MOneCom from "../../components/member/MOneCom";
import { getOne } from "../../service/member/member";
import { useEffect, useState } from "react";
function MOneCon(){
    //?username=???
    const [params] = useSearchParams();
    //console.log( params.get("userId") )
    //const result = getOne( params.get("userId") )
    //console.log( "result : ", result )
    const [data , setData] = useState()
    useEffect( ()=>{
        const id = params.get("userId");
        const result = getOne( id )
        setData( result );
    } , [params] );
    const navigate = useNavigate();
    const onDelete = (userId) => {
        //navigate("/member/delete/"+userId)
        navigate(`/member/delete/${userId}`)
        //console.log("del : ", userId );
    }
    return (<>
        <MOneCom data={data} onDelete={onDelete} />
    </>)
}
export default MOneCon;