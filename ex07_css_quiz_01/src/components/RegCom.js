import {StyleContentBlock, StyleContentWrap} from "./common/StyleContent"
import StyleForm from "./common/StyleForm"
import {ProductTitle} from "./common/StyleProduct"
import StyleInput from "./common/StyleInput"
import StyleButton from "./common/StyleButton"
const RegCom = ({onChange, onSubmit,username, password, role}) => {
    return (<>

        <ProductTitle>회 원 가 입</ProductTitle>
        <StyleForm onSubmit={onSubmit} width="30%" >
            <StyleInput name="username" value={username} onChange={onChange} 
                                placeholder="input username"/>
            <StyleInput name="password" value={password} onChange={onChange} 
                                placeholder="input password"/>
            <StyleInput name="role" value={role} onChange={onChange} 
                                placeholder="input role"/>
            <StyleButton>회원 가입</StyleButton>
        </StyleForm>
        {로딩중, 에러, }
    </>)    
}
export default RegCom;