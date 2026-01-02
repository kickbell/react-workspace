function Nav( props ){
    console.log( props )
    //{name: '홍길동', addr: '산골짜기'}
    //const { name, addr } = props
    const { name } = props
    const { name : n } = props
    const { name : a , addr } = props
    return <ul>
        <li><a href="#">{ name }</a></li>
        <li><a href="#">{ n }</a></li>
        <li><a href="#">{ addr }</a></li>
    </ul>
}
export default Nav;