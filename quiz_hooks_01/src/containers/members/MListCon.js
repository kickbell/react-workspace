import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getList } from "../../service/member/member";
function MListCon(){
    const [data, setData] = useState();
    useEffect( ()=>{
        setData( getList() )
    } , [] );
    
    return (<>
        <MListCom  data={data}/>
    </>)
}
export default MListCon;