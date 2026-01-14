const ListCom = ({list}) => {
    return (<>
       {list && list.map( d => (
            <div key={d.id}>
                <span>{d.id}</span>
                <span>{d.name}</span>
                <span>{d.addr}</span>
        </div>
        ) ) }
    </>)
}
export default ListCom;