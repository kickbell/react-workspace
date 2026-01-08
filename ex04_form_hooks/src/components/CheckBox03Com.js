const CheckBox03Com = ({isChecked, onChange}) => {
    return (<>
        확인 <input type="checkbox" onChange={onChange} checked={isChecked} />
    </>)
}
export const CheckComponent = ({hobby, onChangeHobby}) => {
    //console.log(hobby)
    return (<>
        { hobby.map( data => <span key={data.key}>
            <label htmlFor={data.key}>{data.label}</label>
            <input id={data.key} type="checkbox" onChange={onChangeHobby} checked={data.isChecked} />
        </span> ) }
    </>)
}
export default CheckBox03Com;