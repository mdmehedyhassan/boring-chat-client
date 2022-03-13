import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Home from '../page/Home/Home/Home';

const LoginPrivateRoute = () => {
    const {user} = useAuth();
    return !user?.email ? <Outlet/> : <Home/>
};

export default LoginPrivateRoute;