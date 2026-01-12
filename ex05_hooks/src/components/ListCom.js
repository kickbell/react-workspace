const ListCom = ( {error, data, loading} ) => {
    return (<>
        {
            loading ? (<h3>Loading...</h3>) 
            : error ? <h3>{error}</h3>
            :( data && data.map( d=> <div key={d.id}>
                    <span>{d.id}</span>
                    <span>{d.name}</span>
                    <span>{d.addr}</span>
                </div>))
        }
    </>)
}
export default ListCom;