import React from 'react';
import { useAuthContext } from './userContext';
import { Navigate,Outlet } from 'react-router-dom';

type Props = {}

const ProtectedRoutes = () => {

    const {token} = useAuthContext();
   return (
    token ? <Outlet /> : <Navigate to="/login" replace /> 
   )
}

export default ProtectedRoutes