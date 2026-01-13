import RegCom from "../components/RegCom";
import {useDispatch, useSelector} from "react-redux"
import inputSlice, { changeinput } from "../redux/inputSlice";
const RegCon = () => {
    const dispatch = useDispatch();
    const {id,pwd,name,addr} = useSelector( 
                                state => state.input.register )
    /*
    const {id,pwd,name,addr} = useSelector( state => {
        console.log("reg con state : ", state)
        return state.input.register;
    })
    */
   const onChange = (e) => {
        const {name, value} = e.target;
        //dispatch( inputSlice.actions.changeinput() )
        dispatch( changeinput({name:name, value, form:"register"}) )
   }
   const onSubmit = (e) => {
        e.preventDefault();
        console.log("reg con e.target : ",e.target)
   }
    return (<>
       <RegCom username={id} pwd={pwd} name={name} addr={addr}
                    onChange={onChange} onSubmit={onSubmit}/>
    </>)
}
export default RegCon;