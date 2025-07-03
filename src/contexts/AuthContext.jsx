import { createContext } from "react";

// create context for authentication
const AuthContext = createContext(null);

// create a provider component
const AuthProvider = () => {
    
    const authInfo = {
        name: "Dhiman Chandra"
    }
    return(
        <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
    )
};

export default AuthContext;