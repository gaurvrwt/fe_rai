import React, { ReactNode, createContext, useState,useContext } from 'react';

interface AuthContextType {
  // user: { username: string } | null;
  token: string | null;
  setToken: (token:string | null) => void;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}:{children: ReactNode})=>{

  // const [user,setUser] = useState()
  const [token,setToken] = useState<string | null>(null);
  console.log(token,'tkn')

  const login = (tkn:string) => {
    console.log("token:",tkn)
    setToken(tkn);
  }

  const logout = () => {
    setToken(null);
  }

  return(
  <AuthContext.Provider value={{token,setToken,login,logout}}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = ()=>{
  console.log(AuthContext,'has it')
 const context = useContext(AuthContext);
 if (!context) {
  throw new Error("useAppContext must be used within an AppProvider");
}
return context;
}

