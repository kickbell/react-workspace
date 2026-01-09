import { useState } from "react";
import MRegCom from "../../components/member/MRegCom";
import { register } from "../../service/member/member";
const registerInput = {
    id:"", pwd:"", pwdChk:"", name:"", addr:""
}
function MRegCon(){
    const [reg, setReg] = useState(registerInput);
    const onChange = ( e ) => {
        setReg({...reg, [e.target.name] : e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log( reg )
        
        const saveData = {...reg}
        
        delete saveData.pwdChk
        console.log( saveData )
//import { register } from "../../service/member/member";
        register(saveData)
    }
    return (<>
        <MRegCom reg={reg} onChange={onChange} onSubmit={onSubmit} />
    </>)
}
export default MRegCon;