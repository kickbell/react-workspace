import { use, useState } from "react";
import Quiz03Com from "../components/Quiz03Com";
function Quiz03Con(){
    const [ store, setStore] = useState(
        {msg : "", inData : 0, outData : 0})
        console.log( store )
    //const [num, setNum] = useState(0)
    //setNum( num + 1 ) => num = num + 1
    //store = {msg: '', inData: 0, outData: 0}
    //store.inData => 0 => store.inData = store.inData + 1
    const inBtn = () => {
        //store.msg = "값처리"
        const num = store.inData;
        setStore({msg : "어서오세요", inData : num + 1, 
                                    outData : store.outData});
    }
    const outBtn = () => {
        if( store.inData - store.outData === 0)
            alert("나갈손님없음")
        else
            setStore({...store, msg : "안녕히가세요", outData : store.outData + 1});
    }
    return (<>
        <Quiz03Com inBtn={inBtn} outBtn={outBtn}
        msg={store.msg} inData={store.inData} 
                        outData={store.outData}/>
    </>)
}
export default Quiz03Con;