const Input02Com = ( { data, onChange, name, addr , age } ) => {
    return (<>
        <input type="text" name="name01" value={data.name01} onChange={onChange} />
       <input type="text" name="addr01" value={data.addr01} onChange={onChange} />
       <input type="text" name="age01" value={data.age01} onChange={onChange} />
    <hr></hr>
       <input type="text" name="name" value={name} onChange={onChange} />
       <input type="text" name="addr" value={addr} onChange={onChange} />
       <input type="text" name="age" value={age} onChange={onChange} />
    </>)
}
export default Input02Com;