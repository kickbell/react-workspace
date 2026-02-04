import { useNavigate, useParams } from "react-router-dom";
import HeaderCom from "../components/common/HeaderCom";
import InfoCom from "../components/InfoCom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { memberDeleteThunk, memberOneThunk } from "../service/authThunk";
const InfoCon = () => {
    const dispatch = useDispatch();
    
    const {username} = useParams();
    const {dataOne} = useSelector(state => {
        //console.log("state : ", {...state})
        return state.memberData;
    })
    useEffect(()=>{
        dispatch( memberOneThunk({username}) )
    }, [dispatch, username])
    const navigate = useNavigate();
    const onDelete = () => {
        //console.log("dataOne : ", dataOne)
        dispatch( memberDeleteThunk({ username : dataOne.id }) );
        navigate("/list")
    }
    const onModifyForm = () => {
        navigate("/modify/"+username)
    }
    return (<>
        
        <InfoCom  onModifyForm={onModifyForm} data={dataOne} onDelete={onDelete} />
    </>)
}
export default InfoCon;