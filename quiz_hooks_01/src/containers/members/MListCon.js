import { useState } from "react";
import MListCom from "../../components/member/MListCom";

function MListCon(){
    const [data, setData] = useState("!!!데이터 받아옴");
    return (<>
        <MListCom  data={data}/>
    </>)
}
export default MListCon;