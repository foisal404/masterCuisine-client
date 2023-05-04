import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authinfo={
        githubIN,
        googleIN,
        SignUp,
        logIn
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;