function MOneCom( {data, onDelete} ){
    console.log("com : ", data)
    return (<>
    <ul>
        <li>id : {data && data.id}</li>
        <li>pwd : {data && data.pwd}</li>
        <li>name : {data && data.name}</li>
        <li>addr : {data && data.addr}</li>
        <li><button onClick={ () => onDelete( data.id ) }>삭제</button></li>
        <hr></hr>
        {/* data && <>
            <li>{data.id}</li>
            <li>{data.pwd}</li>
            <li>{data.name}</li>
            <li>{data.addr}</li>
        </> */}
    </ul>
    </>)
}
export default MOneCom;