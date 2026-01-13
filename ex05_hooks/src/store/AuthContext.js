import { createContext, useState } from "react";

const initState = {isLoggedIn:false, user:null}
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(initState);
    const login = (user) => {
        setAuth({ isLoggedIn:true, user })
    }
    const logout = () => {
        setAuth( initState )
    }
    const value = {auth, login, logout}
    return <>
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    </>
}