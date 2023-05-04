import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loader,user}=useContext(AuthContext)
    const location =useLocation();
    console.log(location);
    if(loader){
        return <p>loading .......</p>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default PrivateRoute;