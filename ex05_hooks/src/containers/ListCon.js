import { useContext, useEffect, useReducer, useState } from "react";
import ListCom from "../components/ListCom";
import { getList } from "../service/member";
import { initalData, initalState, reducer } from "../moduls/member_red";
import { TestContext } from "../store/TestContext";
const ListCon = () => {
    /*
    console.log("111111 처음 실행")
    try{
        const data = JSON.parse('{"test"111}')
        console.log("data : ", data)
    }catch( err ){
        console.log("문제 발생")
    }
    console.log("다음 문장 실행")
    */
   
    //const [user, setUser] = useState(null);
    const [state, dispatch] = useReducer(reducer, initalState);

    const {data} = useContext( TestContext )

    //console.log("list :", state)
    //state : { data : null }
    useEffect( ()=> {
            dispatch({type:"LOADING"})
            try{
                //setTimeout(()=>{
                    const data = getList();
                    dispatch({type:"LIST", data })
                    dispatch({type:"FINISHED"})
                //},2000)
                //throw new Error("에러 발생")
            }catch(e){
                dispatch({type:"ERROR", msg: e.toString() })
            }
    }, [])
    console.log( state ) //{ data : null }  
    return (<>
        data.num : {data.number}<br></br>
        <ListCom error={state.error} data={state.data} loading={state.loadding}/>
    </>)
}
export default ListCon;