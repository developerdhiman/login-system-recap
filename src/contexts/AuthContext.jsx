import { createContext } from "react";
import auth from "../firebase/firebase.config";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const createUser = (e;mail, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password)
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const updateUser = (updateData) => { 
        return updateProfile(auth.currentUser, updateData)
    };

    cosnt logOut = () => {
        return signOut(auth);
    };

    useEffect()


    const authInfo = {
        signIn,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children} 
        </AuthContext.Provider>
    )
}