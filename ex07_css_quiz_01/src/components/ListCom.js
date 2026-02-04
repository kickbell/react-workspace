import {StyleContentBlock, StyleContentWrap} from "../components/common/StyleContent"

import styled from "styled-components";
const ListTitle = styled.div`
    color : brown; font-size : 30px; width : 200px; text-align : center;
    margin : 20px auto;
`;
const DivWrap = styled.div`
    margin : auto; width: 30%; border-top : 1px solid gray;
`;
const DivContent = styled.div`
    display : flex; justify-content : space-between;
    border-bottom : 1px solid gray; padding : 15px;
`;
const ListCom = ({data, onInfo }) => {
    //console.log( "lisg com : ", data )
    return (<>

                <ListTitle>회 원 목 록</ListTitle>
                <DivWrap>
                    <DivContent>
                        <b>아이디</b><b>비밀번호</b><b>ROLE</b>
                    </DivContent>
                    {data && data.map( d => (
                        <DivContent key={d.username}>
                <span style={{cursor:"pointer"}}
                            onClick={ () => onInfo(d.id)} >{d.username}</span>
                            <span>{d.password}</span>
                            <span>{d.role}</span>
                        </DivContent>) 
                    )}
                </DivWrap>
                
  
    </>)
}
export default ListCom;