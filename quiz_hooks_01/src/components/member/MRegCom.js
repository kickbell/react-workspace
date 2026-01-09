function MRegCom({reg, onChange, onSubmit}){
    
    return (<>
        <form onSubmit={onSubmit}>
            <input type="text" name="id" value={reg.id} onChange={onChange}
                                placeholder="input id" /><br></br>
            <input type="text" name="pwd" value={reg.pwd} onChange={onChange}
                                placeholder="input pwd" /><br></br>
            <input type="text" name="pwdChk" value={reg.pwdChk} onChange={onChange}
                                placeholder="input pwdChk" /><br></br>
            <input type="text" name="name" value={reg.name} onChange={onChange}
                                placeholder="input name" /><br></br>
            <input type="text" name="addr" value={reg.addr} onChange={onChange}
                                placeholder="input addr" /><br></br>
            <button>회원가입</button>
        </form>
    </>)
}
export default MRegCom;