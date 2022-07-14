import React from 'react';
import {  Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
    children?: JSX.Element;
    redirectPath: string;
    currentUser: Model.User.User | null
}
const ProtectedRoute = (props: ProtectedRouteProps) => {
    if (!props.currentUser) {
        return <Navigate to={props.redirectPath} replace />;
    }

    return props.children ? props.children : <Outlet />;
}

export default ProtectedRoute;