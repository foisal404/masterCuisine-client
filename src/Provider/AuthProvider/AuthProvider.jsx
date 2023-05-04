import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    const gitProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const githubIN=()=>{
        return signInWithPopup(auth,gitProvider)
    }
    const googleIN=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    
    const SignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authinfo={
        githubIN,
        googleIN,
        SignUp
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;