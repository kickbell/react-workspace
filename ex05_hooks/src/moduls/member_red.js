const initalState = {
    login : {id:"", pwd:""} ,
    register : {},
}
export const initalLogin = { id:"", pwd:"" }
export const initalReg = { id:"", pwd:"", name:"", addr:"" }
export const initalData = { data : null }

const reducer = ( state, action ) => {
    console.log(action)
    switch(action.type ){
        case "LOGIN_INPUT" : 
            return {...state, [action.name] : action.value };
        case "REG_INPUT" : 
            return {...state, [action.name] : action.value };
        case "LIST" : 
            //{ data : null }
            return  {data : action.data};
            
        case "CHANGE_INPUT" : 
            return {...state, [action.form] : 
                    {...state[action.form], [action.name]:action.value } }
        default : return state;
    }
    //return state;
}
export {reducer, initalState}