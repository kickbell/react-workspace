import { useEffect } from "react";
import ListCom from "../components/ListCom";
import {useDispatch, useSelector} from "react-redux"
import { getList } from "../service/member";
import { list } from "../redux/memberDataSlice";
const ListCon = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const mlist = getList();
        //console.log("list con mlist : ", mlist)
        //memberDataSlice.actions.list( mlist )
        dispatch( list(mlist) )
    }, [dispatch] )
    const memberList = useSelector((state) => {
        //console.log("listcon state : ", state)
        return state.memberData.data
    })
    //console.log("listcon m list : ", memberList)
    return (<>
       <ListCom list={memberList}/>
    </>)
}
export default ListCon;