const ListCom = ( {data} ) => {
    return (<>
        { data && data.map( d=> <div key={d.id}>
            <span>{d.id}</span>
            <span>{d.name}</span>
            <span>{d.addr}</span>
        </div>)}
    </>)
}
export default ListCom;