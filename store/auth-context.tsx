import { createContext, useState } from "react"

interface AuthContextProps {
    token: string | null;
    isAuthenticated: boolean;
    authenticate: (token: string) => void;
    logout: () => void;
  }

export const AuthContext = createContext<AuthContextProps>({
    token:'',
    isAuthenticated:false,
    authenticate:(token:string)=>{},
    logout:()=>{}
})

function AuthContextProvider ({children}: {children: React.ReactNode}){
    const [authToken, setAuthToken] = useState<string | null>(null)


    function authenticate(token:string){
        setAuthToken(token)
    }

    function logout(){
        setAuthToken(null)
        console.log(authToken)
    }

    const value = {
        token: authToken,
        isAuthenticated : !!authToken,
        authenticate: authenticate,
        logout: logout
      };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;