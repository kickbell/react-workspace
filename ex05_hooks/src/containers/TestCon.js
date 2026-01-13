import { useContext } from "react";
import TestCom from "../components/TestCom";
import { TestContext } from "../store/TestContext";
const TestCon = () => {
    const context = useContext(TestContext);
    const {data, clickPlus, clickSub} = useContext(TestContext);
    console.log( context )
    console.log( context.data )
    const onPlus = () => {
        //context.clickPlus();
        clickPlus();
    }
    const onMinus = () => {
        //context.clickSub();
        clickSub();
    }
    return (<>
        <TestCom data={data} onPlus={onPlus} onMinus={onMinus}/>
    </>)
}
export default TestCon;