const initalState = {
    login : {id:"", pwd:""} ,
    register : { id:"", pwd:"", name:"", addr:"" },
    data : null,
    loadding : false,
    error : null
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
            return  {...state, data : action.data};
        case "CHANGE_INPUT" : 
            return {...state, [action.form] : 
                    {...state[action.form], [action.name]:action.value } }
        case "LOADING" : return {...state, loadding:true , error:null};
        case "FINISHED" : return {...state, loadding:false , error:null};
        case "ERROR" : return {
            ...state, loadding:false , error:action.msg
        };

        default : return state;
    }
    //return state;
}
export {reducer, initalState}