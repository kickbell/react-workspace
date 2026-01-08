import { useNavigate, useParams } from "react-router-dom";
import { memberDelete } from "../../service/member/member";
import { useEffect } from "react";

function MDeleteCon(){
    /*
    const params = useParams();
    //params = {id:bbb}
    console.log("del : ", params['id'])
    */
   const {id} = useParams();
   //console.log("del id : ", id )
    
   memberDelete( id );

   const navigate = useNavigate();
    useEffect( () => {
        alert("삭제성공")
        navigate("/member/list")
    })

   return null;
}
export default MDeleteCon;