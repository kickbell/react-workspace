import { useEffect, useReducer, useState } from "react";
import ListCom from "../components/ListCom";
import { getList } from "../service/member";
import { initalData, reducer } from "../moduls/member_red";
const ListCon = () => {
    //const [user, setUser] = useState(null);
    const [state, dispatch] = useReducer(reducer, initalData);
    //state : { data : null }
    useEffect( ()=> {
        const data = getList();
        //data = [{},{},{}]
        //setUser( data )
        dispatch({type:"LIST", data })
    }, [])
    console.log( state ) //{ data : null }  
    return (<>
        <ListCom data={state.data}/>
    </>)
}
export default ListCon;