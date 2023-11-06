import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config.js";

const auth = getAuth(app)

export const AuthContex = createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()

    const [user, setUser]= useState(null)
    const [loading, setLoding] = useState(true)


    const createUser = (email, password) =>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        setLoding(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        setLoding(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log('user in the auth state changed', currentUser)
            setUser(currentUser)
            setLoding(false)
        })
        return () =>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        googleLogin
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;