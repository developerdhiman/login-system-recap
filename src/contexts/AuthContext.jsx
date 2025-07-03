import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        signUp
    }
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;

