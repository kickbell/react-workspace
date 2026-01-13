const LoginCom = ({loading, error, onSubmit, state,onChange}) => {
    
    let content = null;
    if(loading){
        content = <h3>로그인 중...</h3>
    }else if(error){
        content = <h3>{error}</h3>
    }else{
        content =<form onSubmit={onSubmit}>
        <input type="text" name="id" value={state.id}
                            onChange={onChange} /><br></br>
        <input type="text" name="pwd" value={state.login.pwd}
                            onChange={onChange} /><br></br>
        <button>로그인</button>
    </form>
    }
    return (<>
        {content}
    </>)
}
export default LoginCom;