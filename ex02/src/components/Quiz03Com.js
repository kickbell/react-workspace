function Quiz03Com( {inBtn, outBtn, msg, inData, outData } ){
    let msg2;
    if(msg === ""){
        msg2 = <b>오픈전</b>
    }else{
        msg2 = <b>
                indata : {inData}<br></br>
                outData : {outData}<br></br>
                in - out = {inData - outData}<br></br>
            </b>
            
    }
    console.log( msg === "" )
    return (<>
    {msg2}<hr></hr>
    {(msg === "" ) ? <b>오픈전</b> 
    : <b>
        {msg}<br></br>
        indata : {inData}<br></br>
        outData : {outData}<br></br>
        in - out = {inData - outData}<br></br>
    </b>}
        <button onClick={inBtn}>in</button>        
        <button onClick={outBtn}>out</button>        
    </>)
}
export default Quiz03Com;