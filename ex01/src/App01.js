function App(){
    const num = 2;
    let list = [];

    list = list.concat(<h3>list 0</h3>)
    list = list.concat("<h3>list 1</h3>")
    list = list.concat(<h3>"list 2"</h3>)
    const obj = {k01 : <i>k111</i>, k02 : <h3>k222</h3>}

    let arr = [];
    for(let i =0; i<5 ;i++){
        if(i%2 === 0){
            arr = arr.concat(<h3>안녕 = {i}</h3>)
        }
    }
    return (<>
    {arr}
        {obj.k01}{obj['k02']}
        { list }
        <h3>안녕 { num === 1 ? "참" : "히 가세요" }</h3>
        <h3>결과 : { num === 1 && "1과 같다"}</h3>
    </>)
}
export default App;