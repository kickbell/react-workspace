function Header(  props ){
    console.log( props )
    return <h3>Header<br />
        props.test : {props.test}<br />
        props.number : {props.number}<br />
    </h3>
}
export default Header;