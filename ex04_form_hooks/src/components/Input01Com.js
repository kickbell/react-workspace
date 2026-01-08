const Input01Com = ( {input, onChange2, onSubmit01 } ) => {
    //input = {username:"연습ab", addr : ""}
    return (<>
        <form onSubmit={onSubmit01} action="https://www.naver.com">
            <input type="text" value={input.username} name="username" onChange={onChange2} /><br></br>
            <input type="text" value={input.addr} name="addr" onChange={onChange2} /><br></br>
            <input type="submit" value="input" />
            <input type="button" value="input" />
            <button type="button">btn</button>
            <button type="submit">btn</button>
            <button>btn</button>
        </form>
    </>)
}
export default Input01Com;