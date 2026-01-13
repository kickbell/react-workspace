import { createContext, useState } from "react";

export const TestContext = createContext();

const initState = {number : 0}
export const TestProvider = ({children}) => {
    const [data, setData] = useState(initState);

    const clickPlus = () => { 
        //alert("clickPlus")
        setData({number : data.number + 1})
    }
    const clickSub = () => {
         //alert("clickSub")
        setData({number : data.number - 1})
    }
    const value = {clickPlus, clickSub, data}
    return (<>
        <TestContext.Provider value={value}>
            {children}
        </TestContext.Provider>
    </>)
}

/*
const TestContext = () => {
    return (<>
        <Test01 name="값 설정">APP</Test01>
    </>)
}
function Test01({children, name}){
    console.log("props : ", children)
    console.log("props : ", name)
    return(<>Test01</>)
}
export default TestContext;
*/