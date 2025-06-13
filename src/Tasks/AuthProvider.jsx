import { createContext, useContext, useState } from "react";

export const AuthContextTask=createContext()

export const AuthproviderTask=({children})=>{
    const[submitteduser,setSubmittedUser]=useState(null)

    return(
    <AuthContextTask.Provider value={{submitteduser,setSubmittedUser}}>
        {children}
    </AuthContextTask.Provider>
    )
}

export default function UseAuthTask(){
   return useContext(AuthContextTask)
}