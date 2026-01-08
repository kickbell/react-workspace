import { useState } from "react";
import Input02Com from "../components/Input02Com";
const Input02Con = () => {
    const [name, setName ] = useState("");
    const [addr, setAddr ] = useState("");
    const [age, setAge ] = useState("");
    const [data, setData] = useState({name01:"1", addr01:"2", age01:"3"})
    const onChange = ( e ) => {
        //data = {name01:"1변경", addr01:1, age01:"3"}
        //setData( {name01:data.name01, addr01:"새로운값", age01:data.age01} )
        //setData( {...data, addr01 : "새롭게 변경"})
        setData( {...data, [e.target.name] : e.target.value})

        console.log( e.target )
        if( e.target.name === "name")
            setName( e.target.value )
        else if( e.target.name === "addr")
            setAddr( e.target.value )
        else if( e.target.name === "age")
            setAge( e.target.value )
    }
    return (<>
        <Input02Com data={data} age={age} onChange={onChange} name={name} addr={addr}/>
    </>)
}
export default Input02Con;