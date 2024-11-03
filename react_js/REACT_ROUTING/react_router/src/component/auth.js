import {  createContext, useContext, useState } from "react";
const AuthConext=createContext(null);
export const AuthProvider=(children)=>{
    const[user,setUser]=useState(null);
    const login=(user)=>{
        setUser(user)
    }
    const logout=()=>{
        setUser(null)
    }
    return <AuthConext.Provider value={{user,login,logout}}>{children}
    </AuthConext.Provider>
}
export const useAuth=()=>{
    return useContext(AuthConext)
}