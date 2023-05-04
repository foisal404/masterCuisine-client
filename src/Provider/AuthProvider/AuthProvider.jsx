import React, { createContext } from 'react';
export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    const authinfo={
        value:100
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;