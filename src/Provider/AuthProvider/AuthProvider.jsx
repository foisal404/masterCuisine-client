import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    const [loader,setLoader]=useState(true)
    const gitProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const [user,setUser]=useState(null)
    const githubIN=()=>{
        setLoader(true)
        return signInWithPopup(auth,gitProvider)
    }
    const googleIN=()=>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }
    
    const SignUp=(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const updateUser=(name,photo)=>{
        console.log(name,photo);
        return updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL: `${photo}`
          })
    }
    //state change monitorer
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoader(false)
            console.log('state change');
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authinfo={
        user,
        githubIN,
        googleIN,
        SignUp,
        logIn,
        logOut,
        updateUser,
        loader
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;