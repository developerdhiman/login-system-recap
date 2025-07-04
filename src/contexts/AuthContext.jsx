import { createContext } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {



    const authInfo = {
        name: "John Doe lorem2 ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.",
    }
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;