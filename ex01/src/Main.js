function Main( {tel, nick, myClick} ){
    const test = () => alert("test실행");
    return (
    <>
            <h3>Main</h3>
            <h3>tel : {tel}</h3>
            <h3>nick : {nick}</h3>
            <button onClick={ myClick }>클릭</button>
            <button onClick={ test }>클릭2</button>
    </>);
}
export default Main;