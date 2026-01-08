let data_set = [
    {id:"aaa", pwd:"aaa", name:"홍길동", addr:"산골짜기"},
    {id:"bbb", pwd:"bbb", name:"홍길동", addr:"개똥별"},
    {id:"ccc", pwd:"ccc", name:"홍길동", addr:"마포구"},
]
//필터( data => data.name === 이름 )
//export getList = () => data_set
export function getList(){
    return data_set;
}
export const getOne = ( id ) => 
    data_set.filter( data => data.id === id )[0]
/*
export function getOne( id ){
    //console.log("svc one id : ", id)
    return data_set.filter( data => data.id === id )[0]
    //return "bbb 데이터 검색 결과"
}
*/

export const memberDelete = (delId) => {
    data_set = data_set.filter( data => data.id !== delId )
}