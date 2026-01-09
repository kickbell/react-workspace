import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getList } from "../../service/member/member";
function MListCon(){
    const [data, setData] = useState();
    useEffect( ()=>{
        setData( getList() )
        /*
        const getData = async () => {
           const res = await getList()
           console.log("res : ", res)
           const data = await res.json();
           console.log("data : ", data)
           setData( data )
        }
        getData();
        */
    } , [] );
    return (<>
        <MListCom  data={data}/>
    </>)
}
export default MListCon;