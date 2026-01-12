const RegCom = ({onChange, username, pwd, name, addr}) => {
    return (<>
    <input type="text" name="id" value={username}
                            onChange={onChange} /><br></br>
    <input type="text" name="pwd" value={pwd}
                            onChange={onChange} /><br></br>
    <input type="text" name="name" value={name}
                            onChange={onChange} /><br></br>
    <input type="text" name="addr" value={addr}
                            onChange={onChange} /><br></br>
    </>)
}
export default RegCom;