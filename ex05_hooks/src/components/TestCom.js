const TestCom = ({data, onPlus, onMinus}) => {
    return (<>
        number : {data.number}<br></br>
        <button onClick={onPlus}>onPlus</button>
        <button onClick={onMinus}>onMinus</button>
    </>)
}
export default TestCom;