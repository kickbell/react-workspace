const LoginCom = ({state,onChange}) => {
    console.log("com state : ", state)
    console.log("com state.id : ", state.id)
    return (<>
        <input type="text" name="id" value={state.id}
                            onChange={onChange} /><br></br>
        <input type="text" name="pwd" value={state.login.pwd}
                            onChange={onChange} /><br></br>
    </>)
}
export default LoginCom;