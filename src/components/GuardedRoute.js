import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

export const useAuth = () => {
    const user = { loggedIn: false };

    if (localStorage.getItem('authUser')) {
        user.loggedIn = true;
    }
    return user && user.loggedIn;
};


const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

