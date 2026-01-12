let data_set = [
    {id:"aaa", pwd:"aaa", name:"홍길동", addr : "산골짜기"},
    {id:"bbb", pwd:"bbb", name:"김개똥", addr : "개똥별"},
    {id:"ccc", pwd:"ccc", name:"고길동", addr : "마포구"},
]
export const getList = () => data_set;
export const register = ( user ) => {
    data_set = data_set.concat(user);
    return 1; //회원 가입 성공
}
export const loginCheck = (id, pwd) => {
    const data = data_set.filter( d => d.id === id)
    //일치하는id:[{id:"bbb", pwd:"bbb", name:"김개똥", addr : "개똥별"}]
    //없는경우 : []
    if(data.length !== 0 ){
        if(data[0].pwd === pwd){
            return 0; //인증 성공
        }else{
            return 1; //비밀번호 틀림
        }
    }
    return -1; //존재하지 않는 id
}
