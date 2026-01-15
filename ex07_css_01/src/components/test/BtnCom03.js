import styled , {css} from "styled-components"
//const StyleButton = styled.button``;
//export default StyleButton;
export default styled.button`
  width : 300px; height:50px;
  background-color : blue; color : white;
  border : none; border-radius : 5px;
  cursor : pointer;
    ${ props => props.width && css`
        width : ${props.width};
    `}
  &:hover {
    background-color : darkblue;
  }
`;