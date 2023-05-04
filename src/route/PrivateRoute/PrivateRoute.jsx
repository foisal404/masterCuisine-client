import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext)
    if(user){
        return children;
    }
    return (
        <div>
            this is private
        </div>
    );
};

export default PrivateRoute;