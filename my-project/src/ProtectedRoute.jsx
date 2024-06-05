import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';

const ProtectedRoute = ({children}) => {
    const accessToken = Cookies.get('auth_token2');
    if(!accessToken){
        return <Navigate to='/login'/>
    } else{
        return children;
    }
}

export default ProtectedRoute