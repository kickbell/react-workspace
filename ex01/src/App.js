import Site from "./Site";
function App(){
    const a_tag = [
        {txt:"네이버", href : "https://www.naver.com"},
        {txt:"다음", href : "https://www.daum.net"},
        {txt:"구글", href : "https://www.google.co.kr"},
    ]
    const arr = [ 10 , 20 , 30]
    return (<>
        <Site a_tag={a_tag} arr={arr} />
    </>)
}
export default App;